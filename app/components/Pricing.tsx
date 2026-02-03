"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Cours individuel",
    price: "45",
    unit: "/ heure",
    description: "Idéal pour un suivi régulier avec un professeur dédié",
    features: [
      "Professeur attitré",
      "Cours en visio ou à domicile",
      "Programme personnalisé",
      "Exercices entre les séances",
      "Bilan mensuel",
    ],
    note: "Engagement minimum : 1 mois",
    popular: false,
    cta: "Réserver un essai gratuit",
  },
  {
    name: "Pack 10 heures",
    price: "400",
    unit: "soit 40€/h",
    description: "Le meilleur rapport qualité-prix pour progresser durablement",
    features: [
      "Tout le cours individuel",
      "10 heures à utiliser sur 3 mois",
      "Accès aux ressources en ligne",
      "Support WhatsApp avec le prof",
      "Correction d'exercices à distance",
      "Bilan détaillé de progression",
    ],
    note: "Valable 3 mois",
    popular: true,
    cta: "Choisir ce pack",
  },
  {
    name: "Stage vacances",
    price: "290",
    unit: "/ semaine",
    description: "15h intensives pour rattraper ou prendre de l'avance",
    features: [
      "5 jours, 3h par jour",
      "Groupe de 4 élèves max",
      "Programme ciblé sur vos lacunes",
      "Exercices corrigés chaque soir",
      "Bilan de fin de stage",
    ],
    note: "Prochains stages : Toussaint, Noël, Février, Pâques",
    popular: false,
    cta: "Voir les dates",
  },
];

export default function Pricing() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-24 bg-light-bg dark:bg-dark-bg relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00704A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-['Playfair_Display',serif] mb-6 text-dark-text dark:text-light-text">
            Tarifs{" "}
            <span className="gradient-text">transparents</span>
          </h2>
          <p className="text-lg text-dark-text/70 dark:text-light-text/70 max-w-2xl mx-auto">
            Pas de frais cachés, pas de mauvaises surprises. 
            Tous nos tarifs incluent la préparation des cours et le suivi entre les séances.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "bg-[#00704A] text-white shadow-xl shadow-[#00704A]/20 md:-mt-4 md:mb-0"
                  : "bg-white dark:bg-[#1a1a1a] shadow-lg"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="bg-[#D4AF37] text-[#00704A] text-center py-2 text-sm font-semibold">
                  Le plus choisi
                </div>
              )}

              <div className={`p-8 ${plan.popular ? "" : "pt-10"}`}>
                {/* Plan name */}
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    plan.popular
                      ? "text-white"
                      : "text-dark-text dark:text-light-text"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.popular
                      ? "text-white/70"
                      : "text-dark-text/60 dark:text-light-text/60"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-bold ${
                        plan.popular ? "text-white" : "text-[#00704A]"
                      }`}
                    >
                      {plan.price}€
                    </span>
                    <span
                      className={`text-sm ${
                        plan.popular
                          ? "text-white/60"
                          : "text-dark-text/50 dark:text-light-text/50"
                      }`}
                    >
                      {plan.unit}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular ? "bg-white/20" : "bg-[#00704A]/10"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.popular ? "text-white" : "text-[#00704A]"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          plan.popular
                            ? "text-white/80"
                            : "text-dark-text/70 dark:text-light-text/70"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Note */}
                <p
                  className={`text-xs mb-6 ${
                    plan.popular
                      ? "text-white/50"
                      : "text-dark-text/40 dark:text-light-text/40"
                  }`}
                >
                  {plan.note}
                </p>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full text-center py-3 rounded-full font-medium transition-all duration-300 ${
                    plan.popular
                      ? "bg-white text-[#00704A] hover:bg-[#D4AF37]"
                      : "bg-[#00704A] text-white hover:bg-[#005538]"
                  }`}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="bg-[#00704A]/5 dark:bg-[#00704A]/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-dark-text dark:text-light-text mb-3">
              Vous hésitez encore ?
            </h3>
            <p className="text-dark-text/60 dark:text-light-text/60 text-sm mb-4">
              Le premier cours est gratuit et sans engagement. On fait un diagnostic
              de votre niveau, on discute de vos objectifs, et vous décidez ensuite.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              className="inline-block text-[#00704A] dark:text-[#D4AF37] font-medium text-sm"
            >
              Réserver mon cours d&apos;essai gratuit →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
