import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // Importe o plugin svgr

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(), // Adicione o plugin svgr aqui
  ],
});
