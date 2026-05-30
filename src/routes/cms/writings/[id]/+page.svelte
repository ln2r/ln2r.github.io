<script lang="ts">
    import SvelteMarkdown from "@humanspeak/svelte-markdown";
    import { enhance } from "$app/forms";

    export let data;
    let { writing, files } = data;

    let draft = writing.body;

    let preview = writing.body;
    let title = writing.title;
    let hero = writing.hero;

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
