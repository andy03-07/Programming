import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Correct plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
