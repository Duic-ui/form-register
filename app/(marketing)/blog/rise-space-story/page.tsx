"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhoenixNavbar } from "@/components/navigation/PhoenixNavbar";
import { GradientText, BackgroundGrid } from "@/components/magicui";
import { fadeUp, stagger } from "@/lib/motion";

export default function RiseSpaceStory() {
  return (
    <main className="relative mx-auto max-w-[1200px] px-4 pb-16 pt-4 md:px-6">
      <PhoenixNavbar />
      <BackgroundGrid className="opacity-30" />
      <motion.article
        variants={stagger(0.15, 0.08)}
        initial="hidden"
        animate="show"
        className="relative mt-24 rounded-[32px] border border-white/10 bg-[#0a0503] px-6 py-12 md:px-16 md:py-20"
      >
        <motion.div variants={fadeUp(0)} className="mb-8">
          <Link
            href="/blog"
            className="text-sm font-semibold uppercase tracking-[0.4em] text-[#ff6b00] transition hover:text-[#ffd86b]"
          >
            ← Quay lại Blog
          </Link>
        </motion.div>

        <motion.span
          variants={fadeUp(0.1)}
          className="text-xs uppercase tracking-[0.4em] text-[#ffd86b]"
        >
          Culture
        </motion.span>

        <motion.h1
          variants={fadeUp(0.15)}
          className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl"
        >
          <GradientText>Rise Space – Trung tâm sáng tạo Phoenix</GradientText>
        </motion.h1>

        <motion.p
          variants={fadeUp(0.2)}
          className="mt-6 text-lg text-white/70 md:text-xl"
        >
          Không gian để mọi ngọn lửa kể câu chuyện tái sinh và khát vọng chinh phục.
        </motion.p>

        <motion.div
          variants={fadeUp(0.25)}
          className="prose prose-invert mt-12 max-w-none text-white/80"
        >
          <div className="space-y-6 text-base leading-relaxed">
            <p>
              Rise Space không chỉ là một không gian vật lý, mà là nơi tinh thần Phoenix được nuôi dưỡng và
              phát triển. Đây là nơi mọi thành viên có thể tự do thể hiện ý tưởng, chia sẻ câu chuyện, và
              cùng nhau xây dựng tương lai.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-white">Tầm nhìn</h2>
            <p>
              Rise Space được tạo ra với mục tiêu trở thành trung tâm sáng tạo của Phoenix House. Mỗi góc
              của không gian này đều được thiết kế để khơi gợi cảm hứng và thúc đẩy sự đổi mới.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-white">Cộng đồng</h2>
            <p>
              Tại Rise Space, mọi thành viên đều có tiếng nói. Chúng tôi tin rằng sự đa dạng trong suy nghĩ
              và cách tiếp cận là chìa khóa để tạo ra những giải pháp sáng tạo và hiệu quả.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-white">Tương lai</h2>
            <p>
              Rise Space sẽ tiếp tục phát triển, mở rộng và đổi mới. Chúng tôi đang xây dựng một nền tảng
              nơi mọi ngọn lửa Phoenix có thể tỏa sáng và đóng góp vào hành trình chung của chúng ta.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-white">Kết luận</h2>
            <p>
              Rise Space là biểu tượng của tinh thần Phoenix: không ngừng phát triển, luôn sáng tạo, và
              luôn hướng về phía trước. Đây là nơi câu chuyện của chúng ta được viết nên.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp(0.3)}
          className="mt-12 flex items-center gap-4 border-t border-white/10 pt-8"
        >
          <Link
            href="/blog"
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/20"
          >
            Xem thêm bài viết
          </Link>
        </motion.div>
      </motion.article>
    </main>
  );
}

