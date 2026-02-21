<script lang="ts">
	import clsx from "clsx";
	import Li from "./Li.svelte";

	type Event = {
      title: string,
      employer: string,
      timePeriod: string,
      description: string,
    }
    const { events }: { events: Event[] } = $props();

    const fadeInAnimation = "animate-[0.4s_ease-in_var(--fade-in-delay)_both_fade-in-anim]";
    const fadeInDelayMs = 120;

    function delay(index: number): string {
      return `--fade-in-delay: ${(fadeInDelayMs*index)}ms`;
    }
</script>

<ol class="my-6">
    {#each events as event, index}
        <Li
          className="relative marker:text-muted-extra {fadeInAnimation}"
          style={delay(index)}
        >
            <div
              class={clsx(
                "absolute w-px -left-2.75 top-[1lh] bg-muted-extra",
                {
                  "h-[calc(100%-1lh)]": index+1 == events.length,
                  "h-[calc(100%-1lh+25px)]": index+1 !== events.length,
                }
              )}
            >
            </div>
            <h3 class="text-title">{event.title}</h3>
            <div>{event.employer}</div>
            <div>{event.timePeriod}</div>
            <p
              class={clsx(
                "mt-2",
                { "mb-6": index+1 !== events.length }
              )}
            >
                {event.description}
            </p>

        </Li>
    {/each}
    <Li
        className="marker:text-muted-extra {fadeInAnimation}"
        style={delay(events.length)}
    ></Li>
</ol>
