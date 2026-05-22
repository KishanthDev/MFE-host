import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

import { REMOTE_CONFIG } from "./src/config/remotes";
import { getAppEnv } from "./src/config/env";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const currentEnv = getAppEnv(env.VITE_ENV);

  console.log(`
====================================
🚀 MFE ENV: ${currentEnv.toUpperCase()}
====================================
`);

  return {
    plugins: [
      react(),

      tailwindcss(),

      federation({
        name: "host",

        remotes: REMOTE_CONFIG[currentEnv],

        shared: ["react", "react-dom"],
      }),
    ],

    build: {
      target: "esnext",
      modulePreload: false,
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});