"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhoenixNavbar } from "@/components/navigation/PhoenixNavbar";
import { GradientText, BackgroundGrid } from "@/components/magicui";
import { fadeUp, stagger } from "@/lib/motion";

export default function PhoenixAwakeningPlaybook() {
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
          Chiến lược
        </motion.span>

        <motion.h1
          variants={fadeUp(0.15)}
          className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl"
        >
          <GradientText>Phoenix Awakening Playbook</GradientText>
        </motion.h1>

        <motion.p
          variants={fadeUp(0.2)}
          className="mt-6 text-lg text-white/70 md:text-xl"
        >
          Khám phá chiến lược dẫn quân Phoenix tại Brothers & Sisters 2025.
        </motion.p>

        <motion.div
          variants={fadeUp(0.25)}
          className="prose prose-invert mt-12 max-w-none text-white/80"
        >
          <div className="space-y-6 text-base leading-relaxed">
            <p>
              Phoenix House không chỉ là một đội hình, mà là một phong trào. Mỗi thành viên mang trong mình
              sức mạnh tái sinh bất diệt và tinh thần kiên cường. Playbook này sẽ hướng dẫn bạn cách thức
              Phoenix House chuẩn bị cho Brothers & Sisters 2025.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-white">Chiến lược Tổng thể</h2>
            <p>
              Chiến lược của Phoenix House được xây dựng trên ba trụ cột chính: Tinh thần đoàn kết, Sự sáng
              tạo không giới hạn, và Khát vọng chiến thắng. Mỗi hoạt động đều được thiết kế để phát huy tối
              đa tiềm năng của từng thành viên.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-white">Phương pháp Thực hiện</h2>
            <p>
              Chúng tôi tin vào sức mạnh của sự hợp tác và đổi mới. Mỗi dự án được thực hiện với tinh thần
              cầu tiến, luôn tìm kiếm những cách tiếp cận mới và hiệu quả hơn. Đây là cách Phoenix House
              tạo nên sự khác biệt.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-white">Kết luận</h2>
            <p>
              Phoenix Awakening Playbook không chỉ là một tài liệu hướng dẫn, mà là nguồn cảm hứng cho mọi
              thành viên. Hãy cùng nhau viết nên câu chuyện chiến thắng của Phoenix House tại Brothers &
              Sisters 2025.
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

