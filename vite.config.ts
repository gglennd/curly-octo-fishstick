import build from "@hono/vite-build/node";
import adapter from "@hono/vite-dev-server/node";
import honox from "honox/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: ["./app/client.ts", "./app/style.css"],
          output: {
            entryFileNames: "static/client.js",
            chunkFileNames: "static/assets/[name]-[hash].js",
            assetFileNames: "static/assets/[name].[ext]",
          },
        },
        emptyOutDir: false,
      },
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./app"),
        },
      },
    };
  } else {
    return {
      ssr: {
        external: ["react", "react-dom", "pino", "pino-pretty"],
      },
      plugins: [
        honox({
          islands: true,
          devServer: {
            adapter,
          },
          client: {
            input: ["./app/style.css"],
          },
          islandComponents: {
            reactApiImportSource: "react",
          },
        }),
        tailwindcss(),
        build({
          port: 3000,
          staticRoot: "./dist",
          staticPaths: ["/static/*", "/favicon.ico"],
        }),
      ],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./app"),
        },
      },
    };
  }
});
