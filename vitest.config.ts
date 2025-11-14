import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // The actual root of your frontend project
  root: path.resolve(__dirname, 'client'),

  plugins: [react()],

  build: {
    // Output folder relative to the repo root
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
    },
  },
});
