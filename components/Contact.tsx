import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <div>
            <span className="text-rust-700 font-medium tracking-widest uppercase text-xs mb-3 block">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6 md:mb-8">
              Let's Build Something <br /> <span className="italic text-stone-500">Extraordinary.</span>
            </h2>
            <p className="text-stone-600 mb-8 md:mb-12 max-w-md text-sm md:text-base">
              Ready to transform your space? Schedule a consultation or send us a message about your upcoming project.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-100 rounded-full text-stone-700">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide">Email</h4>
                  <a href="mailto:hello@handies.design" className="text-stone-600 hover:text-rust-600 transition-colors">hello@handies.design</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-100 rounded-full text-stone-700">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide">Phone</h4>
                  <a href="tel:+1234567890" className="text-stone-600 hover:text-rust-600 transition-colors">+1 (555) 000-0000</a>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-100 rounded-full text-stone-700">
                  <Instagram size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide">Social</h4>
                  <a href="#" className="text-stone-600 hover:text-rust-600 transition-colors">@handies.design</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 p-6 md:p-12 border border-stone-100 shadow-sm rounded-lg md:rounded-none">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-stone-700">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 bg-white border border-stone-200 focus:border-stone-900 outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-stone-700">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 bg-white border border-stone-200 focus:border-stone-900 outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-stone-700">Interested Service</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 bg-white border border-stone-200 focus:border-stone-900 outline-none transition-colors"
                >
                  <option>Full Renovation</option>
                  <option>Interior Styling</option>
                  <option>Custom Furniture</option>
                  <option>3D Modelling</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-stone-700">Project Details</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-stone-200 focus:border-stone-900 outline-none transition-colors"
                  placeholder="Tell us about your space, timeline, and vision..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-stone-900 text-white font-medium tracking-wide hover:bg-stone-800 transition-all hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};