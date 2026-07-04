import path from "node:path";
import { readCollection } from "./mdx";

export type PostFrontmatter = {
  title: string;
  summary: string;
  author: string;
  publishedAt: string;
  tags: string[];
};

const DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts() {
  return readCollection<PostFrontmatter>(DIR);
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((p) => p.slug === slug);
}
