<script>
    const { title, children } = $props();

    let expanded = $state(false);

    function toggleExpanded() {
      expanded = !expanded;
    }
</script>

<div class="relative my-2">
    <div class="absolute -left-6 cursor-pointer" onclick={toggleExpanded}>
        {#if expanded}
            =
        {:else}
            -
        {/if}
    </div>
        <button class="text-title hover:bg-title hover:text-bg w-min cursor-pointer" onclick={toggleExpanded}>
            <h2 class="font-bold">{title}</h2>
        </button>
        {#if expanded}
            <div class="py-0">
                {@render children()}
            </div>
        {/if}
</div>
