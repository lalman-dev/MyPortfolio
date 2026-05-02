import { useState, useRef, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { SOCIAL_LINKS } from "../utils/data";
import SuccessModel from "./SuccessModel";
import emailjs from "emailjs-com";

type FormKeys = "name" | "email" | "message";
interface FormData {
  name: string;
  email: string;
  message: string;
}

const inputStyles = () => ({
  background: "var(--bg-primary)",
  border: "1px solid var(--border)",
  color: "var(--text-primary)",
  fontFamily: "var(--font-body)",
  outline: "none",
  transition: "border-color 0.2s",
});

const ContactSection = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const handleInputChange = (key: FormKeys, value: string) =>
    setFormData({ ...formData, [key]: value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
      );
      if (result.status === 200) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const CONTACT_INFO = [
    { icon: MapPin, label: "Location", value: "Uttar Pradesh, India" },
    { icon: Mail, label: "Email", value: "lalman.dev7@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91-8858274145" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className="py-28 px-6"
      style={{ background: "var(--bg-secondary)" }}
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
            <span className="section-label">06 / Contact</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              id="contact-heading"
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              Let's Build
              <br />
              <span style={{ color: "var(--accent)" }}>Something</span>
            </h2>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#22c55e" }}
              />
              <span
                className="text-sm font-medium"
                style={{
                  color: "#22c55e",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                }}
              >
                Available for opportunities
              </span>
            </div>
          </div>
        </motion.div>

        <div className="divider mb-14" />

        <div className="grid lg:grid-cols-[1fr_380px] gap-14">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label
                    className="block text-xs mb-2"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    required
                    placeholder="Lalman"
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={{
                      ...inputStyles(),
                      borderColor:
                        focused === "name" ? "var(--accent)" : "var(--border)",
                    }}
                  />
                </div>
                {/* Email */}
                <div>
                  <label
                    className="block text-xs mb-2"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={{
                      ...inputStyles(),
                      borderColor:
                        focused === "email" ? "var(--accent)" : "var(--border)",
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-xs mb-2"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    letterSpacing: "0.08em",
                  }}
                >
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  required
                  rows={6}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className="w-full px-4 py-3 rounded-xl text-sm resize-none"
                  style={{
                    ...inputStyles(),
                    borderColor:
                      focused === "message" ? "var(--accent)" : "var(--border)",
                  }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white text-sm font-semibold transition-all disabled:opacity-60"
                style={{
                  background: "var(--accent)",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.04em",
                }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right — Info */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact info */}
            <div>
              <h3
                className="text-xs mb-4"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Contact Info
              </h3>
              <div className="space-y-3">
                {CONTACT_INFO.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "var(--accent-subtle)" }}
                    >
                      <info.icon size={14} style={{ color: "var(--accent)" }} />
                    </div>
                    <div>
                      <div
                        className="text-xs"
                        style={{
                          color: "var(--text-muted)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                        }}
                      >
                        {info.label}
                      </div>
                      <div
                        className="text-sm font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3
                className="text-xs mb-4"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Find Me Online
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 px-3 py-3 rounded-xl text-sm transition-all"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--accent)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--border)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--text-secondary)";
                    }}
                  >
                    <social.icon size={14} />
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Note */}
            <div
              className="p-4 rounded-xl text-xs leading-relaxed"
              style={{
                background: "var(--accent-subtle)",
                border: "1px solid var(--accent)",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-mono)",
                borderColor: "var(--accent)",
                opacity: 0.8,
              }}
            >
              Prefer clear problem statements and async comms. Usually respond
              within 24-48 hours.
            </div>
          </motion.div>
        </div>
      </div>

      <SuccessModel
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
        theme={theme}
      />
    </section>
  );
};

export default ContactSection;
