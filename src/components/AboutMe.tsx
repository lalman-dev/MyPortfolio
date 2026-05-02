import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { JOURNEY_STEPS, PASSION } from "../utils/data";

const AboutMe = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="py-28 px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
            <span className="section-label">05 / About</span>
          </div>
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            The Engineer
            <br />
            <span style={{ color: "var(--accent)" }}>Behind the Code</span>
          </h2>
        </motion.div>

        <div className="divider mb-16" />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Approach + passions */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mb-10 p-6 rounded-xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                className="text-lg font-bold mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text-primary)",
                }}
              >
                My Approach
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                I focus on building frontend systems that remain maintainable as
                they grow — from component structure and state boundaries to
                rendering strategy and UX performance.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                I care deeply about how architectural decisions affect user
                experience, developer velocity, and long-term scalability. Most
                of my learning comes from shipping real projects and refining
                through iteration.
              </p>
            </motion.div>

            {/* What I love making */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <h3
                className="text-sm font-semibold mb-4"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                What I Build For
              </h3>
              <ul className="grid gap-3">
                {PASSION.map((passion, i) => (
                  <motion.li
                    key={passion.title}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.35 + i * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 rounded-xl group cursor-default transition-all"
                    style={{
                      border: "1px solid var(--border)",
                      background: "var(--bg-card)",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        "var(--border)")
                    }
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "var(--accent-subtle)" }}
                    >
                      <passion.icon
                        size={15}
                        style={{ color: "var(--accent)" }}
                      />
                    </div>
                    <div>
                      <h4
                        className="text-sm font-semibold mb-0.5"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {passion.title}
                      </h4>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {passion.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right — Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <h3
              className="text-sm font-semibold mb-8"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Journey
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-4 top-0 bottom-0 w-px"
                style={{ background: "var(--border)" }}
              />

              <ul className="space-y-6">
                {JOURNEY_STEPS.map((step, i) => (
                  <motion.li
                    key={step.year}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="relative flex items-start gap-6 group"
                  >
                    {/* Dot */}
                    <div
                      className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "var(--bg-primary)",
                        border: "2px solid var(--border)",
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full transition-colors"
                        style={{ background: "var(--text-muted)" }}
                      />
                    </div>

                    {/* Content */}
                    <div
                      className="flex-1 p-5 rounded-xl transition-all"
                      style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.borderColor =
                          "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.borderColor =
                          "var(--border)")
                      }
                    >
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h4
                          className="font-semibold text-sm"
                          style={{
                            fontFamily: "var(--font-display)",
                            color: "var(--text-primary)",
                          }}
                        >
                          {step.title}
                        </h4>
                        <span
                          className="shrink-0 text-xs px-2 py-0.5 rounded-full"
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.65rem",
                            background: "var(--accent-subtle)",
                            color: "var(--accent)",
                            border: "1px solid var(--accent)",
                            opacity: 0.8,
                          }}
                        >
                          {step.year}
                        </span>
                      </div>
                      <div
                        className="text-xs mb-2"
                        style={{
                          color: "var(--accent)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {step.company}
                      </div>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
