// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Ensure you have this import

export default defineConfig({
  plugins: [react()], // Use the React plugin
});
