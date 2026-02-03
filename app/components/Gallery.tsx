"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Étudiants travaillant ensemble",
    aspect: "tall", // tall, wide, or square
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Groupe d'étude",
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Professeur enseignant",
    aspect: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Étudiants souriants",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Étude concentrée",
    aspect: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Cours en classe",
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Travail individuel",
    aspect: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Notes et études",
    aspect: "tall",
  },
];

export default function Gallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-24 lg:py-32 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with decorative line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="title-display text-4xl sm:text-5xl lg:text-6xl text-dark-text title-line">
            NOS ÉLÈVES EN ACTION
          </h2>
        </motion.div>

        {/* Masonry Photo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="masonry-grid"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="masonry-grid-item group overflow-hidden rounded-lg"
            >
              <div
                className={`relative overflow-hidden ${
                  image.aspect === "tall"
                    ? "aspect-[3/4]"
                    : image.aspect === "wide"
                    ? "aspect-[4/3]"
                    : "aspect-square"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${image.src}')` }}
                  role="img"
                  aria-label={image.alt}
                />
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-rolex-green/0 group-hover:bg-rolex-green/20 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
