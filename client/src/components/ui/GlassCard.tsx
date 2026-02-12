// src/components/ui/GlassCard.tsx
import type { HTMLAttributes, ElementType } from "react";
import clsx from "clsx";
import { motion, type HTMLMotionProps } from "framer-motion";

type GlassCardBaseProps = {
  as?: ElementType; // <— FIX: supports "div" | motion.div | custom component
  width?: string;
  corner?: string;
  shadow?: string;
  animated?: HTMLMotionProps<"div">;
};

type GlassCardProps = GlassCardBaseProps &
  Omit<HTMLAttributes<HTMLDivElement>, "className"> & {
    className?: string;
  };

export default function GlassCard({
  as: Component = "div",
  width = "w-full",
  corner = "rounded-xl",
  shadow = "shadow-[0_0_30px_rgba(255,255,255,0.1)]",
  animated,
  className,
  children,
  ...rest
}: GlassCardProps) {
  const Wrapper = animated ? motion(Component) : Component;

  return (
    <Wrapper
      {...animated}
      {...rest}
      className={clsx(
        "relative overflow-hidden",
        width,
        corner,
        shadow,
        className
      )}
    >
      <div className="absolute inset-0 border border-white/10 rounded-inherit shadow-[inset_0_0_15px_rgba(255,255,255,0.15)]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-70 rounded-inherit" />
      {children}
    </Wrapper>
  );
}
