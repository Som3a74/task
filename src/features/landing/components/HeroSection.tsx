import ShaderBackground from "@/components/ui/ShaderBackground";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ShaderBackground />
      </div>
      
      <div className="ambient-glow top-0 left-1/2 -translate-x-1/2"></div>
      <div className="relative z-10 container mx-auto px-container-padding-mobile md:px-container-padding-desktop flex flex-col items-center text-center">
        <span className="font-label-sm text-label-sm text-on-surface-variant tracking-[0.2em] uppercase mb-6 reveal">Redefining Facility Excellence</span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-gradient max-w-4xl mb-8 reveal" style={{ transitionDelay: "100ms" }}>
          Elevate Your Property Ecosystem.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12 reveal" style={{ transitionDelay: "200ms" }}>
          Amaze delivers uncompromising quality in facility management, blending cutting-edge operational intelligence with pristine service execution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-24 reveal" style={{ transitionDelay: "300ms" }}>
          <button className="bg-primary text-primary-container px-8 py-4 rounded-full font-body-md text-body-md font-semibold hover:bg-white transition-colors">
            Explore Services
          </button>
          <button className="glass-button px-8 py-4 rounded-full font-body-md text-body-md flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">play_circle</span>
            Watch Reel
          </button>
        </div>
        
        <div className="w-full max-w-6xl relative reveal" style={{ transitionDelay: "400ms" }}>
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30 z-0"></div>
          <div className="glass-panel p-2 rounded-2xl relative z-10 transform perspective-1000 rotate-x-12 hover:rotate-x-0 transition-transform duration-700">
            <img alt="Dashboard Mockup" className="w-full rounded-xl object-cover shadow-2xl opacity-90 hover:opacity-100 transition-opacity" src="/images/dashboard-mockup.webp" />
          </div>
        </div>
      </div>
    </section>
  );
}
