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
    <section id="services" className="pt-12 pb-28 bg-theme-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Main Expertise Container Card */}
        <div className="bg-white/70 backdrop-blur-2xl p-10 lg:p-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] rounded-sm border border-white/40">

          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12 border-l-4 border-theme-accent pl-10">
            <div className="max-w-xl">
              <span className="text-theme-accent font-semibold tracking-[0.5em] uppercase text-[10px] mb-6 block">Our Expertise</span>
              <h2 className="text-5xl md:text-7xl font-serif text-theme-text leading-tight tracking-tight">
                Comprehensive <br />
                <span className="italic text-theme-secondary">Design Solutions</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-theme-secondary/80 text-lg font-light leading-relaxed mb-8">
                We don't just design; we build. Our integrated approach ensures the vision on paper matches the physical reality on site.
              </p>
              <div className="w-16 h-[1px] bg-theme-accent/50" />
            </div>
          </div>

          {/* Expanding Curtains Layout */}
          <div className="group/curtains flex flex-col lg:flex-row min-h-[600px] w-full bg-theme-text shadow-2xl overflow-hidden rounded-sm border border-white/5">
            {services.map((service, index) => {
              const Icon = IconMap[service.iconName];
              return (
                <div
                  key={service.id}
                  className="group relative flex-1 hover:flex-[4] flex flex-col justify-end p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 last:border-0 transition-all duration-1000 ease-[cubic-bezier(0.25,0.76,0.36,0.98)] overflow-hidden cursor-pointer group-hover/curtains:brightness-50 group-hover/curtains:hover:brightness-100"
                >
                  {/* Background Image with Parallax Scale */}
                  <div className="absolute inset-0">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0 transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-1000" />
                  </div>

                  {/* Content Wrapper */}
                  <div className="relative z-10 w-full h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start w-full">
                      <span className="text-5xl font-serif font-light text-white/40 group-hover:text-theme-accent transition-colors duration-500">
                        0{index + 1}
                      </span>
                      {Icon && <Icon size={24} className="text-white/20 group-hover:text-theme-accent transition-colors duration-500" />}
                    </div>

                    <div className="mt-auto">
                      <h3 className="text-3xl lg:text-4xl font-serif text-white mb-6 leading-tight min-w-[200px] drop-shadow-2xl">
                        {service.title}
                      </h3>

                      <div className="max-h-0 opacity-0 group-hover:max-h-[400px] group-hover:opacity-100 transition-all duration-700 ease-out overflow-hidden">
                        <p className="text-white/80 text-lg leading-relaxed mb-8 border-l-2 border-theme-accent pl-6 max-w-md">
                          {service.description}
                        </p>

                        <button className="inline-flex items-center gap-4 px-8 py-4 rounded-sm bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-theme-accent transition-all duration-500 hover:scale-105 group/btn shadow-2xl">
                          <span>Explore Project</span>
                          <span className="transition-transform duration-500 group-hover/btn:translate-x-2">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};