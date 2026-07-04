import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

const STUDIES_DIR = join(process.cwd(), 'content', 'studies');

export type StudyFrontmatter = {
  client: string;
  title: string;
  summary: string;
  canonical: boolean;
  slug: string;
};

export type Study = StudyFrontmatter & { body: string };

export function getAllStudies(): Study[] {
  return readdirSync(STUDIES_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const raw = readFileSync(join(STUDIES_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      return { ...(data as StudyFrontmatter), body: content.trim() };
    });
}

export function getStudyBySlug(slug: string): Study | undefined {
  return getAllStudies().find((s) => s.slug === slug);
}
