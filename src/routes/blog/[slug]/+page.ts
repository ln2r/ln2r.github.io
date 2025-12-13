import {Mugunghwa} from "$lib/utils/mugunghwa.ts";

export const load = async ({ fetch, params }) => {
    const mugunghwa = new Mugunghwa(fetch);

    return {
        writing: mugunghwa.writing(params.slug)
    }
}