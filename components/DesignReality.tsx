import React, { useState } from 'react';
import { getImagePath } from '../utils/images';

const journeyPhases = [
    {
        id: 'raw',
        title: 'Raw Idea',
        description: 'The initial spark. We begin with a blank canvas and your abstract desires, translating them into the first spatial logic.',
        image: getImagePath('/images/sketch.png'),
    },
    {
        id: 'map',
        title: 'Raw Map',
        description: 'The blueprint. We define the flow, the light, and the boundaries. Every line here is a future moment of your life.',
        image: getImagePath('/images/moodboard.png'),
    },
    {
        id: 'render',
        title: 'Rendered Design',
        description: 'The digital twin. High-fidelity 3D visualizations that let you walk through your future home before a single nail is driven.',
        image: getImagePath('/images/3d-modelling.png'),
    },
    {
        id: 'reality',
        title: 'Reality',
        description: 'The final reveal. The physical manifest of our joint vision. A space that is not just built, but composed.',
        image: getImagePath('/images/interior_design_1.png'),
    },
];

export const DesignReality: React.FC = () => {
    const [activeCard, setActiveCard] = useState<number>(0);

    return (
        <section id="roadmap" className="py-32 text-theme-text overflow-hidden relative z-30 transition-colors duration-1000" style={{ background: `linear-gradient(to bottom, var(--theme-bg) 0%, #e7e5e4 100%)` }}>
            {/* Subtle Paper Texture Overlay - Consistent Across Studio */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
                {/* Section Header - Editorial Style */}
                <div className="mb-16 text-center md:text-left">
                    <span className="text-theme-accent font-bold tracking-[0.3em] uppercase text-[11px] mb-4 block">
                        Section III — Process
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif text-theme-text leading-tight tracking-tight mb-6">
                        OUR <span className="italic text-theme-accent">JOURNEY</span>
                    </h2>
                    <div className="flex items-center gap-4 justify-center md:justify-start max-w-3xl">
                        <div className="w-12 h-[1px] bg-theme-text/20" />
                        <p className="text-theme-secondary font-serif italic text-lg leading-relaxed">
                            "Embrace the peaks and valleys, the quiet moments and the thrill of exploration. Each step forward takes us closer to the unknown, yet closer to ourselves. The journey is vast, the path is yours - let's wander, wonder, and discover together."
                        </p>
                    </div>
                </div>

                {/* Main Content Grid - Left Image + Right Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                    {/* Left: Image Container */}
                    <div className="lg:col-span-6 flex">
                        {/* Image Container */}
                        <div className="flex-1 relative overflow-hidden rounded-[7px] border border-theme-text/10 bg-theme-surface shadow-lg min-h-[500px]">
                            <div className="relative w-full h-full overflow-hidden">
                                <img
                                    src={journeyPhases[activeCard].image}
                                    alt={journeyPhases[activeCard].title}
                                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                                />
                                {/* Dark overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                
                                {/* Dynamic Text Overlay */}
                                <div className="absolute inset-0 flex items-end">
                                    <div className="w-full bg-black/40 p-8">
                                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3 text-left">
                                            {journeyPhases[activeCard].title}
                                        </h3>
                                        <p className="text-white/90 font-serif italic text-lg leading-relaxed text-left">
                                            {journeyPhases[activeCard].description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image Cards Grid */}
                    <div className="lg:col-span-6 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 h-full items-start">
                        {journeyPhases.map((phase, index) => {
                            // Zigzag alignment: first and third (0, 2) top, second and fourth (1, 3) bottom
                            const isTopAligned = index % 2 === 0; // 0, 2 are top
                            return (
                            <div
                                key={phase.id}
                                onClick={() => setActiveCard(index)}
                                className={`group relative overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer rounded-[7px] ${
                                    isTopAligned ? 'self-start' : 'self-end'
                                } ${
                                    activeCard === index
                                        ? 'border-theme-accent shadow-lg'
                                        : 'border-theme-text/10 hover:border-theme-accent/30'
                                }`}
                                style={{ height: '85%' }}
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden bg-theme-text w-full h-full">
                                    <img
                                        src={phase.image}
                                        alt={phase.title}
                                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                    />
                                    {/* Dark overlay for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                    
                                    {/* Title overlay on image */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        <h3 className="text-xl font-serif font-bold drop-shadow-lg text-center">
                                            {phase.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Hover accent line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-theme-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom decorative element */}
                <div className="mt-16 text-center border-t border-theme-text/10 pt-8">
                    <p className="text-theme-secondary text-sm font-serif italic">
                        A transparent journey through our design methodology
                    </p>
                </div>
            </div>
        </section>
    );
};
