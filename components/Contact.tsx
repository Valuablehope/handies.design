import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-theme-bg transition-colors duration-1000">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          <div className="space-y-8">
            <div>
              <span className="text-theme-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Archive Inquiry</span>
              <h2 className="text-5xl md:text-7xl font-serif text-theme-text leading-tight tracking-tighter">
                Let's Build <br /> <span className="italic text-theme-accent">Something.</span>
              </h2>
              <p className="text-theme-secondary mt-8 max-w-md font-serif italic text-lg leading-relaxed">
                Ready to transform your space? Schedule a consultation or send us a message about your upcoming project.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-theme-text/10">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-theme-surface shadow-sm rounded-full text-theme-accent">
                  <Mail size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] font-bold text-theme-secondary uppercase tracking-[0.3em] opacity-40">Direct Dispatch</h4>
                  <a href="mailto:hello@handies.design" className="text-lg font-serif italic text-theme-text hover:text-theme-accent transition-colors">hello@handies.design</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-theme-surface shadow-sm rounded-full text-theme-accent">
                  <Phone size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] font-bold text-theme-secondary uppercase tracking-[0.3em] opacity-40">Voice Archive</h4>
                  <a href="tel:+96170228056" className="text-lg font-serif italic text-theme-text hover:text-theme-accent transition-colors">+961 70 228 056</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-theme-surface/50 p-8 md:p-16 border border-theme-border/50 shadow-2xl backdrop-blur-sm relative rounded-sm overflow-hidden">
            {/* Decorative Newsroom Corner */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-theme-accent/5 rotate-45 translate-x-1/2 -translate-y-1/2" />

            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-[10px] font-bold text-theme-secondary uppercase tracking-widest opacity-60">Full Identity</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-0 py-3 bg-transparent border-b border-theme-text/10 focus:border-theme-accent outline-none transition-all placeholder:text-theme-secondary/30 font-serif italic"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-[10px] font-bold text-theme-secondary uppercase tracking-widest opacity-60">Digital Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-0 py-3 bg-transparent border-b border-theme-text/10 focus:border-theme-accent outline-none transition-all placeholder:text-theme-secondary/30 font-serif italic"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="service" className="text-[10px] font-bold text-theme-secondary uppercase tracking-widest opacity-60">Strategic Interest</label>
                <select
                  id="service"
                  className="w-full px-0 py-3 bg-transparent border-b border-theme-text/10 focus:border-theme-accent outline-none transition-all font-serif italic appearance-none cursor-pointer"
                >
                  <option className="bg-theme-bg">Residential Architecture</option>
                  <option className="bg-theme-bg">Industrial Curation</option>
                  <option className="bg-theme-bg">Interior Refinement</option>
                  <option className="bg-theme-bg">Consultation Dispatch</option>
                </select>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-[10px] font-bold text-theme-secondary uppercase tracking-widest opacity-60">Design Brief</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-b border-theme-text/10 focus:border-theme-accent outline-none transition-all placeholder:text-theme-secondary/30 font-serif italic resize-none"
                  placeholder="Describe your vision..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-theme-text text-theme-bg font-bold tracking-[0.4em] uppercase hover:bg-theme-accent hover:shadow-[0_20px_40px_-10px_rgba(var(--theme-accent),0.3)] transition-all duration-500 shadow-xl"
              >
                Dispatch Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};