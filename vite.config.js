import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Tesla_CarShowroomWeb/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    assetsDir: 'assets',  
  },
  server: {
    historyApiFallback: true,
  },
  optimizeDeps: {
    exclude: ['*.jpg', '*.png'], // Don't optimize external images
  }
});