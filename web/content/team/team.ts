/** Team roster — typed content, extracted verbatim from the export's
 * team/team.jsx (LEADERSHIP + TEAM arrays). Consumed by lib/content/team.ts;
 * rendered by the /team page port (pending unit — see SITE-PROGRESS.md). */

export type TeamMember = {
  role: string;
  name: string;
  bio: string;
};

export const leadership: TeamMember[] = [
  { role: 'Co-Founder | Principal Designer', name: 'Ekta Manchanda', bio: 'Ekta, a design evangelist, has shaped many brands with her creative vision in retail, hospitality, and B2B spaces.' },
  { role: 'Partner | Brand Strategist', name: 'Mejo Kuriachan', bio: 'Mejo is the connective tissue across Design Asylum’s brand, flow, video and motion work—an engineer first, strategist and design manager next.' },
  { role: 'Lead Strategist', name: 'Sijeesh VB', bio: 'Sijeesh is a creative strategist who blends UX, branding, and business to create impactful experiences.' },
  { role: 'Head of Motion Design', name: 'Felix Hartley', bio: 'Felix leads motion at the studio, turning dense B2B stories into film and animation that actually hold attention.' },
  { role: 'Lead Web Developer', name: 'Saurabh Chakradhari', bio: 'Saurabh builds the brands we design—translating identity into fast, considered, pixel-faithful websites.' },
  { role: 'Senior Brand Designer', name: 'Tejus Yakhob', bio: 'Tejus shapes visual identities with a sharp eye for type, system, and the small details that make a brand feel inevitable.' },
  { role: 'Lead Designer | Illustrator', name: 'Tanmaya Rao', bio: 'Tanmaya is a brand designer and illustrator whose logos and illustration give B2B brands a human, original voice.' },
  { role: 'Brand Strategist', name: 'Sanjana', bio: 'Sanjana digs for the sharp, true positioning underneath the brief—then makes sure the work never loses it.' },
  { role: 'Lead Designer | Content Strategist', name: 'Athira Krishnan', bio: 'Articulate with a clear thought process, she excels in content writing, driving design in B2B SaaS and B2C websites.' },
  { role: 'Chief of Staff | Project Manager', name: 'Arpan Sen', bio: 'Arpan handles management at Design Asylum, ensuring that everything, well...flows smoothly.' },
  { role: 'Senior Motion Designer', name: 'Akhilesh J', bio: 'Akhilesh animates the brand—Lottie, explainer film, and motion systems that make complex products click.' },
  { role: 'Web Developer', name: 'Jerry Thomas', bio: 'Jerry turns design files into living, breathing websites—clean build, crisp interaction, no compromise.' },
];

export const team: TeamMember[] = [
  { role: 'Brand Designer', name: 'Aditi A J', bio: 'Aditi crafts identity systems with a calm, deliberate hand and a soft spot for good grids.' },
  { role: 'Web Developer', name: 'Ahamed Shabahir', bio: 'Shabahir builds responsive, resilient front-ends that keep the brand intact on every screen.' },
  { role: 'Content Strategist', name: 'Akhila Suresh', bio: 'Akhila writes the words that carry the strategy—clear, confident, and never filler.' },
  { role: 'Motion Designer', name: 'Akshay A D', bio: 'Akshay gives static brands a pulse, animating stories that land in seconds.' },
  { role: 'Brand Designer', name: 'Goutham Shravan', bio: 'Goutham designs marks and systems with an eye for the bold, unexpected detail.' },
  { role: 'UI Designer', name: 'Harishma D', bio: 'Harishma turns brand into interface—usable, beautiful, and quietly precise.' },
  { role: 'Web Developer', name: 'Jiyash A K', bio: 'Jiyash codes the kind of websites that load fast and feel effortless.' },
  { role: 'Brand Strategist', name: 'Mehak Dhruv', bio: 'Mehak finds the angle a market can’t ignore and builds the narrative around it.' },
  { role: 'Web Developer', name: 'Mithesh Dhariwal', bio: 'Mithesh engineers the back-of-house so the front-of-house never stutters.' },
  { role: 'Copywriter', name: 'Nanki Arora', bio: 'Nanki writes B2B that sounds like a human wrote it—because one did.' },
  { role: 'Brand Designer', name: 'Neha Bhatnagar', bio: 'Neha shapes visual identities with warmth, rigour, and a love of typography.' },
  { role: 'Project Coordinator', name: 'Prenitha Xavier', bio: 'Prenitha keeps timelines honest and teams in sync, brief to launch.' },
  { role: 'Illustrator', name: 'Rajashri Brahma', bio: 'Rajashri draws the worlds that make a brand memorable and unmistakably its own.' },
  { role: 'Web Developer', name: 'Siva S', bio: 'Siva builds interaction that feels considered down to the last transition.' },
  { role: 'Motion Designer', name: 'Sreejith K', bio: 'Sreejith turns scripts into film—frame by frame, with patience and craft.' },
  { role: 'Brand Designer', name: 'Swathi Mohan', bio: 'Swathi designs systems that scale, from logo to the last touchpoint.' },
  { role: 'Content Strategist', name: 'Vaishnavi Gupta', bio: 'Vaishnavi maps the message before a single pixel moves.' },
  { role: 'UI Designer', name: 'Varsha P', bio: 'Varsha designs clean, human interfaces that make complex products feel simple.' },
  { role: 'Web Developer', name: 'Vignesh', bio: 'Vignesh ships the build—fast, faithful, and quietly bulletproof.' },
  { role: 'Brand Strategist', name: 'Yash Muley', bio: 'Yash pressure-tests positioning until only the true, sharp version is left.' },
  { role: 'Brand Designer', name: 'Yugankita Aich', bio: 'Yugankita brings a fine-art eye to brand systems and the details others skip.' },
  { role: 'Copywriter', name: 'Zakia Ali', bio: 'Zakia writes with clarity and nerve—B2B that’s actually worth reading.' },
];
