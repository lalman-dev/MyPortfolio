import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PRINCIPLES = [
  {
    num: "01",
    title: "Separation of Concerns",
    description:
      "UI components, state management, and data-fetching logic are clearly separated to keep the codebase predictable and easy to maintain.",
    example:
      "In my Hacker News Portal, I separated server-rendered data fetching from client-side search and pagination logic, keeping UI components focused and reusable.",
  },
  {
    num: "02",
    title: "Rendering Strategy First",
    description:
      "I intentionally choose between SSR, CSR, or hybrid rendering based on performance, SEO, and user experience requirements.",
    example:
      "For the Hacker News Portal, I used SSR for initial page load and SEO, while handling search and interactions on the client to keep the UI fast and responsive.",
  },
  {
    num: "03",
    title: "Predictable State & Data Flow",
    description:
      "I prefer explicit, predictable state updates to avoid hidden side effects and fragile UI behavior.",
    example:
      "In AI Resume Studio, I designed multi-step form flows with controlled state transitions to prevent data loss and inconsistent UI states.",
  },
  {
    num: "04",
    title: "Resilient UX by Default",
    description:
      "Loading, error, and empty states are treated as first-class UI requirements, not edge cases.",
    example:
      "Both projects include loading skeletons, error boundaries, and empty states to gracefully handle unreliable APIs and slow network conditions.",
  },
  {
    num: "05",
    title: "Scalability over Cleverness",
    description:
      "I favor simple, boring solutions that scale well with growing features and team size.",
    example:
      "Instead of over-abstracting components, I focused on clear component boundaries and readable patterns that would be easy for another developer to extend.",
  },
];

const ArchitecturePrinciples = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="architecture"
      ref={sectionRef}
      aria-labelledby="architecture-heading"
      className="py-28 px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
            <span className="section-label">03 / Architecture</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              id="architecture-heading"
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              How I Think
              <br />
              <span style={{ color: "var(--accent)" }}>About Systems</span>
            </h2>
            <p
              className="max-w-sm text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Principles that guide my decisions when designing frontend systems
              for real-world, production environments.
            </p>
          </div>
        </motion.div>

        <div className="divider mb-0" />

        {/* Principles as numbered rows */}
        <ul>
          {PRINCIPLES.map((item, i) => (
            <motion.li
              key={item.num}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div
                className="grid grid-cols-[auto_1fr] lg:grid-cols-[80px_1fr_1fr] gap-6 lg:gap-10 py-8 transition-colors duration-300"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                {/* Number */}
                <div
                  className="font-bold text-sm pt-0.5 w-10"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--text-muted)")
                  }
                >
                  {item.num}
                </div>

                {/* Title + description */}
                <div>
                  <h3
                    className="font-semibold text-base mb-2 group-hover:text-(--accent) transition-colors"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Example — hidden on mobile, shown on lg */}
                <div className="hidden lg:block">
                  <div
                    className="text-xs mb-1 uppercase tracking-widest"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent)",
                    }}
                  >
                    Real-world example
                  </div>
                  <p
                    className="text-sm leading-relaxed italic"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.example}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ArchitecturePrinciples;
