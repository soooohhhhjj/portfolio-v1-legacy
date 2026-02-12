import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

export const FOOTER_META = {
  name: "sohj.abe",
  role: "Full-Stack Developer",
  tagline: "Building pixel-perfect interactive websites.",
};

export const FOOTER_LINKS = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export type FooterSocial = {
  label: string;
  href: string;
  Icon: LucideIcon;
};

export const FOOTER_SOCIALS: FooterSocial[] = [
  { label: "GitHub", href: "https://github.com/yourusername", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", Icon: Linkedin },
  { label: "Email", href: "mailto:hello@yourdomain.com", Icon: Mail },
];
