import { env } from "$env/dynamic/public";
const { PUBLIC_API_BASE } = env;

export class Work {
    constructor(private readonly fetchFn: typeof fetch = fetch) {}

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
}
