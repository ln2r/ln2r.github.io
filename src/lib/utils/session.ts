import { env } from "$env/dynamic/public";
import { redirect, type Cookies } from "@sveltejs/kit";
const { PUBLIC_API_BASE } = env;

export class Session {
    // this is for locking refresh access token,
    // so the apis won't hitting the refresh at the
    // same time increasing the risk of using old
    // invalid refresh token
    private sessionLock: Promise<string> | null = null;

    constructor(
        private readonly fetchFn: typeof fetch = fetch,
        private readonly cookies: Cookies,
    ) {}

    async process(url: string, method: string, body: any = {}) {
        try {
            const refreshToken = this.cookies?.get("refreshToken");
            const accessToken = this.cookies?.get("accessToken");

            if (!refreshToken || !accessToken) redirect(302, "/");

            const payload = {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: body ? JSON.stringify(body) : undefined,
            };

            // removing body when its GET request
            if (method === "GET") delete payload.body;

            let res = await this.fetchFn(url, payload);

            if (res.status === 401) {
                const newSession = await this.lockSession();

                payload.headers.Authorization = `Bearer ${newSession}`;

                res = await this.fetchFn(url, payload);
            }

            const resBody = await res.json();

            return resBody.data;
        } catch (err) {
            console.error(err);
        }
    }

    private async lockSession(): Promise<string> {
        if (this.sessionLock) return this.sessionLock;

        this.sessionLock = this.refreshSession().finally(() => {
            this.sessionLock = null;
        });

        return this.sessionLock;
    }

    private async refreshSession(): Promise<string> {
        const refreshToken = this.cookies?.get("refreshToken");

        if (!refreshToken) redirect(302, "/");

        const res = await this.fetchFn(
            `${PUBLIC_API_BASE}/auth/refresh-token`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    refreshToken: refreshToken,
                }),
            },
        );

        const body = await res.json();

        if (!res.ok) redirect(302, "/");

        const { accessToken: newToken, refreshToken: newRefresh } = body.data;

        this.cookies?.set("accessToken", newToken, {
            path: "/",
            secure: false,
        });
        this.cookies?.set("refreshToken", newRefresh, {
            path: "/",
            secure: false,
        });

        return newToken;
    }
}
