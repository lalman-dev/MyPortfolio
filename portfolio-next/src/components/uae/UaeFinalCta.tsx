"use client";

import { motion } from "framer-motion";
import { Mail, Download, MessageCircle } from "lucide-react";
import { UAE_WHATSAPP_URL } from "@/lib/uae-data";

const UaeFinalCta = () => {
  return (
    <section className="py-28 px-6" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          Hiring frontend engineers
          <br />
          <span style={{ color: "var(--accent)" }}>in the UAE?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-sm leading-relaxed mb-10 max-w-lg mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Open to discussing how I can contribute to your engineering team —
          available for a call, an interview, or relocation on your timeline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="mailto:lalman.dev7@gmail.com?subject=UAE%20Opportunity"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-medium"
            style={{ background: "var(--accent)", fontFamily: "var(--font-display)" }}
          >
            <Mail size={15} />
            Email Me
          </motion.a>
          <motion.a
            href={UAE_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              background: "var(--bg-card)",
              fontFamily: "var(--font-display)",
            }}
          >
            <MessageCircle size={15} />
            WhatsApp
          </motion.a>
          <motion.a
            href="/lalman-resume.pdf"
            download
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              background: "var(--bg-card)",
              fontFamily: "var(--font-display)",
            }}
          >
            <Download size={15} />
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default UaeFinalCta;
