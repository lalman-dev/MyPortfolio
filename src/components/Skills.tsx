import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { SKILL_CATEGORY, TECH_STACK } from "../utils/data";
import {
  containerVariants,
  itemVariants,
  textVariants,
} from "../utils/variants";

const Skills = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-24 px-6 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-lg uppercase tracking-widest mb-4 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Skills & Capabilities
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-medium mb-6"
          >
            Frontend Engineering
            <span className="ml-2 bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
              Toolkit
            </span>
          </motion.h2>

          <motion.p
            variants={textVariants}
            className={`text-lg max-w-2xl mx-auto font-light ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Technologies and tools I use to design, build, and ship
            production-ready frontend applications with real-world constraints.
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {SKILL_CATEGORY.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`p-8 rounded-2xl border transition-colors ${
                theme === "dark"
                  ? "bg-gray-900/60 border-gray-800"
                  : "bg-white border-gray-200"
              }`}
            >
              {/* Category header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-linear-to-r from-blue-500/40 to-purple-500/40 text-purple-600">
                  <category.icon size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">{category.title}</h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skill chips */}
              <ul className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill.name}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`px-4 py-2 text-sm rounded-full border cursor-default ${
                      theme === "dark"
                        ? "border-gray-700 text-gray-300 hover:border-purple-500/60"
                        : "border-gray-300 text-gray-700 hover:border-purple-500/60"
                    }`}
                  >
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Supporting stack */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-20 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-xl font-medium mb-6"
          >
            Also Working With
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {TECH_STACK.map((tech) => (
              <motion.span
                key={tech.name}
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`flex items-center gap-2 px-4 py-2 text-sm rounded-full border ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700 text-gray-300"
                    : "bg-white border-gray-300 text-gray-700"
                }`}
              >
                {tech.icon && <tech.icon className={tech.color} size={18} />}
                {tech.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
