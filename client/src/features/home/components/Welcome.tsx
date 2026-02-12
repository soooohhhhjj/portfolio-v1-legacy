import { useEffect, useRef, useState } from "react";

interface WelcomeProps {
  onAnimationComplete: () => void;
}

export default function Welcome({ onAnimationComplete }: WelcomeProps) {
  const text = "Welcome to My Portfolio Website.😊";
  const speed = 40;

  const [displayed, setDisplayed] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  const indexRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setDisplayed("");
    setIsTypingDone(false);
    indexRef.current = 0;

    const tick = () => {
      const i = indexRef.current;
      if (i >= text.length) {
        setIsTypingDone(true);
        timeoutRef.current = null;
        return;
      }
      setDisplayed((prev) => prev + text.charAt(i));
      indexRef.current += 1;
      timeoutRef.current = window.setTimeout(tick, speed);
    };

    timeoutRef.current = window.setTimeout(tick, speed);
    return () => {
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    };
  }, [text, speed]);

  useEffect(() => {
    if (isTypingDone) {
      const timer = setTimeout(() => {
        onAnimationComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTypingDone, onAnimationComplete]);

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="section-content center-div responsiveness text-center">
        <span
          className="font-jura text-[23px] sm:text-[24px] md:text-[28px] lg:text-[30px] tracking-[.09rem] font-[500] text-white"
        >
          {displayed}
          <span className={`caret ${isTypingDone ? "blink" : ""}`} />
        </span>
      </div>
    </section>
  );
}
