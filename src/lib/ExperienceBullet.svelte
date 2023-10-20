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
    padding-left: .25rem;
  }

  li {
    margin-bottom: 1rem;
  }
</style>
