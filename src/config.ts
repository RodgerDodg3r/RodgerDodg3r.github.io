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
  tagline: "my place on the web",

  // Used in <meta> description tags where a page doesn't supply its own.
  description:
    "The personal homepage of Bart - game developer, tinkerer, and technical lead of MyrtanaMC. Games, software and downloads.",

  // Displayed on the About page and in footer credits. Replace with your
  // own name.
  author: "Bart",

  // Used to build absolute URLs for Open Graph / canonical tags. This
  // should match the `site` value that gets passed to Astro at build time
  // (see astro.config.mjs) - normally you don't need to edit this by hand,
  // the deploy workflow sets it for you.
  url: "https://rodgerdodg3r.github.io",

  // ---------------------------------------------------------------------
  // Social / contact links - shown in the footer.
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
    bestViewedWith: "Best viewed with your eyes and a modern browser.",
    siteVersion: "v1.0",
    // Purely decorative retro visitor counter (like the old hit-counter
    // GIFs). A static site can't actually count visits without a
    // third-party service, so this is just a number you update by hand -
    // or delete the counter from Footer.astro if you don't want one.
    visitorCount: "004281",
  },

  // ---------------------------------------------------------------------
  // Home page behaviour
  // ---------------------------------------------------------------------
  home: {
    recentDownloadsCount: 5,
  },

  // ---------------------------------------------------------------------
  // Main site navigation - shown in the sidebar.
  // "href" is relative to the site root; the base path (for GitHub Pages
  // project sites) is added automatically, so just write it as if the
  // site were hosted at "/". "icon" refers to a symbol id defined in
  // src/components/Icons.astro.
  // ---------------------------------------------------------------------
  nav: [
    { label: "Home", href: "/", icon: "icon-home" },
    { label: "About Me", href: "/about/", icon: "icon-person" },
    { label: "Software", href: "/software/", icon: "icon-disc" },
    { label: "Games", href: "/games/", icon: "icon-joystick" },
    { label: "Downloads", href: "/downloads/", icon: "icon-download" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
