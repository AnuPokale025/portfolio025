import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm text-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          <h1
            className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            onClick={() => scrollToSection("hero")}
          >
            Aniket
          </h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer hover:text-blue-400 transition-colors font-medium"
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 space-y-3"
          >
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer hover:text-blue-400 transition-colors py-2 font-medium"
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.nav>
  );
}