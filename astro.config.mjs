import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ignite-vm.netlify.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
