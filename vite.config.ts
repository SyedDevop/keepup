import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {
        find: "@src",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "@svg",
        replacement: resolve(__dirname, "src/assets/svg"),
      },
    ],
  },
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    host: "127.0.0.1",
    port: 1420,
    strictPort: true,
  },
}));
