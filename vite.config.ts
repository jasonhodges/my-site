/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  root: __dirname,
  publicDir: 'src/assets',
  optimizeDeps: {
    include: ['@angular/common'],
  },
  build: {
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
        routes: async () => ['/', '/home', '/about', '/blog', '/resume'],
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
