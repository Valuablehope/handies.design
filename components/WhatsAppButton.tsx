import React, { useState, useEffect, useRef } from 'react';

export const WhatsAppButton: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const phoneNumber = '96170228056';

    const messageOptions = [
        {
            label: 'General Inquiry',
            message: 'Hello! I\'m interested in learning more about your design services.'
        },
        {
            label: 'Book Consultation',
            message: 'Hi! I\'d like to schedule a consultation to discuss my interior design needs.'
        },
        {
            label: 'Project Discussion',
            message: 'Hello handies.design! I have a project in mind and would like to discuss it with you.'
        }
    ];

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const handleMessageSelect = (message: string) => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        setIsMenuOpen(false);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]" ref={menuRef}>
            {/* Message Options Menu */}
            {isMenuOpen && (
                <div className="absolute bottom-20 right-0 mb-4 w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-2xl border border-stone-200/50 overflow-hidden animate-fade-in-up">
                    <div className="p-2">
                        <div className="px-3 py-2 text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                            Choose a message:
                        </div>
                        {messageOptions.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleMessageSelect(option.message)}
                                className="w-full text-left px-4 py-3 hover:bg-stone-50 transition-colors duration-300 rounded-md group"
                            >
                                <div className="text-sm font-medium text-stone-900 mb-1 group-hover:text-theme-accent transition-colors">
                                    {option.label}
                                </div>
                                <div className="text-xs text-stone-600 line-clamp-2">
                                    {option.message}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* WhatsApp Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="group flex items-center"
                aria-label="Contact on WhatsApp"
            >
                {/* Tooltip */}
                <span className="absolute right-full mr-4 px-4 py-2 bg-stone-900/90 backdrop-blur-md text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-2xl translate-x-4 group-hover:translate-x-0 border border-white/10">
                    {isMenuOpen ? 'Close menu' : 'Chat with us'}
                </span>

                {/* Pulse Rings */}
                {!isMenuOpen && (
                    <>
                        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
                        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse opacity-40 scale-110" />
                    </>
                )}

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-[#25D366] rounded-full blur-2xl transition-opacity duration-500 ${isMenuOpen ? 'opacity-70' : 'opacity-40 group-hover:opacity-70'}`} />

                {/* Button Body */}
                <div className={`relative bg-[#25D366] p-4 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.4)] group-hover:shadow-[0_25px_60px_rgba(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center border-2 border-white/20 ${isMenuOpen ? 'scale-95' : 'hover:scale-110 active:scale-95'}`}>
                    <svg
                        viewBox="0 0 24 24"
                        width="32"
                        height="32"
                        fill="white"
                        className="drop-shadow-sm"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                </div>
            </button>
        </div>
    );
};
