import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/maria-popescu/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Target modern browsers to reduce polyfills
    target: 'es2018',
    // Enable default minification
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
        },
      },
    },
    // Enable asset optimization
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
  },
})
