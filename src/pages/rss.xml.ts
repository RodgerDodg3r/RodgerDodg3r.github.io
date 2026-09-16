import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { siteConfig } from "../config";
import { entrySlug, isPublished, byDateDesc } from "../lib/content";
import { withBase } from "../lib/url";

export async function GET(context: APIContext) {
  const posts = (await getCollection("posts", isPublished)).sort(byDateDesc);

  const siteRoot = context.site ?? new URL(siteConfig.url);

  return rss({
    title: siteConfig.name,
    description: siteConfig.description,
    site: new URL(withBase("/"), siteRoot),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: withBase(`/posts/${entrySlug(post)}/`),
    })),
    customData: `<language>en-gb</language>`,
  });
}
