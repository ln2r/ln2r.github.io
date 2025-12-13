import {Mugunghwa} from "$lib/utils/mugunghwa";

// @ts-ignore
export const load = async ({ fetch }) => {
    const mugunghwa = new Mugunghwa(fetch);

    return {
        projects: mugunghwa.works(),
        writings: mugunghwa.writings(),
    }
}