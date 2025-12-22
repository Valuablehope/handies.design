import React, { useState, useEffect } from 'react';
import { Palette, Check, ArrowRight } from 'lucide-react';

const palettes = [
    {
        name: 'Original',
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
        colors: {
            bg: '#EFE9E1',
            text: '#322D29',
            accent: '#72383D',
            accentHover: '#5d2e32',
            secondary: '#5a5149',
            surface: '#e2d8cd',
            border: '#d6c9bc',
        },
        display: ['#EFE9E1', '#322D29', '#72383D']
    },
    {
        name: 'Cozy',
        colors: {
            bg: '#EFEFE9',
            text: '#223030',
            accent: '#523D35',
            accentHover: '#42312b',
            secondary: '#414a42',
            surface: '#E2E2D9',
            border: '#d6d6c9',
        },
        display: ['#EFEFE9', '#223030', '#523D35']
    },
    {
        name: 'Frosted',
        colors: {
            bg: '#f0f4f7',
            text: '#1d2a35',
            accent: '#44576D',
            accentHover: '#364657',
            secondary: '#3d5261',
            surface: '#ffffff',
            border: '#d9e4ee',
        },
        display: ['#f0f4f7', '#1d2a35', '#44576D']
    },
    {
        name: 'Nude',
        colors: {
            bg: '#F1EDE6',
            text: '#3A2D28',
            accent: '#A48374',
            accentHover: '#8a6d61',
            secondary: '#6d554a',
            surface: '#e9e1d5',
            border: '#dcd0bc',
        },
        display: ['#F1EDE6', '#3A2D28', '#A48374']
    },
    {
        name: 'Lively',
        colors: {
            bg: '#fcfaf7',
            text: '#1a1f24',
            accent: '#3C5F51',
            accentHover: '#2e4a3f',
            secondary: '#4a535c',
            surface: '#ffffff',
            border: '#e9eef2',
        },
        display: ['#fcfaf7', '#1a1f24', '#3C5F51']
    }
];

export const PaletteShowcase: React.FC = () => {
    const [activePalette, setActivePalette] = useState('Original');

    const applyPalette = (paletteName: string) => {
        const palette = palettes.find(p => p.name === paletteName);
        if (!palette) return;

        setActivePalette(paletteName);

        const root = document.documentElement;
        root.style.setProperty('--theme-bg', palette.colors.bg);
        root.style.setProperty('--theme-text', palette.colors.text);
        root.style.setProperty('--theme-accent', palette.colors.accent);
        root.style.setProperty('--theme-accent-hover', palette.colors.accentHover);
        root.style.setProperty('--theme-secondary', palette.colors.secondary);
        root.style.setProperty('--theme-surface', palette.colors.surface);
        root.style.setProperty('--theme-border', palette.colors.border);
    };

    return (
        <section className="py-24 bg-theme-surface overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),0_15px_30px_-10px_rgba(0,0,0,0.05)] z-20">
            {/* Structural Background Pattern - Professional Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-12">
                    <div className="max-w-2xl border-l-4 border-theme-accent pl-8">
                        <div className="flex items-center gap-3 text-theme-accent mb-6">
                            <Palette size={18} />
                            <span className="uppercase tracking-[0.5em] text-[10px] font-bold">Atmospheric Engine</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-serif text-theme-text leading-tight mb-6">
                            Choose Your <br />
                            <span className="italic font-light opacity-60">Environment</span>
                        </h2>
                        <div className="w-24 h-[1px] bg-theme-accent/40" />
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-8 w-full md:w-auto">
                        <p className="text-theme-secondary text-lg max-w-sm font-light leading-relaxed md:text-right">
                            Architecture is the art of manipulating light and mood. Select a direction to reimagine this studio's physical identity.
                        </p>
                        {activePalette !== 'Original' && (
                            <button
                                onClick={() => applyPalette('Original')}
                                className="group flex items-center gap-4 px-8 py-4 bg-theme-text text-theme-bg rounded-sm text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-theme-accent transition-all duration-500 animate-fade-in shadow-xl"
                            >
                                <span className="w-2 h-2 rounded-full bg-theme-accent group-hover:bg-theme-bg transition-colors" />
                                Restore Studio Default
                            </button>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {palettes.map((p) => (
                        <button
                            key={p.name}
                            onClick={() => applyPalette(p.name)}
                            className={`group relative p-8 transition-all duration-700 text-left border rounded-sm overflow-hidden ${activePalette === p.name
                                ? 'bg-theme-bg shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] scale-[1.02] border-theme-accent z-10'
                                : 'bg-theme-bg/40 border-theme-border/60 hover:border-theme-accent/30 hover:bg-theme-bg/80'
                                }`}
                        >
                            {/* Palette Preview Stripes */}
                            <div className="flex h-32 w-full mb-8 shadow-lg overflow-hidden rounded-sm relative border border-theme-border/10">
                                {p.display.map((color, i) => (
                                    <div
                                        key={i}
                                        style={{ backgroundColor: color }}
                                        className="h-full flex-1 transition-transform duration-1000 group-hover:scale-y-110"
                                    />
                                ))}
                            </div>

                            <div className="flex items-center justify-between relative z-10">
                                <div>
                                    <h3 className={`text-2xl font-serif mb-2 transition-colors duration-500 ${activePalette === p.name ? 'text-theme-text' : 'text-theme-secondary group-hover:text-theme-text'}`}>
                                        {p.name}
                                    </h3>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-theme-secondary opacity-40">
                                        Palette 0{palettes.indexOf(p) + 1}
                                        {p.name === 'Original' && ' (Studio)'}
                                    </p>
                                </div>
                                {activePalette === p.name ? (
                                    <div className="bg-theme-accent p-2 rounded-full text-white shadow-lg">
                                        <Check size={16} />
                                    </div>
                                ) : (
                                    <div className="p-2 border border-theme-border/50 rounded-full text-theme-secondary group-hover:text-theme-accent group-hover:border-theme-accent transition-all">
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                )}
                            </div>

                            {/* Background decoration */}
                            {activePalette === p.name && (
                                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-theme-accent/[0.03] rounded-full blur-[60px]" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};
