import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({ algorithm: 'brotliCompress' }) // Enables Brotli compression
  ],
  build: {
    target: 'esnext', // Use latest JavaScript features
    minify: 'terser', // Minify JS for smaller size
    sourcemap: false, // Disable source maps in production
    rollupOptions: {
      external: ['react', 'react-dom'], // Use CDN instead of bundling React
    },
  },
});