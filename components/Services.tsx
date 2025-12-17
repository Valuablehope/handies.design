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
    <section id="services" className="py-16 md:py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16 md:flex md:justify-between md:items-end border-b border-stone-300 pb-8">
          <div className="max-w-xl">
            <span className="text-rust-700 font-medium tracking-widest uppercase text-xs mb-2 block">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900">
              Comprehensive Design <span className="italic text-stone-500">Solutions</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-stone-600 max-w-sm text-sm leading-relaxed">
            We don't just design; we build. Our integrated approach ensures the vision on paper matches the reality on site.
          </p>
        </div>

        {/* Expanding Curtains Layout */}
        <div className="group/curtains flex flex-col lg:flex-row min-h-[600px] w-full bg-stone-900 shadow-2xl overflow-hidden rounded-xl">
          {services.map((service, index) => {
            const Icon = IconMap[service.iconName];
            return (
              <div
                key={service.id}
                className="group relative flex-1 hover:flex-[3] flex flex-col justify-end p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-stone-800 last:border-0 transition-all duration-1000 ease-[cubic-bezier(0.25,0.76,0.36,0.98)] overflow-hidden cursor-pointer group-hover/curtains:brightness-50 group-hover/curtains:hover:brightness-100"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0 transform group-hover:scale-105"
                  />
                  {/* Dark Gradient Overlay - Fades out significantly on hover for HD look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/50 to-stone-900/20 opacity-90 group-hover:opacity-30 transition-opacity duration-1000" />
                </div>

                {/* Content Wrapper */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between">
                  {/* Top Section: Number */}
                  <div className="flex justify-between items-start w-full transform transition-all duration-700 delay-100 group-hover:translate-y-0">
                    <span className="text-4xl font-serif font-light text-white/60 group-hover:text-rust-400 transition-colors duration-500">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-auto transform transition-transform duration-700 group-hover:translate-y-0">
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight min-w-[180px] drop-shadow-lg">
                      {service.title}
                    </h3>

                    <div className="max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-700 ease-out overflow-hidden">
                      <p className="text-stone-200 text-lg leading-relaxed mb-6 border-l-2 border-rust-500 pl-4">
                        {service.description}
                      </p>

                      <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-widest uppercase hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40 group-hover/btn:gap-3">
                        <span>Explore Service</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};