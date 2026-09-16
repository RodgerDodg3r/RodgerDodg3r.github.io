# Personal Site

A personal homepage built with [Astro](https://astro.build), styled like a Windows XP-era "task
pane" website - but modern underneath: static, fast, responsive, and accessible. It deploys for
free on GitHub Pages.

The whole point of this project is that you maintain it **by creating and editing Markdown
files**, not by writing HTML. This README walks through everything you need, assuming little to
no prior Astro experience.

## Contents

1. [Install dependencies](#1-install-dependencies)
2. [Run the site locally](#2-run-the-site-locally)
3. [Build the site](#3-build-the-site)
4. [Add a new game](#4-add-a-new-game)
5. [Add a new software entry](#5-add-a-new-software-entry)
6. [Add a download](#6-add-a-download)
7. [Where screenshots go](#7-where-screenshots-go)
8. [Where downloadable files go](#8-where-downloadable-files-go)
9. [Change the site colors](#9-change-the-site-colors)
10. [Change the navigation](#10-change-the-navigation)
11. [Add 88x31 buttons](#11-add-88x31-buttons)
12. [Deploy to GitHub Pages](#12-deploy-to-github-pages)
13. [Update the site later](#13-update-the-site-later)
14. [Project structure reference](#14-project-structure-reference)

---

## 1. Install dependencies

You need [Node.js](https://nodejs.org) 18.20.8+ or 20.3.0+ (20 LTS is recommended). Check what
you have with:

```bash
node -v
```

Then, from the project folder:

```bash
npm install
```

## 2. Run the site locally

```bash
npm run dev
```

This starts a local dev server (usually at `http://localhost:4321`) that automatically reloads
when you edit files or Markdown content.

## 3. Build the site

```bash
npm run build
```

This generates the final static site into the `dist/` folder. You can preview exactly what will
be deployed with:

```bash
npm run preview
```

You normally won't need to run `build` yourself for deployment - GitHub Actions does it
automatically (see [section 12](#12-deploy-to-github-pages)). It's mainly useful for double
checking everything works before you push.

## 4. Add a new game

Create a new Markdown file in `src/content/games/`, for example:

```
src/content/games/my-new-game.md
```

with frontmatter like:

```md
---
title: "My New Game"
date: 2026-09-16
updated: 2026-09-20        # optional
summary: "A one or two sentence description shown in listings."
thumbnail: "/images/games/my-new-game.png"   # optional
screenshots:                                  # optional
  - "/images/games/my-new-game-1.png"
  - "/images/games/my-new-game-2.png"
status: "Released"          # Released / In Development / Prototype / On Hold / Cancelled / Archived / Planning / or anything you like
platforms:                   # optional
  - Windows
  - Linux
version: "1.0"                # optional
tags:                         # optional
  - horror
  - experimental
featured: true                 # optional - shows it on the homepage
downloadUrl: "https://github.com/you/your-game/releases"  # optional
githubUrl: "https://github.com/you/your-game"               # optional
websiteUrl: ""                                                # optional
---

## About the game

Write whatever you like here in normal Markdown - headings, lists, images, code blocks, links.
This becomes the body of the game's page.
```

Only `title`, `date`, and `summary` are required. Everything else is optional and the page
degrades gracefully if it's missing (no broken layout, no build errors).

This automatically creates the page **`/games/my-new-game/`** and adds it to the **`/games/`**
listing - you don't need to touch any other file. It also automatically appears under any
matching tag page (`/games/tag/<tag>/`) and status page (`/games/status/<status>/`).

> The URL slug comes from the filename (`my-new-game.md` -> `/games/my-new-game/`). If you want a
> different URL, add a `slug: "something-else"` field to the frontmatter.

## 5. Add a new software entry

Same idea, in `src/content/software/`:

```
src/content/software/my-tool.md
```

Supported fields: `title`, `date`, `summary` (required), plus optional `updated`, `thumbnail`,
`screenshots`, `status`, `tags`, `technologies`, `featured`, `githubUrl`, `websiteUrl`,
`downloadUrl`. This shows up automatically at **`/software/my-tool/`** and in **`/software/`**.

## 6. Add a download

In `src/content/downloads/`:

```
src/content/downloads/my-file.md
```

```md
---
title: "My Tool v1.0"
date: 2026-09-16
description: "What this file is and why someone would want it."
category: "Software"          # used to group the downloads table
version: "1.0"                  # optional
fileSize: "12 MB"                # optional
platforms:                        # optional
  - Windows
filename: "my-tool-v1.0.zip"       # optional, purely informational
downloadUrl: "https://github.com/you/my-tool/releases/download/v1.0/my-tool.zip"
mirrorUrl: ""                        # optional
checksum: ""                          # optional
checksumType: "SHA-256"                # optional, defaults to SHA-256
icon: "/images/site/my-tool-icon.png"    # optional
screenshot: ""                            # optional
tags: []                                   # optional
featured: false                             # optional
warning: ""                                  # optional - shown as a warning box, e.g. "beta build"
---

## Changelog

- **1.0** - initial release
```

This appears as a row in the **`/downloads/`** table (with columns for version, platforms, tags,
size and date), at its own page **`/downloads/my-file/`** with full details, and under
`/downloads/category/<category>/`.

`downloadUrl` can point anywhere - a GitHub Release asset, a file you've committed to
`public/downloads/`, or any external URL (see [section 8](#8-where-downloadable-files-go)).

## 7. Where screenshots go

Put images under `public/images/`:

- `public/images/games/` - game thumbnails & screenshots
- `public/images/software/` - software thumbnails & screenshots
- `public/images/site/` - general site imagery (icons, misc graphics)

Then reference them in frontmatter with a **root-relative path starting with `/`**, e.g.
`"/images/games/my-new-game.png"`. Do not add your GitHub Pages sub-path yourself - the site adds
that automatically at build time.

If you don't have an image yet, just omit the field - cards and pages show a plain placeholder
instead of breaking.

## 8. Where downloadable files go

You have two options:

1. **GitHub Releases (recommended for anything of real size)** - upload the file as a release
   asset on GitHub and point `downloadUrl` at that release asset's URL. Keeps your git repository
   small and fast.
2. **Committed directly to the repo** - drop the file into `public/downloads/` and reference it
   as `downloadUrl: "/downloads/your-file.zip"`. Fine for small files; GitHub has a soft 1GB repo
   size recommendation and a 100MB per-file hard limit, so use Releases for anything large.

Either way, always fill in `fileSize`, `version`, and ideally a `checksum` in the frontmatter so
visitors know exactly what they're getting before they click.

## 9. Change the site colors

Open `src/styles/global.css` and edit the CSS custom properties at the very top, inside `:root {
... }`:

```css
:root {
  --page-background: #0f2f68;
  --panel-background: #dfe9f6;
  --text: #23374f;
  --link: #245da8;
  --accent: #4d9b31;
  --xp-blue-1: #5a96e8; /* header + panel-title gradient */
  --xp-blue-2: #2f6fd0;
  --xp-blue-3: #1f55ac;
  /* ...and a few more, all documented inline */
}
```

Nearly every color in every component references one of these variables, so changing them here
re-themes the whole site. There's no need to hunt through individual component files. The
`--xp-blue-*`, `--task-bg-*`, `--panel-title-*` and `--tile*` variables control the glossy blue
gradients on the header, sidebar and panel title bars specifically.

## 10. Change the navigation

Open `src/config.ts` and edit the `nav` array:

```ts
nav: [
  { label: "Home", href: "/", icon: "icon-home" },
  { label: "About Me", href: "/about/", icon: "icon-person" },
  { label: "Software", href: "/software/", icon: "icon-disc" },
  { label: "Games", href: "/games/", icon: "icon-joystick" },
  { label: "Downloads", href: "/downloads/", icon: "icon-download" },
],
```

Add, remove, or reorder entries as you like. Each `icon` refers to an SVG `<symbol>` id defined in
`src/components/Icons.astro` - add a new symbol there if you want a different icon for a new nav
entry. `src/config.ts` is also where you edit the site name, tagline, description, author name,
social links, visitor counter number, and footer/copyright text - it's meant to be the one file
you need for basic branding changes.

## 11. Add 88x31 buttons

1. Drop your button image (88x31 gif/png/svg) into `public/badges/`.
2. Open `src/lib/badges.ts` and add an entry:

```ts
{
  label: "My Cool Button",
  href: "https://example.com",
  image: "/badges/my-button.png",
  external: true,
}
```

Leave out `image` if you just want a plain text badge box (same size, matching style) - handy as
a placeholder before you've made the graphic. Badges show up in the footer automatically.

## 12. Deploy to GitHub Pages

1. Push this repository to GitHub (see below if you're starting from scratch).
2. In your repository on GitHub, go to **Settings -> Pages**.
3. Under **Build and deployment -> Source**, choose **GitHub Actions**.
4. Push to (or merge into) the `main` branch. The included workflow at
   `.github/workflows/deploy.yml` will build the site and deploy it automatically. You can watch
   its progress under the **Actions** tab.
5. Once it finishes, your site is live at the URL shown on the Pages settings screen.

**You do not need to configure a base path or site URL by hand.** The workflow works out whether
your repository is a "project site" (`https://USERNAME.github.io/REPOSITORY/`) or a special
"user site" (`https://USERNAME.github.io/`, only if the repo itself is named
`USERNAME.github.io`) and sets the right values automatically at build time. You only need to
touch `astro.config.mjs` if you're setting up a **custom domain**:

1. Add a `CNAME` file to the `public/` folder containing your domain, e.g. `www.example.com`.
2. In `astro.config.mjs`, set the fallback `site` to your custom domain and `base` to `"/"` (or
   set the `ASTRO_SITE` / `ASTRO_BASE` environment variables in the workflow instead).
3. Configure the domain in **Settings -> Pages -> Custom domain** on GitHub.

If you're starting from scratch and haven't pushed to GitHub yet:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then follow steps 2-4 above.

## 13. Update the site later

Once it's deployed, updating the site is just:

```bash
git add .
git commit -m "Add my new game"
git push
```

GitHub Actions rebuilds and redeploys automatically - usually within a minute or two. No server
to manage, no database, nothing else to run.

## 14. Project structure reference

```
.
├── .github/workflows/deploy.yml   # GitHub Actions deployment workflow
├── public/                        # static files, copied as-is
│   ├── badges/                    # 88x31 button images
│   ├── downloads/                 # downloadable files (optional - can use GitHub Releases instead)
│   ├── images/{games,software,site}/
│   └── favicon.svg
├── src/
│   ├── components/                # reusable Astro components (Icons.astro holds the nav SVGs)
│   ├── content/                   # <-- YOU EDIT THIS. Markdown content collections.
│   │   ├── games/
│   │   ├── software/
│   │   ├── downloads/
│   │   └── pages/                 # singleton pages (About)
│   ├── content.config.ts          # collection schemas (frontmatter validation)
│   ├── config.ts                  # site name, nav, social links, footer text
│   ├── layouts/Layout.astro       # base HTML layout (header/sidebar/footer)
│   ├── lib/                       # small helper functions (URLs, dates, badges data)
│   ├── pages/                     # routes - mostly generated automatically from content/
│   └── styles/                    # global.css (theme variables) + layout.css
├── astro.config.mjs                # site/base config for GitHub Pages, sitemap integration
└── package.json
```

### A note on content vs. code

You should very rarely need to touch anything in `src/pages/`, `src/components/`, or
`src/layouts/` - those exist so that every Markdown file you add "just works". The files you'll
actually be editing day to day live in `src/content/` (your games/software/downloads),
`src/config.ts` (branding & nav), and `src/styles/global.css` (colors).

### Removing the example content

Everything under `src/content/*/example-*.md` is placeholder content meant to demonstrate the
system - delete those files whenever you're ready to replace them with your own. `src/content/pages/about.md`
also contains placeholder text you should replace with your real bio.
