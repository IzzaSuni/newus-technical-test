import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-expect-error no types
import path from "path";
// @ts-expect-error no types
import * as url from "url";

// @ts-expect-error no types
const dirName = url.fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@/src": path.resolve(dirName, "src/"),
    },
  },
});
