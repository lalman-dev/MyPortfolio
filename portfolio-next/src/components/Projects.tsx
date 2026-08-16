"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { PROJECTS } from "@/lib/data";

const Projects = () => {
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
              Projects, by problem
              <br />
              <span style={{ color: "var(--accent)" }}>and impact</span>
            </h2>
            <p
              className="max-w-sm text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Projects that demonstrate frontend architecture decisions,
              rendering strategy, and production-ready UI patterns — framed by
              the problem each one solves.
            </p>
          </div>
        </motion.div>

        <div className="divider mb-12" />

        {/* Project cards */}
        <ul className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col rounded-2xl overflow-hidden list-none"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                transition: "border-color 0.3s ease",
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
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: "rgba(0,0,0,0.6)",
                    color: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(4px)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <div
                  className="mb-2 text-xs flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent)",
                  }}
                >
                  <div
                    className="w-3 h-px"
                    style={{ background: "var(--accent)" }}
                  />
                  {project.keyFocus}
                </div>

                <h3
                  className="text-lg font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--text-primary)",
                  }}
                >
                  {project.title}
                </h3>

                <div className="grid sm:grid-cols-3 gap-5 mb-5">
                  {[
                    { label: "Problem", text: project.problem },
                    { label: "Solution", text: project.solution },
                    { label: "Impact", text: project.impact },
                  ].map((block) => (
                    <div key={block.label}>
                      <div
                        className="text-xs mb-1.5"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--accent)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                        }}
                      >
                        {block.label}
                      </div>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {block.text}
                      </p>
                    </div>
                  ))}
                </div>

                <ul className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                  {project.tag.map((tag) => (
                    <li
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs"
                      style={{
                        fontFamily: "var(--font-mono)",
                        border: "1px solid var(--border)",
                        color: "var(--text-muted)",
                        background: "var(--bg-secondary)",
                        fontSize: "0.65rem",
                      }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div
                  className="flex items-center gap-5 pt-4"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium"
                    style={{
                      color: "var(--accent)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    <ExternalLink size={12} />
                    Live Demo
                  </a>
                  <a
                    href={project.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    <FiGithub size={13} />
                    Source
                  </a>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* GitHub CTA */}
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
