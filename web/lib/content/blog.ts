import path from "node:path";
import { readCollection } from "./mdx";

export type PostFrontmatter = {
  title: string;
  summary: string;
  author: string;
  publishedAt: string;
  tags: string[];
  /** Optional metadata ported from the export's article chrome. */
  lastUpdated?: string;
  reviewer?: string;
  heroCaption?: string;
};

const DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts() {
  return readCollection<PostFrontmatter>(DIR).sort((a, b) =>
    (b.frontmatter.publishedAt ?? "").localeCompare(a.frontmatter.publishedAt ?? ""),
  );
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((p) => p.slug === slug);
}
