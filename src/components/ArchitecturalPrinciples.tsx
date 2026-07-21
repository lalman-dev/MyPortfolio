import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PRINCIPLES = [
  {
    num: "01",
    title: "Separation of Concerns",
    description:
      "I separate presentation, business logic, data access, and infrastructure concerns to keep applications modular, testable, and easy to scale.",
    example:
      "In my Hacker News Portal, I separated server-rendered data fetching from client-side search and pagination logic, keeping UI components focused and reusable.",
  },
  {
    num: "02",
    title: "Performance by Design",
    description:
      "I intentionally choose between SSR, CSR, or hybrid rendering based on performance, SEO, and user experience requirements.",
    example:
      "The Hacker News Portal combines server rendering for fast initial loads and SEO with client-side interactivity for filtering and searching.",
  },
  {
    num: "03",
    title: "Reliable State & Data Flow",
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
    title: "Build for Growth",
    description:
      "I prioritize maintainable architecture, reusable components, and straightforward patterns that support long-term product evolution and team collaboration.",
    example:
      "Projects are organized using reusable modules and consistent folder structures so additional features can be added without major refactoring.",
  },
  {
    num: "06",
    title: "End-to-End Ownership",
    description:
      "I enjoy building complete products—from responsive user interfaces and backend APIs to authentication, deployment, and AI integrations.",

    example:
      "My recent projects include frontend development, backend services, database design, authentication, and AI-powered workflows delivered as complete applications.",
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
              Principles that guide how I architect, build, and scale modern full-stack applications—from frontend interfaces to backend services and AI-powered workflows.
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
                    Applied In
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
