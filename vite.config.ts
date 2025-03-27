import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': '/src',
      '@store': '/src/store',
      '@api': '/src/api',
      '@modules': '/src/modules',
      '@components': '/src/components',
      '@services': '/src/api/services',
    },
  },
});
