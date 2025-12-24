<script lang="ts">
    import SvelteMarkdown from "@humanspeak/svelte-markdown";
    import {formatDate} from "$lib/utils/format-date.ts";

    export let data;
</script>

<svelte:head>
    <title>ln2rworks</title>
    {#await data.writing}
    {:then data}
        <title>{data.title} / ln2rworks</title>
    {:catch error}
    {/await}
</svelte:head>

<style>
    .content {
        width: 45em;
        margin: 2em auto 4em auto;

        @media only screen and (max-width: 600px) {
            width: 100%;
        }

        .title {
            h1 {
                margin: 0;
            }

            border-bottom: 1px solid darkgray;
            padding-bottom: 1em;
        }
    }

    .hero {
        max-width: 40em;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    div {
        p {
            text-align: justify;
            margin: 0;
        }
    }
</style>

<div class="content">
    {#await data.writing}
        <p>getting writing...</p>
        {:then data}
            {#if data.hero}
                <img class="hero" src={data.hero} alt="hero"/>
            {/if}
            <div class="title">
                <h1>{data.title}</h1>
                <small>Posted: {formatDate(data.created)} - {data.id}</small>
            </div>
            <SvelteMarkdown source={data.body} />
        {:catch error}
        <p>oh no! {error}</p>
    {/await}
</div>