"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface CardStackProps {
  images: string[];
}

const CardStack = ({ images }: CardStackProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPos = 0;
    const scroll = () => {
      scrollPos += 1;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="relative w-full my-12 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden scrollbar-hide"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="relative shrink-0 w-[650px] h-[450px] rounded-2xl overflow-hidden shadow-xl bg-white"
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              sizes="650px"
              quality={100}
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default CardStack;
