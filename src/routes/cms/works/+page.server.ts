import { Auth } from "$lib/utils/apis/auth";
import { Work, type WorkAdd } from "$lib/utils/apis/works.js";
import { Session } from "$lib/utils/session";

export async function load({ fetch, cookies }) {
    const session = new Session(fetch, cookies);
    const auth = new Auth(fetch, undefined, session);

    return {
        session: await auth.me(),
    };
}

export const actions = {
    default: async ({ request, fetch, cookies }) => {
        const session = new Session(fetch, cookies);
        const work = new Work(fetch, session);

        const data = await request.formData();

        const title = data.get("title");
        const description = data.get("description");
        const url = data.get("url");
        const stacks = data.get("stacks");

        if (!title) throw new Error("title required");
        if (!description) throw new Error("description required");
        if (!stacks) throw new Error("stacks required");

        const payload: WorkAdd = {
            title: title?.toString(),
            description: description?.toString(),
            url: url?.toString() === "" ? null : url?.toString(),
            stacks: stacks.toString(),
        };

        const res = await work.add(payload);

        return res;
    },
};
