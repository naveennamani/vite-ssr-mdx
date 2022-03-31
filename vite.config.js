import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import mdx from "@mdx-js/rollup";
import fix_ssr_esm_modules from "./fix_ssr_esm_imports.js";

export default defineConfig({
  plugins: [
    react(),
    mdx({
      providerImportSource: "@mdx-js/react",
    }),
    ssr(),
    fix_ssr_esm_modules([
      { find: "react/jsx-runtime", replacement: "react/jsx-runtime.js" },
      { find: "react-dom/server", replacement: "react-dom/server.js" },
    ]),
  ],
  build: {
    rollupOptions: {
      output: {
        format: "es",
      },
    },
  },
});
