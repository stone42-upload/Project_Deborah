"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, MapPin, Phone, Mail, MessageCircle, CheckCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  studentLevel: z.string().min(1, "Veuillez sélectionner un niveau"),
  subject: z.string().min(1, "Veuillez préciser le sujet"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    content: "01 23 45 67 89",
    subtext: "Lun-Sam, 9h-19h",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@deborah-corp.fr",
    subtext: "Réponse sous 24h",
  },
  {
    icon: MapPin,
    title: "Zone d'intervention",
    content: "Paris et Île-de-France",
    subtext: "Cours en visio partout",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "06 12 34 56 78",
    subtext: "Pour les urgences",
  },
];

const studentLevels = [
  "6ème - 5ème",
  "4ème - 3ème",
  "Seconde",
  "Première",
  "Terminale",
  "Supérieur (L1, L2, Prépa...)",
];

const subjects = [
  "Soutien scolaire régulier",
  "Préparation Brevet",
  "Préparation Bac",
  "Remise à niveau",
  "Stage vacances",
  "Autre demande",
];

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
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#00704A]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#D4AF37]/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-['Playfair_Display',serif] mb-6 text-white">
            Réservez votre cours{" "}
            <span className="gradient-text">d&apos;essai gratuit</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Parlez-nous de votre situation. Un conseiller pédagogique vous rappelle 
            sous 24h pour organiser votre premier cours.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={fadeInUp}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/10"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white/80 text-sm font-medium mb-2"
                  >
                    Nom de l&apos;élève ou du parent
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00704A]/50 focus:ring-1 focus:ring-[#00704A]/50 transition-all"
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/80 text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00704A]/50 focus:ring-1 focus:ring-[#00704A]/50 transition-all"
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white/80 text-sm font-medium mb-2"
                  >
                    Téléphone
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00704A]/50 focus:ring-1 focus:ring-[#00704A]/50 transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                {/* Student Level */}
                <div>
                  <label
                    htmlFor="studentLevel"
                    className="block text-white/80 text-sm font-medium mb-2"
                  >
                    Niveau de l&apos;élève
                  </label>
                  <select
                    {...register("studentLevel")}
                    id="studentLevel"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00704A]/50 focus:ring-1 focus:ring-[#00704A]/50 transition-all"
                  >
                    <option value="" className="bg-[#1a1a1a]">
                      Sélectionnez...
                    </option>
                    {studentLevels.map((level) => (
                      <option key={level} value={level} className="bg-[#1a1a1a]">
                        {level}
                      </option>
                    ))}
                  </select>
                  {errors.studentLevel && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.studentLevel.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-white/80 text-sm font-medium mb-2"
                >
                  Votre besoin
                </label>
                <select
                  {...register("subject")}
                  id="subject"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00704A]/50 focus:ring-1 focus:ring-[#00704A]/50 transition-all"
                >
                  <option value="" className="bg-[#1a1a1a]">
                    Sélectionnez...
                  </option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject} className="bg-[#1a1a1a]">
                      {subject}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-white/80 text-sm font-medium mb-2"
                >
                  Décrivez brièvement la situation
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00704A]/50 focus:ring-1 focus:ring-[#00704A]/50 transition-all resize-none"
                  placeholder="Ex: Mon fils est en 3ème et a du mal avec les équations. Il a un contrôle important dans 3 semaines..."
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-[#00704A]/20 border border-[#00704A]/30 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#00704A]" />
                  <p className="text-white/90 text-sm">
                    Merci ! Nous vous recontacterons dans les 24h pour organiser votre cours d&apos;essai gratuit.
                  </p>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-[#00704A] hover:bg-[#005538] text-white font-medium py-4 rounded-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Demander mon cours d&apos;essai gratuit
                  </>
                )}
              </motion.button>

              <p className="text-white/40 text-xs text-center mt-4">
                Sans engagement · Réponse sous 24h
              </p>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-6">
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#1a1a1a] rounded-xl p-5 border border-white/10 hover:border-[#00704A]/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#00704A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-[#00704A]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">{info.title}</h4>
                      <p className="text-white/80 text-sm mt-1">{info.content}</p>
                      <p className="text-white/40 text-xs mt-0.5">{info.subtext}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-4">Questions fréquentes</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-white/80 text-sm font-medium">Le cours d&apos;essai est-il vraiment gratuit ?</p>
                  <p className="text-white/50 text-sm mt-1">
                    Oui, le premier cours (1h) est offert, sans engagement. C&apos;est l&apos;occasion de rencontrer le professeur et de faire le point sur vos besoins.
                  </p>
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">Comment se passe le premier contact ?</p>
                  <p className="text-white/50 text-sm mt-1">
                    Après votre demande, un conseiller vous rappelle sous 24h pour comprendre votre situation et vous proposer le professeur adapté.
                  </p>
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">Puis-je changer de professeur ?</p>
                  <p className="text-white/50 text-sm mt-1">
                    Bien sûr. Si le feeling ne passe pas, on vous propose un autre professeur sans frais supplémentaires.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-[#00704A] rounded-xl p-6 text-center">
              <h4 className="text-white font-semibold mb-2">
                Besoin d&apos;aide rapidement ?
              </h4>
              <p className="text-white/70 text-sm mb-4">
                Appelez-nous directement, on répond du lundi au samedi.
              </p>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center gap-2 bg-white text-[#00704A] font-medium px-6 py-2.5 rounded-full hover:bg-[#D4AF37] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                01 23 45 67 89
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
