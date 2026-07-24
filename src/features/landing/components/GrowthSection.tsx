"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

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

const ScrollArrow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "center center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const arrowHeadOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const arrowHeadScale = useTransform(scrollYProgress, [0.85, 1], [0.5, 1]);

  return (
    <div ref={containerRef} className="w-full max-w-[500px] aspect-square relative flex items-center justify-center mx-auto">
      <motion.svg 
        viewBox="0 0 400 400" 
        className="w-full h-full overflow-visible drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
        style={{ opacity }}
      >
        <defs>
          <linearGradient id="arrowGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="boxGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </linearGradient>
          <linearGradient id="boxGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
            <stop offset="100%" stopColor="rgba(168,85,247,0.1)" />
          </linearGradient>
          <pattern id="dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle fill="rgba(255,255,255,0.2)" cx="2" cy="2" r="1.5"></circle>
          </pattern>
          
          <path id="text-path" d="M 60 320 C 150 400, 340 340, 280 200 C 230 80, 80 150, 150 280 C 200 380, 270 210, 360 110" />
        </defs>

        {/* Text Badges */}
        {/* Badge 1: TRUST */}
        <motion.g 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.g
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="30" y="160" width="85" height="34" rx="17" fill="url(#boxGradient1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <text x="72.5" y="182" fill="white" fontSize="13" fontWeight="600" letterSpacing="1.5" textAnchor="middle" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}>TRUST</text>
          </motion.g>
        </motion.g>

        {/* Badge 2: RELIABLE (Moved down and right to avoid overlap) */}
        <motion.g
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.g
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <rect x="250" y="320" width="110" height="38" rx="19" fill="url(#boxGradient2)" stroke="rgba(168,85,247,0.3)" strokeWidth="1.5" />
            <text x="305" y="345" fill="white" fontSize="14" fontWeight="600" letterSpacing="1.5" textAnchor="middle" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}>RELIABLE</text>
          </motion.g>
        </motion.g>

        {/* Badge 3: INSIGHT */}
        <motion.g
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.g
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <rect x="280" y="60" width="95" height="34" rx="17" fill="url(#boxGradient1)" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5" />
            <text x="327.5" y="82" fill="white" fontSize="13" fontWeight="600" letterSpacing="1.5" textAnchor="middle" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}>INSIGHT</text>
          </motion.g>
        </motion.g>
        
        {/* Main Arrow Line */}
        <motion.path
          d="M 60 320 C 150 400, 340 340, 280 200 C 230 80, 80 150, 150 280 C 200 380, 270 210, 365 105"
          fill="none"
          stroke="url(#arrowGradient)"
          strokeWidth="24"
          strokeLinecap="round"
          style={{ pathLength }}
        />

        {/* Perfect Stroked Arrowhead */}
        <motion.path 
          d="M 325 105 L 365 105 L 365 145" 
          fill="none" 
          stroke="url(#arrowGradient)" 
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ 
            opacity: arrowHeadOpacity, 
            scale: arrowHeadScale,
            transformOrigin: "365px 105px"
          }} 
        />

        {/* 'WHY US' Text along path - ensuring it sits nicely over the path */}
        <motion.text 
          fill="white" 
          fontSize="26" 
          fontWeight="900" 
          letterSpacing="4"
          className="font-headline-xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <textPath href="#text-path" startOffset="86%" textAnchor="middle">
            WHY US
          </textPath>
        </motion.text>
      </motion.svg>
    </div>
  );
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
            <div className="relative z-10 w-full">
              <ScrollArrow />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
