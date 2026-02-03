"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";

const features = [
  "Professeur certifié et expérimenté",
  "Programme 100% personnalisé",
  "Cours à domicile ou en visio",
  "Exercices entre les séances",
  "Support WhatsApp avec le prof",
  "Bilan mensuel de progression",
  "Disponible 7j/7 de 8h à 22h",
  "Annulation gratuite 24h avant",
];

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="features"
      ref={ref}
      className="py-24 lg:py-32 bg-cream"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-dark-text">
            Tous nos cours incluent :
          </h2>
        </motion.div>

        {/* Features Grid - 2 columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid sm:grid-cols-2 gap-x-16 gap-y-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="w-5 h-5 rounded-full bg-rolex-green/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-rolex-green" />
              </div>
              <span className="text-dark-text text-base">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-dark-text hover:bg-rolex-green text-white font-medium px-10 py-4 rounded-md transition-all duration-300 text-sm tracking-wide uppercase"
          >
            Réserver un cours d&apos;essai
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
