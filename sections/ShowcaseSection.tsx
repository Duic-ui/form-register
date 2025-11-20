"use client";

import { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GradientText, BackgroundGrid } from "@/components/magicui";
import { fadeUp, stagger } from "@/lib/motion";
import memberImages from "@/data/phoenixMembers";

// Responsive chunk size hook
function useResponsiveChunkSize() {
  const [chunkSize, setChunkSize] = useState(7); // default desktop

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 640) setChunkSize(2); // mobile
      else if (width < 1024) setChunkSize(4); // tablet
      else setChunkSize(7); // desktop
    }
    handleResize(); // set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return chunkSize;
}

function chunkArray<T>(arr: T[], size: number) {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export function ShowcaseSection() {
  const chunkSize = useResponsiveChunkSize();

  // Tách các nhóm ảnh
  const leader = memberImages[0];
  const secondRow = memberImages.slice(1, 4);
  const rest = memberImages.slice(4);

  // Chia các hàng còn lại theo chunkSize
  const rows = useMemo(() => chunkArray(rest, chunkSize), [rest, chunkSize]);

  return (
    <section
      id="phoenix-showcase"
      className="phoenix-section relative mt-24 overflow-hidden rounded-[32px] border border-white/10 bg-[#080101] px-2 sm:px-4 md:px-8 py-10 md:py-20"
    >
      <BackgroundGrid className="opacity-40" />
      <motion.div
        variants={stagger(0.12, 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
      >
        <motion.p
          variants={fadeUp(0)}
          className="text-sm uppercase tracking-[0.5em] text-white/60"
        >
          Thành viên Phoenix House
        </motion.p>
        <motion.h2
          variants={fadeUp(0.1)}
          className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold text-white"
        >
          <GradientText className="text-3xl sm:text-5xl font-black">
            Đội hình Phoenix 2025
          </GradientText>
        </motion.h2>
        <motion.p
          variants={fadeUp(0.15)}
          className="mt-4 max-w-3xl text-base sm:text-lg text-white/75"
        >
          47 thành viên – Khí chất dẫn đầu, đoàn kết và bùng nổ!
        </motion.p>

        <div className="mt-8 sm:mt-12 flex flex-col items-center gap-4 sm:gap-6">
          {/* Hàng 1: Leader */}
          <motion.div variants={fadeUp(0.2)}>
            <Image
              src={leader}
              alt="Leader"
              width={300}
              height={300}
              quality={100}
              className="object-cover shadow-lg rounded-[8px]"
            />
          </motion.div>

          {/* Hàng 2: 3 thành viên */}
          <motion.div
            variants={fadeUp(0.25)}
            className="flex gap-3 sm:gap-6 md:gap-8 flex-wrap justify-center"
          >
            {secondRow.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`Member ${idx + 2}`}
                width={200}
                height={200}
                quality={100}
                className="object-cover shadow rounded-[8px]"
              />
            ))}
          </motion.div>

          {/* Các hàng còn lại */}
          {rows.map((row, rowIdx) => (
            <motion.div
              key={rowIdx}
              variants={fadeUp(0.3 + rowIdx * 0.05)}
              className="flex gap-2 sm:gap-4 md:gap-6 justify-center flex-wrap"
            >
              {row.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`Member ${4 + rowIdx * chunkSize + idx}`}
                  width={120}
                  height={120}
                  quality={100}
                  className="object-cover rounded-[8px]"
                />
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
