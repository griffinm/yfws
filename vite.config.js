import { defineConfig } from 'vite'

export default defineConfig({
  // Enable HMR
  server: {
    hmr: true,
    port: 3000,
    open: true
  },
  // Build configuration for static site
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
}) 