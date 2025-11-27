import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Newspaper } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 pt-8 border-t-2 border-black text-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-3 uppercase">Contact</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <Mail size={16} className="mr-2 flex-shrink-0" />
              <span className="break-all">info@diplomatictimes.edu</span>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-2 flex-shrink-0" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-start">
              <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
              <span>Global Institute<br />123 International Road<br />Diplomacy District, DC 20008</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-3 uppercase">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline inline-block">Conference FAQ</a></li>
            <li><a href="#" className="hover:underline inline-block">Travel Information</a></li>
            <li><a href="#" className="hover:underline inline-block">Accommodation</a></li>
            <li><a href="#" className="hover:underline inline-block">Rules of Procedure</a></li>
            <li><a href="#" className="hover:underline inline-block">Position Paper Guidelines</a></li>
            <li><a href="#" className="hover:underline inline-block">Past Conferences</a></li>
          </ul>
        </div>
        
        <div className="sm:col-span-2 md:col-span-1">
          <h3 className="text-lg font-bold mb-3 uppercase">Follow Us</h3>
          <div className="flex space-x-6 mb-4">
            <a href="#" className="hover:text-gray-600 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-500 pt-4 mt-4">
            <p className="flex items-center justify-center mb-2">
              <Newspaper size={16} className="mr-2" />
              <span>Subscribe to our newsletter</span>
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow p-2 bg-amber-50 border border-gray-800 text-sm"
              />
              <button className="bg-gray-800 text-white px-4 py-2 text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8 pt-4 border-t border-gray-500">
        <div className="mb-2">THE SIVCON TIMES © 2025 Model United Nations</div>
        <div className="text-xs">
          Project by Projukti-Bazar Private Limited
        </div>
      </div>
    </footer>
  );
};

export default Footer;