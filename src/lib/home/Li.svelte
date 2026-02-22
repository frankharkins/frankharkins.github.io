<script lang="ts">
    import type { Snippet } from "svelte";
    import clsx from "clsx";

    type Props = {
      className?: string;
      children?: Snippet;
      index: number;
    }
    const { className, children, index }: Props = $props();
</script>

<li
    class={clsx(
      "list-[square] ml-0 sm:ml-4 pl-2 transition-all duration-500",
      className
    )}
    style="transition-delay: {index*100}ms;"
>
    {@render children?.()}
</li>
