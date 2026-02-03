import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const NAV_ITEMS: string[] = [
    "Home",
    "Skills",
    "Architecture",
    "Work",
    "About",
    "Contact",
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  return (
    <motion.nav
      aria-label="Primary navigation"
      style={{ opacity: 1 }}
      className={`fixed w-screen top-0 z-50 px-6 py-4 ${
        theme === "dark" ? "bg-gray-950/80" : "bg-gray-50/80"
      } backdrop-blur-md border-b ${
        theme === "dark" ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#home"
          aria-label="Go to home section"
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <Code2 size={24} className="text-blue-600" />
          <span className="text-lg ml-1 bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Lalman
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <motion.button
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.toLocaleLowerCase())}
                className={`text-sm uppercase tracking-wider transition-colors duration-300 ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item}
              </motion.button>
            </li>
          ))}
          {/* theme toggle */}
          <motion.button
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`relative flex items-center w-16 h-7 rounded-full transition-all duration-900 
    ${theme === "dark" ? "bg-gray-600" : "bg-gray-500"}`}
          >
            <Sun
              size={16}
              className={`absolute left-2 transition-colors duration-300 `}
            />
            <Moon
              size={16}
              className={`absolute right-2 transition-colors duration-300`}
            />
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`absolute w-8 h-6 rounded-full 
      ${theme === "dark" ? "bg-gray-900 right-0.5" : "bg-white left-0.5"}`}
            />
          </motion.button>
        </ul>
        {/* Mobile theme toggle */}
        <div className="md:hidden flex items-center space-x-4 ">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`relative flex items-center w-16 h-7 rounded-full transition-all duration-900 
    ${theme === "dark" ? "bg-gray-600" : "bg-gray-500"}`}
          >
            <Sun
              size={16}
              className={`absolute left-2 transition-colors duration-300 `}
            />
            <Moon
              size={16}
              className={`absolute right-2 transition-colors duration-300`}
            />
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 200, damping: 7 }}
              className={`absolute w-7 h-5 rounded-full shadow-md 
      ${theme === "dark" ? "bg-gray-900 right-0.5" : "bg-white left-0.5"}`}
            />
          </motion.button>
          {/* Mobile Menu toggle Button */}
          <motion.button
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-colors duration-300 ${
              theme === "dark"
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            id="mobile-menu"
            role="menu"
            initial={{ opacity: 0, x: 50, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 50, y: -50 }}
            className={`md:hidden mt-4 p-4 rounded-lg ${
              theme === "dark" ? "bg-gray-900" : " bg-white"
            } border ${
              theme === "dark" ? "border-gray-800" : "border-gray-200"
            }`}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <motion.a
                  aria-label={`Go to ${item} section`}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors duration-300 ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
