export function CtaSection() {
  return (
    <section className="py-32 relative bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-primary/10 blur-[100px] rounded-full mix-blend-screen opacity-50"></div>
      </div>
      <div className="container mx-auto px-container-padding-mobile md:px-container-padding-desktop relative z-10 text-center">
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6 reveal">Ready to Elevate Your Standards?</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 reveal" style={{ transitionDelay: "100ms" }}>
          Partner with Amaze to experience a new tier of property management excellence.
        </p>
        <button className="bg-primary text-primary-container px-10 py-5 rounded-full font-body-lg text-body-lg font-bold hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(201,198,197,0.3)] reveal" style={{ transitionDelay: "200ms" }}>
          Initiate Consultation
        </button>
      </div>
    </section>
  );
}
