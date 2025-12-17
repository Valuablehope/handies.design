import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative flex flex-col md:flex-row items-center">

          {/* Main Architectural Image */}
          <div className="w-full md:w-[65%] h-[500px] md:h-[700px] relative z-0">
            <div className="w-full h-full overflow-hidden rounded-sm shadow-sm">
              <img
                src="/images/about-studio.jpg"
                alt="Studio Architecture"
                className="object-cover w-full h-full grayscale-[25%] hover:grayscale-0 transition-all duration-1000 ease-out transform hover:scale-105"
              />
            </div>
            {/* Decorative colored box behind/accent */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-stone-200 z-[-1] hidden md:block" />
          </div>

          {/* Floating Content Card */}
          <div className="w-full md:w-[45%] bg-white p-8 md:p-14 shadow-2xl relative z-10 md:-ml-24 mt-[-60px] md:mt-0 rounded-sm">

            {/* Decorative Line */}
            <div className="w-12 h-1 bg-rust-500 mb-8" />

            <div className="space-y-2 mb-8">
              <span className="text-stone-400 font-medium tracking-[0.25em] uppercase text-xs block">Since 2024</span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
                Handies <br />
                <span className="font-light text-stone-600">Studio</span>
              </h2>
            </div>

            <div className="space-y-6 text-stone-600 leading-relaxed text-sm md:text-base font-light mb-10">
              <p>
                <strong className="text-stone-900 font-medium">Form follows feeling.</strong> We are a multidisciplinary design practice founded by Firas Bawab, blurring the lines between raw structural integrity and soft, livable luxury.
              </p>
              <p>
                Our philosophy is simple: space should not just be seen, but felt. By juxtaposing industrial elements with organic warmth, we curate environments that stand as valid artistic statements while functioning effortlessly as homes.
              </p>
            </div>

            <div className="flex items-center gap-12 pt-8 border-t border-stone-100">
              <button className="bg-stone-900 text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-rust-600 transition-colors duration-300">
                Book Consultation
              </button>

              <div className="flex gap-8">
                <div>
                  <span className="block text-2xl font-serif text-stone-900">50+</span>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400">Projects</span>
                </div>
                <div>
                  <span className="block text-2xl font-serif text-stone-900">100%</span>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400">Satisfaction</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};