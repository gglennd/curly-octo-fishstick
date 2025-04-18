import { defineConfig } from "vite";
import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/node";

export default defineConfig({
  plugins: [
    devServer({
      adapter,
      entry: "./server/index.ts",
    }),
  ],
  publicDir: false,
});
