"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
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
  // Duplicate 2 lần để tạo hiệu ứng cuộn liên tục như vòng tròn
  // Khi scroll đến -50%, reset về 0% một cách seamless vì bộ thứ 2 giống hệt bộ đầu
  const duplicated = [...libraries, ...libraries];
  const controls = useAnimation();

  useEffect(() => {
    let isRunning = true;

    const animate = async () => {
      // Bắt đầu từ 0%
      controls.set({ x: "0%" });

      while (isRunning) {
        // Cuộn từ vị trí hiện tại đến -50% (qua 1 bộ đầu tiên)
        await controls.start({
          x: "-50%",
          transition: {
            duration: 40,
            ease: "linear",
          },
        });

        // Reset về 0% ngay lập tức (không có transition) để seamless
        // Vì bộ thứ 2 giống hệt bộ đầu, nên không bị giật
        // Sử dụng requestAnimationFrame để đảm bảo reset mượt mà
        await new Promise((resolve) => {
          requestAnimationFrame(() => {
            controls.set({ x: "0%" });
            resolve(undefined);
          });
        });
      }
    };

    animate();

    return () => {
      isRunning = false;
    };
  }, [controls]);

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
          Kết hợp các thư viện motion hàng đầu để tạo trải nghiệm &quot;bùng nổ năng lượng&quot; đúng tinh thần Phoenix House.
        </p>
      </div>

      <div className="mt-12 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={controls}
        >
          {duplicated.map((lib, index) => (
            <motion.div
              key={`${lib.name}-${index}`}
              className="min-w-[280px] shrink-0 overflow-hidden rounded-3xl border border-white/25 bg-black/20 shadow-[0_15px_35px_rgba(0,0,0,0.45)] backdrop-blur"
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

