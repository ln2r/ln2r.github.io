<script lang="ts">
    import SvelteMarkdown from "@humanspeak/svelte-markdown";

    const title = 'post title goes here'
    const source = `
    # This is a header

This is a paragraph with **bold** and <em>mixed HTML</em>.

<img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_Wille.png" width="700" alt="wille logo test"/>

* List item with \`inline code\`
* And a [link](https://svelte.dev)
  * With nested items
  * Supporting full markdown
    `
</script>

<svelte:head>
    <title>{title} / ln2rworks</title>
</svelte:head>

<style>
    .content {
        width: 45em;
        margin: 4em auto 0 auto;

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

    div {
        p {
            text-align: justify;
            margin: 0;
        }
    }
</style>

<div class="content">
    <div class="title">
        <h1>{title}</h1>
        <small>{new Date().toDateString()}</small>
    </div>

    <SvelteMarkdown {source} />
</div>