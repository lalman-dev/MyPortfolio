import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCheck, X } from "lucide-react";

interface SuccessModelProps {
  showSuccess: boolean;
  setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  theme: "dark" | "light";
}

const SuccessModel: React.FC<SuccessModelProps> = ({
  showSuccess,
  setShowSuccess,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showSuccess) return;
    modalRef.current?.focus();
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setShowSuccess(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showSuccess, setShowSuccess]);

  return (
    <AnimatePresence>
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
          onClick={() => setShowSuccess(false)}
        >
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
            aria-describedby="success-description"
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 16 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="relative w-full max-w-sm rounded-2xl p-8 outline-none"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              aria-label="Close"
              onClick={() => setShowSuccess(false)}
              className="absolute right-4 top-4 p-1.5 rounded-lg transition-colors"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--text-muted)")
              }
            >
              <X size={15} />
            </button>

            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                delay: 0.1,
                stiffness: 260,
                damping: 18,
              }}
              className="mb-6 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: "var(--accent-subtle)",
                border: "1px solid var(--accent)",
              }}
            >
              <CheckCheck size={22} style={{ color: "var(--accent)" }} />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
            >
              <div
                className="mb-1 text-xs"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--accent)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Message sent
              </div>
              <h3
                id="success-title"
                className="text-xl font-bold mb-3"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text-primary)",
                }}
              >
                You're in my inbox.
              </h3>
              <p
                id="success-description"
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Thanks for reaching out. I'll read your message and get back to
                you within 24–48 hours.
              </p>
            </motion.div>

            {/* Divider + close CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="mt-7 pt-5"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowSuccess(false)}
                className="w-full py-2.5 rounded-xl text-white text-sm font-semibold"
                style={{
                  background: "var(--accent)",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.03em",
                }}
              >
                Got it
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModel;
