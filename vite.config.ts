// vite.config.ts
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import { TanStackStartVitePlugin } from "@tanstack/react-start-plugin";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths(),
    TanStackStartVitePlugin({
      target: "netlify",
      customViteReactPlugin: true,
    }),
    viteReact(),
  ],
  define: {
    global: "globalThis",
  },
  build: {
    rollupOptions: {
      external: [
        "node:stream",
        "node:stream/web",
        "node:async_hooks",
        "node:buffer",
        "node:crypto",
        "node:fs",
        "node:path",
        "node:url",
        "node:util",
      ],
    },
  },
  optimizeDeps: {
    exclude: [
      "node:stream",
      "node:stream/web",
      "node:async_hooks",
      "node:buffer",
      "node:crypto",
      "node:fs",
      "node:path",
      "node:url",
      "node:util",
    ],
  },
});
