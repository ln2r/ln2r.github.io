<script>
    import {github} from "$lib/utils/github.js";

    let projects = github();
</script>

<style>
    .content {
        width: 45em;
        margin: 4em auto 0 auto;

        @media only screen and (max-width: 600px) {
            width: 100%;
        }
    }

    .project-list, .writing-list {
        margin-top: 3em;
    }

    .project-item, .writing-item {
        margin-top: 1.5em;
    }

    .project-item, .writing-item {
        h3 {
            margin: 0;
        }

        p {
            margin-top: 1em;
        }

        small {
            color: cornflowerblue;
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
    <p>a nerd who loves video games. mainly focused on backend development with occasional front end stuff. been active for around 7 years (4 years-ish professionally).</p>

    <div class="project-list">
        <h2>projects</h2>
        {#await projects}
            {:then data}
                {#each data as work}
                    <div class="project-item">
                        <h3>> {work.name}</h3>
                        <p>{work.description ?? "no description added"}</p>
                        <small>{work.tags.join (", ")}</small>
                    </div>
                {/each}
            {:catch error}
            <p>unable to fetch projects data, {error}</p>
        {/await}
    </div>

    <div class="writing-list">
        <h2>writings</h2>
        <div class="writing-item">
            <h3>/ name</h3>
            <p>desc</p>
            <small>tag a, tag b, tag c, tag d</small>
        </div>
    </div>
</div>