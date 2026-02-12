import type { LucideIcon } from "lucide-react";
import 
{ GraduationCap, 
  LockKeyholeOpen,
  Puzzle,
  Gavel,
  Drill,
  Telescope
} from "lucide-react";

export type Anchor = "top" | "bottom" | "left" | "right";

export interface MemoryItem {
  id: string;
  type: "parent" | "child" | "placeholder" | "internship";

  x: number;
  y: number;
  width: number;
  height: number;

  // parent
  icon?: LucideIcon;

  // child
  title?: string;
  details?: string;
  image?: string;

  techTags?: string[];
  highlightTags?: string[];
}

export const items: MemoryItem[] = [
  // node1
  {
    id: "node1",
    type: "parent",
    x: 436,
    y: 80,
    width: 56,
    height: 56,
    icon: LockKeyholeOpen,
  },
  {
    id: "node1-c1",
    type: "child",
    x: 50,
    y: 230,
    width: 340,
    height: 294,
    title: "Personal Information Website",
    details: "Coursework project introducing HTML and basic CSS.",
    image: "/Journey/node1/personal-info.png",
    techTags: ["HTML", "CSS"],
    highlightTags: ["Basic Fundamentals"],
  },
  {
    id: "node1-c2",
    type: "child",
    x: 560,
    y: 280,
    width: 340,
    height: 294,
    title: "Christmas-Themed Forms",
    details: "Project exploring website theming.",
    image: "/Journey/node1/christmas-forms.PNG",
    techTags: ["HTML", "CSS", "JavaScript"],
    highlightTags: ["Themes"],
  },
  {
    id: "node1-c3",
    type: "child",
    x: 20,
    y: 580,
    width: 340,
    height: 294,
    title: "Our Interests Website",
    details: "Frameset project using CSS for animations.",
    image: "/Journey/node1/interests-frameset.png",
    techTags: ["HTML", "CSS", "JavaScript"],
    highlightTags: ["Animations"],
  },

  // node2
  {
    id: "node2",
    type: "parent",
    x: 436,
    y: 1100,
    width: 56,
    height: 56,
    icon: Puzzle,
  },
  {
    id: "node2-c1",
    type: "child",
    x: 530,
    y: 1260,
    width: 340,
    height: 294,
    title: "Market Square",
    details: "Interactive e-commerce landing page project.",
    image: "/Journey/node2/market-square.PNG",
    techTags: ["HTML", "CSS", "JavaScript"],
    highlightTags: ["UI/UX"],
  },
  {
    id: "node2-c2",
    type: "child",
    x: 60,
    y: 1320,
    width: 340,
    height: 280,
    title: "NCII Certificate",
    details: "Formal training in IT fundamentals.",
    image: "/Journey/node2/nc2-certi.PNG",
    highlightTags: ["Installation", "Configuration", "Basic Networking"],
  },

  // node3
  {
    id: "node3",
    type: "parent",
    x: 436,
    y: 1850,
    width: 56,
    height: 56,
    icon: Gavel,
  },
  {
    id: "node3-c1",
    type: "child",
    x: 40,
    y: 2030,
    width: 364,
    height: 300,
    title: "Game Space",
    details: "Backend PHP/MySQL project but space themed.",
    image: "/Journey/node3/game-space.PNG",
    techTags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: "node3-c2",
    type: "child",
    x: 550,
    y: 2100,
    width: 359,
    height: 300,
    title: "Class Funds",
    details: "Mock Banking app project but in a classroom setting.",
    image: "/Journey/node3/class-funds2.PNG",
    techTags: ["Java", "Firebase", "Android Studio"],
    highlightTags: ["Mobile App"],
  },

  // node4
  {
    id: "node4",
    type: "parent",
    x: 436,
    y: 2650,
    width: 56,
    height: 56,
    icon: Drill,
  },
  {
    id: "node4-c1",
    type: "child",
    x: 540,
    y: 2850,
    width: 364,
    height: 315,
    title: "System Architecture Thesis",
    details: "An inventory management system designed to help the beneficiary reduce stock discrepancies.",
    image: "/Journey/node4/sysarch.PNG",
    techTags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: "node4-c2",
    type: "child",
    x: 55,
    y: 2920,
    width: 364,
    height: 315,
    title: "Capstone Thesis",
    details: "A system for the CSS department to centralize freshmen screening data and reduce manual work.",
    image: "/Journey/node4/capstone-thesis.png",
    techTags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: "node4-c3",
    type: "internship",
    x: 510,
    y: 3260,
    width: 364,
    height: 315,
    title: "IT Internship Experience",
    details: "IT intern at Transfer It, gaining hands-on experience in troubleshooting, support, and daily IT operations.",
    image: "/Journey/node4/tit-logo.png",
    highlightTags: ["Hardware Maintenance", "Troubleshooting", "OS Setup", "Remote Support", "System Administration", "Documentation"],
  },

  // node5
  {
    id: "node5",
    type: "parent",
    x: 436,
    y: 3800,
    width: 56,
    height: 56,
    icon: GraduationCap,
  },
  {
    id: "node5-c1",
    type: "child",
    x: 30,
    y: 3980,
    width: 340,
    height: 308,
    title: "My First Portfolio",
    details: "My first attempt at modern frameworks, building a portfolio with React.",
    image: "/Journey/node5/portfolio.PNG",
    techTags: ["React", "Tailwind", "TypeScript"],
  },
  {
    id: "node5-c2",
    type: "child",
    x: 570,
    y: 4100,
    width: 340,
    height: 308,
    title: "Portfolio v2",
    details: "Improved version of my portfolio website, solidifying the space-themed design.",
    image: "/Journey/node5/portfolio-v2.PNG",
    techTags: ["React", "Tailwind", "TypeScript"],
  },

  //node6
  {
    id: "node6",
    type: "parent",
    x: 436,
    y: 4550,
    width: 56,
    height: 56,
    icon: Telescope,
  },
  {
    id: "node6-p1",
    type: "placeholder",
    x: 130,
    y: 4720,
    width: 250,
    height: 250,
    title: "JFVal Website",
    details: "Website for our JFCM Valenzuela Branch.",
  },
  {
    id: "node6-p2",
    type: "placeholder",
    x: 560,
    y: 4780,
    width: 250,
    height: 250,
    title: "Sohj's DnD Tools",
    details: "Tools for DnD character creation.",
  },
  {
    id: "node6-p3",
    type: "placeholder",
    x: 30,
    y: 5040,
    width: 250,
    height: 250,
    title: "File Converter",
    details: "For personal use unlimited file converter.",
  },
  {
    id: "node6-p4",
    type: "placeholder",
    x: 640,
    y: 5100,
    width: 250,
    height: 250,
    title: "Sohj's DC Wiki",
    details: "For personal use detailed and visual abundant DeceasedCraft Wiki.",
  },
  {
    id: "node6-p5",
    type: "placeholder",
    x: 320,
    y: 5240,
    width: 250,
    height: 250,
    title: "File Tree System",
    details: "For personal use file system visualizer.",
  },


];
