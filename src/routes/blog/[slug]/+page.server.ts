import { Writing } from "$lib/utils/apis/writings";

export const load = async ({ fetch, params }) => {
    const writing = new Writing(fetch);

    return {
        writing: await writing.getOneBySlug(params.slug),
    };
};
