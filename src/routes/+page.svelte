<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { createRoot } from 'react-dom/client';
  import App from '../app/App.tsx';

  let container: HTMLDivElement;
  let root: ReturnType<typeof createRoot>;

  onMount(() => {
    root = createRoot(container);
    root.render(App({}));
  });

  onDestroy(() => {
    root?.unmount();
  });
</script>

<svelte:head>
  <title>Sito Mobile — Olimpiadi Invernali</title>
</svelte:head>

<div bind:this={container}></div>
