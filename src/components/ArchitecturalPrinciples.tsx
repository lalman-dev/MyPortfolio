import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  containerVariants,
  itemVariants,
  textVariants,
} from "../utils/variants";

const PRINCIPLES = [
  {
    title: "Separation of Concerns",
    description:
      "UI components, state management, and data-fetching logic are clearly separated to keep the codebase predictable and easy to maintain.",
    example:
      "In my Hacker News Portal, I separated server-rendered data fetching from client-side search and pagination logic, keeping UI components focused and reusable.",
  },
  {
    title: "Rendering Strategy First",
    description:
      "I intentionally choose between SSR, CSR, or hybrid rendering based on performance, SEO, and user experience requirements.",
    example:
      "For the Hacker News Portal, I used SSR for initial page load and SEO, while handling search and interactions on the client to keep the UI fast and responsive.",
  },
  {
    title: "Predictable State & Data Flow",
    description:
      "I prefer explicit, predictable state updates to avoid hidden side effects and fragile UI behavior.",
    example:
      "In AI Resume Studio, I designed multi-step form flows with controlled state transitions to prevent data loss and inconsistent UI states.",
  },
  {
    title: "Resilient UX by Default",
    description:
      "Loading, error, and empty states are treated as first-class UI requirements, not edge cases.",
    example:
      "Both projects include loading skeletons, error boundaries, and empty states to gracefully handle unreliable APIs and slow network conditions.",
  },
  {
    title: "Scalability over Cleverness",
    description:
      "I favor simple, boring solutions that scale well with growing features and team size.",
    example:
      "Instead of over-abstracting components, I focused on clear component boundaries and readable patterns that would be easy for another developer to extend.",
  },
];

const ArchitecturePrinciples = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="architecture"
      className={`py-24 px-6 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Architecture
            <span className="ml-2 bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
              Principles
            </span>
          </motion.h2>

          <motion.p
            variants={textVariants}
            className={`text-lg max-w-2xl mx-auto font-light ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            How I think about designing frontend systems for real-world,
            production environments.
          </motion.p>
        </motion.div>

        {/* Principles Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {PRINCIPLES.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`p-8 rounded-2xl border ${
                theme === "dark"
                  ? "bg-gray-900/60 border-gray-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>

              <p
                className={`text-sm leading-relaxed mb-4 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {item.description}
              </p>

              <p
                className={`text-sm italic ${
                  theme === "dark" ? "text-gray-500" : "text-gray-500"
                }`}
              >
                <span className="font-medium not-italic">Example:</span>{" "}
                {item.example}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitecturePrinciples;
