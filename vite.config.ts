import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://codelang.vercel.app/',
    },
  },
  resolve: {
    alias: {
      '@app': '/src/app',
      '@api': '/src/shared/api',
      '@slices': '/src/shared/slices',
      '@shared': '/src/shared',
      '@components': '/src/shared/components',
      '@modules': '/src/modules',
      '@pages': '/src/pages',
    },
  },
});
