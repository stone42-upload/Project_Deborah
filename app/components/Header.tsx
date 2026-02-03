"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Cours Individuels" },
  { href: "#how-to-book", label: "Comment ça marche" },
  { href: "#features", label: "Nos Avantages" },
  { href: "#gallery", label: "Programmes" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg py-4"
          : "bg-cream py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: Logo centered, CTA on right */}
        <div className="flex items-center justify-between mb-4">
          {/* Spacer for centering */}
          <div className="hidden lg:block w-32" />
          
          {/* Centered Logo */}
          <Link href="#hero" className="flex flex-col items-center">
            {/* Logo Icon */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 bg-white border-2 border-rolex-green rounded-lg flex items-center justify-center mb-2 shadow-sm"
            >
              <span className="text-2xl font-bold font-playfair text-rolex-green">D</span>
            </motion.div>
            {/* Logo Text */}
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-dark-text">
              DEBORAH-CORP
            </span>
          </Link>

          {/* CTA Button - Right side */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:block bg-rolex-green hover:bg-rolex-green-dark text-white font-medium px-7 py-2.5 rounded-md transition-all duration-300 text-sm tracking-wide"
            >
              CONTACT
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-dark-text"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Desktop Navigation - Centered below logo */}
        <nav className="hidden lg:flex items-center justify-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-dark-text hover:text-rolex-green transition-colors duration-300 font-medium text-sm tracking-wide underline-grow"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-cream border-t border-cream-dark"
          >
            <nav className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-dark-text hover:text-rolex-green transition-colors font-medium py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-rolex-green text-white font-semibold px-6 py-3 rounded-md text-center"
              >
                Réserver un cours
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
