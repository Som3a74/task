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

const fadeLeftVariant = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const arrowAnimation = {
  animate: {
    x: [0, 5, 0],
    y: [0, -5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function GrowthSection() {
  return (
    <section className="py-section-gap relative overflow-hidden">
      <div className="ambient-glow left-0 top-1/2 -translate-y-1/2"></div>
      <div className="container mx-auto px-container-padding-mobile md:px-container-padding-desktop">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <motion.div 
            className="w-full lg:w-1/2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={fadeUpVariant} className="font-headline-xl text-headline-xl text-on-surface mb-6">Data-Driven Growth.</motion.h2>
            <motion.p variants={fadeUpVariant} className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Our proprietary management dashboards provide real-time visibility into your facility's performance, optimizing resource allocation and driving measurable efficiency gains across your portfolio.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-panel p-6 rounded-xl hover:bg-white/[0.03] transition-colors">
                <motion.span variants={arrowAnimation} animate="animate" className="material-symbols-outlined text-primary mb-4 block">trending_up</motion.span>
                <h4 className="font-body-lg text-body-lg font-bold text-white mb-1">Operational Efficiency</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Streamlined workflows reducing overhead.</p>
              </div>
              <div className="glass-panel p-6 rounded-xl hover:bg-white/[0.03] transition-colors">
                <motion.span variants={pulseAnimation} animate="animate" className="material-symbols-outlined text-primary mb-4 block">insights</motion.span>
                <h4 className="font-body-lg text-body-lg font-bold text-white mb-1">Predictive Analytics</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Anticipate needs before they arise.</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="w-full lg:w-1/2 relative flex justify-center"
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative z-10 w-full max-w-[450px]">
              <Image alt="Growth Graphic" className="w-full h-auto object-contain filter drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-transform duration-700 hover:scale-105" src="/images/growth-graphic.webp" width={600} height={600} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
