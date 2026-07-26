"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { UAE_PROJECTS } from "@/lib/uae-data";

const UaeProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="uae-projects"
      aria-labelledby="uae-projects-heading"
      ref={ref}
      className="py-24 px-6"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
            <span className="section-label">Selected Work</span>
          </div>
          <h2
            id="uae-projects-heading"
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Projects, by problem
            <br />
            <span style={{ color: "var(--accent)" }}>and impact</span>
          </h2>
        </motion.div>

        <ul className="space-y-6">
          {UAE_PROJECTS.map((project, i) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="grid md:grid-cols-[280px_1fr] gap-0 rounded-2xl overflow-hidden list-none"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <div className="relative h-48 md:h-full min-h-55">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 768px) 280px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-7">
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
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

                <ul className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs"
                      style={{
                        fontFamily: "var(--font-mono)",
                        border: "1px solid var(--border)",
                        color: "var(--text-muted)",
                        background: "var(--bg-secondary)",
                        fontSize: "0.65rem",
                      }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium"
                    style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
                  >
                    <ExternalLink size={12} />
                    Live Demo
                  </a>
                  <a
                    href={project.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs"
                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                  >
                    <FiGithub size={13} />
                    Source
                  </a>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UaeProjects;
