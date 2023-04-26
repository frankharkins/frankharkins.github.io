<script>
  export let title = 'Title';
  export let comment = '';
  export let description = '';
  export let info = ['Institution', 'Date range'];
</script>

<li>
  <span class="title">{title}</span> {comment ? `(${comment})` : ''}
  <div class="content">
    {#each info as line}
      {line}<br>
    {/each}
    <p>{@html description}</p>
  </div>
</li>


<style>
  .content {
    padding-top: 0;
    margin-left: -.8rem;
    padding-left: .8rem;
    border-left: 1px solid var(--color-title);
  }

  li {
    margin-bottom: 1rem;
  }
</style>
