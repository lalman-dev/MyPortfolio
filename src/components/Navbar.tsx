import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const NAV_ITEMS = [
  { label: "Skills", id: "skills" },
  { label: "Principles", id: "architecture" },
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setScrolled(v > 0.01));
    return unsub;
  }, [scrollYProgress]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const isDark = theme === "dark";

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-60"
        style={{ scaleX, transformOrigin: "0%", background: "var(--accent)" }}
      />

      <motion.nav
        aria-label="Primary navigation"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed w-full top-0 z-50 px-6 py-4"
        style={{
          background: scrolled
            ? isDark
              ? "rgba(10,9,8,0.92)"
              : "rgba(245,242,236,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? `1px solid var(--border)`
            : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        {/* progress bar */}
        <motion.div
          style={{ scaleX, transformOrigin: "0%" }}
          className="absolute top-0 left-0 right-0 h-0.5"
        />

        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 group"
          >
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
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <motion.button
                  whileHover={{ y: -1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-sm rounded-md transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.05em",
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "var(--text-primary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "var(--text-secondary)")
                  }
                >
                  {item.label}
                </motion.button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Hire me CTA */}
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-medium"
              style={{
                background: "var(--accent)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.08em",
              }}
            >
              Hire Me
            </motion.button>

            {/* Theme toggle */}
            <motion.button
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-md transition-colors"
              style={{
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
              }}
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </motion.button>

            {/* Mobile menu toggle */}
            <motion.button
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md"
              style={{
                color: "var(--text-secondary)",
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
              }}
            >
              {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 rounded-xl overflow-hidden"
              style={{
                border: "1px solid var(--border)",
                background: isDark
                  ? "rgba(22,20,16,0.98)"
                  : "rgba(245,242,236,0.98)",
                backdropFilter: "blur(20px)",
              }}
            >
              <ul className="p-3 space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-4 py-3 rounded-lg text-sm transition-colors"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        letterSpacing: "0.08em",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
                <li className="pt-1 pb-1">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="w-full py-3 rounded-lg text-white text-xs font-medium"
                    style={{
                      background: "var(--accent)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    Hire Me
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
