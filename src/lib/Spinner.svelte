<script>
  let char = '|'
  let index = 0

  function nextChar () {
    index = (index + 1) % 4
    char = ['|', '/', '-', '\\'][index]
    window.setTimeout(nextChar, 100)
  }

  nextChar()
</script>

{char}
