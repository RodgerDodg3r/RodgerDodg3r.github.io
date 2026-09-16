// ===========================================================================
// 88x31 BUTTONS
// ---------------------------------------------------------------------------
// Classic web button badges, shown in the sidebar and footer. To add one:
//
//   1. Drop an 88x31 image (gif/png) into public/badges/
//   2. Add an entry below pointing at it
//
// If you don't have an image yet, omit "image" and a plain text badge box
// will be rendered instead (same size, styled to match).
// ===========================================================================

export interface Badge {
  /** Accessible label / alt text / fallback text. */
  label: string;
  /** Where the badge links to. */
  href: string;
  /** Path under public/, e.g. "/badges/mybutton.png". Optional. */
  image?: string;
  /** Open in a new tab (defaults to true for external links). */
  external?: boolean;
}

export const badges: Badge[] = [
  {
    label: "Built with Astro",
    href: "https://astro.build",
    image: "/badges/astro-88x31.svg",
    external: true,
  },
  {
    label: "Hosted on GitHub Pages",
    href: "https://pages.github.com",
    image: "/badges/github-pages-88x31.svg",
    external: true,
  },
  {
    label: "Best viewed at any size",
    href: "#",
    image: "/badges/any-browser-88x31.svg",
    external: false,
  },
  {
    label: "Valid HTML5 (probably)",
    href: "#",
    external: false,
  },
];
