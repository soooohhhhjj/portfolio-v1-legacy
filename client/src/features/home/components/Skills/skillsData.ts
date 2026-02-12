import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Globe,
  Telescope,
  Wrench,
} from "lucide-react";

export type SkillGroup = {
  title: string;
  description: string;
  tech: string[];
  Icon: LucideIcon;
};

export const SKILLS_SECTION_META = {
  title: "My Tech Stack",
  subtitle:
    "The technologies I've built my foundation on -- and the ones I'm still exploring.",
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Web Development",
    description: "Stacks I’m comfortable with and have used across my past projects.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Firebase"],
    Icon: Globe,
  },
  {
    title: "Currently Exploring",
    description: "Technologies I’m actively using in personal projects to improve my skills.",
    tech: ["React", "Tailwind", "TypeScript", "Next.js", "MongoDB"],
    Icon: Telescope,
  },
  {
    title: "Programming",
    description: "Techs I've worked with before... it's been a while though.",
    tech: ["Java", "Python", "C++"],
    Icon: Code2,
  },
  {
    title: "Tools",
    description: "The tools I mainly use and the ones I find most relevant.",
    tech: ["GitHub", "VS Code", "Android Studio"],
    Icon: Wrench,
  },
];
