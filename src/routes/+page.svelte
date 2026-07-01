<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let container: HTMLDivElement;
  let root: any;

  onMount(async () => {
    const { createRoot } = await import('react-dom/client');
    const React = await import('react');
    const { default: App } = await import('../app/App.tsx');
    root = createRoot(container);
    root.render(React.default.createElement(App));
  });

  onDestroy(() => {
    root?.unmount();
  });
</script>

<svelte:head>
  <title>Sito Mobile — Olimpiadi Invernali</title>
</svelte:head>

<div bind:this={container}></div>

