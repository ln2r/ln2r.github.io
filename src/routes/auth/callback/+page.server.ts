import { Auth } from "$lib/utils/apis/auth";
import { redirect } from "@sveltejs/kit";

export async function load({ url, fetch, cookies }) {
    const auth = new Auth(fetch, cookies);
    const code = url.searchParams.get("code");

    if (!code) {
        redirect(304, "/");
    }

    const res = await auth.callback(code);

    if (!res) {
        redirect(304, "/");
    }

    redirect(302, "/cms");
}
