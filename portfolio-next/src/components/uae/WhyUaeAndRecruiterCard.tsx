"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import {
  WHY_UAE_POINTS,
  RECRUITER_INFO,
  UAE_PHONE_DISPLAY,
} from "@/lib/uae-data";

const WhyUaeAndRecruiterCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      aria-labelledby="why-uae-heading"
      ref={ref}
      className="py-24 px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14">
        {/* Why UAE */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
            <span className="section-label">Why UAE</span>
          </div>
          <h2
            id="why-uae-heading"
            className="text-3xl font-bold leading-tight mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            A market worth
            <br />
            <span style={{ color: "var(--accent)" }}>building in</span>
          </h2>

          <ul className="space-y-6">
            {WHY_UAE_POINTS.map((point, i) => (
              <motion.li
                key={point.title}
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1 }}
              >
                <h3
                  className="text-sm font-semibold mb-1.5"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {point.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Recruiter Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="rounded-2xl p-8"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <div
            className="text-xs mb-6"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--accent)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Candidate Summary
          </div>

          <dl className="space-y-4 mb-6">
            {RECRUITER_INFO.map((field) => (
              <div key={field.label} className="flex items-center justify-between gap-4">
                <dt className="flex items-center gap-2">
                  <field.icon size={13} style={{ color: "var(--text-muted)" }} />
                  <span
                    className="text-xs"
                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.68rem" }}
                  >
                    {field.label}
                  </span>
                </dt>
                <dd
                  className="text-sm font-medium text-right"
                  style={{ color: "var(--text-primary)" }}
                >
                  {field.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="pt-6 space-y-3" style={{ borderTop: "1px solid var(--border)" }}>
            <a
              href="mailto:lalman.dev7@gmail.com"
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              <Mail size={14} style={{ color: "var(--accent)" }} />
              lalman.dev7@gmail.com
            </a>
            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}>
                PHONE
              </span>
              {UAE_PHONE_DISPLAY}
            </div>
            <a
              href="https://github.com/lalman-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              <FiGithub size={14} />
              github.com/lalman-dev
            </a>
            <a
              href="https://www.linkedin.com/in/lalman-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              <FiLinkedin size={14} />
              linkedin.com/in/lalman-dev
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUaeAndRecruiterCard;
