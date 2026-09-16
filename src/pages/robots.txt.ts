import type { APIContext } from "astro";
import { siteConfig } from "../config";
import { withBase } from "../lib/url";

export function GET(context: APIContext) {
  const siteRoot = context.site ?? new URL(siteConfig.url);
  const sitemapUrl = new URL(withBase("/sitemap-index.xml"), siteRoot);

  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
