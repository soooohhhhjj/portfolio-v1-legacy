import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
}

export default function BouncingImage({ src }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const pos = useRef({ x: 20, y: 20 });
  const velocity = useRef({ x: 0.6, y: 0.6 });

  const [, forceRender] = useState(0); 

  useEffect(() => {
    let frame: number;

    const animate = () => {
      if (!containerRef.current || !imgRef.current) return;

      const c = containerRef.current.getBoundingClientRect();
      const i = imgRef.current.getBoundingClientRect();

      const x = pos.current.x + velocity.current.x;
      const y = pos.current.y + velocity.current.y;

      if (x <= 0 || x + i.width >= c.width) velocity.current.x *= -1;
      if (y <= 0 || y + i.height >= c.height) velocity.current.y *= -1;

      pos.current.x = x;
      pos.current.y = y;

      forceRender(n => n + 1); // repaint only
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <img
        ref={imgRef}
        src={src}
        draggable={false}
        className="
          absolute
          w-[95px]
          opacity-90
          pointer-events-none
          filter
          drop-shadow-[0_0_15px_rgba(255,255,255,0.35)]
        "
        style={{
          left: pos.current.x,
          top: pos.current.y,
        }}
      />
    </div>
  );
}
