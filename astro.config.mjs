// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://voicegateway.mahimai.ca",
  adapter: cloudflare(),

  integrations: [
    starlight({
      title: "VoiceGateway",
      logo: { src: "./src/assets/goat.svg" },
      sidebar: [
        {
          label: "Getting started",
          autogenerate: { directory: "docs/getting-started" },
        },
        { label: "Guides", autogenerate: { directory: "docs/guides" } },
        { label: "API reference", autogenerate: { directory: "docs/api" } },
        { label: "Changelog", link: "/docs/changelog" },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
