<script lang="ts">
	// import favicon from '$lib/assets/favicon.svg';
    export const prerender = true

    import favicon from '$lib/assets/origami-blank.png';
    import '@fontsource-variable/jetbrains-mono';
    import '@fontsource/redacted';
    import Menu from '$lib/components/menu.svelte';
    import {random, RandomType} from "$lib/utils/random";

	let { children } = $props();
</script>

<style>
    h3, p, a {
        padding: 0;
        margin: 0;
    }

    :global(body) {
        font-family: "JetBrains Mono", monospace;
        font-size: medium;

        background: black;
        color: white;

        a {
            color: white;
            text-decoration: none;
        }

        a:hover {
            color: cornflowerblue;
        }
    }

    footer {
        position: fixed;
        font-weight: 100;
        bottom: 0;
        right: 0;
        width: 100%;
        text-align: right;
        margin: 0 4em 4em 0;
        color: darkgrey;

        @media (min-width: 950px){
            z-index: -10;
        }
    }
</style>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

