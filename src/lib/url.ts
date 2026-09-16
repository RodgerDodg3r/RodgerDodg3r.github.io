// ===========================================================================
// URL helpers
// ---------------------------------------------------------------------------
// GitHub Pages "project sites" are served from a sub-path
// (https://USERNAME.github.io/REPOSITORY/), so every internal link and
// public/ asset reference needs that sub-path prepended. Astro exposes the
// configured `base` value at build time as import.meta.env.BASE_URL - use
// withBase() everywhere instead of hardcoding a leading "/".
// ===========================================================================

/**
 * Prefixes a root-relative path with the site's configured base path.
 *
 * withBase("/games/")       -> "/games/"                (user site, base = "/")
 * withBase("/games/")       -> "/my-repo/games/"         (project site)
 * withBase("images/x.png")  -> "/my-repo/images/x.png"
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${normalizedBase}${normalizedPath}`;
}

/** Formats a Date as e.g. "16 Sep 2026". */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** Formats a Date as a machine-readable ISO date string (for <time datetime>). */
export function isoDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

/** Converts arbitrary text (e.g. a status) into a lowercase, hyphenated token for data-attributes. */
export function slugifyToken(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
