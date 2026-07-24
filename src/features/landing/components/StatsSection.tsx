export function StatsSection() {
  return (
    <section className="py-section-gap relative z-10 border-y border-white/5 bg-surface-container-lowest">
      <div className="container mx-auto px-container-padding-mobile md:px-container-padding-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left reveal">
            <div className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">15k+</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Trained Force</div>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left reveal" style={{ transitionDelay: "100ms" }}>
            <div className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">200+</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Premium Clients</div>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left reveal" style={{ transitionDelay: "200ms" }}>
            <div className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">20M</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Sq.Ft Managed</div>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left reveal" style={{ transitionDelay: "300ms" }}>
            <div className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">24/7</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Operational Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
