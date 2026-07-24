"use client";

import { motion, useInView, animate, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Counter({ from = 0, to, suffix = "" }: { from?: number; to: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, suffix, inView]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

export function StatsSection() {
  return (
    <section className="py-section-gap relative z-10 border-y border-white/5 bg-surface-container-lowest">
      <div className="container mx-auto px-container-padding-mobile md:px-container-padding-desktop">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2"><Counter to={15} suffix="k+" /></div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Trained Force</div>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2"><Counter to={200} suffix="+" /></div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Premium Clients</div>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2"><Counter to={20} suffix="M" /></div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Sq.Ft Managed</div>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2"><Counter to={24} suffix="/7" /></div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Operational Support</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
