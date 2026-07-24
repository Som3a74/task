"use client";

import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function CtaSection() {
  return (
    <section className="py-32 relative bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-primary/10 blur-[100px] rounded-full mix-blend-screen opacity-50"></div>
      </div>
      <motion.div 
        className="container mx-auto px-container-padding-mobile md:px-container-padding-desktop relative z-10 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={fadeUpVariant} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">Ready to Elevate Your Standards?</motion.h2>
        <motion.p variants={fadeUpVariant} className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          Partner with Amaze to experience a new tier of property management excellence.
        </motion.p>
        <motion.div variants={fadeUpVariant}>
          <button className="bg-primary text-primary-container px-10 py-5 rounded-full font-body-lg text-body-lg font-bold hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(201,198,197,0.3)]">
            Initiate Consultation
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
