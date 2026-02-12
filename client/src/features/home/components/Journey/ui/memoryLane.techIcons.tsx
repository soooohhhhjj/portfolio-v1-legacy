import type { JSX } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
  faBootstrap,
  faNodeJs,
  faPhp,
  faJava,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
const ICON_SIZE = "text-[9px]";
const ICON_MARGIN_RIGHT = "mr-[2px]";

export const techIconMap: Record<string, JSX.Element> = {
  HTML: <FontAwesomeIcon icon={faHtml5} className={`text-orange-500 ${ICON_SIZE} ${ICON_MARGIN_RIGHT}`} />,
  CSS: <FontAwesomeIcon icon={faCss3Alt} className={`text-blue-500 ${ICON_SIZE} ${ICON_MARGIN_RIGHT}`} />,
  JavaScript: <FontAwesomeIcon icon={faJs} className={`text-yellow-400 ${ICON_SIZE} ${ICON_MARGIN_RIGHT}`} />,
  React: <FontAwesomeIcon icon={faReact} className={`text-cyan-400 ${ICON_SIZE} ${ICON_MARGIN_RIGHT}`} />,
  GitHub: <FontAwesomeIcon icon={faGithub} className={`text-gray-300 ${ICON_SIZE} ${ICON_MARGIN_RIGHT}`} />,
  Bootstrap: <FontAwesomeIcon icon={faBootstrap} className={`text-purple-400 ${ICON_SIZE} ${ICON_MARGIN_RIGHT}`} />,
  NodeJS: <FontAwesomeIcon icon={faNodeJs} className={`text-green-500 ${ICON_SIZE} ${ICON_MARGIN_RIGHT}`} />,
  PHP: <FontAwesomeIcon icon={faPhp} className={`text-indigo-400 ${ICON_SIZE} mr-[4px]`} />,
  Java: <FontAwesomeIcon icon={faJava} className={`text-red-500 ${ICON_SIZE} ${ICON_MARGIN_RIGHT}`} />,
  Android: <FontAwesomeIcon icon={faAndroid} className={`text-green-400 ${ICON_SIZE} ${ICON_MARGIN_RIGHT}`} />,

  "Android Studio": (
    <FontAwesomeIcon icon={faAndroid} className="text-[#3DDC84] mr-[3px]" />
  ),
  Firebase: (
    <img
      src="https://www.svgrepo.com/show/353735/firebase.svg"
      alt="Firebase"
      className="w-2 h-2 mr-[2px]"
    />
  ),
  MySQL: (
    <img
      src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
      alt="MySQL"
      className="w-2 h-2 mr-[4px]"
    />
  ),
  Tailwind: (
    <img
      src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
      alt="Tailwind CSS"
      className="w-2 h-2 mr-[3px]"
    />
  ),
  TypeScript: (
    <img
      src="https://logo.svgcdn.com/logos/typescript-icon.svg"
      alt="TypeScript"
      className="w-2 h-2 mr-[3px]"
    />
  ),

}

export default techIconMap


