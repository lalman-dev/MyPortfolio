"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sun, Moon, Download } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const UaeNav = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.nav
      aria-label="UAE landing page navigation"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 px-6 py-4"
      style={{
        background: isDark ? "rgba(10,9,8,0.9)" : "rgba(245,242,236,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 rounded-sm flex items-center justify-center text-white text-xs font-bold"
            style={{
              background: "var(--accent)",
              fontFamily: "var(--font-display)",
            }}
          >
            L
          </div>
          <span
            className="text-base font-semibold tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            lalman.dev
            <span
              className="ml-2 text-xs align-middle px-2 py-0.5 rounded-full"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                background: "var(--accent-subtle)",
                color: "var(--accent)",
                letterSpacing: "0.08em",
              }}
            >
              UAE
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <motion.a
            href="/lalman-resume.pdf"
            download
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-medium"
            style={{
              background: "var(--accent)",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.06em",
            }}
          >
            <Download size={13} />
            Download CV
          </motion.a>

          <motion.button
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-md"
            style={{
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
            }}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default UaeNav;
