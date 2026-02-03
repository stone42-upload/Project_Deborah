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
      className="py-24 bg-[#00704A]/5 dark:bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00704A]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-['Playfair_Display',serif] mb-6 text-dark-text dark:text-light-text">
            Ce qu&apos;on travaille{" "}
            <span className="gradient-text">ensemble</span>
          </h2>
          <p className="text-lg text-dark-text/70 dark:text-light-text/70 max-w-2xl mx-auto">
            Du collège aux études supérieures, chaque niveau a ses défis.
            Nos professeurs connaissent les programmes et savent où les élèves bloquent.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#00704A] text-white shadow-lg shadow-[#00704A]/20"
                  : "bg-white dark:bg-[#1a1a1a] text-dark-text dark:text-light-text hover:bg-[#00704A]/10"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.id}
                layout
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="group bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedProgram(program)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#00704A]/10 dark:bg-[#00704A]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <program.icon className="w-6 h-6 text-[#00704A]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-text dark:text-light-text">
                      {program.title}
                    </h3>
                    <p className="text-sm text-[#00704A] font-medium">
                      {program.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-dark-text/60 dark:text-light-text/60 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {program.topics.slice(0, 3).map((topic, index) => (
                    <span
                      key={index}
                      className="text-xs bg-[#00704A]/10 dark:bg-[#00704A]/20 text-[#00704A] dark:text-[#D4AF37] px-2 py-1 rounded"
                    >
                      {topic}
                    </span>
                  ))}
                  {program.topics.length > 3 && (
                    <span className="text-xs text-dark-text/40 dark:text-light-text/40 px-2 py-1">
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
          className="text-center mt-12"
        >
          <p className="text-dark-text/60 dark:text-light-text/60 mb-4">
            Vous ne trouvez pas votre niveau ? On s&apos;adapte à tous les parcours.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block text-[#00704A] dark:text-[#D4AF37] font-medium underline-grow"
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
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedProgram(null)}
            >
              <X className="w-5 h-5" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-lg w-full bg-white dark:bg-[#1a1a1a] rounded-2xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#00704A] rounded-xl flex items-center justify-center">
                  <selectedProgram.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-text dark:text-light-text font-['Playfair_Display',serif]">
                    {selectedProgram.title}
                  </h3>
                  <p className="text-[#00704A] font-medium">{selectedProgram.subtitle}</p>
                </div>
              </div>
              
              <p className="text-dark-text/70 dark:text-light-text/70 mb-6 leading-relaxed">
                {selectedProgram.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-dark-text dark:text-light-text mb-3">
                  Notions travaillées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProgram.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="text-sm bg-[#00704A]/10 dark:bg-[#00704A]/20 text-[#00704A] dark:text-[#D4AF37] px-3 py-1.5 rounded-lg"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full bg-[#00704A] text-white text-center py-3 rounded-full font-medium hover:bg-[#005538] transition-colors"
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
