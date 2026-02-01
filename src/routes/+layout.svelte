<script lang="ts">

	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
    <title>Frank Harkins</title>
    <meta name="Frank Harkins" content="Personal website of Frank Harkins">
    <link rel="icon" href={favicon} />
</svelte:head>
{@render children()}
