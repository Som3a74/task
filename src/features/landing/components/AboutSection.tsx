"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function AboutSection() {
  return (
    <section className="py-section-gap relative">
      <div className="ambient-glow right-0 top-1/2 -translate-y-1/2"></div>
      <div className="container mx-auto px-container-padding-mobile md:px-container-padding-desktop">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="w-full lg:w-1/2 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="glass-panel p-4 rounded-[2rem] relative z-10 w-full max-w-md overflow-hidden">
              <Image alt="Team Photo" className="w-full h-auto rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/team-photo.webp" width={800} height={600} />
            </div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={fadeUpVariant} className="font-headline-xl text-headline-xl text-on-surface mb-6">Mastery in Every Detail.</motion.h2>
            <motion.p variants={fadeUpVariant} className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              At Amaze, we don't just manage properties; we curate environments. Our deep-rooted expertise spans physical security, immaculate housekeeping, and robust mechanical & electrical maintenance. We are the invisible force that ensures your operations run flawlessly, allowing you to focus on your core vision.
            </motion.p>
            <motion.ul className="space-y-4 mb-8">
              <motion.li variants={slideInLeftVariant} className="flex items-center gap-4 border-b border-white/5 pb-4">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Integrated Facility Solutions</span>
              </motion.li>
              <motion.li variants={slideInLeftVariant} className="flex items-center gap-4 border-b border-white/5 pb-4">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Unwavering Compliance & Safety</span>
              </motion.li>
              <motion.li variants={slideInLeftVariant} className="flex items-center gap-4 border-b border-white/5 pb-4">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Technology-Driven Oversight</span>
              </motion.li>
            </motion.ul>
            <motion.div variants={fadeUpVariant}>
              <a className="inline-flex items-center gap-2 font-body-md text-body-md text-primary hover:text-white transition-colors" href="#">
                Discover Our Story <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
