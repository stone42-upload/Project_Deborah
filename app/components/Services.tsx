"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, Users, Calendar, Clock, CheckCircle, Video } from "lucide-react";
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
    title: "Séances régulières",
    description: "Cours hebdomadaires avec exercices entre les séances pour ancrer les acquis.",
  },
  {
    step: "04",
    title: "Suivi des progrès",
    description: "Bilan mensuel envoyé aux parents avec les points travaillés et les prochaines étapes.",
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 bg-light-bg dark:bg-dark-bg relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#D4AF37]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-[#00704A]/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-['Playfair_Display',serif] mb-6 text-dark-text dark:text-light-text">
            Trouvez la formule qui vous{" "}
            <span className="gradient-text">convient</span>
          </h2>
          <p className="text-lg text-dark-text/70 dark:text-light-text/70 max-w-2xl mx-auto">
            Que vous ayez besoin d&apos;un suivi régulier ou d&apos;un coup de pouce ponctuel,
            nous avons une solution adaptée à votre situation.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-[#00704A] rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold font-['Playfair_Display',serif] mb-3 text-dark-text dark:text-light-text">
                  {service.title}
                </h3>
                <p className="text-dark-text/60 dark:text-light-text/60 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center text-sm text-dark-text/70 dark:text-light-text/70"
                    >
                      <CheckCircle className="w-4 h-4 text-[#00704A] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00704A]/30 rounded-2xl transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-center mb-12 text-dark-text dark:text-light-text">
            Comment ça se passe ?
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="text-5xl font-bold text-[#00704A]/10 dark:text-[#00704A]/20 font-['Playfair_Display',serif] mb-2">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-dark-text dark:text-light-text">
                  {item.title}
                </h4>
                <p className="text-dark-text/60 dark:text-light-text/60 text-sm leading-relaxed">
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
          className="bg-[#00704A] rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-white mb-4">
                Cours en ligne ou à domicile
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Nos professeurs se déplacent chez vous dans Paris et proche banlieue, 
                ou donnent cours en visioconférence via notre plateforme dédiée.
                Même qualité, même suivi.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white/90">
                  <Video className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm">Visio HD</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm">7j/7 de 8h à 22h</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block shimmer-btn text-[#00704A] font-semibold px-8 py-4 rounded-full transition-all duration-300"
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
