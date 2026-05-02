import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const links = [
    { icon: FiGithub, href: "https://github.com/lalman-dev", label: "GitHub" },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/lalman-dev/",
      label: "LinkedIn",
    },
    { icon: FaXTwitter, href: "https://x.com/imchaudhary2", label: "Twitter" },
    { icon: Mail, href: "mailto:lalman.dev7@gmail.com", label: "Email" },
  ];

  return (
    <footer
      id="footer"
      className="px-6 py-10"
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + credit */}
          <div className="flex items-center gap-4">
            <div
              className="w-7 h-7 rounded-sm flex items-center justify-center text-white text-xs font-bold"
              style={{
                background: "var(--accent)",
                fontFamily: "var(--font-display)",
              }}
            >
              L
            </div>
            <div>
              <div
                className="font-semibold text-sm"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text-primary)",
                }}
              >
                lalman.dev
              </div>
              <div
                className="text-xs"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  fontSize: "0.65rem",
                }}
              >
                © {new Date().getFullYear()} · Built with React + TypeScript
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {links.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -2 }}
                className="p-2 rounded-lg transition-colors"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                  background: "var(--bg-card)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--accent)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--text-muted)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border)";
                }}
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs transition-all"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
              background: "var(--bg-card)",
              fontFamily: "var(--font-mono)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-muted)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border)";
            }}
          >
            <ArrowUp size={12} />
            Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
