<script>
    import {Mugunghwa} from "$lib/utils/mugunghwa.js";
    import SvelteMarkdown from "@humanspeak/svelte-markdown";

    let mugunghwa = new Mugunghwa();
    let writings = mugunghwa.writings();
</script>

<style>
    .content {
        width: 45em;
        margin: 4em auto 0 auto;

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

    .writing-list {
        margin-top: 3em;
    }

   .writing-item {
        h3 {
            margin: 0;
        }

        p {
            margin-top: 1em;
            text-align: left;
        }
    }

    .writing-item {
        width: auto;
        display: flex;
    }

    .writing-item {
        h3 {
            padding-top: 1em;
            width: 30%;
        }
        p {
            width: 70%;
            margin: 0;
            padding: 0;
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
                            <h3>/ <a href="/blog/{writing.title}">{writing.title}</a></h3>
                            <p><SvelteMarkdown source={writing.body.slice(0, 200) + "..."} /></p>
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