"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    number: "1",
    text: "Contactez-nous pour un diagnostic gratuit. On évalue votre niveau et on identifie vos besoins.",
  },
  {
    number: "2",
    text: "Votre professeur construit un programme personnalisé adapté à vos objectifs et votre emploi du temps.",
  },
  {
    number: "3",
    text: "Démarrez vos cours hebdomadaires avec un suivi continu et un bilan mensuel de progression.",
  },
];

export default function HowToBook() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="how-to-book"
      ref={ref}
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="title-display text-4xl sm:text-5xl lg:text-6xl text-dark-text">
            COMMENT ÇA MARCHE
          </h2>
        </motion.div>

        {/* Steps - Vertical layout with large numbers and pill capsules */}
        <div className="space-y-16 lg:space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center gap-8 lg:gap-16"
            >
              {/* Large Step Number */}
              <div className="flex-shrink-0">
                <span className="step-number">{step.number}</span>
              </div>

              {/* Pill-shaped Text Capsule */}
              <div className="pill-step flex-1">
                <p className="text-white text-base lg:text-lg leading-relaxed">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
