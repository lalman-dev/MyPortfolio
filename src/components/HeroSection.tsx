import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import PROFILE_PIC from "/src/assets/profilePIc.jpeg";
import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Frontend Engineer",
  "React Developer",
  "Next.js Builder",
  "UI Craftsman",
];

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60,
        );
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          30,
        );
      } else {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayed, typing, roleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "5+", label: "Projects Shipped" },
    { value: "10+", label: "Technologies" },
    { value: "∞", label: "Problems Solved" },
  ];

  return (
    <div
      id="home"
      className="min-h-screen relative overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Accent circle blur */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "var(--accent)",
          filter: "blur(180px)",
          opacity: 0.06,
        }}
      />

      <motion.section
        style={{ y, opacity }}
        className="min-h-screen flex items-center px-6 pt-24 pb-16 max-w-7xl mx-auto"
      >
        <div className="w-full">
          {/* Top label row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-8 h-px" style={{ background: "var(--accent)" }} />
            <span className="section-label">
              Available for work · Based in India
            </span>
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#22c55e" }}
            />
          </motion.div>

          {/* Main split layout */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-start">
            {/* Left — Big text */}
            <div>
              {/* Typing role */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-5 h-6 flex items-center"
              >
                <span
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent)",
                  }}
                >
                  {displayed}
                  <span className="animate-pulse">_</span>
                </span>
              </motion.div>

              {/* Big headline */}
              <div className="overflow-hidden mb-6">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1,
                  }}
                  className="leading-[0.9] tracking-tight"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(3.5rem, 9vw, 8rem)",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  Building
                  <br />
                  <span style={{ color: "var(--accent)" }}>Production</span>
                  <br />
                  Interfaces.
                </motion.h1>
              </div>

              {/* Sub text */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="max-w-lg text-base leading-relaxed mb-10"
                style={{
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                I design and ship performant, accessible web experiences using
                React, Next.js, and TypeScript — with strong opinions on
                architecture, state, and rendering strategy.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection("work")}
                  className="group flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-medium"
                  style={{
                    background: "var(--accent)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  View Projects
                  <ArrowUpRight
                    size={15}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 rounded-full text-sm font-medium transition-all"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                    background: "var(--bg-card)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Social row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-5"
              >
                {[
                  {
                    icon: FiGithub,
                    href: "https://github.com/lalman-dev/",
                    label: "GitHub",
                  },
                  {
                    icon: FiLinkedin,
                    href: "https://linkedin.com/in/lalman-dev/",
                    label: "LinkedIn",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--text-primary)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--text-muted)")
                    }
                  >
                    <Icon size={16} />
                    {label}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right — Profile image + stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="hidden lg:flex flex-col items-center gap-6"
            >
              {/* Profile image */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-64 h-80 rounded-2xl overflow-hidden"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <img
                    src={PROFILE_PIC}
                    alt="Lalman — Frontend Engineer"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Accent corner */}
                <div
                  className="absolute -bottom-3 -right-3 w-16 h-16 rounded-xl -z-10"
                  style={{ background: "var(--accent)", opacity: 0.3 }}
                />
                <div
                  className="absolute -top-3 -left-3 w-10 h-10 rounded-lg -z-10"
                  style={{ border: "2px solid var(--accent)", opacity: 0.4 }}
                />
              </div>

              {/* Stats */}
              <div className="w-full space-y-2">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center justify-between px-4 py-3 rounded-xl"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <span
                      className="text-sm"
                      style={{
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                      }}
                    >
                      {stat.label}
                    </span>
                    <span
                      className="font-bold text-lg"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--accent)",
                      }}
                    >
                      {stat.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown size={16} style={{ color: "var(--text-muted)" }} />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
