import React from 'react';
import { Ruler, Hammer, Box, LayoutTemplate } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Construction & Renovation',
    description: 'Full-service execution from demolition to finishing touches. We manage the dust so you don\'t have to.',
    iconName: 'Hammer',
  },
  {
    id: '2',
    title: 'Custom Furniture',
    description: 'Bespoke pieces designed and crafted to fit your space perfectly. From industrial steel to warm teak.',
    iconName: 'Box',
  },
  {
    id: '3',
    title: '3D Modelling',
    description: 'Visualize your future space before a single brick is laid. High-fidelity renders and walkthroughs.',
    iconName: 'LayoutTemplate',
  },
  {
    id: '4',
    title: 'Interior Styling',
    description: 'The final layer. Curating textiles, art, and lighting to transform a house into a home.',
    iconName: 'Ruler',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.iconName];
            return (
              <div key={service.id} className="group p-6 md:p-8 bg-white border border-stone-200 hover:border-rust-600/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-rust-50 transition-colors">
                  <Icon className="text-stone-700 group-hover:text-rust-700 transition-colors" size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};