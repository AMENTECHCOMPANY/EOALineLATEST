import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const LaunchNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/e.o.a-logo/E.O.A%20Logo.jpg"
              alt="E.O.A Logo"
              className="w-8 h-8 rounded-full border border-amber-400"
            />
            <span className="text-white font-serif text-lg tracking-wide">E.O.A LINE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/shop" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Shop
            </a>
            <a href="/about" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              About
            </a>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="bg-white/10 border border-white/20 rounded-full pl-10 pr-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all w-48"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-amber-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 py-4">
            <div className="space-y-4">
              <a 
                href="/shop" 
                className="block text-white/80 hover:text-white transition-colors text-sm font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </a>
              <a 
                href="/about" 
                className="block text-white/80 hover:text-white transition-colors text-sm font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              
              {/* Mobile Search */}
              <div className="px-4">
                <div className="relative">
                  <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full bg-white/10 border border-white/20 rounded-full pl-10 pr-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LaunchNavbar;