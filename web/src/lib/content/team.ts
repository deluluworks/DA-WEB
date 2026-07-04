import { leadership, team, type TeamMember } from '../../../content/team/team';

export type { TeamMember };

export function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getLeadership(): TeamMember[] {
  return leadership;
}

export function getTeam(): TeamMember[] {
  return team;
}

export function getAllMembers(): TeamMember[] {
  return [...leadership, ...team];
}

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return getAllMembers().find((m) => slugify(m.name) === slug);
}
