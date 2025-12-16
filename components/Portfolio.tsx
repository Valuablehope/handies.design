import React, { useState } from 'react';
import { DesignStyle, Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'The Foundry Loft',
    category: DesignStyle.Industrial,
    description: 'Converted warehouse space featuring exposed brick and steel beams.',
    imageUrl: 'https://picsum.photos/id/111/800/600',
    year: '2023',
  },
  {
    id: '2',
    title: 'Nordic Light',
    category: DesignStyle.Scandinavian,
    description: 'Minimalist apartment focusing on natural light and pale woods.',
    imageUrl: 'https://picsum.photos/id/201/800/800',
    year: '2024',
  },
  {
    id: '3',
    title: 'Azure Villa',
    category: DesignStyle.Luxury,
    description: 'High-end coastal residence with custom marble joinery.',
    imageUrl: 'https://picsum.photos/id/164/800/600',
    year: '2023',
  },
  {
    id: '4',
    title: 'Urban Oasis',
    category: DesignStyle.Minimalist,
    description: 'A sanctuary in the city using biophilic design principles.',
    imageUrl: 'https://picsum.photos/id/235/800/1000',
    year: '2022',
  },
  {
    id: '5',
    title: 'Mid-Century Revival',
    category: DesignStyle.Commercial,
    description: 'Boutique office space inspired by 1960s aesthetics.',
    imageUrl: 'https://picsum.photos/id/433/800/600',
    year: '2024',
  },
  {
    id: '6',
    title: 'Concrete Canvas',
    category: DesignStyle.Industrial,
    description: 'Raw concrete surfaces paired with plush velvet textiles.',
    imageUrl: 'https://picsum.photos/id/449/800/800',
    year: '2023',
  },
];

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<DesignStyle>(DesignStyle.All);

  const filteredProjects =
    filter === DesignStyle.All
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-rust-700 font-medium tracking-widest uppercase text-xs mb-3 block">Selected Works</span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-8">Curated Spaces</h2>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {Object.values(DesignStyle).map((style) => (
              <button
                key={style}
                onClick={() => setFilter(style)}
                className={`px-4 py-2 text-xs md:text-sm transition-all duration-300 rounded-full border ${
                  filter === style
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-transparent text-stone-500 border-stone-200 hover:border-stone-400'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-stone-900 group-hover:text-rust-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-stone-500 mt-1">{project.category}</p>
                </div>
                <span className="text-xs font-mono text-stone-400 border border-stone-200 px-2 py-1 rounded">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};