import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILL_CATEGORY, TECH_STACK } from "../utils/data";

const Skills = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={sectionRef}
      aria-labelledby="skills-heading"
      className="py-28 px-6"
      style={{ background: "var(--bg-secondary)" }}
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
            <div
              className="w-6 h-px"
              style={{ background: "var(--accent)" }}
            />
            <span className="section-label">02 / Skills</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              id="skills-heading"
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              What I Work
              <br />
              <span style={{ color: "var(--accent)" }}>With</span>
            </h2>
            <p
              className="max-w-sm text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Technologies and tools I use to design, build, and ship
              production-ready frontend applications.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="divider mb-16" />

        {/* Skill Categories */}
        <div
          className="grid md:grid-cols-2 gap-px"
          style={{ background: "var(--border)" }}
        >
          {SKILL_CATEGORY.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 group"
              style={{ background: "var(--bg-secondary)" }}
            >
              {/* Category header */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background: "var(--accent-subtle)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <category.icon size={18} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {category.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill.name}
                    whileHover={{ y: -2, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="px-3 py-1.5 rounded-md text-xs cursor-default transition-all"
                    style={{
                      fontFamily: "var(--font-mono)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                      background: "var(--bg-card)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--accent)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--border)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--text-secondary)";
                    }}
                  >
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tech stack row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-xs"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
              }}
            >
              Also Working With
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "var(--border)" }}
            />
          </div>
          <ul className="flex flex-wrap gap-2">
            {TECH_STACK.map((tech, i) => (
              <motion.li
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.55 + i * 0.04 }}
                whileHover={{ y: -2 }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs cursor-default"
                style={{
                  fontFamily: "var(--font-mono)",
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  color: "var(--text-secondary)",
                }}
              >
                {tech.icon && <tech.icon size={13} className={tech.color} />}
                {tech.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
