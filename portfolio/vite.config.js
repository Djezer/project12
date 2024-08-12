import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Dossier où seront générés les fichiers de build
  },
  server: {
    port: 3000,
  },
});
