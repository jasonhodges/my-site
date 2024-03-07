/// <reference types="vitest" />

import analog, { PrerenderContentFile } from '@analogjs/platform';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  root: __dirname,
  publicDir: 'src/assets',
  optimizeDeps: {
    include: ['@angular/common'],
  },
  build: {
    outDir: '../dist/client',
    reportCompressedSize: true,
    commonjsOptions: { transformMixedEsModules: true },
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  ssr: {
    noExternal: ['daisyui/**'],
  },
  plugins: [
    analog({
      prerender: {
        routes: async () => {
          return [
            '/',
            '/home',
            '/blog',
            '/resume',
            {
              contentDir: '/src/content/posts',
              transform: (file: PrerenderContentFile) => {
                // @ts-ignore
                if (file.attributes?.draft) {
                  return false;
                }
                return `/blog/${file.attributes['slug'] || file.name}`;
              },
            },
            {
              contentDir: '/src/content/projects',
              transform: (file: PrerenderContentFile) => {
                if (file.attributes?.['draft']) {
                  return false;
                }
                return `/project/${file.attributes['slug'] || file.name}`;
              },
            },
          ];
        },
        sitemap: {
          host: 'https://jasonhodges.dev',
        },
      },
      nitro: {
        preset: 'vercel',
        serveStatic: false,
        externals: { inline: ['zone.js/node', 'tslib'] },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
