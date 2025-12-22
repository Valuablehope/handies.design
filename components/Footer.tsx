import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-theme-text text-theme-bg/60 py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 items-start">
          <div className="lg:col-span-5">
            <span className="text-3xl font-bold tracking-tighter text-white block mb-6">
              handies<span className="text-theme-accent">.</span>design
            </span>
            <p className="text-theme-bg/40 max-w-sm text-lg leading-relaxed font-light italic">
              "Space is the breath of art. We design the environments where life happens in high-fidelity."
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <span className="text-white text-[10px] uppercase tracking-[0.3em] font-bold block mb-6 px-3 border-l border-theme-accent/50">Studio</span>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="#about" className="hover:text-theme-accent transition-colors">Philosophy</a></li>
                <li><a href="#portfolio" className="hover:text-theme-accent transition-colors">Work</a></li>
                <li><a href="#services" className="hover:text-theme-accent transition-colors">Services</a></li>
              </ul>
            </div>
            <div>
              <span className="text-white text-[10px] uppercase tracking-[0.3em] font-bold block mb-6 px-3 border-l border-theme-accent/50">Policy</span>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="#" className="hover:text-theme-accent transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-theme-accent transition-colors">Terms</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="text-white text-[10px] uppercase tracking-[0.3em] font-bold block mb-6 px-3 border-l border-theme-accent/50">Contact</span>
              <p className="text-sm font-light leading-relaxed">
                Beirut, Lebanon <br />
                hello@handies.design
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">© {new Date().getFullYear()} Handies Design Studio</p>

          <div className="flex items-center gap-4 text-white/30 text-sm">
            <span className="text-[10px] uppercase tracking-widest opacity-50">Artisan Digital</span>
            <a
              href="https://www.cubiq-solutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-all group"
            >
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/20 group-hover:text-theme-accent transition-colors">
                <path d="M18 8L6 20L18 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 8L34 20L22 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white tracking-widest text-xs uppercase">Cubiq</span>
                <span className="text-[8px] uppercase tracking-tighter opacity-40 mt-1">Solutions</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
