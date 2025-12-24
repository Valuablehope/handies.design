import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { getImagePath } from '../utils/images';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll lock when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.classList.remove('menu-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuOverlayRef.current &&
        !menuOverlayRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest('button')
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Philosophy', href: '#about' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isMobileMenuOpen 
          ? 'bg-theme-surface/95 backdrop-blur-xl py-4 shadow-lg' 
          : isScrolled 
            ? 'glass-nav-scrolled py-4' 
            : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4 group relative">
          <div className="relative flex items-center gap-4">
            {/* New Image Logo */}
            <div className={`relative h-12 w-12 overflow-hidden rounded-[7px] transition-all duration-500 ${isScrolled ? 'shadow-lg scale-90' : 'shadow-2xl'}`}>
              <img
                src={getImagePath('/images/studio-logo.png')}
                alt="Handies Studio"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-theme-accent/5 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            </div>

            {/* Text Logo */}
            <div className="flex flex-col leading-tight">
              <span className={`text-2xl font-bold tracking-tight transition-colors duration-500 ${isMobileMenuOpen ? 'text-white' : isScrolled ? 'text-theme-text' : 'text-white'}`}>
                handies<span className="text-theme-accent">.</span>design
              </span>
              <span className={`text-[9px] uppercase tracking-[0.4em] font-semibold transition-colors duration-500 ${isMobileMenuOpen ? 'text-stone-200 opacity-90' : isScrolled ? 'text-theme-secondary opacity-60' : 'text-stone-300 opacity-80'}`}>
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
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 rounded-[7px] ${isScrolled
              ? 'bg-theme-text text-theme-bg hover:bg-theme-accent shadow-md hover:shadow-lg'
              : 'bg-white/80 backdrop-blur-md border border-white/20 text-theme-text hover:bg-white/90 shadow-lg'
              }`}
          >
            Chat with us <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden relative z-[70] p-2 -mr-2 transition-all duration-300 ${
            isMobileMenuOpen || isScrolled
              ? 'text-theme-text'
              : 'text-white'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
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
        <div
          ref={menuOverlayRef}
          className="mobile-menu-overlay fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-[60] flex flex-col items-center justify-center space-y-8 px-6 pt-20 pb-20"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Subtle Atmospheric Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-theme-accent/5 rounded-full blur-[140px] pointer-events-none" />

          {navLinks.map((link, index) => (
            <div
              key={link.name}
              className="relative group w-full flex justify-center max-w-[320px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-4xl font-serif text-white hover:text-stone-100 transition-all duration-300 animate-fade-in-up py-6 px-8 relative z-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/10 hover:border-white/30 hover:scale-[1.02] block text-center"
              >
                {link.name}
              </a>
            </div>
          ))}

          <div className="pt-8 animate-fade-in-up" style={{ animationDelay: `${navLinks.length * 100}ms` }}>
            <a
              href="https://wa.me/96170228056"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[11px] font-bold tracking-[0.5em] uppercase shadow-2xl rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 block text-center"
            >
              Dispatch Inquiry
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
