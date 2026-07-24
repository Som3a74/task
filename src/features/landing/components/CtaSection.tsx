"use client";

import { motion, Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function CtaSection() {
  return (
    <section className="py-32 relative bg-black overflow-hidden border-t border-white/5">
      {/* Animated Background Glow */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen"></div>
      </motion.div>

      {/* Floating Abstract Elements */}
      <motion.div 
        className="absolute left-[5%] md:left-[15%] top-[20%] w-32 h-32 rounded-full border border-primary/20 pointer-events-none"
        animate={{ y: [0, -40, 0], rotate: [0, 90, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute right-[5%] md:right-[15%] bottom-[10%] w-48 h-48 rounded-full border border-white/5 pointer-events-none"
        animate={{ y: [0, 50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute left-[40%] top-[-10%] w-24 h-24 rounded-full border border-primary/10 pointer-events-none"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div 
        className="container mx-auto px-container-padding-mobile md:px-container-padding-desktop relative z-10 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          variants={fadeUpVariant} 
          className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6 tracking-tight"
        >
          Ready to Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Standards?</span>
        </motion.h2>
        
        <motion.p 
          variants={fadeUpVariant} 
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Partner with Amaze to experience a new tier of property management excellence.
        </motion.p>
        
        <motion.div variants={fadeUpVariant}>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 rounded-full font-body-lg text-body-lg font-bold bg-white text-black overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Initiate Consultation
              <motion.span 
                className="material-symbols-outlined text-black"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                arrow_forward
              </motion.span>
            </span>
            {/* Shine Sweep Effect */}
            <motion.div 
              className="absolute inset-0 -translate-x-full w-1/2 bg-gradient-to-r from-transparent via-black/10 to-transparent skew-x-12 z-0"
              animate={{ translateX: ["-200%", "300%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
