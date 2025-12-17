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
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'glass-nav-scrolled py-4' : 'bg-transparent py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center group relative">
          <div className="relative">
            {/* Soft glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-rust-500/20 to-stone-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Logo image */}
            <img
              src="/images/logo.png"
              alt="Handies Design"
              className={`relative h-12 w-auto transition-all duration-500 rounded-md ${isScrolled
                  ? 'shadow-md group-hover:shadow-xl'
                  : 'shadow-lg group-hover:shadow-2xl'
                } group-hover:scale-105`}
            />

            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide hover:text-rust-600 transition-colors duration-300 ${isScrolled ? 'text-stone-600' : 'text-stone-200 hover:text-white mix-blend-difference'
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 rounded-sm ${isScrolled
              ? 'bg-stone-900 text-white hover:bg-stone-800 shadow-md hover:shadow-lg'
              : 'bg-white text-stone-900 hover:bg-stone-50 shadow-lg'
              }`}
          >
            Start Project <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-stone-900 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={28} className="text-stone-900" />
          ) : (
            <Menu size={28} className={isScrolled ? 'text-stone-900' : 'text-stone-50 mix-blend-difference'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-stone-50/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-serif text-stone-800 hover:text-rust-600 transition-colors animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 px-10 py-5 bg-stone-900 text-white text-lg font-medium tracking-wide shadow-xl animate-fade-in-up delay-300 rounded-sm"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
};
