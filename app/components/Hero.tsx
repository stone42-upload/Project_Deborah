"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center bg-cream dark:bg-dark-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text Content (45%) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-left"
          >
            {/* Main Title */}
            <h1 className="title-display text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[100px] text-dark-text dark:text-light-text mb-4 gold-underline">
              RÉUSSIR
              <br />
              <span className="gradient-text">EN MATHS</span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-cormorant text-lg sm:text-xl text-text-gray dark:text-light-text/70 max-w-lg mt-12 leading-relaxed"
            >
              Deborah-Corp accompagne les élèves du collège au supérieur avec des cours
              de mathématiques individuels. Notre méthode : identifier vos lacunes,
              les combler, et vous donner confiance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4 mt-10"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-rolex-green hover:bg-rolex-green-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Réserver un cours d&apos;essai
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-pure-gold text-rolex-green dark:text-pure-gold font-medium px-8 py-4 rounded-lg text-lg hover:bg-pure-gold/10 transition-all duration-300"
              >
                Comment ça marche ?
              </motion.a>
            </motion.div>

            {/* Social proof - Stats in 3 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-cream-dark dark:border-white/10"
            >
              {[
                { value: "+3.2", label: "points de moyenne" },
                { value: "847", label: "élèves accompagnés" },
                { value: "94%", label: "de réussite" },
              ].map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text font-playfair">
                    {stat.value}
                  </div>
                  <div className="text-text-gray dark:text-light-text/60 text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image (55%) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            {/* Vertical Date */}
            <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
              <div
                className="text-xs font-medium tracking-[0.3em] text-text-gray dark:text-light-text/50 uppercase"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                JAN. 2026
              </div>
            </div>

            {/* Main Image */}
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
                style={{ boxShadow: "0 40px 80px rgba(0, 112, 74, 0.15)" }}
              >
                <div
                  className="aspect-[4/5] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
                  }}
                  role="img"
                  aria-label="Étudiants en cours de mathématiques"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-rolex-green/0 group-hover:bg-rolex-green/10 transition-colors duration-500" />
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-gold-shine to-pure-gold rounded-2xl opacity-80 -z-10" />
              <div className="absolute -top-6 -right-6 w-16 h-16 border-2 border-rolex-green/30 rounded-xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-rolex-green/60 hover:text-pure-gold transition-colors cursor-pointer"
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
