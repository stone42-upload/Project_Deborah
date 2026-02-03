"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { fadeInUp } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Mathilde R.",
    role: "Élève de Terminale",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content:
      "J'avais 8 de moyenne en maths et j'étais persuadée que ce n'était pas fait pour moi. Après 6 mois avec mon prof, j'ai eu 15 au Bac. Ce qui a changé : il m'a appris à comprendre au lieu d'apprendre par cœur.",
    result: "8 → 15 au Bac",
    duration: "6 mois de suivi",
  },
  {
    id: 2,
    name: "Parents de Lucas T.",
    role: "Élève de 3ème",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content:
      "Lucas bloquait sur les équations depuis la 4ème. Sa professeure a pris le temps de reprendre les bases avec lui, sans jugement. Il a eu 16/20 en maths au Brevet alors qu'on visait juste la moyenne.",
    result: "16/20 au Brevet",
    duration: "4 mois de suivi",
  },
  {
    id: 3,
    name: "Sarah K.",
    role: "Étudiante en L1 Éco",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content:
      "Les stats à la fac, c'était une autre planète par rapport au lycée. J'ai failli abandonner. Mon tuteur m'a aidée à déconstruire les énoncés et à trouver ma méthode. J'ai validé mon semestre avec 14.",
    result: "Semestre validé : 14/20",
    duration: "1 semestre",
  },
  {
    id: 4,
    name: "Antoine M.",
    role: "Élève de Première Spé Maths",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content:
      "Je voulais garder la spé maths mais mes notes ne suivaient pas. En 3 mois, j'ai comblé mes lacunes sur les fonctions et les suites. Je suis passé de 9 à 14 de moyenne.",
    result: "9 → 14 de moyenne",
    duration: "3 mois de suivi",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 lg:py-32 bg-rolex-green relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <h2 className="title-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            ILS ONT <span className="gradient-text">PROGRESSÉ</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Des résultats concrets, mesurables. Voici ce que nos élèves et leurs parents en disent.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div 
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="bg-rolex-green-dark/50 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/10"
            >
              {/* Quote Icon */}
              <div className="mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-gold-shine to-pure-gold rounded-2xl flex items-center justify-center">
                  <Quote className="w-6 h-6 text-rolex-green-dark" />
                </div>
              </div>

              {/* Content */}
              <blockquote className="font-cormorant text-xl md:text-2xl text-white/90 leading-relaxed mb-10">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </blockquote>

              {/* Result badge */}
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-gradient-to-r from-gold-shine to-pure-gold text-rolex-green-dark text-sm font-semibold px-4 py-2 rounded-full">
                  {testimonials[currentIndex].result}
                </span>
                <span className="bg-white/10 text-white/80 text-sm px-4 py-2 rounded-full">
                  {testimonials[currentIndex].duration}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-5">
                <div
                  className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-pure-gold/40"
                  style={{
                    backgroundImage: `url('${testimonials[currentIndex].avatar}')`,
                  }}
                  role="img"
                  aria-label={`Photo de ${testimonials[currentIndex].name}`}
                />
                <div>
                  <div className="font-semibold text-white font-playfair text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Indicators */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-pure-gold"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Stats - Pictabooth style */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-white/10 pt-16"
        >
          {[
            { value: "+3.2", label: "points gagnés en moyenne" },
            { value: "847", label: "élèves accompagnés" },
            { value: "94%", label: "de réussite au Bac" },
            { value: "89%", label: "recommandent Deborah-Corp" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text font-playfair">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
