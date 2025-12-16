import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          {/* High-quality interior design video: Modern living room with industrial touches */}
          <source 
            src="https://videos.pexels.com/video-files/7578552/7578552-hd_1920_1080_30fps.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply" />
        
        {/* Gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-stone-900/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left w-full pt-12 md:pt-0">
        <h1 className="text-stone-100 font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight mb-6 tracking-tight drop-shadow-lg">
          Making Space, <br />
          <span className="italic text-stone-200">Livable.</span>
        </h1>
        
        <p className="text-stone-200 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 font-light mb-8 md:mb-10 leading-relaxed drop-shadow-md">
          Where raw edge meets refined comfort. We fuse industrial bones with modern soul to create bespoke environments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#portfolio"
            className="px-8 py-4 bg-white text-stone-900 font-medium tracking-wide hover:bg-stone-100 transition-colors text-center shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/40 text-white font-medium tracking-wide hover:bg-white/10 transition-colors backdrop-blur-sm text-center"
          >
            Book Consultation
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/70">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};