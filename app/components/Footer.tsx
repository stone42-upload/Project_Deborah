"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react";

const footerLinks = {
  courses: [
    { label: "Cours individuels", href: "#services" },
    { label: "Cours en groupe", href: "#services" },
    { label: "Stages vacances", href: "#services" },
    { label: "Préparation Bac", href: "#gallery" },
  ],
  levels: [
    { label: "Collège", href: "#gallery" },
    { label: "Lycée", href: "#gallery" },
    { label: "Supérieur", href: "#gallery" },
    { label: "Voir tous les niveaux", href: "#gallery" },
  ],
  company: [
    { label: "Nos professeurs", href: "#" },
    { label: "Témoignages", href: "#testimonials" },
    { label: "Tarifs", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "CGV", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-rolex-green-dark">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="#hero" className="inline-block mb-6">
              <span className="text-2xl font-bold font-playfair text-white">
                Deborah<span className="gradient-text">-Corp</span>
              </span>
            </Link>
            <p className="font-cormorant text-white/60 leading-relaxed mb-6">
              Cours de mathématiques du collège au supérieur.
              Paris et Île-de-France.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Nos formules</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-pure-gold text-sm transition-colors underline-grow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Levels */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Niveaux</h4>
            <ul className="space-y-3">
              {footerLinks.levels.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-pure-gold text-sm transition-colors underline-grow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Deborah-Corp</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-pure-gold text-sm transition-colors underline-grow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-pure-gold text-sm transition-colors underline-grow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Deborah-Corp. Tous droits réservés.
            </p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 text-white/40 hover:text-pure-gold text-sm transition-colors"
            >
              Retour en haut
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <ArrowUp className="w-4 h-4" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
