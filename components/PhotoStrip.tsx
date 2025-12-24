import React from 'react';
import { getImagePath } from '../utils/images';

const images = [
    {
        url: getImagePath('/images/interior_design_1.png'),
        title: 'Minimalist Sanctuary',
        caption: 'Alpha Frame 01',
    },
    {
        url: getImagePath('/images/interior_design_2.png'),
        title: 'Mid-Century Soul',
        caption: 'Beta Frame 02',
    },
    {
        url: getImagePath('/images/interior_design_3.png'),
        title: 'Monolithic Elegance',
        caption: 'Gamma Frame 03',
    },
    {
        url: getImagePath('/images/interior_design_4.png'),
        title: 'Nocturnal Peace',
        caption: 'Delta Frame 04',
    },
];

// Duplicate for deeper seamless carousel
const carouselImages = [...images, ...images, ...images, ...images];

export const PhotoStrip: React.FC = () => {
    return (
        <section className="py-32 overflow-hidden relative z-40 transition-all duration-1000" style={{ background: `linear-gradient(to bottom, #e7e5e4 0%, var(--theme-bg) 100%)` }}>
            {/* Consistent Paper Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT SIDE: HEADER */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-px bg-theme-accent" />
                                <span className="text-theme-secondary opacity-60 font-medium tracking-[0.4em] uppercase text-[10px] block">Sequential Archive</span>
                            </div>
                            <h2 className="text-6xl md:text-8xl font-serif text-theme-text leading-[0.85] tracking-tighter">
                                Visual <br />
                                <span className="italic text-theme-accent">Notes</span>
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <p className="text-theme-secondary max-w-sm font-light leading-relaxed text-lg italic font-serif border-l-2 border-theme-accent/20 pl-8">
                                "The carousel of memory. A vintage perspective on modern boundaries."
                            </p>

                            <div className="pt-8 border-t border-theme-text/5 space-y-4">
                                <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-theme-secondary/40 uppercase">
                                    <span>Stream Type</span>
                                    <span className="text-theme-accent animate-pulse">Infinite Loop</span>
                                </div>
                                <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-theme-secondary/40 uppercase">
                                    <span>Film Speed</span>
                                    <span className="text-theme-text/60">24 Frames/Sec</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: INFINITE MOTION FILM CAROUSEL */}
                    <div className="lg:col-span-8 relative">
                        <div className="relative overflow-hidden">
                            {/* The Moving Film Strip */}
                            <div className="flex gap-0 animate-infinite-scroll hover:[animation-play-state:paused] cursor-pointer">
                                {carouselImages.map((image, index) => (
                                    <div key={index} className="flex-shrink-0 relative">

                                        {/* THE AUTHENTIC VINTAGE FILM FRAME */}
                                        <div className="w-[320px] md:w-[480px] bg-[#1a1a1a] border-x border-black/40 py-12 px-5 relative flex flex-col items-center">

                                            {/* SPROCKET HOLES - Top (More realistic spacing) */}
                                            <div className="absolute top-0 left-0 right-0 h-12 flex justify-around items-center px-4">
                                                {[...Array(8)].map((_, i) => (
                                                    <div key={i} className="w-4 h-6 rounded-[3px] bg-black shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)] border border-white/5" />
                                                ))}
                                            </div>

                                            {/* SPROCKET HOLES - Bottom */}
                                            <div className="absolute bottom-0 left-0 right-0 h-12 flex justify-around items-center px-4">
                                                {[...Array(8)].map((_, i) => (
                                                    <div key={i} className="w-4 h-6 rounded-[3px] bg-black shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)] border border-white/5" />
                                                ))}
                                            </div>

                                            {/* Film Edge Textual Markings */}
                                            <div className="absolute top-2 left-10 flex items-center gap-6">
                                                <span className="text-[7px] font-mono font-bold text-white/10 uppercase tracking-widest">KODAK 5219</span>
                                                <span className="text-[7px] font-mono font-bold text-white/20">▶ {(index % images.length) + 1}A</span>
                                            </div>
                                            <div className="absolute bottom-2 right-10 flex items-center gap-6">
                                                <span className="text-[7px] font-mono font-bold text-white/10 italic">HANDIES STUDIO</span>
                                                <span className="text-[7px] font-mono font-bold text-white/15 uppercase">Safety Film</span>
                                            </div>

                                            {/* The Image Viewport - The actual "Frame" */}
                                            <div className="relative w-full aspect-[4/3] bg-black rounded-[4px] overflow-hidden border-[2px] border-black/80 shadow-2xl group/img">
                                                <img
                                                    src={image.url}
                                                    alt={image.title}
                                                    className="w-full h-full object-cover grayscale-[0.5] contrast-[1.2] brightness-90 group-hover/img:grayscale-0 group-hover/img:brightness-105 transition-all duration-[1.5s]"
                                                />

                                                {/* AUTHENTIC VINTAGE OVERLAYS */}
                                                <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dust.png')] mix-blend-screen" />
                                                <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')] mix-blend-overlay" />

                                                {/* Subtle Light Leaks and Corner Burn */}
                                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(194,65,12,0.1),transparent_50%)] pointer-events-none" />
                                                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] pointer-events-none" />
                                            </div>

                                            {/* Frame Identification Label */}
                                            <div className="mt-5 flex items-center gap-3 opacity-40 group-hover/img:opacity-100 transition-opacity">
                                                <span className="text-[10px] font-serif italic text-white tracking-widest lowercase">{image.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Vignette Edge Blurring for Seamless Wrap */}
                            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
                            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-25%); }
                }
                .animate-infinite-scroll {
                    display: flex;
                    width: max-content;
                    animation: infinite-scroll 60s linear infinite;
                }
            `}} />
        </section>
    );
};
