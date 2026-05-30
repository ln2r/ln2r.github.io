<script lang="ts">
    import SvelteMarkdown from "@humanspeak/svelte-markdown";
    import { enhance } from "$app/forms";

    let draft = "";

    let preview = "";
    let title = "";
    let hero = "";

    function setPreview() {
        preview = draft;
    }
</script>

<div class="content-list"></div>
<form method="POST" use:enhance>
    <input placeholder="Post title" bind:value={title} name="title" /><br />
    <input placeholder="hero image url" bind:value={hero} name="hero" /><br />
    <textarea placeholder="text writing" bind:value={draft} name="body"
    ></textarea>
    <button type="button" on:click={setPreview}>preview</button><button
        type="submit">save</button
    >
</form>
<hr />
<SvelteMarkdown source={preview} />
