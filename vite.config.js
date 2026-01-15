import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

import { sync } from "glob";

export default defineConfig({
  plugins: [tailwindcss()],
  root: "./src",
  base: "./",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: [...sync("./src/**/*.html".replace(/\\/g, "/"))],
    },
  },
});
