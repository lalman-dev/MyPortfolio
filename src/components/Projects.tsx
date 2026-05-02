import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { PROJECTS } from "../utils/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="work"
      ref={sectionRef}
      aria-labelledby="projects-heading"
      className="py-28 px-6"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto">
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
            <span className="section-label">04 / Work</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              id="projects-heading"
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              Selected
              <br />
              <span style={{ color: "var(--accent)" }}>Projects</span>
            </h2>
            <p
              className="max-w-sm text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Projects that demonstrate frontend architecture decisions,
              rendering strategy, and production-ready UI patterns.
            </p>
          </div>
        </motion.div>

        <div className="divider mb-12" />

        {/* Projects Grid */}
        <ul className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <li key={project.id} className="list-none flex">
              <ProjectCard project={project} index={index} theme={theme} />
            </li>
          ))}
        </ul>

        {/* More on GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
            More projects on GitHub
          </p>
          <motion.a
            href="https://github.com/lalman-dev/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              background: "var(--bg-card)",
              fontFamily: "var(--font-display)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border)";
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-secondary)";
            }}
          >
            View GitHub Profile →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
