import { env } from "$env/dynamic/public";
import type { Session } from "../session";
const { PUBLIC_API_BASE } = env;

export interface WritingAdd {
    title: String;
    hero?: String;
    body: String;
}

export interface WritingUpdate extends WritingAdd {
    id: String;
}

export class Writing {
    constructor(
        private readonly fetchFn: typeof fetch = fetch,
        private readonly session?: Session,
    ) {}

    async list() {
        try {
            const res = await this.fetchFn(`${PUBLIC_API_BASE}/writings`);
            const body = await res.json();

            return body.data;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getOneBySlug(slug: string) {
        try {
            const res = await this.fetchFn(
                `${PUBLIC_API_BASE}/writings/` + slug,
            );
            const body = await res.json();

            return body.data;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getOneById(id: string) {
        try {
            const res = await this.fetchFn(
                `${PUBLIC_API_BASE}/writings/${id}`,
                {
                    cache: "no-store",
                },
            );
            const body = await res.json();

            return body.data;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async add(body: WritingAdd) {
        try {
            const res = await this.session?.process(
                `${PUBLIC_API_BASE}/writings`,
                "POST",
                body,
            );

            return res;
        } catch (err) {
            console.error(err);
            return err;
        }
    }

    async update(id: string, body: WritingUpdate) {
        try {
            const res = await this.session?.process(
                `${PUBLIC_API_BASE}/writings/${id}`,
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
