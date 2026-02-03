"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  eventDate: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section id="contact" ref={ref}>
      {/* Banner Title - Full width green background */}
      <div className="bg-rolex-green py-12 lg:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="title-display text-4xl sm:text-5xl lg:text-6xl text-white text-center"
        >
          CONTACTEZ-NOUS
        </motion.h2>
      </div>

      {/* Form Section */}
      <div className="bg-cream py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-dark-text text-sm font-medium mb-2 uppercase tracking-wide"
              >
                Nom
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-dark-text placeholder:text-text-gray/50 focus:outline-none focus:border-rolex-green transition-colors"
                placeholder="Votre nom"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-dark-text text-sm font-medium mb-2 uppercase tracking-wide"
              >
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-dark-text placeholder:text-text-gray/50 focus:outline-none focus:border-rolex-green transition-colors"
                placeholder="votre@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-dark-text text-sm font-medium mb-2 uppercase tracking-wide"
              >
                Téléphone
              </label>
              <input
                {...register("phone")}
                type="tel"
                id="phone"
                className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-dark-text placeholder:text-text-gray/50 focus:outline-none focus:border-rolex-green transition-colors"
                placeholder="06 12 34 56 78"
              />
            </div>

            {/* Event Date / Preferred Start Date */}
            <div>
              <label
                htmlFor="eventDate"
                className="block text-dark-text text-sm font-medium mb-2 uppercase tracking-wide"
              >
                Date souhaitée de début
              </label>
              <input
                {...register("eventDate")}
                type="text"
                id="eventDate"
                className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-dark-text placeholder:text-text-gray/50 focus:outline-none focus:border-rolex-green transition-colors"
                placeholder="Ex: Dès que possible, Septembre 2024..."
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-dark-text text-sm font-medium mb-2 uppercase tracking-wide"
              >
                Message
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={5}
                className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-dark-text placeholder:text-text-gray/50 focus:outline-none focus:border-rolex-green transition-colors resize-none"
                placeholder="Décrivez brièvement votre situation et vos besoins..."
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Success Message */}
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-rolex-green/10 border border-rolex-green/20 rounded flex items-center gap-4"
              >
                <CheckCircle className="w-5 h-5 text-rolex-green" />
                <p className="text-dark-text text-sm">
                  Merci ! Nous vous recontacterons dans les 24h.
                </p>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting || submitSuccess}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-dark-text hover:bg-rolex-green text-white font-medium py-4 rounded flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-colors uppercase tracking-wide"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
