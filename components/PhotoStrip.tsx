import React from 'react';

const images = [
    {
        url: '/images/interior_design_1.png',
        title: 'Minimalist Sanctuary',
        caption: 'Pure lines & natural textures',
    },
    {
        url: '/images/interior_design_2.png',
        title: 'Mid-Century Soul',
        caption: 'A conversation of eras',
    },
    {
        url: '/images/interior_design_3.png',
        title: 'Monolithic Elegance',
        caption: 'The art of the kitchen',
    },
    {
        url: '/images/interior_design_4.png',
        title: 'Nocturnal Peace',
        caption: 'Soft light & calm shadows',
    },
];

export const PhotoStrip: React.FC = () => {
    return (
        <section className="py-20 bg-theme-bg overflow-hidden transition-all duration-500 relative">
            {/* Section Divider Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-theme-border to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
                <div className="flex flex-col items-center mb-20 text-center">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-[1px] bg-theme-accent" />
                        <span className="text-theme-secondary opacity-60 font-medium tracking-[0.3em] uppercase text-[10px] block">Curation</span>
                        <div className="w-12 h-[1px] bg-theme-accent" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif text-theme-text mb-8 transition-colors duration-500">Visual Notes</h2>
                    <p className="text-theme-secondary max-w-lg font-light leading-relaxed text-lg">
                        A raw look at our aesthetic direction. No filters, just high-fidelity vision captured in its purest state.
                    </p>
                </div>

                <div className="relative flex justify-center py-12">
                    {/* The Strip Container - Engineered for Architectural Depth */}
                    <div className="flex flex-col md:flex-row gap-0 bg-theme-surface p-6 md:p-8 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.2)] transform md:-rotate-1 relative group transition-all duration-700 border border-theme-border/30 rounded-sm">
                        {/* Vintage Film Overlay effect */}
                        <div className="absolute inset-0 bg-theme-bg/5 pointer-events-none mix-blend-overlay z-10" />

                        {/* Architectural Perforation details */}
                        <div className="absolute -left-3 top-0 bottom-0 w-6 bg-theme-bg flex flex-col items-center justify-around py-6 hidden md:flex border-r border-theme-border/20">
                            {[...Array(15)].map((_, i) => (
                                <div key={i} className="w-3 h-4 bg-theme-border/40 rounded-sm" />
                            ))}
                        </div>
                        <div className="absolute -right-3 top-0 bottom-0 w-6 bg-theme-bg flex flex-col items-center justify-around py-6 hidden md:flex border-l border-theme-border/20">
                            {[...Array(15)].map((_, i) => (
                                <div key={i} className="w-3 h-4 bg-theme-border/40 rounded-sm" />
                            ))}
                        </div>

                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col items-center border-[12px] md:border-[16px] border-theme-surface group/item transition-all duration-700 hover:rotate-0 hover:z-20 hover:scale-110 ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'
                                    }`}
                                style={{
                                    marginTop: index % 2 === 0 ? '0' : '40px',
                                    marginBottom: index % 2 === 0 ? '40px' : '0'
                                }}
                            >
                                <div className="relative bg-theme-text overflow-hidden w-full aspect-[4/5] md:w-72 border border-black/5">
                                    <img
                                        src={image.url}
                                        alt={image.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/item:scale-110 grayscale-[0.2] group-hover/item:grayscale-0"
                                    />
                                    {/* Dust and Scratches Overlay */}
                                    <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dust.png')] mix-blend-screen" />
                                </div>

                                <div className="py-6 md:py-10 text-center w-full px-4">
                                    <span className="text-[10px] font-serif text-theme-secondary opacity-40 block mb-2 uppercase tracking-widest transition-colors italic">00{index + 1} / SNAP</span>
                                    <h3 className="text-base font-serif text-theme-text tracking-tight transition-colors mb-1">{image.title}</h3>
                                    <p className="text-[11px] text-theme-secondary italic font-serif opacity-60 transition-colors uppercase tracking-widest">{image.caption}</p>
                                </div>

                                {/* Decorative Corner Tabs */}
                                <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-theme-accent/30" />
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-theme-accent/30" />

                                {/* Vertical Divider for Desktop */}
                                {index < images.length - 1 && (
                                    <div className="absolute right-0 top-0 bottom-24 w-[1px] bg-theme-border/20 hidden md:block" />
                                )}
                            </div>
                        ))}

                        {/* Handwritten Note Effect */}
                        <div className="absolute -bottom-16 -right-8 md:-right-20 transform md:rotate-6 font-serif text-theme-secondary opacity-60 text-xl md:text-3xl italic hidden md:block transition-all duration-700 hover:rotate-3 hover:opacity-90 cursor-default select-none group-hover:translate-y-4">
                            "Visualizing the Soul of Space"
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
