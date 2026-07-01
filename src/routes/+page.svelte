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
  <style>
    body { background-color: #f3f3f3; }
  </style>
</svelte:head>

<!-- Centered wrapper for mobile layout (430px max width) without breaking window scroll -->
<div class="mx-auto w-full max-w-[430px] bg-white overflow-hidden shadow-2xl relative min-h-screen">
  <div bind:this={container} class="w-full relative"></div>
</div>

