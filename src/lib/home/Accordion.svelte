<script>
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
{#if expanded}
    <div class="py-0">
        {@render children()}
    </div>
{/if}
