import React, { useState, useEffect } from 'react';
import { Instagram, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 overflow-hidden relative z-50 transition-colors duration-1000" style={{ backgroundColor: 'var(--theme-secondary)' }}>
      {/* Ultra-Subtle Paper Texture */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Scroll to Top Button - Top Right */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="absolute top-0 right-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          )}

          {/* Upper Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 pb-8 border-b border-white/10">
            {/* Left Side: Brand & Social */}
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-serif italic font-bold text-white mb-4">
                handies<span className="text-theme-accent">.</span>design
              </h3>
              <p className="text-white/80 text-sm font-serif leading-relaxed mb-6 max-w-md">
                Where raw edge meets refined comfort. We fuse industrial bones with modern soul to create bespoke environments that resonate with the occupant's internal frequency.
              </p>
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/handies.design/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors" 
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://wa.me/96170228056" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors" 
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            {/* Right Side: Navigation & Utility Links */}
            <div className="flex flex-col lg:items-end gap-6">
              {/* Navigation Links */}
              <nav>
                <ul className="flex flex-wrap gap-6 lg:justify-end">
                  {[
                    { name: 'Home', href: '#' },
                    { name: 'About', href: '#about' },
                    { name: 'Projects', href: '#services' },
                    { name: 'Services', href: '#services' },
                    { name: 'Contact', href: 'https://wa.me/96170228056' }
                  ].map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={`text-sm font-medium tracking-wide transition-colors ${
                          item.name === 'Home'
                            ? 'text-theme-accent'
                            : 'text-white/80 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Utility Links */}
              <div className="flex flex-wrap gap-4 text-xs text-white/60">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms Of Services</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
              </div>
            </div>
          </div>

          {/* Lower Section: Copyright & Developer Credit */}
          <div className="pt-8 flex flex-col items-center gap-4">
            <p className="text-white/60 text-sm">
              @{new Date().getFullYear()}. All Right Reserved handies.design
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span>Developed by</span>
              <a 
                href="https://www.cubiq-solutions.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white/80 transition-colors"
                aria-label="Cubiq Solutions"
              >
                {/* Cubiq Solutions Logo - Blue Diamond with Chevrons */}
                <svg 
                  viewBox="0 0 40 40" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-6 h-6 text-blue-600"
                >
                  <path 
                    d="M18 8L6 20L18 32" 
                    stroke="currentColor" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M22 8L34 20L22 32" 
                    stroke="currentColor" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-bold">Cubiq</span>
                <span className="font-normal">Solutions</span>
              </a>
            </div>
          </div>
        </div>
    </footer>
  );
};
