import React, { useState, useEffect } from 'react';

const phases = [
    {
        id: 'raw',
        num: '01',
        title: 'Raw Idea',
        desc: 'The initial spark. We begin with a blank canvas and your abstract desires, translating them into the first spatial logic.',
        image: '/images/sketch.png',
        tag: 'Structural Concept',
        coordinates: '34.02°N, 118.24°W',
        depth: 'Alpha'
    },
    {
        id: 'map',
        num: '02',
        title: 'Raw Map',
        desc: 'The blueprint. We define the flow, the light, and the boundaries. Every line here is a future moment of your life.',
        image: '/images/moodboard.png',
        tag: 'Spatial Definition',
        coordinates: '51.50°N, 0.12°W',
        depth: 'Beta'
    },
    {
        id: 'render',
        num: '03',
        title: 'Rendered Design',
        desc: 'The digital twin. High-fidelity 3D visualizations that let you walk through your future home before a single nail is driven.',
        image: '/images/3d-modelling.png',
        tag: 'Fidelity Walkthrough',
        coordinates: '40.71°N, 74.00°W',
        depth: 'Gamma'
    },
    {
        id: 'reality',
        num: '04',
        title: 'Reality',
        desc: 'The final reveal. The physical manifest of our joint vision. A space that is not just built, but composed.',
        image: '/images/interior_design_1.png',
        tag: 'Physical Absolute',
        coordinates: '35.67°N, 139.65°E',
        depth: 'Delta'
    },
];

