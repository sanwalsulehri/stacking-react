import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output directory matches your `vercel.json`
    rollupOptions: {
      input: 'index.html', // Ensure the correct entry file is used
    },
  },
  server: {
    port: 3000, // Optional: Specify your dev server port
  },
  base: '/', // Ensure the base path is correctly set for your deployment
});
