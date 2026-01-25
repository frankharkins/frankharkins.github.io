<script lang="ts">
    import type { Snippet } from "svelte";
	import clsx from "clsx";

	type Props = {
	    href: string;
	    className?: string;
	    children: Snippet;
	}
    const { href, className, children } = $props();
</script>

<a href={href} class={clsx("text-link", className)}>
    {@render children()}
</a>
