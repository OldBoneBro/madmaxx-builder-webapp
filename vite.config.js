import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import url from "@svgr/rollup";

//
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), url()],
  base: "/madmaxx-builder-webapp/",
});
