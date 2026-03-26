import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ignite.dev',
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
