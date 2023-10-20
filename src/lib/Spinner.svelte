<script>
  let char = '|'
  let index = 0

  function nextChar () {
    let frames = [ "⣾", "⣽", "⣻", "⢿", "⡿", "⣟", "⣯", "⣷" ]
    index = (index + 1) % frames.length
    char = frames[index]
    window.setTimeout(nextChar, 80)
  }

  nextChar()
</script>

{char}
