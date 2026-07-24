export function ServicesSection() {
  return (
    <section className="py-section-gap bg-surface-container-low relative">
      <div className="container mx-auto px-container-padding-mobile md:px-container-padding-desktop">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">Core Disciplines</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Precision engineering meets luxury service standards across our comprehensive portfolio of facility solutions.</p>
        </div>
        <div className="bento-grid">
          <div className="glass-panel rounded-[2rem] p-8 bento-large group hover:bg-white/[0.02] transition-colors reveal relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <img alt="Physical Security" className="w-full h-full object-cover" src="/images/physical-security.webp" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md">
                <span className="material-symbols-outlined text-primary">shield_lock</span>
              </div>
            </div>
            <div className="relative z-10 mt-auto">
              <h3 className="font-headline-md text-headline-md text-white mb-2">Physical Security</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Elite personnel and advanced surveillance systems ensuring absolute protection for your assets and occupants.</p>
            </div>
          </div>
          
          <div className="glass-panel rounded-[2rem] p-8 group hover:bg-white/[0.02] transition-colors reveal" style={{ transitionDelay: "100ms" }}>
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">cleaning_services</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-white mb-2">Housekeeping</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Meticulous cleaning protocols utilizing eco-friendly solutions to maintain pristine environments.</p>
          </div>
          
          <div className="glass-panel rounded-[2rem] p-8 group hover:bg-white/[0.02] transition-colors reveal" style={{ transitionDelay: "200ms" }}>
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">engineering</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-white mb-2">MEP Maintenance</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Preventative and predictive maintenance for complex mechanical, electrical, and plumbing systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
