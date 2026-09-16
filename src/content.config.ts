import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ---------------------------------------------------------------------------
// Shared bits
// ---------------------------------------------------------------------------

// A "status" tag used across games/software/downloads. Kept loose on purpose
// so you can invent your own values in frontmatter - these are just the
// ones that get special styling in StatusBadge.astro.
const statusEnum = z
  .enum([
    "Released",
    "In Development",
    "Prototype",
    "On Hold",
    "Cancelled",
    "Archived",
    "Planning",
  ])
  .or(z.string());

// ---------------------------------------------------------------------------
// Games
// ---------------------------------------------------------------------------

const games = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/games" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    summary: z.string(),
    thumbnail: z.string().optional(),
    screenshots: z.array(z.string()).optional().default([]),
    status: statusEnum.optional().default("In Development"),
    platforms: z.array(z.string()).optional().default([]),
    version: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    featured: z.boolean().optional().default(false),
    downloadUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    websiteUrl: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

// ---------------------------------------------------------------------------
// Software (tools, apps, websites, experiments)
// ---------------------------------------------------------------------------

const software = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/software" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    summary: z.string(),
    thumbnail: z.string().optional(),
    screenshots: z.array(z.string()).optional().default([]),
    status: statusEnum.optional().default("In Development"),
    tags: z.array(z.string()).optional().default([]),
    technologies: z.array(z.string()).optional().default([]),
    featured: z.boolean().optional().default(false),
    githubUrl: z.string().optional(),
    websiteUrl: z.string().optional(),
    downloadUrl: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

// ---------------------------------------------------------------------------
// Downloads
// ---------------------------------------------------------------------------

const downloads = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/downloads" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    description: z.string(),
    category: z.string().optional().default("Software"),
    version: z.string().optional(),
    fileSize: z.string().optional(),
    platforms: z.array(z.string()).optional().default([]),
    filename: z.string().optional(),
    downloadUrl: z.string().optional(),
    mirrorUrl: z.string().optional(),
    checksum: z.string().optional(),
    checksumType: z.string().optional().default("SHA-256"),
    icon: z.string().optional(),
    screenshot: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    featured: z.boolean().optional().default(false),
    warning: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

// ---------------------------------------------------------------------------
// Standalone pages (About, etc.) - singleton editable Markdown pages
// ---------------------------------------------------------------------------

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { games, software, downloads, pages };
