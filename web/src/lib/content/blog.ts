import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

const BLOG_DIR = join(process.cwd(), 'content', 'blog');

export type PostFrontmatter = {
  title: string;
  summary: string;
  client: string;
  slug: string;
  publishedAt: string;
};

export type Post = PostFrontmatter & { body: string };

export function getAllPosts(): Post[] {
  return readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const raw = readFileSync(join(BLOG_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      return { ...(data as PostFrontmatter), body: content.trim() };
    })
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
