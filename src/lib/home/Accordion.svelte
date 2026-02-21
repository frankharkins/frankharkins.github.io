<script>
	import clsx from "clsx";

    const { title, children } = $props();

    let expanded = $state(false);

    function toggleExpanded() {
      expanded = !expanded;
    }
</script>

<button class="relative -m-px p-px hover:bg-title group block my-2 cursor-pointer" onclick={toggleExpanded}>
    <div class="absolute -left-6">
        {#if expanded}
            =
        {:else}
            -
        {/if}
    </div>
        <div class="text-title group-hover:text-bg w-min">
            <h2 class="font-bold">{title}</h2>
        </div>
</button>
<div class={clsx("py-0 transition-all duration-500 ease-out max-h-0", { "max-h-[1200px]": expanded })}>
    {#if expanded}
        {@render children()}
    {/if}
</div>
