"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const headlines = useMemo(() => [
    "Comprendre les maths",
    "Progresser à son rythme",
    "Réussir ses examens",
  ], []);

  useEffect(() => {
    const currentText = headlines[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % headlines.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, headlines]);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00704A]/90 via-[#00704A]/70 to-[#0A0A0A]/95" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37]/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: "100%",
              opacity: 0,
            }}
            animate={{
              y: "-10%",
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Typewriter Headline */}
          <div className="h-24 sm:h-32 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Playfair_Display',serif] text-white">
              {displayText}
              <span className="animate-pulse text-[#D4AF37]">|</span>
            </h1>
          </div>

          {/* Subheadline - Clear value proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Deborah-Corp accompagne les élèves du collège au supérieur avec des cours
            de mathématiques individuels. Notre méthode : identifier vos lacunes,
            les combler, et vous donner confiance.
          </motion.p>

          {/* Social proof - Specific numbers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-16 pt-4"
          >
            {[
              { value: "+3.2", label: "points de moyenne gagnés" },
              { value: "847", label: "élèves accompagnés depuis 2019" },
              { value: "94%", label: "de réussite au Bac" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text font-['Playfair_Display',serif]">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm mt-1 max-w-[140px]">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shimmer-btn text-[#00704A] font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/40 flex items-center gap-2"
            >
              Réserver un cours d&apos;essai gratuit
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-full text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Comment ça marche ?
            </motion.a>
          </motion.div>

          {/* Trust element */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-white/50 text-sm pt-4"
          >
            Sans engagement · Annulation gratuite jusqu&apos;à 24h avant
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-[#D4AF37] transition-colors cursor-pointer"
        aria-label="Scroll down"
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
