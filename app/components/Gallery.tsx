"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, GraduationCap, TrendingUp, FileText, Users } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const categories = [
  { id: "all", label: "Tous niveaux" },
  { id: "college", label: "Collège" },
  { id: "lycee", label: "Lycée" },
  { id: "superieur", label: "Supérieur" },
];

const programs = [
  {
    id: 1,
    category: "college",
    icon: FileText,
    title: "6ème - 5ème",
    subtitle: "Consolider les bases",
    description: "Fractions, nombres relatifs, géométrie plane, proportionnalité. On reprend les fondamentaux pour partir sur de bonnes bases.",
    topics: ["Calcul mental", "Fractions", "Géométrie", "Problèmes"],
  },
  {
    id: 2,
    category: "college",
    icon: TrendingUp,
    title: "4ème - 3ème",
    subtitle: "Préparer le Brevet",
    description: "Équations, fonctions, théorèmes de géométrie. Préparation méthodique au Brevet avec exercices types et annales.",
    topics: ["Équations", "Pythagore/Thalès", "Fonctions", "Statistiques"],
  },
  {
    id: 3,
    category: "lycee",
    icon: GraduationCap,
    title: "Seconde",
    subtitle: "Réussir la transition",
    description: "Le saut collège-lycée est souvent difficile. On travaille les nouvelles notions et la rigueur attendue.",
    topics: ["Fonctions", "Vecteurs", "Algorithmique", "Probabilités"],
  },
  {
    id: 4,
    category: "lycee",
    icon: TrendingUp,
    title: "Première - Spé Maths",
    subtitle: "Maîtriser le programme",
    description: "Suites, dérivation, trigonométrie. Un programme dense qui nécessite un travail régulier et méthodique.",
    topics: ["Suites", "Dérivation", "Trigonométrie", "Produit scalaire"],
  },
  {
    id: 5,
    category: "lycee",
    icon: GraduationCap,
    title: "Terminale - Bac",
    subtitle: "Décrocher la mention",
    description: "Intégrales, limites, probabilités continues. Préparation intensive au Bac avec simulations et corrigés détaillés.",
    topics: ["Intégrales", "Limites", "Loi normale", "Géométrie dans l'espace"],
  },
  {
    id: 6,
    category: "superieur",
    icon: Users,
    title: "Prépa / Licence",
    subtitle: "Viser l'excellence",
    description: "Algèbre linéaire, analyse, probabilités avancées. Accompagnement pour les étudiants en CPGE, L1, L2 et écoles d'ingénieurs.",
    topics: ["Algèbre linéaire", "Analyse", "Probabilités", "Équations différentielles"],
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredPrograms =
    activeCategory === "all"
      ? programs
      : programs.filter((item) => item.category === activeCategory);

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-24 lg:py-32 bg-cream dark:bg-dark-bg relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="title-display text-4xl sm:text-5xl lg:text-6xl text-dark-text dark:text-light-text mb-6">
            NOS <span className="gradient-text">PROGRAMMES</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-text-gray dark:text-light-text/70 max-w-2xl mx-auto leading-relaxed">
            Du collège aux études supérieures, chaque niveau a ses défis.
            Nos professeurs connaissent les programmes et savent où les élèves bloquent.
          </p>
        </motion.div>

        {/* Filter Buttons - Pictabooth style */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-rolex-green text-white shadow-lg"
                  : "bg-white dark:bg-[#1a1a1a] text-dark-text dark:text-light-text hover:bg-rolex-green/10 shadow-md"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Programs Grid - Improved card styling */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="group bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 cursor-pointer shadow-soft card-hover hover:shadow-soft-hover"
                onClick={() => setSelectedProgram(program)}
              >
                <div className="flex items-start gap-5 mb-6">
                  {/* Gold icon badge */}
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-shine to-pure-gold rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <program.icon className="w-7 h-7 text-rolex-green-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-playfair text-dark-text dark:text-light-text">
                      {program.title}
                    </h3>
                    <p className="text-sm text-rolex-green font-medium mt-1">
                      {program.subtitle}
                    </p>
                  </div>
                </div>
                <p className="font-cormorant text-text-gray dark:text-light-text/60 text-lg leading-relaxed mb-6">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {program.topics.slice(0, 3).map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="text-xs bg-rolex-green/10 dark:bg-rolex-green/20 text-rolex-green dark:text-pure-gold px-3 py-1.5 rounded-full font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                  {program.topics.length > 3 && (
                    <span className="text-xs text-text-gray dark:text-light-text/40 px-3 py-1.5">
                      +{program.topics.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <p className="font-cormorant text-text-gray dark:text-light-text/60 text-lg mb-4">
            Vous ne trouvez pas votre niveau ? On s&apos;adapte à tous les parcours.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            className="inline-block text-rolex-green dark:text-pure-gold font-medium underline-grow"
          >
            Parlez-nous de votre situation →
          </motion.a>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedProgram(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedProgram(null)}
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-lg w-full bg-white dark:bg-[#1a1a1a] rounded-3xl p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-shine to-pure-gold rounded-2xl flex items-center justify-center shadow-lg">
                  <selectedProgram.icon className="w-8 h-8 text-rolex-green-dark" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-text dark:text-light-text font-playfair">
                    {selectedProgram.title}
                  </h3>
                  <p className="text-rolex-green font-medium">{selectedProgram.subtitle}</p>
                </div>
              </div>
              
              <p className="font-cormorant text-text-gray dark:text-light-text/70 text-lg mb-8 leading-relaxed">
                {selectedProgram.description}
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-dark-text dark:text-light-text mb-4 uppercase tracking-wide">
                  Notions travaillées
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProgram.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="text-sm bg-rolex-green/10 dark:bg-rolex-green/20 text-rolex-green dark:text-pure-gold px-4 py-2 rounded-full font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full bg-rolex-green text-white text-center py-4 rounded-xl font-medium hover:bg-rolex-green-dark transition-colors shadow-lg"
                onClick={() => setSelectedProgram(null)}
              >
                Demander un cours d&apos;essai
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
