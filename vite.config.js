import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: {
      rewrites: [
        // Let robots.txt be served directly
        { from: /^\/robots\.txt$/, to: '/robots.txt' },
        // Let sitemap.xml be served directly
        { from: /^\/sitemap\.xml$/, to: '/sitemap.xml' },
      ],
    },
  },
})
