import React, { useState, useEffect } from 'react';
import { Palette, Check, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

const atmospheres = [
    {
        name: 'Original',
        description: 'The Studio Default. A balance of industrial minerals and warm ochre.',
        colors: {
            bg: '#fafaf9',
            text: '#1c1917',
            accent: '#c2410c',
            accentHover: '#9a3412',
            secondary: '#44403c',
            surface: '#ffffff',
            border: '#e7e5e4',
        },
        display: ['#fafaf9', '#1c1917', '#c2410c']
    },
    {
        name: 'Luxe',
        description: 'Deep burgundy and champagne. Reserved for high-end residential commissions.',
        colors: {
            bg: '#EFE9E1',
            text: '#322D29',
            accent: '#72383D',
            accentHover: '#5d2e32',
            secondary: '#5a5149',
            surface: '#e2d8cd',
            border: '#d6c9bc',
        },
        display: ['#EFE9E1', '#72383D', '#322D29']
    },
    {
        name: 'Cozy',
        description: 'The feeling of dusk. Forest tones and heritage browns.',
        colors: {
            bg: '#EFEFE9',
            text: '#223030',
            accent: '#523D35',
            accentHover: '#42312b',
            secondary: '#414a42',
            surface: '#E2E2D9',
            border: '#d6d6c9',
        },
        display: ['#EFEFE9', '#523D35', '#223030']
    },
    {
        name: 'Frosted',
        description: 'Minimalist clarity. Steel blues and arctic highlights.',
        colors: {
            bg: '#f0f4f7',
            text: '#1d2a35',
            accent: '#44576D',
            accentHover: '#364657',
            secondary: '#3d5261',
            surface: '#ffffff',
            border: '#d9e4ee',
        },
        display: ['#f0f4f7', '#44576D', '#1d2a35']
    },
    {
        name: 'Nude',
        description: 'Raw canvas. Natural linen and earth-bound taupe.',
        colors: {
            bg: '#F1EDE6',
            text: '#3A2D28',
            accent: '#A48374',
            accentHover: '#8a6d61',
            secondary: '#6d554a',
            surface: '#e9e1d5',
            border: '#dcd0bc',
        },
        display: ['#F1EDE6', '#A48374', '#3A2D28']
    },
    {
        name: 'Lively',
        description: 'Spring in the studio. Botanical greens and fresh slate.',
        colors: {
            bg: '#fcfaf7',
            text: '#1a1f24',
            accent: '#3C5F51',
            accentHover: '#2e4a3f',
            secondary: '#4a535c',
            surface: '#ffffff',
            border: '#e9eef2',
        },
        display: ['#fcfaf7', '#3C5F51', '#1a1f24']
    }
];

export const PaletteShowcase: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeAtmosphere = atmospheres[activeIndex];

    const applyAtmosphere = (index: number) => {
        const atmosphere = atmospheres[index];
        setActiveIndex(index);

        const root = document.documentElement;
        root.style.setProperty('--theme-bg', atmosphere.colors.bg);
        root.style.setProperty('--theme-text', atmosphere.colors.text);
        root.style.setProperty('--theme-accent', atmosphere.colors.accent);
        root.style.setProperty('--theme-accent-hover', atmosphere.colors.accentHover);
        root.style.setProperty('--theme-secondary', atmosphere.colors.secondary);
        root.style.setProperty('--theme-surface', atmosphere.colors.surface);
        root.style.setProperty('--theme-border', atmosphere.colors.border);
    };

    const next = () => applyAtmosphere((activeIndex + 1) % atmospheres.length);
    const prev = () => applyAtmosphere((activeIndex - 1 + atmospheres.length) % atmospheres.length);

    return (
        <section className="py-20 bg-white overflow-hidden relative z-40 transition-colors duration-1000" style={{ backgroundColor: activeAtmosphere.colors.bg }}>
            {/* Consistent Paper Texture foundation */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            {/* Merge Gradient */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/[0.04] to-transparent pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-8 md:px-16 relative z-10">

                {/* COMPACT TOP: IDENTITY & DESCRIPTION */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                    <div className="space-y-4 border-l-2 border-theme-accent pl-6">
                        <div className="flex items-center gap-3 text-theme-accent">
                            <Palette size={14} />
                            <span className="uppercase tracking-[0.4em] text-[9px] font-bold">Atmospheric Engine</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-theme-text tracking-tighter italic">
                            The <br className="md:hidden" /> Spectrum
                        </h2>
                    </div>

                    <div className="flex flex-col md:items-end gap-6">
                        <p className="text-theme-secondary text-sm max-w-[280px] font-serif italic leading-relaxed md:text-right opacity-80">
                            "{activeAtmosphere.description}"
                        </p>
                        {activeIndex !== 0 && (
                            <button
                                onClick={() => applyAtmosphere(0)}
                                className="group flex items-center gap-3 px-5 py-2.5 border border-theme-text/10 rounded-full text-[9px] uppercase tracking-widest font-bold text-theme-text hover:bg-theme-text hover:text-white transition-all duration-500"
                            >
                                <RotateCcw size={12} className="group-hover:rotate-[-180deg] transition-transform duration-700" />
                                Original Theme
                            </button>
                        )}
                    </div>
                </div>

                {/* COMPACT SLIDER AREA */}
                <div className="relative">

                    <div className="flex items-center justify-between gap-6 md:gap-16 relative z-20">
                        {/* Control: Prev */}
                        <button
                            onClick={prev}
                            className="p-4 md:p-6 rounded-full border border-theme-text/5 hover:border-theme-accent text-theme-text hover:text-theme-accent transition-all group shrink-0"
                        >
                            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                        </button>

                        {/* COMPACT DISPLAY: NAME + PALETTE */}
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full py-4">

                            {/* Atmosphere Name Primary */}
                            <div className="flex-1 text-center md:text-left">
                                <span className="text-[9px] uppercase tracking-[0.5em] text-theme-secondary/40 font-bold block mb-2">Active Atmosphere</span>
                                <h3 className="text-6xl md:text-8xl font-serif text-theme-text tracking-tighter leading-none italic animate-fade-in-down">
                                    {activeAtmosphere.name}
                                </h3>
                            </div>

                            {/* Symmetrical Palette beside name */}
                            <div className="flex md:flex-row gap-4 px-6 py-4 bg-white/30 backdrop-blur-md rounded-full border border-theme-text/5 shadow-sm">
                                {activeAtmosphere.display.map((color, i) => (
                                    <div key={i} className="relative group/color">
                                        <div
                                            style={{ backgroundColor: color }}
                                            className="w-12 h-12 rounded-full border-2 border-white shadow-lg transition-transform duration-500 group-hover/color:scale-110"
                                        />
                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/color:opacity-100 transition-opacity whitespace-nowrap">
                                            <span className="text-[8px] font-mono font-bold text-theme-secondary bg-white px-1.5 py-0.5 rounded-sm border border-stone-100 shadow-sm">{color}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Control: Next */}
                        <button
                            onClick={next}
                            className="p-4 md:p-6 rounded-full border border-theme-text/5 hover:border-theme-accent text-theme-text hover:text-theme-accent transition-all group shrink-0"
                        >
                            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex justify-center gap-2.5 mt-12">
                        {atmospheres.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => applyAtmosphere(i)}
                                className={`h-1 transition-all duration-700 rounded-full ${activeIndex === i ? 'w-10 bg-theme-accent' : 'w-3 bg-theme-text/10'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* MINIMAL FOOTER SYNC */}
                <div className="mt-16 pt-6 border-t border-theme-text/5 flex flex-col md:flex-row justify-between items-center gap-4 opacity-30 text-[8px] font-bold tracking-[0.4em] uppercase">
                    <div className="flex items-center gap-4">
                        <span className="text-theme-accent">Syncing Atmosphere</span>
                        <div className="w-1 h-1 bg-current rounded-full" />
                        <span>Module: 0.2.1</span>
                    </div>
                    <span>© Handies Studio 2024 — Spectrum Archive</span>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fade-in-down {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-down {
                    animation: fade-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}} />
        </section>
    );
};
