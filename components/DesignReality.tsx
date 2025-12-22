import React, { useState } from 'react';

const phases = [
    {
        id: 'raw',
        title: 'Raw Idea',
        desc: 'The initial spark. We begin with a blank canvas and your abstract desires, translating them into the first spatial logic.',
        image: '/images/sketch.png',
        tag: 'Phase 01',
    },
    {
        id: 'map',
        title: 'Raw Map',
        desc: 'The blueprint. We define the flow, the light, and the boundaries. Every line here is a future moment of your life.',
        image: '/images/moodboard.png',
        tag: 'Phase 02',
    },
    {
        id: 'render',
        title: 'Rendered Design',
        desc: 'The digital twin. High-fidelity 3D visualizations that let you walk through your future home before a single nail is driven.',
        image: '/images/3d-modelling.png',
        tag: 'Phase 03',
    },
    {
        id: 'reality',
        title: 'Reality',
        desc: 'The final reveal. The physical manifest of our joint vision. A space that is not just built, but composed.',
        image: '/images/interior_design_1.png',
        tag: 'Phase 04',
    },
];

export const DesignReality: React.FC = () => {
    const [activePhase, setActivePhase] = useState(0);

    return (
        <section id="roadmap" className="py-28 bg-theme-bg text-theme-text overflow-hidden border-y border-theme-border/10 relative">
            {/* Architectural Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 relative">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8 border-l border-theme-accent/30 pl-8">
                    <div className="max-w-2xl">
                        <span className="text-theme-accent font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Process Architecture</span>
                        <h2 className="text-5xl md:text-7xl font-serif leading-none text-theme-text">
                            Design <br />
                            <span className="text-theme-secondary italic opacity-80">Your Reality</span>
                        </h2>
                    </div>
                    <p className="text-theme-secondary text-lg max-w-sm font-light leading-relaxed">
                        Transitioning from the abstract to the absolute. Our roadmap is a bridge between dreaming and living.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                    {/* Left: Interactive Navigation */}
                    <div className="lg:col-span-5 space-y-4">
                        {phases.map((phase, index) => (
                            <div
                                key={phase.id}
                                onMouseEnter={() => setActivePhase(index)}
                                className={`group cursor-pointer border-l-2 py-6 pl-8 transition-all duration-500 relative ${activePhase === index ? 'border-theme-accent bg-theme-accent/5' : 'border-theme-border/20 hover:border-theme-accent/30'
                                    }`}
                            >
                                <span className={`text-[10px] tracking-[0.2em] uppercase font-medium mb-2 block transition-colors duration-500 ${activePhase === index ? 'text-theme-accent' : 'text-theme-secondary/40'
                                    }`}>
                                    {phase.tag}
                                </span>
                                <h3 className={`text-2xl md:text-3xl font-serif mb-4 transition-all duration-500 ${activePhase === index ? 'text-theme-text translate-x-2' : 'text-theme-secondary group-hover:text-theme-text group-hover:translate-x-1'
                                    }`}>
                                    {phase.title}
                                </h3>
                                <p className={`text-sm md:text-base leading-relaxed transition-all duration-500 ${activePhase === index ? 'text-theme-secondary opacity-100 max-h-[100px] mt-4' : 'text-theme-secondary/40 opacity-0 max-h-0 overflow-hidden'
                                    }`}>
                                    {phase.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right: Visual Display */}
                    <div className="lg:col-span-7 relative group">
                        <div className="aspect-[3/2] overflow-hidden bg-black/5 rounded-sm relative border border-theme-border/20 p-2">
                            <div className="absolute inset-0 border border-black/5 m-4 pointer-events-none z-20" />
                            {/* Image Stack for Transitions */}
                            {phases.map((phase, index) => (
                                <div
                                    key={phase.id}
                                    className={`absolute inset-2 transition-all duration-1000 ease-in-out ${activePhase === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'
                                        }`}
                                >
                                    <img
                                        src={phase.image}
                                        alt={phase.title}
                                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent " />
                                </div>
                            ))}

                            {/* Decorative Elements */}
                            <div className="absolute top-12 right-12 z-20 flex gap-2">
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-1 rounded-full transition-all duration-500 ${activePhase === i ? 'w-8 bg-theme-accent' : 'w-2 bg-black/20'
                                            }`}
                                    />
                                ))}
                            </div>

                            <div className="absolute bottom-12 left-12 z-20">
                                <div className="flex items-center gap-4 text-white/80 text-[10px] tracking-widest uppercase font-medium drop-shadow-sm">
                                    <div className="w-12 h-[2px] bg-theme-accent" />
                                    <span>Visualizing the Soul of Space</span>
                                </div>
                            </div>
                        </div>

                        {/* Reflection / Ambient Glow */}
                        <div className="absolute -inset-4 bg-theme-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
};
