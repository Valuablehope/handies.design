import React, { useState, useRef, useEffect } from 'react';
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
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const filteredProjects =
    filter === DesignStyle.All
      ? projects
      : projects.filter((p) => p.category === filter);

  // Mouse drag to scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Scroll to specific project
  const scrollToProject = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const projectWidth = container.scrollWidth / filteredProjects.length;
    container.scrollTo({
      left: projectWidth * index,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  // Mouse wheel to horizontal scroll (only when hovering over carousel container, not cards)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;

      // Check if the target is the container itself (not a child element like project cards)
      const isDirectlyOnContainer = target === container;

      // Only convert vertical to horizontal scroll if directly on the container
      // This allows normal page scrolling when over project cards
      if (isDirectlyOnContainer && Math.abs(e.deltaY) > 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  // Auto-play functionality - advance every 5 seconds
  useEffect(() => {
    if (isDragging || filteredProjects.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % filteredProjects.length;
        scrollToProject(nextIndex);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isDragging, filteredProjects.length]);

  // Update active index based on scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const projectWidth = container.scrollWidth / filteredProjects.length;
      const currentIndex = Math.round(scrollPosition / projectWidth);
      setActiveIndex(currentIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [filteredProjects.length]);

  return (
    <section id="portfolio" className="py-32 bg-stone-950 text-white overflow-hidden relative">
      {/* Ambient Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rust-950/20 via-stone-950 to-stone-900 pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-[2px] bg-rust-500" />
                <span className="text-rust-400 font-medium tracking-[0.3em] uppercase text-xs">Portfolio</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif leading-none mb-4">
                Featured
                <br />
                <span className="text-stone-500 italic">Projects</span>
              </h2>
              <p className="text-stone-400 text-lg max-w-xl mt-6">
                Explore our curated collection of transformative spaces where vision meets reality.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3">
              {Object.values(DesignStyle).map((style) => (
                <button
                  key={style}
                  onClick={() => setFilter(style)}
                  className={`group relative px-6 py-3 text-xs font-medium tracking-widest uppercase transition-all duration-500 overflow-hidden ${filter === style ? 'text-white' : 'text-stone-500 hover:text-white'
                    }`}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-rust-600 to-rust-500 transition-transform duration-500 ${filter === style ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'
                    }`} />

                  {/* Border */}
                  <div className="absolute inset-0 border border-stone-700 group-hover:border-rust-500 transition-colors duration-500" />

                  <span className="relative z-10">{style}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Showcase */}
        <div className="relative mb-20">
          <div
            ref={scrollContainerRef}
            className="flex gap-8 px-6 md:px-12 overflow-x-scroll snap-x snap-mandatory pb-8 -mx-6 md:-mx-12 cursor-grab select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[50vw] snap-center cursor-pointer first:ml-6 md:first:ml-12 last:mr-6 md:last:mr-12"
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Main Card */}
                <div className="relative h-[600px] overflow-hidden bg-stone-900 rounded-sm">
                  {/* Image with Parallax Effect */}
                  <div className="absolute inset-0 transform transition-transform duration-1000 ease-out group-hover:scale-105">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  </div>

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Content */}
                  <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-between">
                    {/* Top Section */}
                    <div className="flex justify-between items-start">
                      {/* Index Number */}
                      <div className="text-8xl md:text-9xl font-serif text-white/5 group-hover:text-white/10 transition-colors duration-700 leading-none">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Year Badge */}
                      <div className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                        <span className="text-white/80 text-sm font-light tracking-wider">{project.year}</span>
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="space-y-6">
                      {/* Category */}
                      <div className="inline-flex items-center gap-3 px-4 py-2 bg-rust-500/20 backdrop-blur-sm border border-rust-500/30 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="w-2 h-2 bg-rust-400 rounded-full animate-pulse" />
                        <span className="text-rust-200 text-xs font-medium tracking-widest uppercase">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight transform transition-all duration-500 group-hover:translate-x-2">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                        {project.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                        <button className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-white text-stone-900 text-sm font-medium tracking-wider uppercase hover:bg-rust-500 hover:text-white transition-all duration-300">
                          <span>Explore</span>
                          <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                        </button>

                        <button className="text-white/60 hover:text-white text-sm font-medium tracking-wider uppercase transition-colors duration-300">
                          Case Study
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corner Lines */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/0 group-hover:border-white/20 transition-all duration-700" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/0 group-hover:border-white/20 transition-all duration-700" />
                </div>

                {/* Floating Shadow Effect */}
                <div className="absolute -inset-4 bg-rust-500/0 group-hover:bg-rust-500/5 blur-2xl transition-all duration-700 -z-10" />
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                className={`h-1 rounded-full transition-all duration-500 hover:scale-110 ${index === activeIndex ? 'w-12 bg-rust-500' : 'w-8 bg-stone-700 hover:bg-stone-600'
                  }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12 bg-stone-900/50 backdrop-blur-sm border border-stone-800 rounded-sm">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-white mb-2">{filteredProjects.length}</div>
              <div className="text-stone-500 text-xs tracking-widest uppercase">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-white mb-2">50+</div>
              <div className="text-stone-500 text-xs tracking-widest uppercase">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-white mb-2">100%</div>
              <div className="text-stone-500 text-xs tracking-widest uppercase">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-white mb-2">24/7</div>
              <div className="text-stone-500 text-xs tracking-widest uppercase">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};