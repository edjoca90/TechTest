// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: 'istanbul', // Usa 'istanbul' para la cobertura
      reporter: ['text', 'html'], // Genera reporte en consola y HTML
    },
  },
});