import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover video-bg scale-105"
          >
            {/* High-quality interior design video: Modern living room with industrial touches */}
            <source
              src="https://videos.pexels.com/video-files/7578552/7578552-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark overlay for text readability - Refined */}
        <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />

        {/* Gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-stone-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left w-full pt-12 md:pt-0">
        <h1 className="text-stone-50 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.1] mb-8 tracking-tight drop-shadow-2xl animate-fade-in-up opacity-0">
          Making Space, <br />
          <span className="italic text-stone-200 font-light">Livable.</span>
        </h1>

        <p className="text-stone-200/90 text-lg sm:text-xl md:text-2xl max-w-xl mx-auto md:mx-0 font-light mb-12 leading-relaxed drop-shadow-lg animate-fade-in-up delay-200 opacity-0">
          Where raw edge meets refined comfort. We fuse industrial bones with modern soul to create bespoke environments.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start animate-fade-in-up delay-300 opacity-0">
          <a
            href="#services"
            className="inline-block min-w-[220px] px-10 py-4 bg-white text-stone-900 font-medium tracking-wide hover:bg-stone-50 hover:scale-105 transition-all duration-300 text-center shadow-xl hover:shadow-2xl rounded-sm"
          >
            View Projects
          </a>
          <a
            href="https://wa.me/96170228056"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block min-w-[220px] px-10 py-4 bg-white text-stone-900 font-medium tracking-wide hover:bg-stone-50 hover:scale-105 transition-all duration-300 text-center shadow-xl hover:shadow-2xl rounded-sm"
          >
            Book Consultation
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/50 hover:text-white transition-colors cursor-pointer animate-fade-in delay-500 opacity-0">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={32} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
};