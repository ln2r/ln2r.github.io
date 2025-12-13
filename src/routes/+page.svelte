<script>
    import {Mugunghwa} from "$lib/utils/mugunghwa.ts";
    import {onMount} from "svelte";
    import SvelteMarkdown from "@humanspeak/svelte-markdown";
    let mugunghwa = new Mugunghwa();

    let projects = [];
    let writings = [];

    onMount(async () => {
        projects = await mugunghwa.works()
        writings = await mugunghwa.writings()
    })
</script>

<svelte:head>
    <title>ln2rworks</title>
</svelte:head>

<style>
    .content {
        width: 45em;
        margin: 4em auto 4em auto;

        @media only screen and (max-width: 600px) {
            width: 100%;
            font-size: small;
        }
    }

    .project-list, .writing-list, .contact-list {
        margin-top: 3em;
    }

    .project-item, .writing-item, .contact-item {
        h3 {
            margin: 0;
        }

        p {
            margin-top: 1em;
            text-align: left;
        }

        small {
            color: cornflowerblue;
        }
    }

    .project-row, .writing-item {
        width: auto;
        display: flex;

        .project-item {
            width: 50%;
            padding: 1em;
        }
    }

    .writing-item {
        h3 {
            padding-top: 1em;
            width: 25%;
        }
        p {
            width: 75%;
            margin: 0;
            padding: 0;
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
</style>

<div class="content">
    <p>heavily and mainly doing backend nodejs stuff, from professional use (work) to silly random app i make to make things easier. outside codes i love to play games, watch movies/anime, and read books.</p>

    <div class="project-list">
        <h2>stuff i did</h2>
        {#await projects}
            {:then data}
                {#each data as group}
                    <div class="project-row">
                        {#each group as project}
                            <div class="project-item">
                                <h3>> <a href={project.html_url}>{project.name}</a> </h3>
                                <p>{project.description ?? "no description added"}</p>
                                <br />
                                <small>{[project.language, ...project.topics].join (", ")}</small>
                            </div>
                        {/each}
                    </div>
                {/each}
            {:catch error}
            <p>the list seems broken... will get back to you soon.</p>
        {/await}
    </div>

    <div class="writing-list">
        <h2>writings</h2>
        {#await writings}
            {:then data}
                {#each data as writing}
                    <div class="writing-item">
                        <h3>/ <a href={writing.title}>{writing.title}</a></h3>
                        <p><SvelteMarkdown source={writing.body.slice(0, 150)} /></p>
                    </div>
                {/each}
            {:catch error}
            <p>whoops</p>
        {/await}
    </div>

    <div class="contact-list">
        <h2>contacts</h2>
        <div class="contact-item">
            <p><a href="https://discord.com/users/132712988875423745">discord</a>, <a href="https://github.com/ln2r">mugunghwa</a></p>
        </div>
    </div>
</div>