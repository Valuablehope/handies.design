import React from 'react';
import { Ruler, Hammer, Box, LayoutTemplate } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Construction & Renovation',
    description: 'Full-service execution from demolition to finishing touches. We manage the dust so you don\'t have to.',
    iconName: 'Hammer',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Custom Furniture',
    description: 'Bespoke pieces designed and crafted to fit your space perfectly. From industrial steel to warm teak.',
    iconName: 'Box',
    imageUrl: '/images/custom-furniture.jpg',
  },
  {
    id: '3',
    title: '3D Modelling',
    description: 'Visualize your future space before a single brick is laid. High-fidelity renders and walkthroughs.',
    iconName: 'LayoutTemplate',
    imageUrl: '/images/3d-modelling.png',
  },
  {
    id: '4',
    title: 'Interior Styling',
    description: 'The final layer. Curating textiles, art, and lighting to transform a house into a home.',
    iconName: 'Ruler',
    imageUrl: '/images/interior-styling.jpg',
  },
];

const IconMap: Record<string, React.FC<any>> = {
  Hammer: Hammer,
  Box: Box,
  LayoutTemplate: LayoutTemplate,
  Ruler: Ruler,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-theme-bg relative overflow-hidden z-20 shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.15)] transition-colors duration-1000">
      {/* Subtle Paper Texture Overlay - Consistent with Philosophy */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* Merge Gradient - Bleeding the previous depth into this section */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/[0.02] to-transparent pointer-events-none" />


      {/* Full Width News Header for Expertise */}
      <div className="w-full relative z-10 px-6 md:px-12 mb-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8 border-b-2 border-theme-text pb-4">
            <span className="text-theme-accent font-bold tracking-[0.3em] uppercase text-[11px] mb-2 block">Section II — Capabilities</span>
            <h2 className="text-5xl md:text-7xl font-serif text-theme-text leading-tight tracking-tight">
              OUR <span className="italic">EXPERTISE</span>
            </h2>
          </div>
          <div className="md:col-span-4 pb-4">
            <p className="text-theme-secondary font-serif italic text-base leading-relaxed">
              "We do not just draft spaces; we engineer the physical manifestations of our clients' highest aspirations."
            </p>
          </div>
        </div>
      </div>

      {/* Full Width Expanding Curtains Layout */}
      <div className="w-full group/curtains flex flex-col lg:flex-row min-h-[400px] bg-theme-text overflow-hidden">
        {services.map((service, index) => {
          return (
            <div
              key={service.id}
              className="group relative flex-1 hover:flex-[3.5] flex flex-col justify-end p-8 lg:p-12 lg:border-r border-white/10 last:border-0 transition-[flex] duration-1000 ease-[cubic-bezier(0.25,1,0.3,1)] overflow-hidden cursor-pointer h-[400px] lg:h-[550px]"
            >
              {/* Background Image - strictly contained, no scaling growth */}
              <div className="absolute inset-0 grayscale contrast-[1.1] brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-1000">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-1000" />
              </div>

              {/* Content Wrapper */}
              <div className="relative z-10 w-full h-full flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start w-full">
                  <span className="text-6xl font-serif font-black text-white/5 group-hover:text-theme-accent transition-colors duration-700 italic">
                    {index + 1}
                  </span>
                </div>

                <div className="mt-auto relative">
                  {/* Glassmorphic Broadcast-style Headline Bar */}
                  <div className="absolute -inset-x-8 -inset-y-6 bg-theme-surface/10 backdrop-blur-md border-y border-theme-text/5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out origin-left scale-x-0 group-hover:scale-x-100 -z-10" />

                  <div className="inline-block px-3 py-1 bg-theme-accent text-[10px] text-white uppercase tracking-widest font-bold mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-300">
                    Service {index + 1}
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-serif text-white mb-6 leading-[1.1] tracking-tighter drop-shadow-2xl whitespace-nowrap lg:whitespace-normal group-hover:translate-x-2 transition-transform duration-700">
                    {service.title.split(' & ').map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && <><br className="hidden lg:block" /><span className="italic font-light text-white/60">& </span></>}
                      </React.Fragment>
                    ))}
                  </h3>

                  <div className="opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-out delay-100">
                    <p className="text-white/90 text-[15px] leading-relaxed mb-10 font-serif italic max-w-sm border-l border-theme-accent pl-6 line-clamp-2 lg:line-clamp-none">
                      {service.description}
                    </p>

                    <button className="flex items-center gap-6 text-white group/btn pointer-events-auto">
                      <div className="w-12 h-12 rounded-full border border-theme-text/20 flex items-center justify-center group-hover/btn:bg-theme-surface group-hover/btn:border-theme-accent transition-all duration-500">
                        <span className="text-white group-hover/btn:text-theme-text transition-colors duration-500">→</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/50 group-hover/btn:text-white transition-colors duration-500">View Dossier</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};