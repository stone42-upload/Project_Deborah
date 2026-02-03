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
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="#hero" className="inline-block mb-4">
              <span className="text-xl font-bold font-['Playfair_Display',serif] text-white">
                Deborah<span className="text-[#D4AF37]">-Corp</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Cours de mathématiques du collège au supérieur.
              Paris et Île-de-France.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Nos formules</h4>
            <ul className="space-y-2.5">
              {footerLinks.courses.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Levels */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Niveaux</h4>
            <ul className="space-y-2.5">
              {footerLinks.levels.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Deborah-Corp</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Légal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
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
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Deborah-Corp. Tous droits réservés.
            </p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors"
            >
              Retour en haut
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
