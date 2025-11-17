"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GradientText, BackgroundGrid } from "@/components/magicui";
import { MotionCard, MotionButton } from "@/components/motion-primitives";
import { fadeUp, stagger } from "@/lib/motion";

const featuredPosts = [
  {
    title: "Phoenix Awakening Playbook",
    excerpt: "Khám phá chiến lược dẫn quân Phoenix tại Brothers & Sisters 2025.",
    tag: "Chiến lược",
    href: "/blog/phoenix-awakening-playbook",
  },
  {
    title: "Lenis x Magicui: Công thức trải nghiệm đa tầng",
    excerpt: "Cách chúng tôi kết hợp smooth scroll và spotlight grid tạo chiều sâu.",
    tag: "Experience",
    href: "/blog/lenis-magicui-gradient",
  },
  {
    title: "Rise Space – Trung tâm sáng tạo Phoenix",
    excerpt: "Không gian để mọi ngọn lửa kể câu chuyện tái sinh và khát vọng chinh phục.",
    tag: "Culture",
    href: "/blog/rise-space-story",
  },
];

export function FeaturedBlogSection() {
  return (
    <section
      id="blog"
      className="phoenix-section relative mt-24 overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0503] px-6 py-20 md:px-16"
    >
      <BackgroundGrid className="opacity-50" />
      <motion.div variants={stagger(0.15, 0.08)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10%" }}>
        <motion.p variants={fadeUp(0)} className="text-sm uppercase tracking-[0.5em] text-white/60">
          Blog Phoenix
        </motion.p>
        <motion.h2 variants={fadeUp(0.1)} className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
          <GradientText>Bài viết nổi bật</GradientText>
        </motion.h2>
        <motion.p variants={fadeUp(0.15)} className="mt-4 max-w-3xl text-base text-white/70">
          Liên tục cập nhật câu chuyện, chiến thuật và cảm hứng mới nhất của Phoenix House. Theo dõi blog để không bỏ lỡ nguồn năng lượng kiêu hãnh này.
        </motion.p>
        <motion.div variants={fadeUp(0.2)} className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <MotionCard
              key={post.title}
              variants={fadeUp(0.25)}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-[#1a0a05] via-[#080808] to-[#0a0a0a] p-6 text-white"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.4em] text-[#ffd86b]">{post.tag}</span>
                <h3 className="mt-4 text-2xl font-semibold">{post.title}</h3>
                <p className="mt-3 text-sm text-white/70">{post.excerpt}</p>
              </div>
              <Link href={post.href} className="mt-6 text-sm font-semibold text-[#ff6b00] transition hover:text-[#ffd86b]">
                Đọc tiếp →
              </Link>
            </MotionCard>
          ))}
        </motion.div>
        <motion.div variants={fadeUp(0.3)} className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">Xem hành trình Phoenix đầy đủ tại blog</p>
          <MotionButton
            asChild
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white"
          >
            <Link href="/blog">Tới blog Phoenix</Link>
          </MotionButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

