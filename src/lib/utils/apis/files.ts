import { env } from "$env/dynamic/public";
import type { Session } from "../session";
const { PUBLIC_API_BASE } = env;

export class File {
    constructor(private readonly session: Session) {}

    async list() {
        try {
            const res = await this.session.process(
                `${PUBLIC_API_BASE}/files`,
                "GET",
            );

            return res;
        } catch (err) {
            console.error(err);
            return err;
        }
    }
}
