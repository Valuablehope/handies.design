import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="text-2xl font-bold tracking-tighter text-white block">
            handies.design
          </span>
          <p className="text-xs mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-stone-800">
        <div className="flex items-center justify-center gap-3 text-stone-500 text-sm">
          <span className="text-xs tracking-wider">Developed by</span>
          <a
            href="https://www.cubiq-solutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
          >
            <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stone-400 group-hover:text-white transition-colors">
              <path d="M18 8L6 20L18 32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 8L34 20L22 32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-semibold text-white tracking-wide">Cubiq</span>
            <span className="text-stone-400 group-hover:text-stone-300 transition-colors">Solutions</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
