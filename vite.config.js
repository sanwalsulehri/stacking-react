import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output directory matches your `vercel.json`
  },
  server: {
    port: 3000, // Optional: Specify your dev server port
  }
});
