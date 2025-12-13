<script lang="ts">
	// import favicon from '$lib/assets/favicon.svg';
    export const prerender = true

    import favicon from '$lib/assets/origami-blank.png';
    import '@fontsource-variable/jetbrains-mono';
    import '@fontsource/redacted';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
    <title>writings / ln2rworks</title>
</svelte:head>

{@render children?.()}

