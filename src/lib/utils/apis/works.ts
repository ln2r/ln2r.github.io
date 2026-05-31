import { env } from "$env/dynamic/public";
import type { Session } from "../session";
const { PUBLIC_API_BASE } = env;

export interface WorkAdd {
    title: String;
    description: String;
    url?: String | null;
    stacks: String;
}

export interface WorkUpdate extends WorkAdd {
    id: String;
}

export class Work {
    constructor(
        private readonly fetchFn: typeof fetch = fetch,
        private readonly session?: Session,
    ) {}

    async list() {
        try {
            const res = await this.fetchFn(`${PUBLIC_API_BASE}/works`);
            const body = await res.json();

            return body.data;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getOneById(id: string) {
        try {
            const res = await this.fetchFn(`${PUBLIC_API_BASE}/works/${id}`, {
                cache: "no-store",
            });
            const body = await res.json();

            return body.data;
        } catch (err) {
            console.error(err);
            return err;
        }
    }

    async add(body: WorkAdd) {
        try {
            const res = await this.session?.process(
                `${PUBLIC_API_BASE}/works`,
                "POST",
                body,
            );

            return res;
        } catch (err) {
            console.error(err);
            return err;
        }
    }

    async update(id: string, body: WorkUpdate) {
        try {
            const res = await this.session?.process(
                `${PUBLIC_API_BASE}/works/${id}`,
                "PATCH",
                body,
            );

            return res;
        } catch (err) {
            console.error(err);
            return err;
        }
    }
}
