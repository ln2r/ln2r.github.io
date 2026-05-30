import { Auth } from "$lib/utils/apis/auth";
import { Writing, type WritingUpdate } from "$lib/utils/apis/writings";
import { Session } from "$lib/utils/session";

export async function load({ fetch, params, cookies }) {
    const session = new Session(fetch, cookies);
    const auth = new Auth(fetch, undefined, session);
    const writing = new Writing(fetch);

    // const files = await fetch(`${PUBLIC_API_BASE}/utils/files`, {
    //     headers: {
    //         "content-type": "application/json",
    //         "x-mugunghwa-key": PRIVATE_API_KEY,
    //     },
    // });

    return {
        writing: await writing.getOneById(params.id),
        session: await auth.me(),
        // files: await files.json(),
    };
}

export const actions = {
    default: async ({ request, fetch, params, cookies }) => {
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

        const payload: WritingUpdate = {
            id: params.id,
            title: data.get("title")?.toString() ?? "",
            hero: data.get("hero")?.toString() ?? null,
            body: data.get("body")?.toString() ?? "",
        };

        const res = await writing.update(params.id, payload);

        return await res.json();
    },
};
