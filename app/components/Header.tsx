"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#services", label: "Nos formules" },
  { href: "#gallery", label: "Programmes" },
  { href: "#testimonials", label: "Résultats" },
  { href: "#pricing", label: "Tarifs" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="flex items-center space-x-2">
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-bold font-playfair text-rolex-green dark:text-white"
            >
              Deborah<span className="gradient-text">-Corp</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-rolex-green-dark dark:text-white/90 hover:text-rolex-green dark:hover:text-pure-gold transition-colors duration-300 font-medium text-sm tracking-wide underline-grow"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 20 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-cream dark:bg-white/10 hover:bg-cream-dark dark:hover:bg-white/20 transition-colors"
              aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-pure-gold" />
              ) : (
                <Moon className="w-5 h-5 text-rolex-green" />
              )}
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:block bg-rolex-green hover:bg-rolex-green-dark text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              S&apos;inscrire
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-rolex-green dark:text-white"
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
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-cream dark:bg-dark-bg/98 backdrop-blur-lg border-t border-cream-dark dark:border-white/10"
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
                    className="block text-rolex-green-dark dark:text-white/90 hover:text-rolex-green dark:hover:text-pure-gold transition-colors font-medium py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-rolex-green text-white font-semibold px-6 py-3 rounded-lg text-center"
              >
                S&apos;inscrire Maintenant
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
