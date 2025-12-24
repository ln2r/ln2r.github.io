<script>
    import {Mugunghwa} from "$lib/utils/mugunghwa.js";
    import SvelteMarkdown from "@humanspeak/svelte-markdown";
    import {formatDate} from "$lib/utils/format-date.ts";

    let mugunghwa = new Mugunghwa();
    let writings = mugunghwa.writings();
</script>

<style>
    .content {
        width: 45em;
        margin: 2em auto 4em auto;

        @media only screen and (max-width: 600px) {
            width: 100%;
        }
    }

    div {
        p {
            text-align: justify;
            margin: 0;
        }

        a {
            text-decoration: none;
        }
    }

    .writing-item {
        h3 {
            margin-bottom: 0;
        }

        p, small {
            padding-left: 1.3em;
        }

        p {
            font-style: italic;
        }
    }
</style>

<div class="content">
    <div class="title">
        <h1>writings</h1>
    </div>
    <div class="body">
        <div class="writing-list">
            {#await writings}
                <p>getting writings...</p>
            {:then data}
                {#if data.length > 0}
                    {#each data as writing}
                        <div class="writing-item">
                            <h3>/ <a href="/blog/{writing.slug}">{writing.title}</a></h3>
                            <small>Posted: {formatDate(writing.created)}</small>
                            <p><SvelteMarkdown source={writing.body.slice(0, 255) + "..."} /></p>
                        </div>
                    {/each}
                {:else}
                    <p>it seems i have not written anything yet.</p>
                {/if}
            {:catch error}
                <p>whoops</p>
            {/await}
        </div>
    </div>
</div>