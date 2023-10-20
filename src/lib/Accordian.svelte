<script>
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
  <span class="chevron force-monospace">
    {isOpen ? '=' : '-'}
  </span>
  <div style="display: inline-block;">
    <button on:click={toggle}>
      <h2>
        <slot name="title">
        </slot>
      </h2>
    </button>
  </div>

  {#if isOpen}
  <div class="content">
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
    display: inline-block;
    all: unset;
    cursor: pointer;
    width: 100%;
    transition: background 0.2s ease;
  }

  button:hover, button:active {
    background: var(--color-title);
  }

  button:hover > h2, button:active > h2 {
    color: var(--color-bg);
  }

  button:focus {
    outline: 1px solid var(--color-body);
    outline-offset: 1px;
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }

  .content {
    margin-left: 1.2rem;
    width: 100%;
    box-sizing: border-box;
  }

  .chevron {
    font-weight: bold;
  }

  .force-monospace {
    display: inline-block;
    width: 0.602rem;
    text-align: center;
  }

</style>
