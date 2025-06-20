import { defineConfig } from 'vite'

export default defineConfig({
  // Enable HMR
  server: {
    hmr: true,
    port: 3000,
    open: true,
    watch: {
      usePolling: true,
      interval: 100
    }
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
  },
  // Enable HMR for HTML files
  plugins: [
    {
      name: 'html-hmr',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.html')) {
          server.ws.send({
            type: 'full-reload',
            path: '*'
          })
          return []
        }
      }
    }
  ]
}) 