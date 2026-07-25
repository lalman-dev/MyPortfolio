"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { textVariants, imageVariants } from "@/lib/variants";

const UaeHero = () => {
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative overflow-hidden px-6 pt-16 pb-20"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background grid, matches homepage hero */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: "var(--accent)", filter: "blur(180px)", opacity: 0.07 }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-8 h-px" style={{ background: "var(--accent)" }} />
          <span className="section-label">Frontend Engineer · Open to UAE Roles</span>
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "#22c55e" }}
          />
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="leading-[0.95] tracking-tight max-w-4xl"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            Frontend Engineer, Ready to Build for{" "}
            <span style={{ color: "var(--accent)" }}>UAE Teams.</span>
          </motion.h1>
        </div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.2 }}
          className="max-w-xl text-base leading-relaxed mb-10"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
        >
          Lalman — a frontend-focused Full Stack Engineer building scalable
          products with React, Next.js, TypeScript, and Node.js. Available
          for UAE relocation with immediate availability.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            href="mailto:lalman.dev7@gmail.com?subject=UAE%20Opportunity"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-medium"
            style={{ background: "var(--accent)", fontFamily: "var(--font-display)" }}
          >
            <Mail size={15} />
            Contact Me
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection("uae-projects")}
            className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              background: "var(--bg-card)",
              fontFamily: "var(--font-display)",
            }}
          >
            View Work
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default UaeHero;
