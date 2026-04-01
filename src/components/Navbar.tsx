"use client";

import { motion, useScroll, useTransform } from "motion/react";

export function Navbar() {
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  const borderBottomColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(232, 232, 228, 0)", "rgba(232, 232, 228, 1)"]
  );

  return (
    <motion.header
      style={{
        backgroundColor,
        borderBottomColor,
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 h-16 flex items-center justify-between">
        <a href="#" className="font-mono tracking-widest font-bold text-text-primary text-xl">
          STUDIO
        </a>
        <button className="px-5 py-2 text-sm font-medium border border-[#E8E8E4] rounded-full hover:bg-surface transition-colors cursor-pointer text-text-primary">
          Get in Touch
        </button>
      </div>
    </motion.header>
  );
}
