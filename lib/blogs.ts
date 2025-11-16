import fs from "fs/promises";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content", "blogs");

export type BlogMeta = {
  slug: string;
  title: string;
  date?: string;
  excerpt?: string;
  image?: string;
};

export type Blog = BlogMeta & { content: string };

export async function getBlogSlugs(): Promise<string[]> {
  const files = await fs.readdir(BLOG_DIR);
  return files.filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, ""));
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const file = path.join(BLOG_DIR, `${slug}.json`);
  try {
    const raw = await fs.readFile(file, "utf-8");
    const parsed = JSON.parse(raw) as Blog;
    return parsed;
  } catch (err) {
    return null;
  }
}

export async function getAllBlogsMeta(): Promise<BlogMeta[]> {
  const slugs = await getBlogSlugs();
  const metas = await Promise.all(
    slugs.map(async (s) => {
      const b = await getBlogBySlug(s);
      return b ? { slug: b.slug, title: b.title, date: b.date, excerpt: b.excerpt, image: b.image } : null;
    })
  );
  return metas.filter(Boolean) as BlogMeta[];
}
