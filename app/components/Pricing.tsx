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
      className="py-24 lg:py-32 bg-white dark:bg-dark-bg relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <h2 className="title-display text-4xl sm:text-5xl lg:text-6xl text-dark-text dark:text-light-text mb-6">
            TARIFS <span className="gradient-text">TRANSPARENTS</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-text-gray dark:text-light-text/70 max-w-2xl mx-auto leading-relaxed">
            Pas de frais cachés, pas de mauvaises surprises. 
            Tous nos tarifs incluent la préparation des cours et le suivi entre les séances.
          </p>
        </motion.div>

        {/* Pricing Cards - Pictabooth style */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className={`relative rounded-3xl overflow-hidden card-hover ${
                plan.popular
                  ? "bg-rolex-green text-white shadow-2xl md:-mt-6 md:mb-0"
                  : "bg-cream dark:bg-[#1a1a1a] shadow-soft hover:shadow-soft-hover"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="bg-gradient-to-r from-gold-shine to-pure-gold text-rolex-green-dark text-center py-3 text-sm font-semibold tracking-wide uppercase">
                  Le plus choisi
                </div>
              )}

              <div className={`p-10 ${plan.popular ? "" : "pt-12"}`}>
                {/* Plan name */}
                <h3
                  className={`text-xl font-semibold font-playfair mb-3 ${
                    plan.popular
                      ? "text-white"
                      : "text-dark-text dark:text-light-text"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`font-cormorant text-base mb-8 ${
                    plan.popular
                      ? "text-white/70"
                      : "text-text-gray dark:text-light-text/60"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-5xl font-bold font-playfair ${
                        plan.popular ? "text-white" : "gradient-text"
                      }`}
                    >
                      {plan.price}€
                    </span>
                    <span
                      className={`text-sm ${
                        plan.popular
                          ? "text-white/60"
                          : "text-text-gray dark:text-light-text/50"
                      }`}
                    >
                      {plan.unit}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-4">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular ? "bg-white/20" : "bg-rolex-green/10"
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 ${
                            plan.popular ? "text-white" : "text-rolex-green"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm leading-relaxed ${
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
                  className={`text-xs mb-8 ${
                    plan.popular
                      ? "text-white/50"
                      : "text-text-gray/60 dark:text-light-text/40"
                  }`}
                >
                  {plan.note}
                </p>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-white text-rolex-green hover:bg-pure-gold shadow-lg"
                      : "bg-rolex-green text-white hover:bg-rolex-green-dark shadow-md hover:shadow-lg"
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
          className="mt-20 text-center"
        >
          <div className="bg-cream dark:bg-[#1a1a1a] rounded-3xl p-10 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold font-playfair text-dark-text dark:text-light-text mb-4">
              Vous hésitez encore ?
            </h3>
            <p className="font-cormorant text-text-gray dark:text-light-text/60 text-lg mb-6 leading-relaxed">
              Le premier cours est gratuit et sans engagement. On fait un diagnostic
              de votre niveau, on discute de vos objectifs, et vous décidez ensuite.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              className="inline-block text-rolex-green dark:text-pure-gold font-medium underline-grow"
            >
              Réserver mon cours d&apos;essai gratuit →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
