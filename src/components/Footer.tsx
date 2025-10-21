import React from 'react';
import { Heart, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { useLocalization } from '../contexts/LocalizationContext';

// TikTok Icon Component
const TikTokIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
  </svg>
);

interface FooterProps {
  onNavigateToSection?: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateToSection }) => {
  const { t, setShowWelcomeModal } = useLocalization();
  
  const handleNavigation = (section: string) => {
    if (onNavigateToSection) {
      onNavigateToSection(section);
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/e.o.a-logo/E.O.A%20Logo.jpg"
                alt="E.O.A Logo"
                className="h-8 w-8 rounded-full border border-yellow-600"
              />
              <span className="text-sm font-light tracking-wider">E.O.A Line</span>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed font-light">
              Luxury Christian fashion that combines faith with style. 
              Expressing our devotion through elegant design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 cursor-pointer transition-colors transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/0157 54664445" className="text-gray-400 hover:text-green-400 cursor-pointer transition-colors transform hover:scale-110">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-600 cursor-pointer transition-colors transform hover:scale-110">
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div className="space-y-4">
            <h3 className="text-sm font-light text-yellow-600">{t('collections')}</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <button 
                  onClick={() => handleNavigation('collections')}
                  className="text-gray-300 hover:text-white transition-colors text-left font-light"
                >
                  {t('laVeiraCollection')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('collections')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  TUMI Collection
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('collections')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  {t('newArrivals')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('collections')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  {t('bestSellers')}
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="text-sm font-light text-yellow-600">{t('customerCare')}</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <button 
                  onClick={() => handleNavigation('size-guide')}
                  className="text-gray-300 hover:text-white transition-colors text-left font-light"
                >
                  {t('sizeGuide')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('shipping')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  {t('shippingInfo')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('returns')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  {t('returnsProcess')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('contact')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  {t('contactUs')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-light text-yellow-600">{t('getInTouch')}</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-yellow-600" />
                <a href="mailto:info@eoaline.com" className="text-gray-300 hover:text-white transition-colors font-light">
                  support@eoaline.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-gray-400 font-light">
              © 2025 E.O.A Line. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-400 font-light">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-current" />
              <span>for His glory</span>
            </div>
            <div className="flex space-x-4 text-xs">
              <button 
                onClick={() => handleNavigation('privacy')}
                className="text-gray-400 hover:text-white transition-colors font-light"
              >
                {t('privacyPolicy')}
              </button>
              <button 
                onClick={() => handleNavigation('terms')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t('termsOfService')}
              </button>
              <button 
                onClick={() => handleNavigation('return-policy')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t('returnPolicy')}
              </button>
              <button 
                onClick={() => setShowWelcomeModal(true)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Language & Currency
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;