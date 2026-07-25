"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ENGINEERING_STRENGTHS } from "@/lib/uae-data";

const EngineeringStrengths = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      aria-labelledby="strengths-heading"
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
            <span className="section-label">Engineering Strengths</span>
          </div>
          <h2
            id="strengths-heading"
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            What I bring to an
            <br />
            <span style={{ color: "var(--accent)" }}>engineering team</span>
          </h2>
        </motion.div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "var(--border)" }}
        >
          {ENGINEERING_STRENGTHS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-7"
              style={{ background: "var(--bg-secondary)" }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "var(--accent-subtle)", border: "1px solid var(--border)" }}
              >
                <s.icon size={16} style={{ color: "var(--accent)" }} />
              </div>
              <h3
                className="font-semibold text-sm mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                {s.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringStrengths;
