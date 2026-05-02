import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import type { Project } from "../utils/data";

interface ProjectCardProps {
  project: Project;
  index: number;
  theme: "dark" | "light";
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col h-full rounded-2xl overflow-hidden"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 12px 40px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay with CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 flex items-center justify-center gap-3"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
        >
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo: ${project.title}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-white"
            style={{
              background: "var(--accent)",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.04em",
            }}
          >
            <ExternalLink size={13} />
            Live Demo
          </motion.a>
          <motion.a
            href={project.gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub: ${project.title}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold"
            style={{
              border: "1.5px solid rgba(255,255,255,0.6)",
              color: "white",
              fontFamily: "var(--font-display)",
            }}
          >
            <FiGithub size={13} />
            GitHub
          </motion.a>
        </motion.div>

        {/* Category badge */}
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
      <div className="flex flex-col flex-1 p-6">
        {/* Key focus */}
        <div
          className="mb-3 text-xs flex items-center gap-2"
          style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
        >
          <div className="w-3 h-px" style={{ background: "var(--accent)" }} />
          {project.keyFocus}
        </div>

        {/* Title */}
        <h3
          className="text-lg font-bold mb-2 leading-snug"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--text-primary)",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-xs leading-relaxed flex-1 mb-5"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <ul className="flex flex-wrap gap-1.5 mb-5">
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

        {/* Bottom CTA row */}
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-medium transition-colors group/link"
            style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
          >
            View Live
            <ArrowUpRight
              size={12}
              className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href={project.gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs transition-colors"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
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
            <FiGithub size={13} />
            Source
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
