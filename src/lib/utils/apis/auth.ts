import { env } from "$env/dynamic/public";
import type { Cookies } from "@sveltejs/kit";
import type { Session } from "../session";
const { PUBLIC_API_BASE } = env;

export class Auth {
    constructor(
        private readonly fetchFn: typeof fetch = fetch,
        private readonly cookies?: Cookies,
        private readonly session?: Session,
    ) {}

    async callback(code: string) {
        try {
            const res = await this.fetchFn(
                `${PUBLIC_API_BASE}/auth/oauth/callback?code=` + code,
            );
            const body = await res.json();

            if (!res.ok) {
                throw res;
            }

            const { accessToken, refreshToken } = body.data;
            this.cookies?.set("accessToken", accessToken, {
                path: "/",
                secure: false,
            });
            this.cookies?.set("refreshToken", refreshToken, {
                path: "/",
                secure: false,
            });

            return body;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async me() {
        return await this.session?.process(`${PUBLIC_API_BASE}/auth/me`, "GET");
    }
}
