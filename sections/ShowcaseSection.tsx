"use client";

import { motion } from "framer-motion";
import { ParallaxFlame, GradientText, BackgroundGrid } from "@/components/magicui";
import { MotionCard } from "@/components/motion-primitives";
import { fadeUp, stagger } from "@/lib/motion";

const showcases = [
  {
    title: "Chiến lược làm chủ sân khấu",
    description: "Phoenix dẫn đội hình với nhịp trống sấm sét, ánh sáng đỏ phủ kín.",
    span: "col-span-12 lg:col-span-8",
  },
  {
    title: "Biểu tượng tái sinh",
    description: "Cánh phượng hologram mở ra giữa màn sương, thể hiện chu kỳ tái sinh.",
    span: "col-span-12 lg:col-span-4",
  },
  {
    title: "Năng lượng kết nối",
    description: "Lenis smooth scroll dẫn dắt trải nghiệm, mọi chuyển cảnh liền mạch như dòng lửa.",
    span: "col-span-12 md:col-span-6",
  },
  {
    title: "Parallax Flame Experience",
    description: "Layer flame parallax theo bước cuộn, tạo chiều sâu và cảm giác bùng nổ.",
    span: "col-span-12 md:col-span-6",
  },
];

export function ShowcaseSection() {
  return (
    <section
      id="phoenix-showcase"
      className="phoenix-section relative mt-24 overflow-hidden rounded-[32px] border border-white/10 bg-[#080101] px-6 py-20 md:px-16"
    >
      <BackgroundGrid className="opacity-40" />
      <motion.div variants={stagger(0.12, 0.05)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10%" }}>
        <motion.p variants={fadeUp(0)} className="text-sm uppercase tracking-[0.5em] text-white/60">
          Bùng nổ 2025
        </motion.p>
        <motion.h2 variants={fadeUp(0.1)} className="mt-4 text-3xl font-bold text-white md:text-5xl">
          <GradientText className="text-5xl font-black">
            Phoenix sẽ làm chủ cuộc chơi như thế nào?
          </GradientText>
        </motion.h2>
        <motion.p variants={fadeUp(0.15)} className="mt-4 max-w-3xl text-lg text-white/75">
          Animated bento grid với hiệu ứng parallax fire, spotlight glow và gradient overlay mang đến trải nghiệm quyền năng, mạnh mẽ.
        </motion.p>

        <div className="mt-12 grid grid-cols-12 gap-6">
          {showcases.map((item, index) => (
            <ParallaxFlame key={item.title} className={item.span} intensity={40 * (index + 1)}>
              <MotionCard
                variants={fadeUp(0.2 + index * 0.05)}
                className="bento-card relative h-full overflow-hidden text-white"
              >
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at top, rgba(255,0,0,0.3), transparent 50%), linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.3))",
                  }}
                />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">Phoenix Move</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{item.description}</p>
                </div>
              </MotionCard>
            </ParallaxFlame>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