export const DesignReality: React.FC = () => {
    const [activePhase, setActivePhase] = useState(0);

    // Auto-transition logic
    useEffect(() => {
        const timer = setInterval(() => {
            setActivePhase((prev) => (prev + 1) % phases.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="roadmap" className="py-32 bg-theme-bg text-theme-text overflow-hidden relative flex flex-col z-30 shadow-[0_-45px_100px_-20px_rgba(0,0,0,0.3)] transition-colors duration-1000">
            {/* Subtle Paper Texture Overlay - Consistent Across Studio */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            {/* Merge Gradient - Bleeding the previous shadow into this section */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/[0.03] to-transparent pointer-events-none" />

            {/* 1. DENSE ARCHITECTURAL BACKGROUND */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(194,65,12,0.12),transparent_70%)] pointer-events-none" />

            {/* Main Content Container */}
            <div className="max-w-[1600px] mx-auto w-full h-full relative px-12 md:px-24 flex items-center">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

                    {/* LEFT SIDE: HEADER & CONTROLS */}
                    <div className="lg:col-span-5 z-40 relative">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-theme-accent font-bold tracking-[0.8em] uppercase text-[10px] block animate-pulse">System Architecture</span>
                                <h2 className="text-6xl md:text-8xl font-serif text-theme-text tracking-tighter leading-[0.85]">
                                    THE <br />
                                    <span className="italic text-theme-accent">NUCLEUS</span>
                                </h2>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-[1px] bg-theme-text/20" />
                                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-theme-secondary/60">Automated Workflow Engine v.2.4</span>
                            </div>

                            <div className="pt-8 space-y-4">
                                <p className="text-theme-secondary text-lg font-serif italic max-w-sm leading-relaxed border-l-2 border-theme-accent pl-6 min-h-[80px]">
                                    "{phases[activePhase].desc}"
                                </p>
                                <div className="flex gap-4 pl-6">
                                    {phases.map((_, i) => (
                                        <div
                                            key={i}
                                            onClick={() => setActivePhase(i)}
                                            className={`h-1 cursor-pointer transition-all duration-500 ${activePhase === i ? 'w-12 bg-theme-accent' : 'w-4 bg-theme-text/10 hover:bg-theme-text/20'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="pt-12 text-[9px] font-mono text-theme-secondary/40 space-y-2 uppercase tracking-widest leading-loose">
                                <div>Active_Station: 0{activePhase + 1}</div>
                                <div>Module_Depth: {phases[activePhase].depth}</div>
                                <div>Coordinates: {phases[activePhase].coordinates}</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: THE NUCLEUS STRUCTURE (RE-SCALED TO FIT SCREEN) */}
                    <div className="lg:col-span-7 relative flex justify-center items-center">

                        {/* Container is now explicitly sized to fit Orbit + Electron padding */}
                        <div className="relative w-[60vh] h-[60vh] max-w-[650px] max-h-[650px] flex items-center justify-center">

                            {/* COMPLEX ORBITAL RINGS */}
                            <div className="absolute inset-[-10%] rounded-full border border-theme-accent/20 animate-[spin_40s_linear_infinite] pointer-events-none" />
                            <div className="absolute inset-[-18%] rounded-full border border-theme-text/5 animate-[spin_25s_linear_infinite_reverse] pointer-events-none" />
                            <div className="absolute inset-[-25%] rounded-full border border-dashed border-theme-text/5 animate-[spin_90s_linear_infinite] pointer-events-none" />

                            {/* Inner Scanning Bar */}
                            <div className="absolute inset-0 rounded-full overflow-hidden z-20 pointer-events-none opacity-20">
                                <div className="w-full h-32 bg-gradient-to-b from-transparent via-theme-accent to-transparent absolute top-0 animate-[scan_4s_ease-in-out_infinite]" />
                            </div>

                            {/* Main Visual Core */}
                            <div className="absolute inset-0 rounded-full overflow-hidden bg-theme-surface shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[10px] border-theme-bg z-10 transition-all duration-[1500ms] group">
                                {phases.map((phase, index) => (
                                    <div
                                        key={phase.id}
                                        className={`absolute inset-0 transition-all duration-[1800ms] cubic-bezier(0.16, 1, 0.3, 1) ${activePhase === index ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-110 translate-x-20'
                                            }`}
                                    >
                                        <img
                                            src={phase.image}
                                            alt={phase.title}
                                            className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-110"
                                        />

                                        {/* HUD Overlay inside Nucleus */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent flex items-center pl-[12%]">
                                            <div className={`transition-all duration-1000 delay-500 transform ${activePhase === index ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                                                <span className="text-theme-accent font-mono text-[10px] tracking-[0.6em] uppercase mb-4 block">Archive.HS</span>
                                                <h4 className="text-white text-5xl xl:text-8xl font-serif leading-none italic mb-4 drop-shadow-2xl">{index + 1}</h4>
                                                <span className="text-white/60 text-xs xl:text-sm font-serif uppercase tracking-[0.5em]">{phase.tag}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* ELECTRONS (Scaled Radius to ensure they stay on screen) */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {phases.map((phase, index) => {
                                    const angle = (index * (360 / phases.length)) - 90;
                                    // Scaled radius to stay within the viewport and grid column
                                    const radius = '35vh';

                                    return (
                                        <div
                                            key={phase.id}
                                            onClick={() => setActivePhase(index)}
                                            className="absolute group z-30 cursor-pointer"
                                            style={{
                                                '--node-radius': radius,
                                                transform: `rotate(${angle}deg) translate(var(--node-radius)) rotate(${-angle}deg)`
                                            } as React.CSSProperties}
                                        >
                                            <div className="relative flex items-center justify-center">
                                                {/* Node Structure */}
                                                <div className={`w-12 h-12 md:w-20 md:h-20 rounded-full border-2 flex flex-col items-center justify-center transition-all duration-[1500ms] bg-theme-surface shadow-2xl relative overflow-hidden ${activePhase === index ? 'border-theme-accent ring-[10px] ring-theme-accent/5 scale-110' : 'border-theme-border grayscale hover:grayscale-0'
                                                    }`}>
                                                    <img src={phase.image} alt="" className="w-full h-full object-cover opacity-80" />
                                                    <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black/60 transition-opacity ${activePhase === index ? 'opacity-0' : 'opacity-100'}`}>
                                                        <span className="text-white text-[10px] font-mono font-bold">0{index + 1}</span>
                                                    </div>
                                                </div>

                                                {/* Label Tag */}
                                                <div className={`absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none`}>
                                                    <div className="bg-theme-text text-white px-3 py-0.5 text-[8px] uppercase tracking-widest font-bold whitespace-nowrap">
                                                        {phase.title}
                                                    </div>
                                                </div>

                                                {/* Active Connector Ray */}
                                                <div className={`absolute top-1/2 left-1/2 -z-10 h-px bg-gradient-to-r from-theme-accent to-transparent transition-all duration-1000 origin-left ${activePhase === index ? 'w-[10vh] opacity-100 scale-x-100' : 'w-0 opacity-0 scale-x-0'
                                                    }`} style={{ transform: `rotate(180deg)` }} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scan {
                    0% { top: -40%; }
                    100% { top: 120%; }
                }
                @media (max-width: 1024px) {
                    [style*="--node-radius"] {
                         --node-radius: 140px !important;
                    }
                    #roadmap { height: auto; min-height: 100vh; padding: 60px 0; }
                }
                @media (max-width: 1440px) {
                    [style*="--node-radius"] {
                         --node-radius: 28vh !important;
                    }
                }
            `}} />
        </section>
    );
};
