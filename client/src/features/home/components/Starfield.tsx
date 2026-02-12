import { useEffect, useRef } from "react";
import { scrollVelocity } from "@/utils/scrollState";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface StarfieldProps {
  mode?: "normal" | "horizontal" | "vertical" | "paused" | "cinematic" | "forward";
}

// Tweak star counts per device breakpoint (in px)
const STAR_COUNTS = {
  mobile: [45, 15, 10],
  sm: [60, 20, 15],
  md: [90, 30, 22],
  lg: [120, 50, 25],
  xl: [120, 50, 25],
};

const getStarCountsForWidth = (width: number) => {
  if (width >= 1280) return STAR_COUNTS.xl;
  if (width >= 1024) return STAR_COUNTS.lg;
  if (width >= 768) return STAR_COUNTS.md;
  if (width >= 640) return STAR_COUNTS.sm;
  return STAR_COUNTS.mobile;
};

function generateStars(
  count: number,
  width: number,
  height: number,
  sizeRange: [number, number],
  speedRange: [number, number]
): Star[] {
  const stars: Star[] = [];

  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
      speed: Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0],
      opacity: Math.random() * 0.5 + 0.5,
      twinkleSpeed: Math.random() * 0.015 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    });
  }

  return stars;
}

export default function Starfield({ mode = "normal" }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modeRef = useRef(mode);
  const layersRef = useRef<{ stars: Star[]; speed: number }[]>([]);
  const timeRef = useRef(0);
  const scrollInfluenceRef = useRef(0);
  const cinematicVelocityRef = useRef(0);

  useEffect(() => {
    modeRef.current = mode;
    if (mode === "cinematic") {
      cinematicVelocityRef.current = -12;
    }
  }, [mode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false })!;
    ctx.imageSmoothingEnabled = true;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const [c1, c2, c3] = getStarCountsForWidth(canvas.width);
      layersRef.current = [
        {
          stars: generateStars(c1, canvas.width, canvas.height, [0.5, 0.8], [0.05, 0.15]),
          speed: 0.15,
        },
        {
          stars: generateStars(c2, canvas.width, canvas.height, [0.8, 1.3], [0.1, 0.25]),
          speed: 0.30,
        },
        {
          stars: generateStars(c3, canvas.width, canvas.height, [1.3, 1.8], [0.3, 0.55]),
          speed: 0.60,
        },
      ];
    };

    resizeCanvas();

    const animate = () => {
      requestAnimationFrame(animate);

      const width = canvas.width;
      const height = canvas.height;
      const cx = width * 0.5;
      const cy = height * 0.5;

      timeRef.current += 0.016;

      scrollInfluenceRef.current +=
        (scrollVelocity - scrollInfluenceRef.current) * 0.08;

      cinematicVelocityRef.current *= 0.98;
      if (Math.abs(cinematicVelocityRef.current) < 0.05) {
        cinematicVelocityRef.current = 0;
      }

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      layersRef.current.forEach(({ stars, speed }) => {
        stars.forEach((star) => {
          /* draw */
          const twinkle =
            Math.sin(timeRef.current * star.twinkleSpeed + star.twinkleOffset) * 0.2 + 0.8;

          ctx.fillStyle = `rgba(255,255,255,${star.opacity * twinkle})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();

          /* BASE MOTION */
          let dx = -0.5 * speed;
          let dy = 0.5 * speed;

          if (modeRef.current === "horizontal") {
            dx = -0.6 * speed;
            dy = 0;
          }

          if (modeRef.current === "forward") {
            const vx = star.x - cx;
            const vy = star.y - cy;
            const dist = Math.sqrt(vx * vx + vy * vy) || 1;

            dx = (vx / dist) * speed * 0.02;
            dy = (vy / dist) * speed * 0.02;
          }

          /* SCROLL OVERRIDE */
          if (
            Math.abs(scrollInfluenceRef.current) > 0.1 &&
            modeRef.current !== "paused" &&
            modeRef.current !== "cinematic" &&
            modeRef.current !== "vertical"
          ) {
            dx = 0;
            dy = -scrollInfluenceRef.current * speed * 0.6;
          }

          /* HARD MODES */
          if (modeRef.current === "paused") {
            dx = dy = 0;
          } else if (modeRef.current === "vertical") {
            dx = 0;
            dy = -10 * speed;
          } else if (modeRef.current === "cinematic") {
            dx = 0;
            dy = cinematicVelocityRef.current * speed;
          }

          star.x += dx;
          star.y += dy;

          /* EDGE HANDLING */
          const out =
            star.x < 0 || star.x > width || star.y < 0 || star.y > height;

          if (out) {
            if (modeRef.current === "forward") {
              // forward: respawn anywhere
              star.x = Math.random() * width;
              star.y = Math.random() * height;
            } else {
              // other modes: classic wrap
              if (star.x < 0) star.x = width;
              if (star.x > width) star.x = 0;
              if (star.y < 0) star.y = height;
              if (star.y > height) star.y = 0;
            }
          }
        });
      });
    };

    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("orientationchange", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("orientationchange", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-50" />;
}
