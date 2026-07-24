export function AboutSection() {
  return (
    <section className="py-section-gap relative">
      <div className="ambient-glow right-0 top-1/2 -translate-y-1/2"></div>
      <div className="container mx-auto px-container-padding-mobile md:px-container-padding-desktop">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 reveal relative">
            <div className="glass-panel p-4 rounded-[2rem] inline-block relative z-10">
              <img alt="Team Photo" className="w-full max-w-[400px] rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500" src="/images/team-photo.webp" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-white/10 rounded-full z-0 pointer-events-none"></div>
          </div>
          <div className="w-full lg:w-1/2 reveal" style={{ transitionDelay: "200ms" }}>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">Mastery in Every Detail.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              At Amaze, we don't just manage properties; we curate environments. Our deep-rooted expertise spans physical security, immaculate housekeeping, and robust mechanical & electrical maintenance. We are the invisible force that ensures your operations run flawlessly, allowing you to focus on your core vision.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-4 border-b border-white/5 pb-4">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Integrated Facility Solutions</span>
              </li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Unwavering Compliance & Safety</span>
              </li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Technology-Driven Oversight</span>
              </li>
            </ul>
            <a className="inline-flex items-center gap-2 font-body-md text-body-md text-primary hover:text-white transition-colors" href="#">
              Discover Our Story <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
