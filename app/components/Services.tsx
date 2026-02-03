"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, Users, Calendar, CheckCircle, Video, Clock } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const services = [
  {
    icon: User,
    title: "Cours individuels",
    description:
      "Un professeur dédié qui s'adapte à votre rythme. Chaque séance est construite autour de vos difficultés spécifiques et de vos objectifs.",
    features: ["1h ou 1h30 par séance", "Programme personnalisé", "Exercices ciblés"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Users,
    title: "Cours en petit groupe",
    description:
      "Entre 3 et 5 élèves de même niveau. Idéal pour réviser à plusieurs, poser des questions et progresser ensemble à moindre coût.",
    features: ["3 à 5 élèves maximum", "Tarif réduit", "Émulation collective"],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Calendar,
    title: "Stages vacances",
    description:
      "Sessions intensives pendant les vacances scolaires. Rattraper un trimestre difficile ou prendre de l'avance sur le programme.",
    features: ["5 jours consécutifs", "3h par jour", "Bilan de fin de stage"],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const process = [
  {
    step: "01",
    title: "Diagnostic gratuit",
    description: "On évalue votre niveau actuel et on identifie les points à travailler en priorité.",
  },
  {
    step: "02",
    title: "Plan de travail",
    description: "Votre professeur construit un programme adapté à vos objectifs et votre emploi du temps.",
  },
  {
    step: "03",
    title: "Suivi continu",
    description: "Cours hebdomadaires avec exercices entre les séances et bilan mensuel de progression.",
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="services"
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
            NOS <span className="gradient-text">FORMULES</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-text-gray dark:text-light-text/70 max-w-2xl mx-auto leading-relaxed">
            Que vous ayez besoin d&apos;un suivi régulier ou d&apos;un coup de pouce ponctuel,
            nous avons une solution adaptée à votre situation.
          </p>
        </motion.div>

        {/* Service Cards - Pictabooth style */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-32"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative bg-white dark:bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-soft card-hover hover:shadow-soft-hover"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-108"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Gold icon badge - Pictabooth style */}
                <div className="absolute bottom-5 left-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-shine to-pure-gold rounded-2xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-7 h-7 text-rolex-green-dark" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold font-playfair mb-4 text-dark-text dark:text-light-text">
                  {service.title}
                </h3>
                <p className="font-cormorant text-text-gray dark:text-light-text/60 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center text-sm text-dark-text/70 dark:text-light-text/70"
                    >
                      <CheckCircle className="w-5 h-5 text-rolex-green mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* How it Works Section - Pictabooth Horizontal Style */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <h3 className="title-display text-3xl sm:text-4xl lg:text-5xl text-center mb-16 text-dark-text dark:text-light-text">
            COMMENT ÇA <span className="gradient-text">MARCHE</span>
          </h3>
          
          {/* 3 Column Horizontal Process Cards - Pill Shape */}
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="pill-card text-center flex flex-col items-center"
              >
                {/* Step label */}
                <span className="text-xs font-semibold tracking-[0.3em] text-white/60 uppercase mb-3">
                  ÉTAPE
                </span>
                {/* Gold numbered circle */}
                <div className="step-circle mb-6">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold font-playfair mb-4 text-white">
                  {item.title}
                </h4>
                <p className="font-cormorant text-white/80 text-lg leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-cream dark:bg-[#1a1a1a] rounded-3xl p-10 md:p-14"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="title-display text-2xl sm:text-3xl lg:text-4xl text-dark-text dark:text-light-text mb-6">
                EN LIGNE OU <span className="gradient-text">À DOMICILE</span>
              </h3>
              <p className="font-cormorant text-text-gray dark:text-light-text/80 mb-8 text-lg leading-relaxed">
                Nos professeurs se déplacent chez vous dans Paris et proche banlieue, 
                ou donnent cours en visioconférence via notre plateforme dédiée.
                Même qualité, même suivi.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 text-dark-text/80 dark:text-white/90">
                  <div className="w-10 h-10 bg-pure-gold/20 rounded-lg flex items-center justify-center">
                    <Video className="w-5 h-5 text-pure-gold" />
                  </div>
                  <span className="text-sm font-medium">Visio HD</span>
                </div>
                <div className="flex items-center gap-3 text-dark-text/80 dark:text-white/90">
                  <div className="w-10 h-10 bg-pure-gold/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-pure-gold" />
                  </div>
                  <span className="text-sm font-medium">7j/7 de 8h à 22h</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-rolex-green hover:bg-rolex-green-dark text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Réserver mon cours d&apos;essai
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
