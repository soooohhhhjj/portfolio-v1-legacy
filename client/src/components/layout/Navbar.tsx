import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./navbar.css";

type NavbarProps = {
  mode?: "default" | "home";
  shouldAnimate?: boolean;
};

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About me", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar({
  mode = "default",
  shouldAnimate = true,
}: NavbarProps) {
  const shouldRender = mode !== "home" || shouldAnimate;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [runFlicker, setRunFlicker] = useState(false);

  useEffect(() => {
    if (mode !== "home" || !shouldAnimate) {
      setRunFlicker(false);
      return;
    }
    const timer = setTimeout(() => setRunFlicker(true), 1600);
    return () => clearTimeout(timer);
  }, [mode, shouldAnimate]);

  const motionProps = useMemo(() => {
    if (mode !== "home") {
      return {
        initial: { y: 0, opacity: 1 },
        animate: { y: 0, opacity: 1 },
      };
    }

    return {
      initial: { y: "100vh" },
      animate: { y: shouldAnimate ? 0 : "100vh" },
    };
  }, [mode, shouldAnimate]);

  if (!shouldRender) {
    return null;
  }

  return (
    <header>
      <div className="responsiveness">
        <motion.nav
          initial={motionProps.initial}
          animate={motionProps.animate}
          transition={{ duration: 0.6, ease: [0.12, 0.7, 0.63, 0.9] }}
          className="w-full flex justify-between items-center 
          lg:items-end 
          mt-[30px] md:mt-[32px] lg:mt-[30px] 
          relative z-0"
        >
          <h1 className="web-name font-bruno text-[18px] sm:text-[20px] md:text-[18px] lg:text-[20px] font-[500] tracking-[2px] text-white icon-role-text">
            {"sohj.abe".split("").map((char, i) => (
              <span
                key={i}
                className={`char-${i} ${runFlicker ? "flicker-once" : ""}`}
              >
                {char}
              </span>
            ))}
          </h1>

          <div className="nav-links font-jura font-medium hidden lg:flex items-center gap-6 text-white/80">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-white" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            className={`hamburger lg:hidden ${isNavOpen ? "is-open" : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={isNavOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsNavOpen((open) => !open)}
          >
            <span className="hamburger-line line-1" />
            <span className="hamburger-line line-2" />
            <span className="hamburger-line line-3" />
          </button>
        </motion.nav>

        <div
          id="mobile-nav"
          className={`nav-links nav-mobile font-jura font-medium lg:hidden flex flex-col ${
            isNavOpen ? "nav-open" : "nav-closed"
          }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="nav-link"
              onClick={() => setIsNavOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
