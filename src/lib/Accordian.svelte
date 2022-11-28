<script>
  import { slide } from 'svelte/transition';
  export let title = 'Title';
  let isOpen = false;
  let component;
  function toggle() {
    isOpen = !isOpen;
  }
  function collapse(event) {
    if (component.contains(event.target) == false) {
      isOpen = false;
    }
  }
</script>

<svelte:window on:click={collapse}/>

<div bind:this={component}
     class="component {isOpen ? 'open' : ''}">
  <button on:click={toggle}>
    <span class="chevron force-monospace">
      {isOpen ? '>' : '-'}
    </span>
    <h2>
      <slot name="title">
        {title}
      </slot>
    </h2>
  </button>

  {#if isOpen}
  <div class="content" transition:slide={{ duration: 200 }}>
    <slot name="content"></slot>
  </div>
  {/if}
</div>

<style>
  .component {
    margin: 1rem 0;
    padding: 0 0;
  }

  h2 {
    margin: 0;
    display: inline;
  }

  button {
    all: unset;
    cursor: pointer;
    width: 100%;
  }

  .content {
    margin-left: 1.2rem;
    width: 100%;
  }

  .force-monospace {
    display: inline-block;
    width: 0.602rem;
    text-align: center;
  }

  .chevron {
    opacity: 0;
    transition: opacity 0.1s;
  }

  button:hover .chevron {
    opacity: 1;
  }

  button:focus .chevron {
    opacity: 1;
    color: var(--color-yellow);
  }

  .open .chevron {
    opacity: 1;
  }
</style>
