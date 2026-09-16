import type { CollectionEntry } from "astro:content";

/**
 * Content collection entries are keyed by their filename (minus extension)
 * by default - e.g. src/content/games/my-game.md -> id "my-game". This
 * project does not require a "slug" frontmatter field, but if you do add
 * one it will be used instead, so you can decouple the filename from the
 * URL if you ever need to.
 */
export function entrySlug(entry: { id: string; data: { slug?: string } }): string {
  return entry.data.slug ?? entry.id;
}

export function isPublished(entry: { data: { draft?: boolean; date?: Date } }): boolean {
  if (entry.data.draft) return false;
  return true;
}

export function byDateDesc<T extends { data: { date: Date } }>(a: T, b: T): number {
  return b.data.date.valueOf() - a.data.date.valueOf();
}

export type GameEntry = CollectionEntry<"games">;
export type ProjectEntry = CollectionEntry<"projects">;
export type DownloadEntry = CollectionEntry<"downloads">;
export type PostEntry = CollectionEntry<"posts">;
export type PageEntry = CollectionEntry<"pages">;
export type LinkEntry = CollectionEntry<"links">;
