import path from "node:path";
import { readCollection } from "./mdx";

export type StudyFrontmatter = {
  title: string;
  client: string;
  summary: string;
  services: string[];
  /** Optional — the export's case-study sources carry no publish dates; set
   *  a real project date here when known. Studies with a date sort first. */
  publishedAt?: string;
  /** Optional structured metadata ported from the source case studies, so the
   *  page ports can render the client sidebar without re-deriving it. */
  industry?: string;
  headquarters?: string;
  funding?: string;
  investors?: string[];
  targetAudience?: string;
  /** Slug of a longer companion case study / hub, if one exists. */
  related?: string;
};

const DIR = path.join(process.cwd(), "content", "studies");

export function getAllStudies() {
  return getStudiesUnsorted().sort(byPublishedAtDesc);
}

function getStudiesUnsorted() {
  return readCollection<StudyFrontmatter>(DIR);
}

export function getStudyBySlug(slug: string) {
  return getStudiesUnsorted().find((s) => s.slug === slug);
}

function byPublishedAtDesc(
  a: { frontmatter: StudyFrontmatter },
  b: { frontmatter: StudyFrontmatter },
) {
  const da = a.frontmatter.publishedAt ?? "";
  const db = b.frontmatter.publishedAt ?? "";
  return db.localeCompare(da);
}
