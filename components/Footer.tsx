import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-theme-bg overflow-hidden relative z-50 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] transition-colors duration-1000">
      {/* Ultra-Subtle Paper Texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <div className="max-w-[1400px] mx-auto px-8 md:px-16 relative z-10">

        {/* COMPACT TOP: IDENTITY & MAIN NAV */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 pb-12 border-b border-stone-100">
          <div className="flex items-baseline gap-6 border-l-2 border-theme-accent pl-6">
            <span className="text-2xl font-serif text-theme-text tracking-tighter">
              handies<span className="text-theme-accent">.</span>design
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-theme-secondary/30 font-bold hidden sm:block">
              Architectural & Interior Studio
            </span>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-8 md:gap-12">
              {['Philosophy', 'Expertise', 'Process', 'Gallery'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-xs uppercase tracking-widest font-bold text-theme-text hover:text-theme-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* COMPACT MIDDLE: REGISTRY & CONNECT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 items-center">

          {/* Headquarters */}
          <div className="flex items-center gap-4">
            <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-theme-secondary/40">HQ</span>
            <p className="text-[11px] font-serif italic text-theme-secondary">
              Beirut, Lebanon — Studio 4B, District 8
            </p>
          </div>

          {/* Contact Dispatch */}
          <div className="flex md:justify-center">
            <a href="mailto:hello@handies.design" className="text-xs font-serif italic text-theme-text hover:text-theme-accent transition-colors border-b border-theme-text/10 pb-0.5">
              hello@handies.design
            </a>
          </div>

          {/* Social Quick-Links */}
          <div className="flex md:justify-end gap-6 text-[9px] uppercase tracking-widest font-bold">
            <a href="#" className="text-theme-text/40 hover:text-theme-accent transition-colors">Instagram</a>
            <a href="#" className="text-theme-text/40 hover:text-theme-accent transition-colors">Behance</a>
            <a href="https://wa.me/96170228056" target="_blank" className="text-theme-accent">WhatsApp</a>
          </div>
        </div>

        {/* COMPACT BOTTOM: STATUS & LEGAL */}
        <div className="pt-8 border-t border-stone-100 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          <div className="text-[8px] uppercase tracking-[0.3em] font-bold text-theme-secondary/20 order-2 md:order-1 text-center md:text-left">
            © {new Date().getFullYear()} Handies Studio
          </div>

          <div className="flex items-center justify-center gap-2 order-1 md:order-2">
            <span className="text-[7px] uppercase tracking-[0.4em] font-bold opacity-20">Digital Execution:</span>
            <a
              href="https://www.cubiq-solutions.com/"
              target="_blank"
              className="text-[9px] font-serif italic text-theme-text/60 hover:text-theme-text transition-colors"
            >
              Cubiq Solutions
            </a>
          </div>

          <div className="text-[8px] uppercase tracking-[0.3em] font-bold text-theme-secondary/20 order-3 text-center md:text-right">
            All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
