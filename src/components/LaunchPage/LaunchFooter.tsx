import React, { useState } from 'react';
import { Mail, Instagram, MessageCircle, Send } from 'lucide-react';

// TikTok Icon Component
const TikTokIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
  </svg>
);

const LaunchFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mock newsletter signup - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Newsletter signup:', email);
      
      setIsSuccess(true);
      setEmail('');
      
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Newsletter signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/e.o.a-logo/E.O.A%20Logo.jpg"
                alt="E.O.A Logo"
                className="w-10 h-10 rounded-full border border-amber-400"
              />
              <span className="text-xl font-serif tracking-wide">E.O.A LINE</span>
            </div>
            
            <p className="text-white/70 leading-relaxed">
              Luxury Christian fashion that combines faith with style. 
              The TUMI Complete Set represents our commitment to excellence and spiritual expression.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/eoa_line?igsh=cTlneXllY3FkNWJy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-amber-400 transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://wa.me/+4915754664445"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-green-400 transition-colors transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-white/60 hover:text-amber-400 transition-colors transform hover:scale-110"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif text-amber-400">Stay Updated</h3>
            <p className="text-white/70">
              Get exclusive updates about the TUMI Complete Set and other luxury releases.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  required
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-amber-400 text-black p-2 rounded-md hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              
              {isSuccess && (
                <p className="text-green-400 text-sm">
                  ✓ Thank you for subscribing to our newsletter!
                </p>
              )}
            </form>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif text-amber-400">Quick Links</h3>
            <div className="space-y-3">
              <a href="/learn-more" className="block text-white/70 hover:text-white transition-colors">
                Learn More About TUMI
              </a>
              <a href="/about" className="block text-white/70 hover:text-white transition-colors">
                Our Story
              </a>
              <a href="/collections" className="block text-white/70 hover:text-white transition-colors">
                All Collections
              </a>
              <a href="/contact" className="block text-white/70 hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2025 E.O.A Line. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-1 text-white/60 text-sm">
              <span>Made with</span>
              <span className="text-red-500">♥</span>
              <span>for His glory</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LaunchFooter;