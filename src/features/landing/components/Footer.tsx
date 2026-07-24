export function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest w-full rounded-t-lg border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-container-padding-desktop py-section-gap flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-headline-md text-headline-md text-on-surface">
          Amaze
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms</a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Cookies</a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Contact</a>
        </div>
        <div className="font-label-sm text-label-sm text-on-surface-variant text-center md:text-right">
          © 2024 Amaze Property Management. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
