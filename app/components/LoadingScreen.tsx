"use client";

import { motion } from "framer-motion";
import { GiFireBowl } from "react-icons/gi";
import { FaFire } from "react-icons/fa";

const LoadingScreen = () => {
  // Generate 8 fire particles (every 45 degrees)
  const fireParticles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    angle: i * 45, // 0, 45, 90, 135, 180, 225, 270, 315
  }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-orange-50 via-white to-red-50">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Fire particles */}
        {fireParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              transformOrigin: "center",
            }}
            animate={{
              rotate: [particle.angle, particle.angle + 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              className="relative"
              style={{
                x: -24, // Center the icon
                y: -24,
              }}
              animate={{
                x: [-24, 100], // Move outward from center
                y: [-24, -24],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.2, 1.2, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
                times: [0, 0.2, 0.8, 1],
              }}
            >
              <FaFire className="w-12 h-12 text-orange-500" />
            </motion.div>
          </motion.div>
        ))}

        {/* Loading text */}
        <motion.div className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-center">
          <motion.p
            className="text-orange-600 font-bold text-2xl whitespace-nowrap mb-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Đang gửi đăng ký
          </motion.p>
          <p className="text-orange-500 text-sm">Vui lòng chờ trong giây lát...</p>
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
