import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/devprov1/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
