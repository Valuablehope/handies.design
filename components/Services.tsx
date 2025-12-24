import React, { useState, useEffect } from 'react';
import { Ruler, Hammer, Box, LayoutTemplate, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Service } from '../types';

// Generate 5 gallery images for each service
const generateGalleryImages = (serviceId: string, baseImageUrl: string): string[] => {
  // Service-specific image galleries
  const serviceGalleries: Record<string, string[]> = {
    '1': [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    ],
    '2': [
      '/images/custom-furniture.jpg',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=2070&auto=format&fit=crop',
    ],
    '3': [
      '/images/3d-modelling.png',
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2032&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    ],
    '4': [
      '/images/interior-styling.jpg',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=2070&auto=format&fit=crop',
    ],
  };

  // Return service-specific gallery or fallback to base image repeated 5 times
  return serviceGalleries[serviceId] || Array(5).fill(baseImageUrl);
};

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
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  // Generate gallery images when service is selected
  useEffect(() => {
    if (selectedService) {
      const images = generateGalleryImages(selectedService.id, selectedService.imageUrl);
      setGalleryImages(images);
      setCurrentImageIndex(0);
    }
  }, [selectedService]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!selectedService) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeGallery();
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedService, galleryImages.length]);

  const openGallery = (service: Service) => {
    setSelectedService(service);
  };

  const closeGallery = () => {
    setSelectedService(null);
    setCurrentImageIndex(0);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="services" className="py-32 relative overflow-hidden z-20 transition-colors duration-1000" style={{ background: `linear-gradient(to bottom, #e7e5e4 0%, var(--theme-bg) 100%)` }}>
      {/* Subtle Paper Texture Overlay - Consistent with Philosophy */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />


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
              onClick={() => openGallery(service)}
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

      {/* Gallery Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          onClick={closeGallery}
        >
          {/* Close Button - More Prominent */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeGallery();
            }}
            className="absolute top-20 right-6 z-[210] w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border-2 border-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-2xl"
            aria-label="Close gallery"
          >
            <X size={28} strokeWidth={2.5} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-6 z-10 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-6 z-10 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center p-6 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
              <img
                src={galleryImages[currentImageIndex]}
                alt={`${selectedService.title} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  // Fallback to base image if variation doesn't exist
                  (e.target as HTMLImageElement).src = selectedService.imageUrl;
                }}
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <span className="text-white text-sm font-medium">
                {currentImageIndex + 1} / {galleryImages.length}
              </span>
            </div>

            {/* Service Title */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <span className="text-white text-sm font-serif font-medium">
                {selectedService.title}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};