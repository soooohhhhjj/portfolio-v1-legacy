import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import {
  GraduationCap,
  LaptopMinimalCheck,
  Layers,
  BugOff,
} from "lucide-react";
import { useState, type ComponentType } from "react";

const easeSmooth: Easing = [0.12, 0.7, 0.63, 0.9];

// HOVER THEME - Edit these values to change all card hover effects
const HOVER_THEME = {
  gradient: "from-[#cfc232]/40 to-[#8a8011]/40",
  iconColor: "#ffffff",
  accentGlow: "0 0 20px rgba(251, 191, 36, 0.3)",
};

interface HeroCardsProps {
  shouldAnimate: boolean;
}

type HeroCardProps = {
  index: number;
  Icon: ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  hoveredIndex: number | null;
  setHoveredIndex: (value: number | null) => void;
};

function HeroCard({
  index,
  Icon,
  title,
  subtitle,
  hoveredIndex,
  setHoveredIndex,
}: HeroCardProps) {
  const isHovered = hoveredIndex === index;

  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="
        relative overflow-hidden
        rounded-[5px]
        p-4 sm:p-6
        w-full
        md:min-h-[100px]
        flex flex-col items-start gap-2 sm:gap-3 lg:gap-3
      "
      style={{
        boxShadow: isHovered
          ? `0 0 40px #ffffff26, ${HOVER_THEME.accentGlow}`
          : "0 0 30px #ffffff1a",
        backgroundColor: isHovered ? "#ffffff0d" : "transparent",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        className="absolute inset-0 rounded-[5px]"
        style={{
          border: "1px solid #ffffff1a",
          boxShadow: "inset 0 0 15px #ffffff26",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #ffffff1a 0%, transparent 50%, #ffffff0d 100%)",
          opacity: 0.7,
        }}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${HOVER_THEME.gradient} transition-opacity duration-500`}
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div
        className="absolute top-0 right-0 w-16 h-16 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, #ffffff15 0%, transparent 100%)",
          clipPath: "polygon(100% 0, 100% 100%, 0 0)",
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div className="relative z-10 flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2">
        <div className="relative">
          <div
            className="absolute inset-0 rounded-lg blur-xl transition-opacity duration-500"
            style={{
              backgroundColor: HOVER_THEME.iconColor,
              opacity: isHovered ? 0.2 : 0,
            }}
          />
          <div
            className="relative w-10 h-10 
            sm:w-12 sm:h-12 
            md:w-10 md:h-10 
            lg:w-12 lg:h-12 
            rounded-[7px] flex items-center justify-center transition-all duration-300"
            style={{
              backgroundColor: isHovered ? "#b9b84c3b" : "#ffffff08",
              border: isHovered ? "1px solid transparent" : "1px solid #ffffff0c",
            }}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bruno text-[12px] sm:text-[14px] md:sm:text-[13.6px] lg:text-[14px] 
          lg:mt-2 tracking-[1px] text-white hero-card-title">
            {title}
          </h3>

          <div
            className="h-[2px] bg-gradient-to-r from-white/40 to-transparent transition-all duration-500"
            style={{
              width: isHovered ? "100%" : "32px",
            }}
          />
        </div>
      </div>

      <p
        className="relative z-10 font-jura text-[12px] sm:text-[13px] md:text-[12.5px] lg:text-[13px] leading-relaxed transition-colors duration-300"
        style={{
          color: isHovered ? "#ffffffd9" : "#ffffffbf",
        }}
      >
        {subtitle}
      </p>

      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      />
    </div>
  );
}


export default function HeroCards({ shouldAnimate }: HeroCardsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: shouldAnimate ? 0 : "100vh" }}
      transition={{
        duration: 1.25,
        ease: easeSmooth,
        delay: 0.05,
      }}
      className="w-full responsiveness"
    >
      {/* SECTION LABEL */}
      <div className="mb-5">
        <p className="font-bruno 
        text-[13px] sm:text-[15px] md:text-[12px] lg:text-[13px]
        text-center md:text-start
        tracking-[1.3px] uppercase text-white hero-card-section-title">
          Highlights
        </p>
      </div>

      {/* CARDS */}
      <div className="flex flex-wrap gap-4 sm:gap-6">
        <motion.div
          className="w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          initial={{ y: "100vh" }}
          animate={{ y: shouldAnimate ? 0 : "100vh" }}
          transition={{ duration: 1.35, ease: easeSmooth, delay: 0.06 }}
        >
          <HeroCard
            index={0}
            Icon={GraduationCap}
            title="BSIT Graduate"
            subtitle="Bachelor of Science in Information Technology"
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        </motion.div>
        <motion.div
          className="w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          initial={{ y: "100vh" }}
          animate={{ y: shouldAnimate ? 0 : "100vh" }}
          transition={{ duration: 1.45, ease: easeSmooth, delay: 0.07 }}
        >
          <HeroCard
            index={1}
            Icon={LaptopMinimalCheck}
            title="IT Internship"
            subtitle="Technical support, system deployment & reporting"
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        </motion.div>
        <motion.div
          className="w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          initial={{ y: "100vh" }}
          animate={{ y: shouldAnimate ? 0 : "100vh" }}
          transition={{ duration: 1.55, ease: easeSmooth, delay: 0.08 }}
        >
          <HeroCard
            index={2}
            Icon={Layers}
            title="SysArch Thesis"
            subtitle="Lead Developer - Inventory Management System"
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        </motion.div>
        <motion.div
          className="w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          initial={{ y: "100vh" }}
          animate={{ y: shouldAnimate ? 0 : "100vh" }}
          transition={{ duration: 1.65, ease: easeSmooth, delay: 0.09 }}
        >
          <HeroCard
            index={3}
            Icon={BugOff}
            title="Capstone Thesis"
            subtitle="Planning, debugging & feature support"
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

