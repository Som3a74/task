export function GrowthSection() {
  return (
    <section className="py-section-gap relative">
      <div className="ambient-glow left-0 top-1/2 -translate-y-1/2"></div>
      <div className="container mx-auto px-container-padding-mobile md:px-container-padding-desktop">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 reveal">
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">Data-Driven Growth.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Our proprietary management dashboards provide real-time visibility into your facility's performance, optimizing resource allocation and driving measurable efficiency gains across your portfolio.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-panel p-6 rounded-xl">
                <span className="material-symbols-outlined text-primary mb-4 block">trending_up</span>
                <h4 className="font-body-lg text-body-lg font-bold text-white mb-1">Operational Efficiency</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Streamlined workflows reducing overhead.</p>
              </div>
              <div className="glass-panel p-6 rounded-xl">
                <span className="material-symbols-outlined text-primary mb-4 block">insights</span>
                <h4 className="font-body-lg text-body-lg font-bold text-white mb-1">Predictive Analytics</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Anticipate needs before they arise.</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 reveal relative flex justify-center" style={{ transitionDelay: "200ms" }}>
            <div className="relative z-10 w-full max-w-[400px]">
              <img alt="Growth Graphic" className="w-full object-contain filter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" src="/images/growth-graphic.webp" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
