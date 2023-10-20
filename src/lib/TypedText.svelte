<script>
  export let text;
  export let cursor = true;
  export let speed = text.length/100;
  export let delay = 0;
  let nChars = text.length;
  let textTimePct = ((nChars-1)/nChars)*100; 
</script>

<span class="component"
     style="--end-width: {nChars*0.6}rem;
            --cursor-width: {cursor ? '0.5rem' : '0'};
            --speed: {speed}s;
            --num-frames: {nChars};
            --text-time-pct: {textTimePct}%;
            --delay: {delay}s;"
>
  {text}
</span>

<style>
.component {
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  border-right: var(--cursor-width) solid var(--color-cursor);
  white-space: nowrap;
  width: 0;
  animation: typing var(--speed) steps(var(--num-frames), end) var(--delay);
  animation-fill-mode: forwards;
}

@keyframes typing {
  0% { border-right: var(--cursor-width) solid var(--color-cursor); width: 0; }
  75% {  width: var(--end-width); }
  99% { border-right: var(--cursor-width) solid var(--color-cursor); }
  100% { border-right: 0; width: var(--end-width); }
  
}

</style>
