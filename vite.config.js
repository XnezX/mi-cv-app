import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/mi-cv-app/', // Cambia 'mi-cv-app' por el nombre de tu repositorio
  plugins: [react()],
});


