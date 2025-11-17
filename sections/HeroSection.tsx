"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GradientText, Spotlight, FlameParticles, BackgroundGrid } from "@/components/magicui";
import { MotionButton } from "@/components/motion-primitives";
import { fadeUp, stagger } from "@/lib/motion";

export function HeroSection() {
  return (
    <section
      id="home"
      data-section="phoenix-awakening"
      className="phoenix-section relative isolate min-h-[90vh] overflow-hidden rounded-[32px] bg-[#090909] px-6 py-16 md:px-12"
    >
      <BackgroundGrid />
      <Spotlight className="top-10 left-6" size={440} />
      <Spotlight className="bottom-0 right-12 opacity-60" size={520} color="rgba(255,255,255,0.25)" />
      <FlameParticles />
      <div className="phoenix-noise" />

      <motion.div
        variants={stagger(0.15, 0.1)}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-5xl text-center space-y-8"
      >
        <motion.p variants={fadeUp(0)} className="text-xs font-semibold uppercase tracking-[0.8em] text-white/70 md:text-sm">
          Phoenix Awakening
        </motion.p>
        <motion.h1
          variants={fadeUp(0.05)}
          className="text-4xl font-black leading-tight md:text-6xl lg:text-7xl"
        >
          <GradientText className="fire-gradient text-balance text-4xl font-black md:text-6xl">
            PHOENIX HOUSE – PHƯỢNG HOÀNG RỰC LỬA
          </GradientText>
        </motion.h1>
        <motion.p
          variants={fadeUp(0.15)}
          className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl"
        >
          Mang trong mình sức mạnh tái sinh bất diệt và tinh thần kiên cường. Mỗi thành viên là một
          ngọn lửa kiêu hãnh, rực cháy khát vọng chinh phục.
        </motion.p>
        <motion.div variants={fadeUp(0.2)} className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <MotionButton
            whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(255,107,0,0.55)" }}
            whileTap={{ scale: 0.96 }}
            className="w-full rounded-full border border-white/10 bg-gradient-to-r from-[#ff0000] via-[#ff6b00] to-[#ffd86b] px-8 py-6 text-lg font-semibold uppercase tracking-[0.3em] text-black md:w-auto"
          >
            Khám phá ngay
          </MotionButton>
          <span className="text-xs uppercase tracking-[0.5em] text-white/60">Rise with fire</span>
        </motion.div>
        <motion.div variants={fadeUp(0.25)} className="relative overflow-hidden rounded-[48px] border border-white/15 bg-black/40 p-5 shadow-[0_35px_120px_rgba(255,50,0,0.45)]">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#ff4500]/50 via-transparent to-[#ffd86b]/25 blur-[110px]" />
          <Image
            src="/phoenix.jpg"
            alt="Phoenix House Illustration"
            width={1400}
            height={800}
            className="h-[560px] w-full rounded-[32px] object-cover object-center"
            priority
          />
          <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/80 backdrop-blur">
            Phoenix Core
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeUp(0.4)}
        initial="hidden"
        animate="show"
        className="mt-16 flex flex-wrap items-center justify-center gap-4 text-xs uppercase text-white/60"
      >
        <span className="h-px w-10 bg-white/30" />
        * Chủ đề chính thức của Phoenix House *
        <span className="h-px w-10 bg-white/30" />
      </motion.div>
    </section>
  );
}

