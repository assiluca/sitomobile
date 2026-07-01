import { sveltekit } from '@sveltejs/kit/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), sveltekit()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
