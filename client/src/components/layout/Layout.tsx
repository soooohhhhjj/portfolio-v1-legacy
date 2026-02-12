import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Starfield from "@/features/home/components/Starfield";

type NavbarState = {
  mode: "default" | "home";
  shouldAnimate: boolean;
};

type StarMode = "normal" | "horizontal" | "vertical" | "paused" | "cinematic" | "forward";

export default function Layout() {
  const location = useLocation();
  const [starMode, setStarMode] = useState<StarMode>("normal");
  const [navbarState, setNavbarState] = useState<NavbarState>(() => {
    const isHome = location.pathname === "/";
    return {
      mode: isHome ? "home" : "default",
      shouldAnimate: !isHome,
    };
  });

  useEffect(() => {
    const isHome = location.pathname === "/";
    if (isHome) {
      setNavbarState((prev) => ({
        mode: "home",
        shouldAnimate: prev.mode === "home" ? prev.shouldAnimate : false,
      }));
    } else {
      setNavbarState({ mode: "default", shouldAnimate: true });
    }
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-transparent text-white">
      <div className="fixed inset-0 -z-10">
        <Starfield mode={starMode} />
      </div>
      <Navbar mode={navbarState.mode} shouldAnimate={navbarState.shouldAnimate} />
      <main>
        <Outlet context={{ setNavbarState, setStarMode }} />
      </main>
      <Footer />
    </div>
  );
}
