"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TECH_STACK } from "@/lib/data";

const UaeTechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      aria-labelledby="tech-heading"
      ref={ref}
      className="py-20 px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
          <h2
            id="tech-heading"
            className="text-sm"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Technology Stack
          </h2>
        </motion.div>

        <ul className="flex flex-wrap gap-2">
          {TECH_STACK.map((tech, i) => (
            <motion.li
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.03 }}
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
      </div>
    </section>
  );
};

export default UaeTechStack;
