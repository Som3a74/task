"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Amaze Property Management Solutions Pvt Ltd",
    description: "Elevating property standards with comprehensive, world-class management solutions tailored for excellence.",
    image: "/images/hero1.png",
    // Starts fully visible
    opacityInput: [0, 0.22, 0.28],
    opacityOutput: [1, 1, 0],
    scaleInput: [0, 0.28],
    yInput: [0, 0.22, 0.28],
    yOutput: [0, 0, -30],
  },
  {
    title: "Technical Services",
    description: "Ensuring optimal performance and reliability with cutting-edge maintenance and engineering solutions.",
    image: "/images/hero4.jpg",
    // Normal fade in and out
    opacityInput: [0.22, 0.28, 0.48, 0.54],
    opacityOutput: [0, 1, 1, 0],
    scaleInput: [0.22, 0.54],
    yInput: [0.22, 0.28, 0.48, 0.54],
    yOutput: [30, 0, 0, -30],
  },
  {
    title: "Landscaping Services",
    description: "Crafting and maintaining breathtaking outdoor spaces that harmonize nature with modern aesthetics.",
    image: "/images/hero5.jpg",
    opacityInput: [0.48, 0.54, 0.74, 0.8],
    opacityOutput: [0, 1, 1, 0],
    scaleInput: [0.48, 0.8],
    yInput: [0.48, 0.54, 0.74, 0.8],
    yOutput: [30, 0, 0, -30],
  },
  {
    title: "Parking Management",
    description: "Delivering seamless, secure, and efficient parking solutions for enhanced convenience and flow.",
    image: "/images/hero6.jpg",
    // Ends fully visible
    opacityInput: [0.74, 0.8, 1],
    opacityOutput: [0, 1, 1],
    scaleInput: [0.74, 1],
    yInput: [0.74, 0.8, 1],
    yOutput: [30, 0, 0],
  },
];

function ServiceSlide({ service, progress, index }: { service: typeof services[0]; progress: MotionValue<number>; index: number }) {
  // Opacity for the whole slide
  const opacity = useTransform(
    progress,
    service.opacityInput,
    service.opacityOutput
  );

  // Subtle zoom effect on the image
  const scale = useTransform(
    progress,
    service.scaleInput,
    [1, 1.15]
  );

  // Soft vertical movement for the text
  const y = useTransform(
    progress,
    service.yInput,
    service.yOutput
  );

  return (
    <motion.div
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0 w-full h-full origin-center" style={{ scale }}>
        <Image
          src={service.image}
          className="object-cover"
          alt={service.title}
          fill
          priority={index === 0}
        />
      </motion.div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.div style={{ y }} className="max-w-5xl">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6 drop-shadow-xl text-balance">
            {service.title}
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
            {service.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // We track the scroll progress of the container section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {services.map((service, index) => (
          <ServiceSlide key={index} service={service} progress={scrollYProgress} index={index} />
        ))}
      </div>
    </section>
  );
}
