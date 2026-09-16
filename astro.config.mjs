// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// ---------------------------------------------------------------------------
// GitHub Pages base path handling
// ---------------------------------------------------------------------------
// GitHub Pages serves a "project site" (most repos) at:
//     https://USERNAME.github.io/REPOSITORY/
// but a special "user/organization site" repo named USERNAME.github.io at:
//     https://USERNAME.github.io/
//
// Astro needs to know this ahead of time so every internal link, stylesheet
// and image path is generated correctly. Rather than hardcoding it here,
// the values below are read from environment variables that the GitHub
// Actions workflow (.github/workflows/deploy.yml) sets automatically based
// on your repository name - you should not normally need to edit this file.
//
// For local development (`npm run dev` / `npm run build` on your own
// machine) they fall back to the defaults below. If you deploy to a custom
// domain, set ASTRO_SITE to that domain and ASTRO_BASE to "/".
// ---------------------------------------------------------------------------

const site = process.env.ASTRO_SITE ?? "https://rodgerdodg3r.github.io";
const base = process.env.ASTRO_BASE ?? "/";

export default defineConfig({
  site,
  base,
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      // 404 page should never appear in the sitemap
      filter: (page) => !page.endsWith("/404/"),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
});
