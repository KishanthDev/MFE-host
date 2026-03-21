import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path"; // 🔥 Add this import

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        dashboard: "https://mfe-dashboard-jet.vercel.app/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    modulePreload: false,
  },
  // 🔥 Add this resolve block
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});