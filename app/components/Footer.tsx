"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowUp } from "lucide-react";

const areasServed = [
  "Paris",
  "Boulogne-Billancourt",
  "Neuilly-sur-Seine",
  "Levallois-Perret",
  "Saint-Cloud",
  "Versailles",
  "Vincennes",
  "Saint-Mandé",
];

const footerLinks = [
  { label: "NOUS CONTACTER", href: "#contact" },
  { label: "NOS RÉSEAUX", href: "#" },
  { label: "FAQ", href: "#" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-rolex-green">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Logo */}
          <div>
            <Link href="#hero" className="inline-block mb-6">
              {/* Logo Icon */}
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                <span className="text-3xl font-bold font-playfair text-rolex-green">D</span>
              </div>
              {/* Logo Text */}
              <span className="text-lg font-semibold tracking-[0.15em] uppercase text-white">
                DEBORAH-CORP
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mt-4">
              Cours particuliers de mathématiques du collège au supérieur.
              Des professeurs passionnés pour des résultats concrets.
            </p>
          </div>

          {/* Right Column - Areas Served */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-white" />
              <h4 className="text-white font-medium uppercase tracking-wider text-sm">
                Zones d&apos;intervention
              </h4>
            </div>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              {areasServed.map((area, index) => (
                <li key={index} className="text-white/70 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Links Row */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wider uppercase transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Deborah-Corp. Tous droits réservés.
            </p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 text-white/40 hover:text-white text-sm transition-colors"
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
