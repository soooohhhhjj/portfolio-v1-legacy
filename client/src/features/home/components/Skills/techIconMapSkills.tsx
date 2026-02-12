import type { JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
  faBootstrap,
  faPhp,
  faJava,
  faAndroid,
  faPython,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

import TechImg from "./TechImg";

const ICON_SIZE = "text-[22px]";
const SPACING = "mr-2";

export const techIconMapSkills: Record<string, JSX.Element> = {
  HTML: <FontAwesomeIcon icon={faHtml5} className={`${ICON_SIZE} translate-x-[-6px] -mr-[3px]`} />,
  CSS: <FontAwesomeIcon icon={faCss3Alt} className={`${ICON_SIZE} translate-x-[-6px] -mr-[3px]`} />,
  JavaScript: <FontAwesomeIcon icon={faJs} className={`text-[20px] translate-x-[-2px] mr-[2px]`} />,
  React: <FontAwesomeIcon icon={faReact} className={`${ICON_SIZE} translate-x-[-3px] mr-[2px]`} />,
  GitHub: <FontAwesomeIcon icon={faGithub} className={`${ICON_SIZE} translate-x-[-2px] mr-[4px]`} />,
  Git: <FontAwesomeIcon icon={faGitAlt} className={`${ICON_SIZE} ${SPACING}`} />,
  Bootstrap: <FontAwesomeIcon icon={faBootstrap} className={`${ICON_SIZE} ${SPACING}`} />,
  PHP: <FontAwesomeIcon icon={faPhp} className={`${ICON_SIZE} ${SPACING}`} />,
  Java: <FontAwesomeIcon icon={faJava} className={`text-[23px] translate-x-[-5px] mr-[-1px]`} />,
  Python: <FontAwesomeIcon icon={faPython} className={`${ICON_SIZE} translate-x-[-3px] mr-[2px]`} />,
  Android: <FontAwesomeIcon icon={faAndroid} className={`${ICON_SIZE} ${SPACING}`} />,
  "Android Studio": <FontAwesomeIcon icon={faAndroid} className={`${ICON_SIZE} ${SPACING}`} />,

  Firebase: (
    <TechImg
      src="https://www.svgrepo.com/show/353735/firebase.svg"
      alt="Firebase"
      className={`grayscale translate-x-[1px] ${SPACING}`}
    />
  ),
  MySQL: (
    <TechImg
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      alt="MySQL"
      className={`grayscale ${SPACING}`}
    />
  ),

  Tailwind: (
    <TechImg
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
      alt="Tailwind CSS"
      className={`grayscale ${SPACING}`}
    />
  ),
  TypeScript: (
    <TechImg
      src="https://www.svgrepo.com/show/354478/typescript-icon.svg"
      alt="TypeScript"
      className={`grayscale ${SPACING} w-[20px] h-[20px]`}
    />
  ),
  "Next.js": (
    <TechImg
      src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
      alt="Next.js"
      className={`grayscale invert ${SPACING} w-[20px] h-[20px]`}
    />
  ),
  C: (
    <TechImg
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
      alt="C"
      className={`grayscale ${SPACING}`}
    />
  ),
  "C++": (
    <TechImg
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
      alt="C++"
      className={`grayscale ${SPACING}`}
    />
  ),
  "VS Code": (
    <TechImg
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
      alt="VS Code"
      className={`grayscale ${SPACING}`}
    />
  ),
  "Google Workspace": (
    <TechImg
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="Google Workspace"
      className={`grayscale ${SPACING} w-[20px] h-[20px]`}
    />
  ),
  MongoDB: (
    <TechImg
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      alt="MongoDB"
      className={`grayscale translate-x-[-5px]`}
    />
  ),
};
