<script lang="ts">
    import clsx from 'clsx';
    export type Theme = 'Light' | 'Dark' | 'System default';
    type Props = {
      theme: Theme;
      className: string;
    }
    var { theme = $bindable(), className }: Props = $props();

    function toggle() {
      theme = getNext(theme);
    }

    function getNext(old: Theme): Theme {
      if (old === 'Light') return 'Dark';
      if (old === 'Dark') return 'System';
      if (old === 'System') return 'Light';
    }
</script>

<button onclick={toggle} class={clsx('cursor-pointer group', className)}>
    <span class="hidden group-has-[:hover]:inline">{theme}</span>
    <svg class="inline" width="1lh" height="1lh" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="125" cy="125" r="125" fill="var(--color-muted)"/>
      <mask id="mask0_1_2" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="250" height="250" fill="#fff">
        <circle cx="125" cy="125" r="125"/>
      </mask>
      <g mask="url(#mask0_1_2)">
        <circle cx="115" cy="110" r="120" fill="var(--color-muted-extra)"/>
      </g>
    </svg>
</button>
