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

<!-- Mobile wrapper to keep absolute positioning perfect -->
<div class="min-h-screen w-full flex items-center justify-center py-8">
  <div class="relative w-[430px] h-[932px] max-w-[100vw] sm:rounded-[3rem] overflow-hidden shadow-2xl bg-black border-[8px] border-black flex-shrink-0" style="scale: min(1, calc(100vw / 430))">
    <div bind:this={container} class="w-full h-full overflow-y-auto overflow-x-hidden bg-white scroll-smooth" style="position: relative;"></div>
  </div>
</div>

