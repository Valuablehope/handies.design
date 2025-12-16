import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'We meet to understand your lifestyle, needs, and aesthetic preferences. We analyze the space and define the scope.',
    },
    {
      num: '02',
      title: 'Concept & 3D',
      desc: 'We translate ideas into visuals. Mood boards, material selection, and high-fidelity 3D renderings to align our vision.',
    },
    {
      num: '03',
      title: 'Execution',
      desc: 'Our construction team takes over. From demolition to installation, we manage contractors and timelines rigorously.',
    },
    {
      num: '04',
      title: 'Handover',
      desc: 'The final reveal. Styling, quality checks, and walking you through your new, livable space.',
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-stone-900 text-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <div className="relative lg:sticky lg:top-32 self-start">
             <span className="text-stone-400 font-medium tracking-widest uppercase text-xs mb-3 block">The Journey</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 md:mb-8 leading-tight">
              From Raw <br /> to <span className="text-stone-400 italic">Refined.</span>
            </h2>
            <p className="text-stone-400 max-w-md text-base md:text-lg font-light leading-relaxed">
              Our proven workflow ensures transparency and quality at every stage. We bridge the gap between creative dreaming and engineering reality.
            </p>
          </div>

          <div className="flex flex-col gap-10 md:gap-12">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 border-b border-stone-800 pb-10 md:pb-12 group">
                <span className="text-3xl md:text-4xl font-serif text-stone-700 group-hover:text-white transition-colors">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">{step.title}</h3>
                  <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};