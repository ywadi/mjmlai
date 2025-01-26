import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    optimizeDeps: {
      include: ['@fontsource/space-grotesk']
    }
  }
});