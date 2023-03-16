<script>
  export let title = 'Title';
  export let comment = '';
  export let description = '';
  export let info = ['Institution', 'Date range'];
</script>

<li>
  <span class="title">{title}</span> {comment ? `(${comment})` : ''}
  <span class="info">
  {#each info as line}
    <br>{line}
  {/each}
  </span>
  <p>{@html description}</p>
</li>


<style>
  .title {
    color: var(--color-white);
  }

  li {
    margin-bottom: 1rem;
  }
</style>
