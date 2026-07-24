"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};



const wipeAnimation: Variants = {
  animate: {
    x: [-4, 4, -4],
    y: [2, -2, 2],
    rotate: [-15, 15, -15],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseAnimation: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const gearAnimation: Variants = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear"
    }
  }
};



export function ServicesSection() {
  return (
    <section className="py-section-gap bg-surface-container-low relative overflow-hidden">
      <div className="container mx-auto px-container-padding-mobile md:px-container-padding-desktop">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">Core Disciplines</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Precision engineering meets luxury service standards across our comprehensive portfolio of facility solutions.</p>
        </motion.div>

        <motion.div
          className="bento-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUpVariant} className="glass-panel rounded-[2rem] p-8 bento-large group hover:bg-white/[0.02] transition-colors relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <Image alt="Physical Security" className="object-cover" src="/images/hero2.jpg" fill sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md">
                <motion.span variants={pulseAnimation} animate="animate" className="material-symbols-outlined text-primary">shield_lock</motion.span>
              </div>
            </div>
            <div className="relative z-10 mt-auto">
              <h3 className="font-headline-md text-headline-md text-white mb-2">Physical Security</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Elite personnel and advanced surveillance systems ensuring absolute protection for your assets and occupants.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="glass-panel rounded-[2rem] p-8 group hover:bg-white/[0.02] transition-colors">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <motion.span variants={wipeAnimation} animate="animate" className="material-symbols-outlined text-primary">cleaning_services</motion.span>
            </div>
            <h3 className="font-headline-md text-headline-md text-white mb-2">Housekeeping</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Meticulous cleaning protocols utilizing eco-friendly solutions to maintain pristine environments.</p>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="glass-panel rounded-[2rem] p-8 group hover:bg-white/[0.02] transition-colors">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <motion.span variants={gearAnimation} animate="animate" className="material-symbols-outlined text-primary">settings</motion.span>
            </div>
            <h3 className="font-headline-md text-headline-md text-white mb-2">MEP Maintenance</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Preventative and predictive maintenance for complex mechanical, electrical, and plumbing systems.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
