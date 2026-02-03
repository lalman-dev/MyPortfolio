import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { cardVariant } from "../utils/variants";
import type { Project } from "../utils/data";

interface ProjectCardProps {
  project: Project;
  index: number;
  theme: "dark" | "light";
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, theme }) => {
  return (
    <motion.div
      variants={cardVariant}
      tabIndex={0}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative"
    >
      <div
        className={`rounded-2xl overflow-hidden border transition-all duration-500 ${
          theme === "dark"
            ? "bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10"
            : "bg-gray-200/80 border-gray-300 hover:border-gray-400 hover:shadow-2xl hover:shadow-blue-500/10"
        } backdrop-blur-sm`}
      >
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Featured Badge */}
          {project.featured && (
            <div
              aria-hidden="true"
              className="absolute top-4 left-4 opacity-50 hover:opacity-0"
            >
              <span className="bg-gray-400 text-xs px-3 py-1 rounded-full font-medium">
                Hover to explore
              </span>
            </div>
          )}
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span
              aria-label={`Project category: ${project.category}`}
              className={`text-sm px-3 py-1 rounded-full font-medium bg-white/80 text-gray-700 backdrop-blur-sm`}
            >
              {project.category}
            </span>
          </div>

          {/* Hover overlay & CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            whileFocus={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-4"
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo of ${project.title}`}
              initial={{ y: 10, opacity: 0.5 }}
              whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-linear-to-r from-blue-400 to-pink-400 hover:bg-blue-400 hover:from-blue-500 hover:to-pink-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </motion.a>

            <motion.a
              href={project.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code of ${project.title} on GitHub`}
              initial={{ y: 10, opacity: 0.5 }}
              whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className={`border-2 border-white text-white hover:bg-white hover:text-gray-900 hover:border-gray-600 px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-all`}
            >
              <FiGithub size={16} />
              <span>GitHub</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Key Focus */}
        <div
          className={`my-3 text-center text-xs font-medium tracking-wide ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <span className="uppercase">Key Focus:</span>{" "}
          <span className="text-blue-500">{project.keyFocus}</span>
        </div>

        {/* Project description */}
        <div className="p-6">
          <h3 className="text-xl font-medium mb-3 group-hover:text-blue-500 transition-colors">
            {project.title}
          </h3>
          <p
            className={`text-sm leading-relaxed mb-4 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {project.description}
          </p>
          {/* tech stack */}
          <ul className="flex flex-wrap gap-2">
            {project.tag.map((tag, tagIndex) => (
              <li
                key={tagIndex}
                className={`text-xs px-3 py-1 rounded-full ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
