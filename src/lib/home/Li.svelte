<script lang="ts">
    import type { Snippet } from "svelte";
    import clsx from "clsx";

    type Props = {
      className?: string;
      children?: Snippet;
    }
    const { className, children } = $props();
</script>

<li class={clsx("list-[square] ml-0 sm:ml-4 pl-2", className)}>
    {@render children?.()}
</li>
