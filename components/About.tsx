import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative">
             <div className="aspect-[3/4] bg-stone-200 w-full max-w-md mx-auto overflow-hidden relative">
                <img 
                    src="https://picsum.photos/id/452/600/800" 
                    alt="Interior Detail" 
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white p-6 items-center justify-center shadow-lg hidden md:flex">
                     <p className="font-serif italic text-2xl text-stone-900 text-center">"Function is the soul of design."</p>
                </div>
             </div>
          </div>
          
          <div>
            <span className="text-rust-700 font-medium tracking-widest uppercase text-xs mb-3 block">About the Studio</span>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6 md:mb-8">
              handies<span className="text-stone-400">.design</span>
            </h2>
            <div className="space-y-4 md:space-y-6 text-stone-600 leading-relaxed text-sm md:text-base">
              <p>
                Founded by <strong className="text-stone-900">Firas Bawab</strong>, handies.design is a multidisciplinary studio bridging the gap between raw construction and luxury interior styling.
              </p>
              <p>
                We believe that urban design is where raw edge meets refined comfort. By combining industrial bones with a modern soul, we create spaces that are not just visually striking, but deeply livable.
              </p>
              <p>
                Whether it's a custom furniture piece crafted from reclaimed wood or a complete residential overhaul, our approach remains the same: meticulous attention to detail, respect for materials, and a commitment to functionality.
              </p>
            </div>
            
            <div className="mt-8 md:mt-10 flex gap-8">
               <div>
                  <h4 className="text-2xl md:text-3xl font-serif text-stone-900">50+</h4>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-stone-500 mt-1">Projects Completed</p>
               </div>
               <div>
                  <h4 className="text-2xl md:text-3xl font-serif text-stone-900">100%</h4>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-stone-500 mt-1">Client Satisfaction</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};