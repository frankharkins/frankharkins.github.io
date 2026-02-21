<script lang="ts">
    import type { Snippet } from "svelte";
    import clsx from "clsx";

    type Props = {
      className?: string;
      style?: string;
      children?: Snippet;
    }
    const { className, style, children }: Props = $props();
</script>

<li class={clsx("list-[square] ml-0 sm:ml-4 pl-2", className)} style={style}>
    {@render children?.()}
</li>
