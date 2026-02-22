<script>
	import clsx from "clsx";
	import { onMount } from "svelte";

    const { title, children, ordered = false } = $props();
    const uid = $props.id();

    let expanded = $state(false);
    let contentsHeightPx = $state(0);

    function setContentsHeight() {
      contentsHeightPx = document
        .getElementById(uid)
        ?.getBoundingClientRect()
        .height ?? 2000;
    }

    function toggleExpanded() {
      expanded = !expanded;
    }

    onMount(() => {
      window.addEventListener('resize', setContentsHeight);
      setContentsHeight();
    })

    const listClass = $derived(
      clsx(
        "*:opacity-0 box-border p-[0.5px] invisible",
        { "*:opacity-100 visible": expanded }
      )
    );
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
<div
    class={clsx(
        "py-0 transition-all duration-500 motion-reduce:duration-0 ease-out max-h-0 overflow-hidden",
    )}
    style={ expanded ? `max-height: ${contentsHeightPx}px` : "" }
>
    {#if ordered}
        <ol id={uid} class={listClass}>
            {@render children()}
        </ol>
    {:else}
        <ul id={uid} class={listClass}>
            {@render children()}
        </ul>
    {/if}
</div>
