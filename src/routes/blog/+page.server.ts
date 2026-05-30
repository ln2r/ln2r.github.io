import { Writing } from "$lib/utils/apis/writings";

// @ts-ignore
export const load = async ({ fetch }) => {
    const writing = new Writing(fetch);

    return {
        writings: await writing.list(),
    };
};
