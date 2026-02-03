"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToNextSection = () => {
    document.getElementById("how-to-book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen bg-cream overflow-hidden pt-32 lg:pt-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Main Title - Centered at top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h1 className="title-display text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[100px] text-rolex-green tracking-wide">
            RÉUSSIR EN MATHS
          </h1>
        </motion.div>

        {/* Vertical Badge - Est. 2023 */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xs font-medium tracking-[0.3em] text-text-gray uppercase"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            EST. 2023
          </motion.div>
        </div>

        {/* Asymmetric Image Composition */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-6">
          {/* Secondary Image - Left, smaller */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative lg:w-[30%] lg:mt-16 order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div
                className="aspect-[3/4] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')",
                }}
                role="img"
                aria-label="Étudiants en cours de mathématiques"
              />
            </div>
          </motion.div>

          {/* Main Image - Center-right, larger */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative lg:w-[55%] order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div
                className="aspect-[4/3] lg:aspect-[16/10] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
                }}
                role="img"
                aria-label="Professeur enseignant les mathématiques"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Subtitle - Bottom center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-sm sm:text-base tracking-[0.2em] uppercase text-dark-text font-medium">
            COURS PARTICULIERS DE MATHÉMATIQUES · PARIS & ÎLE-DE-FRANCE
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNextSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-rolex-green/60 hover:text-rolex-green transition-colors cursor-pointer"
        aria-label="Défiler vers le bas"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}
