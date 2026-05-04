import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxtjs/color-mode"],
  css: ["~/assets/css/main.css"],
  ssr: false, // Disable SSR for a pure client-side app

  // 1. Tailwind v4 Vite Plugin
  vite: {
    plugins: [tailwindcss()],
  },

  // 2. Fix the '@/lib/utils' alias for Shadcn
  alias: {
    "@": fileURLToPath(new URL("./app", import.meta.url)),
  },

  // 3. Fix the Vite IPC Crash (Component Collision)
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
    {
      path: "~/components/ui",
      extensions: [".vue"],
      pathPrefix: true,
    },
  ],
  experimental: {
    viteEnvironmentApi: true,
  },
});
