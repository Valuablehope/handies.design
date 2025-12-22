import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="pt-24 pb-12 bg-theme-bg overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="flex flex-col lg:flex-row items-center relative gap-0">

          {/* Main Architectural Image Component */}
          <div className="w-full lg:w-[65%] h-[500px] lg:h-[750px] relative">
            <div className="w-full h-full overflow-hidden rounded-sm shadow-2xl border border-theme-border/10">
              <img
                src="/images/about-studio.jpg"
                alt="Studio Architecture"
                className="object-cover w-full h-full transition-transform duration-1000 hover:scale-105"
              />
            </div>
            {/* Structural Detail Accent */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-theme-accent/20 -z-10" />
          </div>

          {/* Content Card - The intentional Overlay with Glassmorphism */}
          <div className="w-full lg:w-[45%] bg-white/70 backdrop-blur-2xl p-10 lg:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative z-10 lg:-ml-32 mt-[-60px] lg:mt-0 rounded-sm border border-white/40">

            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[2px] bg-theme-accent" />
              <span className="text-theme-secondary opacity-60 font-medium tracking-[0.4em] uppercase text-[10px] block">The Philosophy</span>
            </div>

            <div className="space-y-4 mb-10">
              <span className="text-theme-accent font-medium tracking-[0.2em] uppercase text-xs block">Since 2024</span>
              <h2 className="text-5xl lg:text-7xl font-serif text-theme-text leading-tight tracking-tight">
                Handies <br />
                <span className="font-light italic text-theme-secondary">Studio</span>
              </h2>
            </div>

            <div className="space-y-8 text-theme-secondary leading-relaxed text-base font-light mb-12">
              <p className="border-l-4 border-theme-accent/40 pl-8 italic text-lg lg:text-xl text-theme-text/90">
                <strong className="text-theme-accent font-medium not-italic">Form follows feeling.</strong> We are a multidisciplinary design practice, blurring the lines between raw structural integrity and soft, livable luxury.
              </p>
              <p className="text-theme-secondary/80">
                Our philosophy is simple: space should not just be seen, but felt. By juxtaposing industrial elements with organic warmth, we curate environments that stand as valid artistic statements while functioning effortlessly as homes.
              </p>
            </div>

            <div className="pt-12 border-t border-black/5">
              <div className="flex items-center justify-center gap-12 sm:gap-20">
                <div className="group relative text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rotate-45 bg-theme-accent opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="text-4xl sm:text-5xl font-serif text-theme-text font-medium tracking-tighter">50+</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-theme-secondary opacity-60 font-semibold">Projects</span>
                </div>

                {/* Architectural Vertical Divider */}
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-black/10 to-transparent" />

                <div className="group relative text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl sm:text-5xl font-serif text-theme-text font-medium tracking-tighter">100%</span>
                    <div className="w-1.5 h-1.5 rotate-45 bg-theme-accent opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-theme-secondary opacity-60 font-semibold">Satisfaction</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};