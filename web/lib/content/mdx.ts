import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/** Generic MDX-with-frontmatter collection reader shared by studies + blog. */
export function readCollection<T extends Record<string, unknown>>(
  dir: string,
): { slug: string; frontmatter: T; content: string }[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return { slug, frontmatter: data as T, content };
    });
}
