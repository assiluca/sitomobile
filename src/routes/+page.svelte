<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let container: HTMLDivElement;
  let root: any;

  onMount(async () => {
    try {
      const { mountReactApp } = await import('$lib/ReactApp.tsx');
      root = mountReactApp(container);
    } catch (e) {
      console.error('Errore nel montaggio React:', e);
    }
  });

  onDestroy(() => {
    root?.unmount();
  });
</script>

<svelte:head>
  <title>Sito Mobile — Olimpiadi Invernali</title>
</svelte:head>

<div bind:this={container} style="width:100%;min-height:100vh;"></div>
