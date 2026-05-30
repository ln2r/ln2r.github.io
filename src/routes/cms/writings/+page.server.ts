import { Auth } from "$lib/utils/apis/auth";
import { File } from "$lib/utils/apis/files";
import { Writing, type WritingAdd } from "$lib/utils/apis/writings";
import { Session } from "$lib/utils/session";

export async function load({ fetch, cookies }) {
    const session = new Session(fetch, cookies);
    const auth = new Auth(fetch, undefined, session);
    const file = new File(session);

    return {
        session: await auth.me(),
        files: file,
    };
}

export const actions = {
    default: async ({ request, fetch, cookies }) => {
        const session = new Session(fetch, cookies);
        const writing = new Writing(fetch, session);

        const data = await request.formData();

        const title = data.get("title");
        const body = data.get("body");

        if (!title) {
            throw new Error("title required");
        }

        if (!body) {
            throw new Error("body required");
        }

        const payload: WritingAdd = {
            title: data.get("title")?.toString() ?? "",
            hero: data.get("hero")?.toString() ?? null,
            body: data.get("body")?.toString() ?? "",
        };

        const res = await writing.add(payload);

        return res;
    },
};
