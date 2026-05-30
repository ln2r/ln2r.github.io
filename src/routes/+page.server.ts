import { Work } from "$lib/utils/apis/works";
import { Writing } from "$lib/utils/apis/writings";

// @ts-ignore
export const load = async ({ fetch }) => {
    const works = new Work(fetch);
    const writing = new Writing(fetch);

    return {
        projects: await works.list(),
        writings: await writing.list(),
    };
};
