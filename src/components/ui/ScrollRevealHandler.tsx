"use client";

import { useEffect } from "react";

export default function ScrollRevealHandler() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        
        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return null;
}
