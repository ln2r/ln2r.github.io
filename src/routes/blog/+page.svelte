<script>
</script>

<svelte:head>
    <title>writings / ln2rworks</title>
</svelte:head>

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

        small {
            color: cornflowerblue;
        }
    }
</style>

<div class="content">
    <div class="title">
        <h1>writings</h1>
    </div>
    <div class="body">
        <div class="writing-list">
            <div class="writing-item">
                <h3>title goes here</h3>
                <p>snippets goes here</p>
                <small>tag a, tag b, tag c, tag d</small>
            </div>
        </div>
    </div>
</div>