import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Global Background Blur and Scroll Lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.classList.add('menu-open');
    } else {
      document.documentElement.classList.remove('menu-open');
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Philosophy', href: '#about' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'glass-nav-scrolled py-4' : 'bg-transparent py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4 group relative">
          <div className="relative flex items-center gap-4">
            {/* New Image Logo */}
            <div className={`relative h-12 w-12 overflow-hidden rounded-[7px] transition-all duration-500 ${isScrolled ? 'shadow-lg scale-90' : 'shadow-2xl'}`}>
              <img
                src="/images/studio-logo.png"
                alt="Handies Studio"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-theme-accent/5 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            </div>

            {/* Text Logo */}
            <div className="flex flex-col leading-tight">
              <span className={`text-2xl font-bold tracking-tight transition-colors duration-500 ${isScrolled ? 'text-theme-text' : 'text-white'}`}>
                handies<span className="text-theme-accent">.</span>design
              </span>
              <span className={`text-[9px] uppercase tracking-[0.4em] font-semibold transition-colors duration-500 ${isScrolled ? 'text-theme-secondary opacity-60' : 'text-stone-300 opacity-80'}`}>
                Architectural Curation
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide hover:text-theme-accent transition-colors duration-300 ${isScrolled ? 'text-theme-text font-semibold' : 'text-stone-200 hover:text-white mix-blend-difference'
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/96170228056"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 rounded-sm ${isScrolled
              ? 'bg-theme-text text-theme-bg hover:bg-theme-accent shadow-md hover:shadow-lg'
              : 'bg-white text-theme-text hover:bg-stone-50 shadow-lg'
              }`}
          >
            Chat with us <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden z-50 transition-colors ${isScrolled ? 'text-theme-text' : 'text-stone-50 mix-blend-difference'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={28} className="text-theme-text" />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-theme-bg/80 backdrop-blur-3xl z-40 flex flex-col items-center justify-center space-y-12 animate-fade-in">
          {/* Subtle Atmospheric Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-theme-accent/5 rounded-full blur-[140px] pointer-events-none" />

          {navLinks.map((link, index) => (
            <div key={link.name} className="relative group w-full flex justify-center max-w-[320px]">
              {/* Permanent Glass Pill Background for Legibility */}
              <div className="absolute -inset-x-6 -inset-y-3 bg-theme-surface/40 backdrop-blur-md border border-theme-text/5 rounded-full shadow-sm transition-all duration-500 group-hover:bg-theme-surface/60 group-hover:border-theme-accent/20 group-hover:scale-110 -z-10" />

              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-serif text-theme-text hover:text-theme-accent transition-all duration-500 animate-fade-in-up py-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </a>
            </div>
          ))}

          <div className="pt-12 animate-fade-in-up delay-300">
            <a
              href="https://wa.me/96170228056"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-10 py-5 bg-theme-text text-theme-bg text-[11px] font-bold tracking-[0.5em] uppercase shadow-2xl rounded-sm hover:bg-theme-accent transition-all duration-500 block text-center"
            >
              Dispatch Inquiry
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
