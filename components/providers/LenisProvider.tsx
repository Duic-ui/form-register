 "use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    document.documentElement.classList.add("lenis");

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 1.5,
    });

    let animationFrame: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
    };
  }, []);

  return <>{children}</>;
}

