import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-theme-bg overflow-hidden relative z-0 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] transition-colors duration-1000">
      {/* Subtle Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">

        {/* Realistic Newspaper Masthead */}
        <div className="text-center mb-16 px-4">
          <div className="border-t-4 border-b border-theme-text py-1 mb-2">
            <div className="border-t border-b-4 border-theme-text py-4 flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-[0.3em] font-bold text-theme-text">
              <div className="flex items-center gap-6">
                <span>London Edition</span>
                <span className="hidden md:inline text-theme-text/30">|</span>
                <span>Issue No. 24.12</span>
              </div>
              <div className="my-4 md:my-0 text-3xl font-serif tracking-tight lowercase italic">
                The Handies Chronicle
              </div>
              <div className="flex items-center gap-6">
                <span>Wednesday, Dec 2024</span>
                <span className="hidden md:inline text-theme-text/30">|</span>
                <span>Two Shillings</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-20">
          <h2 className="text-[6vw] lg:text-[5rem] font-serif text-theme-text leading-[0.85] mb-8 tracking-tighter">
            THE ARCHITECTURE <br />
            <span className="italic font-light">of </span>
            <span className="text-theme-accent italic">FEELING</span>
          </h2>
          <p className="max-w-2xl mx-auto text-theme-secondary font-serif italic text-xl border-y border-theme-text/10 py-4">
            "A comprehensive study on the intersection of industrial honesty and human comfort."
          </p>
        </div>

        {/* Article Grid with Vertical Rules */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-t border-theme-text/10 pt-12">

          {/* Column 1: The Core Belief */}
          <div className="md:col-span-4 pr-10 pb-12">
            <div className="space-y-6">
              <p className="text-theme-text/90 leading-relaxed text-[17px] first-letter:text-8xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-letter:text-theme-text first-letter:leading-[0.8] text-justify font-serif">
                <span className="font-bold uppercase tracking-tight text-sm block mb-2">Special Report —</span>
                Our philosophy is rooted in the belief that space should not just be observed, but felt. By juxtaposing the raw integrity of industrial materials with the organic warmth of human habitability, we curate environments that stand as valid artistic statements.
              </p>
              <p className="text-theme-secondary leading-relaxed text-[15px] text-justify font-serif">
                We believe that the tension between structural truth and livable luxury is where true character resides. Every project is an exploration of this delicate balance, seeking the harmony between the monumental scale and the intimate detail.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-theme-text italic">
              <h4 className="font-serif font-bold text-lg text-theme-text mb-4 not-italic uppercase tracking-wider">The Material Truth</h4>
              <p className="text-theme-secondary text-sm leading-relaxed text-justify font-serif">
                From the cold touch of exposed concrete to the organic grain of hand-finished timber, we honor the innate honesty of our materials. We do not seek to mask the process of creation; instead, we celebrate the marks of the maker.
              </p>
            </div>
          </div>

          {/* Column 2: Visual Centerpiece (The "Photojournalism" Column) */}
          <div className="md:col-span-4 px-10 border-x border-theme-text/10 pb-12">
            <div className="space-y-8">
              <div className="relative">
                <div className="w-full grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-1000">
                  <img
                    src="/images/about-studio.jpg"
                    alt="Handies Studio Design"
                    className="w-full object-cover shadow-inner"
                  />
                  <div className="absolute inset-0 border border-black/5 pointer-events-none" />
                </div>
                {/* Authentic Caption */}
                <div className="mt-4 pb-4 border-b border-theme-text/10">
                  <p className="text-[11px] leading-tight text-theme-secondary font-serif italic">
                    <span className="font-bold uppercase not-italic mr-2">Fig 1.</span>
                    A study in shadows and structure. The studio's approach to light as a primary building material is evident in this recent residential commission.
                    <span className="block mt-1 uppercase tracking-tighter not-italic font-bold text-[9px] text-theme-text/40">Photo: Handies Archives</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 text-center">
                <div className="inline-block p-6 border-2 border-theme-text/5 rotate-[-1deg] bg-theme-surface/30 backdrop-blur-sm shadow-sm transition-colors duration-1000">
                  <p className="text-theme-text text-lg font-serif italic leading-snug">
                    "Architecture is the stage upon which the most silent moments of life unfold."
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-8 text-justify">
                <p className="text-[14px] text-theme-secondary font-serif leading-relaxed">
                  In a world increasingly dominated by the digital and the ephemeral, we advocate for the tactile and the permanent. Our work is a silent rebellion against the disposable nature of modern design.
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: The Impact & Data */}
          <div className="md:col-span-4 pl-10 flex flex-col justify-between pb-12">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-theme-accent font-bold tracking-[0.2em] uppercase text-[10px] block border-b border-theme-accent/20 pb-2">Global Curation</span>
                <h3 className="font-serif text-3xl text-theme-text leading-tight font-bold">The Quiet Brutalism</h3>
                <p className="text-theme-secondary leading-relaxed text-[15px] text-justify font-serif">
                  Our signature style, often referred to as "Quiet Brutalism," prioritizes the tectonic honesty of materials and the precision of assembly. Every joint we detail and every surface we finish is a deliberate choice intended to evoke a visceral emotional response.
                </p>
              </div>

              <div className="bg-stone-50/80 border border-theme-text/10 text-theme-text p-8 relative shadow-sm">
                {/* Decorative cut-out corner */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-theme-bg rotate-45 border-b border-l border-theme-text/10" />
                <p className="font-serif italic text-lg leading-relaxed relative z-10 text-theme-text">
                  "It is not enough for a space to be visually pleasing; it must resonate with the occupant's internal frequency."
                </p>
                <div className="mt-6 flex items-center gap-4 relative z-10">
                  <div className="w-8 h-[1px] bg-theme-text/20" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">— Editorial Staff</span>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-4 items-end">
              <div className="border-t-4 border-theme-text pt-4">
                <span className="block text-4xl font-serif text-theme-text font-black tracking-tighter">50+</span>
                <span className="text-[10px] uppercase tracking-widest text-theme-secondary font-bold">COMMISSIONS</span>
              </div>
              <div className="border-t-4 border-theme-text pt-4 pl-4 border-l border-theme-text/10">
                <span className="block text-4xl font-serif text-theme-text font-black tracking-tighter">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-theme-secondary font-bold">DELIVERY</span>
              </div>
            </div>
          </div>

        </div>

        {/* Newspaper Footer / Closing Line */}
        <div className="mt-20 pt-8 border-t border-theme-text/20 flex justify-between items-center text-[9px] uppercase tracking-[0.4em] font-bold text-theme-secondary/40">
          <span>Printed in Beirut</span>
          <div className="flex gap-2">
            <div className="w-1.5 h-1.5 bg-current rounded-full" />
            <div className="w-1.5 h-1.5 bg-current rounded-full" />
            <div className="w-1.5 h-1.5 bg-current rounded-full" />
          </div>
          <span>Continued on Page 02</span>
        </div>

      </div>
    </section>
  );
};

