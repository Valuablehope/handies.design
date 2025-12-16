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

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-50/90 backdrop-blur-md border-b border-stone-200 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex flex-col group">
          <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-stone-900' : 'text-stone-900 md:text-white mix-blend-difference'}`}>
            handies.design
          </span>
          <span className={`text-[10px] tracking-[0.3em] uppercase ${isScrolled ? 'text-stone-500' : 'text-stone-500 md:text-stone-300 mix-blend-difference'}`}>
            Interiors
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide hover:text-rust-600 transition-colors ${
                isScrolled ? 'text-stone-600' : 'text-stone-200 hover:text-white mix-blend-difference'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all ${
              isScrolled
                ? 'bg-stone-900 text-white hover:bg-stone-800'
                : 'bg-white text-stone-900 hover:bg-stone-100'
            }`}
          >
            Start Project <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-stone-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-stone-900' : 'text-white mix-blend-difference'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-stone-50 z-40 flex flex-col items-center justify-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-serif text-stone-800 hover:text-rust-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 px-8 py-4 bg-stone-900 text-white text-lg font-medium tracking-wide"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
};
