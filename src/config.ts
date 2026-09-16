// ===========================================================================
// SITE CONFIGURATION
// ---------------------------------------------------------------------------
// Edit this file to change basic site information. You should not need to
// dig through components to rebrand the site - almost everything reads
// its text from here.
// ===========================================================================

export const siteConfig = {
  // Shown in the header, footer, and browser tab.
  name: "Bart's Corner",

  // Short tagline shown under the site name in the header.
  tagline: "personal homepage & devlog",

  // Used in <meta> description tags where a page doesn't supply its own.
  description:
    "The personal homepage of Bart - game developer, tinkerer, and technical lead of MyrtanaMC. Devlogs, downloads, projects and software.",

  // Displayed on the About page and in footer credits. Replace with your
  // own name.
  author: "Bart",

  // Used to build absolute URLs for RSS / Open Graph / canonical tags.
  // This should match the `site` value that gets passed to Astro at build
  // time (see astro.config.mjs) - normally you don't need to edit this by
  // hand, the deploy workflow sets it for you.
  url: "https://example.github.io",

  // ---------------------------------------------------------------------
  // Social / contact links - shown in the sidebar and footer.
  // Leave a value as an empty string ("") to hide that link automatically.
  // ---------------------------------------------------------------------
  links: {
    github: "https://github.com/RodgerDodg3r",
    youtube: "https://www.youtube.com/@RogerDodg3r",
    email: "", // e.g. "hello@example.com" - leave blank to hide
    discord: "",
    twitter: "",
    mastodon: "",
  },

  // ---------------------------------------------------------------------
  // Footer
  // ---------------------------------------------------------------------
  footer: {
    copyrightName: "Bart",
    // "startYear" lets the footer show "2022-2026" automatically once
    // the current year has moved on.
    startYear: 2022,
    bestViewedWith:
      "Best viewed with your eyes, a modern browser, and JavaScript optional.",
    siteVersion: "v1.0",
  },

  // ---------------------------------------------------------------------
  // Home page behaviour
  // ---------------------------------------------------------------------
  home: {
    recentPostsCount: 5,
    recentDownloadsCount: 3,
  },

  // ---------------------------------------------------------------------
  // Main site navigation - shown in the sidebar.
  // "href" is relative to the site root; the base path (for GitHub Pages
  // project sites) is added automatically, so just write it as if the
  // site were hosted at "/".
  // ---------------------------------------------------------------------
  nav: [
    { label: "Home", href: "/" },
    { label: "News / Posts", href: "/posts/" },
    { label: "Games", href: "/games/" },
    { label: "Projects", href: "/projects/" },
    { label: "Downloads", href: "/downloads/" },
    { label: "About", href: "/about/" },
    { label: "Links", href: "/links/" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
