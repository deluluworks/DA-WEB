import path from "node:path";
import { readCollection } from "./mdx";

export type StudyFrontmatter = {
  title: string;
  client: string;
  summary: string;
  services: string[];
  publishedAt: string;
};

const DIR = path.join(process.cwd(), "content", "studies");

export function getAllStudies() {
  return readCollection<StudyFrontmatter>(DIR);
}

export function getStudyBySlug(slug: string) {
  return getAllStudies().find((s) => s.slug === slug);
}
