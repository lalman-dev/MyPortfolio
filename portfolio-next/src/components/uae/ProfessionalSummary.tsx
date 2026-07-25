"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProfessionalSummary = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-labelledby="summary-heading"
      className="py-24 px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
            <span className="section-label">Professional Summary</span>
          </div>
          <p
            className="text-xl md:text-2xl leading-relaxed"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              color: "var(--text-primary)",
            }}
          >
            A frontend-focused Full Stack Engineer specializing in
            production-grade web applications built with React, Next.js,
            and TypeScript, extended with Node.js, Express, and MongoDB
            where a product requires full-stack ownership. Recent work
            spans AI-powered application interfaces, authenticated
            multi-step workflows, and rendering-strategy decisions — SSR
            versus CSR — made deliberately against product requirements
            rather than by framework default. Experienced in owning a
            feature end-to-end: interface, state, API, and deployment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
