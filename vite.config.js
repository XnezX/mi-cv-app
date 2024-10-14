import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/mi-cv-app/', // Asegúrate de que el nombre del repositorio sea correcto
  build: {
    rollupOptions: {
      external: ['/mi-cv-app/assets/index-DoTWbw-e.js', '/mi-cv-app/assets/index-DbxInE2X.css'], // Puedes agregar otras dependencias externas aquí si es necesario
    },
  },
});



