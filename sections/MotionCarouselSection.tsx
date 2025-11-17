"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GradientText, Spotlight, BackgroundGrid } from "@/components/magicui";

const libraries = [
  {
    name: "Framer Motion",
    detail: "Hero reveal · staggered choreography · kinetic CTA",
    accent: "rgba(255,0,0,0.45)",
    image: "/phoenix.jpg",
  },
  {
    name: "Lenis Smooth",
    detail: "Chuyển cảnh lụa như lửa, điều khiển tốc độ cuộn",
    accent: "rgba(255,216,107,0.35)",
    image: "/phoenix1.jpg",
  },
  {
    name: "magicui",
    detail: "Spotlight, glow grid, parallax flame layers",
    accent: "rgba(255,107,0,0.4)",
    image: "/phoenix2.jpg",
  },
  {
    name: "motion-primitives",
    detail: "MotionButton · MotionCard với hiệu ứng spring",
    accent: "rgba(255,45,0,0.35)",
    image: "/globe.svg",
  },
  {
    name: "shadcn/ui",
    detail: "Button · Card · Typography tái thiết kế Phoenix",
    accent: "rgba(255,255,255,0.15)",
    image: "/window.svg",
  },
];

export function MotionCarouselSection() {
  const duplicated = [...libraries, ...libraries];

  return (
    <section
      id="rise-space"
      className="phoenix-section relative mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-[#080607] px-6 py-16 md:px-12"
    >
      <BackgroundGrid className="opacity-40" />
      <Spotlight className="top-[-10%] right-[15%] opacity-50" size={520} color="rgba(255,0,0,0.45)" />
      <div className="relative space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.5em] text-white/60">Rise Space</p>
        <h2 className="text-3xl font-extrabold text-white md:text-5xl">
          <GradientText>Không gian landing đầy chuyển động</GradientText>
        </h2>
        <p className="mx-auto max-w-3xl text-base text-white/75">
          Kết hợp các thư viện motion hàng đầu để tạo trải nghiệm “bùng nổ năng lượng” đúng tinh thần Phoenix House.
        </p>
      </div>

      <div className="mt-12 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 36, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        >
          {duplicated.map((lib, index) => (
            <motion.div
              key={`${lib.name}-${index}`}
              className="min-w-[280px] overflow-hidden rounded-3xl border border-white/25 bg-black/20 shadow-[0_15px_35px_rgba(0,0,0,0.45)] backdrop-blur"
              style={{ boxShadow: `0 0 30px ${lib.accent}` }}
            >
              <Image
                src={lib.image}
                alt={lib.name}
                width={420}
                height={280}
                className="h-44 w-full rounded-3xl object-cover object-center"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

