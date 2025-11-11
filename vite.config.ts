import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { VitePWA, type VitePWAOptions } from "vite-plugin-pwa";
import prerender from "@prerenderer/rollup-plugin";
import Renderer from "@prerenderer/renderer-puppeteer";

const PWAConfig: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  includeAssets: ["favicon.ico", "apple-touch-icon-180x180.png", "maskable-icon-512x512.png"],
  workbox: {
    globPatterns: ["**/*"],
    maximumFileSizeToCacheInBytes: 15 * 1024 * 1024, // 15MB
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/www\.googletagmanager\.com\/.*/,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "google-tag-manager",
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: ({ url }) => {
          return url.pathname.startsWith("/");
        },
        handler: "CacheFirst",
        options: {
          cacheName: "polyme-cache",
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  manifest: {
    name: "PolyME",
    short_name: "PolyME",
    description:
      "PolyME is the 0xmmq's personal website, used to show information about experience, skills, portfolio, etc. Welcome to visit and contact me.",
    theme_color: "#ffffff",
    icons: [
      {
        src: "pwa-64x64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "maskable-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    start_url: "/",
    display: "standalone",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    svgr(),
    VitePWA(PWAConfig),
    prerender({
      routes: ["/", "/portfolio", "/experience", "/stack", "/links"],
      renderer: new Renderer({
        headless: true,
        renderAfterTime: 3000, // prevent resource competition
        maxConcurrentRoutes: 1,
      }),
    }),
  ],
});
