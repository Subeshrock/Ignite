import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vyoma-vm.netlify.app',
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
