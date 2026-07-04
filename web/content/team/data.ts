export type TeamMember = {
  role: string;
  name: string;
  bio: string;
  tier: "leadership" | "team";
};

function raw(tier: TeamMember["tier"], rows: [string, string, string][]): TeamMember[] {
  return rows.map(([role, name, bio]) => ({ role, name, bio, tier }));
}

// Ported verbatim from the export's team/team.jsx roster arrays.
export const leadership: TeamMember[] = raw("leadership", [
  ["Co-Founder | Principal Designer", "Ekta Manchanda", "Ekta, a design evangelist, has shaped many brands with her creative vision in retail, hospitality, and B2B spaces."],
  ["Partner | Brand Strategist", "Mejo Kuriachan", "Mejo is the connective tissue across Design Asylum’s brand, flow, video and motion work—an engineer first, strategist and design manager next."],
  ["Lead Strategist", "Sijeesh VB", "Sijeesh is a creative strategist who blends UX, branding, and business to create impactful experiences."],
  ["Head of Motion Design", "Felix Hartley", "Felix leads motion at the studio, turning dense B2B stories into film and animation that actually hold attention."],
  ["Lead Web Developer", "Saurabh Chakradhari", "Saurabh builds the brands we design—translating identity into fast, considered, pixel-faithful websites."],
  ["Senior Brand Designer", "Tejus Yakhob", "Tejus shapes visual identities with a sharp eye for type, system, and the small details that make a brand feel inevitable."],
  ["Lead Designer | Illustrator", "Tanmaya Rao", "Tanmaya is a brand designer and illustrator whose logos and illustration give B2B brands a human, original voice."],
  ["Brand Strategist", "Sanjana", "Sanjana digs for the sharp, true positioning underneath the brief—then makes sure the work never loses it."],
  ["Lead Designer | Content Strategist", "Athira Krishnan", "Articulate with a clear thought process, she excels in content writing, driving design in B2B SaaS and B2C websites."],
  ["Chief of Staff | Project Manager", "Arpan Sen", "Arpan handles management at Design Asylum, ensuring that everything, well...flows smoothly."],
  ["Senior Motion Designer", "Akhilesh J", "Akhilesh animates the brand—Lottie, explainer film, and motion systems that make complex products click."],
  ["Web Developer", "Jerry Thomas", "Jerry turns design files into living, breathing websites—clean build, crisp interaction, no compromise."],
]);

export const team: TeamMember[] = raw("team", [
  ["Brand Designer", "Aditi A J", "Aditi crafts identity systems with a calm, deliberate hand and a soft spot for good grids."],
  ["Web Developer", "Ahamed Shabahir", "Shabahir builds responsive, resilient front-ends that keep the brand intact on every screen."],
  ["Content Strategist", "Akhila Suresh", "Akhila writes the words that carry the strategy—clear, confident, and never filler."],
  ["Motion Designer", "Akshay A D", "Akshay gives static brands a pulse, animating stories that land in seconds."],
  ["Brand Designer", "Goutham Shravan", "Goutham designs marks and systems with an eye for the bold, unexpected detail."],
  ["UI Designer", "Harishma D", "Harishma turns brand into interface—usable, beautiful, and quietly precise."],
  ["Web Developer", "Jiyash A K", "Jiyash codes the kind of websites that load fast and feel effortless."],
  ["Brand Strategist", "Mehak Dhruv", "Mehak finds the angle a market can’t ignore and builds the narrative around it."],
  ["Web Developer", "Mithesh Dhariwal", "Mithesh engineers the back-of-house so the front-of-house never stutters."],
  ["Copywriter", "Nanki Arora", "Nanki writes B2B that sounds like a human wrote it—because one did."],
  ["Brand Designer", "Neha Bhatnagar", "Neha shapes visual identities with warmth, rigour, and a love of typography."],
  ["Project Coordinator", "Prenitha Xavier", "Prenitha keeps timelines honest and teams in sync, brief to launch."],
  ["Illustrator", "Rajashri Brahma", "Rajashri draws the worlds that make a brand memorable and unmistakably its own."],
  ["Web Developer", "Siva S", "Siva builds interaction that feels considered down to the last transition."],
  ["Motion Designer", "Sreejith K", "Sreejith turns scripts into film—frame by frame, with patience and craft."],
  ["Brand Designer", "Swathi Mohan", "Swathi designs systems that scale, from logo to the last touchpoint."],
  ["Content Strategist", "Vaishnavi Gupta", "Vaishnavi maps the message before a single pixel moves."],
  ["UI Designer", "Varsha P", "Varsha designs clean, human interfaces that make complex products feel simple."],
  ["Web Developer", "Vignesh", "Vignesh ships the build—fast, faithful, and quietly bulletproof."],
  ["Brand Strategist", "Yash Muley", "Yash pressure-tests positioning until only the true, sharp version is left."],
  ["Brand Designer", "Yugankita Aich", "Yugankita brings a fine-art eye to brand systems and the details others skip."],
  ["Copywriter", "Zakia Ali", "Zakia writes with clarity and nerve—B2B that’s actually worth reading."],
]);
