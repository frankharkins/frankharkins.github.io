<script lang="ts">
	import Link from "$lib/home/Link.svelte";
	import Li from "./Li.svelte";

	type Props = {
      title: string;
      index: number;
      description: string;
      links: { text: string; url: string }[];
      sourceLink?: string;
    };
    const { title, index, description, links }: Props = $props();
    const fadeInAnimation = "animate-[0.4s_ease-in_var(--fade-in-delay)_both_fade-in-anim]";

</script>

<Li className="my-8 list-none {fadeInAnimation}" style="--fade-in-delay: {index*100}ms">
    <h3 class="text-title mb-1">{title}</h3>

    <div class="mb-1">
        {description}
    </div>

    {#each links as { text, url }}
        <div>
            <Link href={url} className="text-sm after:[content:'_>'] hover:after:[content:'_->']">{text}</Link>
        </div>
    {/each}
</Li>
