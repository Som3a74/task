import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mt-4 mx-auto w-[95%] max-w-7xl rounded-full bg-surface/60 dark:bg-surface/60 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-between px-8 py-3">
      <div className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="Amaze Logo" className="h-8 w-auto" width={120} height={32} priority />
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md hover:bg-white/5 transition-all duration-300 px-3 py-1 rounded-full" href="#">Portfolio</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md hover:bg-white/5 transition-all duration-300 px-3 py-1 rounded-full" href="#">Insights</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md hover:bg-white/5 transition-all duration-300 px-3 py-1 rounded-full" href="#">Features</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md hover:bg-white/5 transition-all duration-300 px-3 py-1 rounded-full" href="#">Pricing</a>
      </div>
      <div className="flex items-center gap-4">
        <a className="hidden md:block font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors active:scale-95 transition-transform" href="#">Login</a>
        <a className="glass-button px-6 py-2 rounded-full font-body-md text-body-md text-primary active:scale-95 transition-transform" href="#">Get Started</a>
      </div>
    </nav>
  );
}
