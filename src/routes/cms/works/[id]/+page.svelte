<script lang="ts">
    import { enhance } from "$app/forms";

    export let data;
    let { work } = data;

    let title = work.title;
    let description = work.description;
    let url = work.url;
    let stacks = work.stacks;
</script>

<div class="content-list"></div>
<form method="POST" use:enhance>
    <input placeholder="project tile" bind:value={title} name="title" /><br />
    <input
        placeholder="description"
        bind:value={description}
        name="description"
    /><br />
    <input placeholder="url" bind:value={url} name="url" /><br />
    <input placeholder="stacks" bind:value={stacks} name="stacks" /><br />
    <button type="submit">save</button>
</form>
