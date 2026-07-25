"use client";

import { motion } from "framer-motion";
import { AVAILABILITY_TAGS } from "@/lib/uae-data";

const AvailabilityBanner = () => {
  return (
    <section
      className="py-6 px-6 overflow-hidden"
      style={{
        background: "var(--accent)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {AVAILABILITY_TAGS.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            className="text-xs font-medium whitespace-nowrap"
            style={{
              fontFamily: "var(--font-mono)",
              color: "white",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              opacity: 0.95,
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default AvailabilityBanner;
