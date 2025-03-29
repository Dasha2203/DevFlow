import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': '/src/app',
      '@api': '/src/shared/api',
      '@shared': '/src/shared',
      '@components': '/src/shared/components',
      '@slices': '/src/shared/slices',
      '@modules': '/src/modules',
    },
  },
});
