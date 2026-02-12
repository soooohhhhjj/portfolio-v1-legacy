import type { JourneyItemContent } from "./types/journey.types";
import {
  GraduationCap,
  LockKeyholeOpen,
  Puzzle,
  Gavel,
  Drill,
  Telescope,
} from "lucide-react";

const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const journeyContent: JourneyItemContent[] = [
  {
    id: "node1",
    type: "parent",
    icon: LockKeyholeOpen,
  },
  {
    id: "node1-c1",
    type: "child",
    title: "Personal Information Website",
    details: "Project introducing HTML and basic CSS.",
    image: asset("Journey/node1/personal-info.png"),
    techTags: ["HTML", "CSS"],
    highlightTags: ["Basic Fundamentals"],
  },
  {
    id: "node1-c2",
    type: "child",
    title: "Christmas-Themed Forms",
    details: "Project exploring website theming.",
    image: asset("Journey/node1/christmas-forms.PNG"),
    techTags: ["HTML", "CSS", "JavaScript"],
    highlightTags: ["Themes"],
  },
  {
    id: "node1-c3",
    type: "child",
    title: "Our Interests Website",
    details: "Frameset project using CSS for animations.",
    image: asset("Journey/node1/interests-frameset.png"),
    techTags: ["HTML", "CSS", "JavaScript"],
    highlightTags: ["Animations"],
  },

  {
    id: "node2",
    type: "parent",
    icon: Puzzle,
  },
  {
    id: "node2-c1",
    type: "child",
    title: "Market Square",
    details: "Interactive e-commerce landing page project.",
    image: asset("Journey/node2/market-square.PNG"),
    techTags: ["HTML", "CSS", "JavaScript"],
    highlightTags: ["UI/UX"],
  },
  {
    id: "node2-c2",
    type: "child",
    title: "NCII Certificate",
    details: "Formal training in IT fundamentals.",
    image: asset("Journey/node2/nc2-certi.PNG"),
    highlightTags: ["Installation", "Configuration", "Basic Networking"],
  },

  {
    id: "node3",
    type: "parent",
    icon: Gavel,
  },
  {
    id: "node3-c1",
    type: "child",
    title: "Game Space",
    details: "Backend PHP/MySQL project but space themed.",
    image: asset("Journey/node3/game-space.PNG"),
    techTags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: "node3-c2",
    type: "child",
    title: "Class Funds",
    details: "Mock Banking app project but in a classroom setting.",
    image: asset("Journey/node3/class-funds2.PNG"),
    techTags: ["Java", "Firebase", "Android Studio"],
    highlightTags: ["Mobile App"],
  },

  {
    id: "node4",
    type: "parent",
    icon: Drill,
  },
  {
    id: "node4-c1",
    type: "child",
    title: "System Architecture Thesis",
    details:
      "An inventory management system designed to help the beneficiary reduce stock discrepancies.",
    image: asset("Journey/node4/sysarch.PNG"),
    techTags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: "node4-c2",
    type: "child",
    title: "Capstone Thesis",
    details:
      "A system for the CSS department to centralize freshmen screening data and reduce manual work.",
    image: asset("Journey/node4/capstone-thesis.png"),
    techTags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: "node4-c3",
    type: "internship",
    title: "IT Internship Experience",
    details:
      "IT intern at Transfer It, gaining hands-on experience in troubleshooting, support, and daily IT operations.",
    image: asset("Journey/node4/tit-logo.png"),
    highlightTags: [
      "Hardware Maintenance",
      "Troubleshooting",
      "OS Setup",
      "Remote Support",
      "System Administration",
      "Documentation",
    ],
  },

  {
    id: "node5",
    type: "parent",
    icon: GraduationCap,
  },
  {
    id: "node5-c1",
    type: "child",
    title: "My First Portfolio",
    details: "My first attempt at modern frameworks, building a portfolio with React.",
    image: asset("Journey/node5/portfolio.PNG"),
    techTags: ["React", "Tailwind", "TypeScript"],
  },
  {
    id: "node5-c2",
    type: "child",
    title: "Portfolio v2",
    details:
      "Improved version of my portfolio website, solidifying the space-themed design.",
    image: asset("Journey/node5/portfolio-v2.PNG"),
    techTags: ["React", "Tailwind", "TypeScript"],
  },

  {
    id: "node6",
    type: "parent",
    icon: Telescope,
  },
  {
    id: "node6-p1",
    type: "placeholder",
    title: "JFVal Website",
    details: "Website for our JFCM Valenzuela Branch.",
  },
  {
    id: "node6-p2",
    type: "placeholder",
    title: "Sohj's DnD Tools",
    details: "Tools for DnD character creation.",
  },
  {
    id: "node6-p3",
    type: "placeholder",
    title: "File Converter",
    details: "For personal use unlimited file converter.",
  },
  {
    id: "node6-p4",
    type: "placeholder",
    title: "Sohj's DC Wiki",
    details:
      "For personal use detailed and visual abundant DeceasedCraft Wiki.",
  },
  {
    id: "node6-p5",
    type: "placeholder",
    title: "File Tree System",
    details: "For personal use file system visualizer.",
  },
];
