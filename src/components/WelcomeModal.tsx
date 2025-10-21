import React, { useState } from 'react';
import { X, Globe, DollarSign, Check } from 'lucide-react';
import { useLocalization } from '../contexts/LocalizationContext';

const WelcomeModal: React.FC = () => {
  const { 
    showWelcomeModal, 
    setShowWelcomeModal, 
    language, 
    currency, 
    setLanguage, 
    setCurrency, 
    t, 
    languages, 
    currencies 
  } = useLocalization();
  
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  if (!showWelcomeModal) return null;

  const handleConfirm = () => {
    setLanguage(selectedLanguage);
    setCurrency(selectedCurrency);
    localStorage.setItem('eoa-welcome-seen', 'true');
    setShowWelcomeModal(false);
  };

  const isSelectionComplete = selectedLanguage && selectedCurrency;

  // Get popular combinations for quick selection
  const popularCombinations = [
    { country: 'Germany', language: 'de', currency: 'EUR', flag: '🇩🇪' },
    { country: 'United Kingdom', language: 'en', currency: 'GBP', flag: '🇬🇧' },
    { country: 'United States', language: 'en', currency: 'USD', flag: '🇺🇸' },
    { country: 'France', language: 'fr', currency: 'EUR', flag: '🇫🇷' },
    { country: 'Spain', language: 'es', currency: 'EUR', flag: '🇪🇸' },
    { country: 'Italy', language: 'it', currency: 'EUR', flag: '🇮🇹' },
  ];

  const handleQuickSelect = (lang: string, curr: string) => {
    setSelectedLanguage(lang);
    setSelectedCurrency(curr);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with hero image */}
      <div className="absolute inset-0">
        <img
          src="https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/tumie-images/DSC06360.jpg"
          alt="E.O.A Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="text-center p-8 border-b border-gray-200">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/e.o.a-logo/E.O.A%20Logo.jpg"
              alt="E.O.A Logo"
             className="h-16 w-16 rounded-full border-2 border-orange-400"
            />
          </div>
          <h2 className="text-3xl font-serif font-medium text-gray-900 mb-2">
            Welcome to E.O.A LINE
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t('welcomeSubtitle')}
          </p>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto flex-1">
          {/* Quick Country Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-serif font-medium text-gray-900 mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary-600" />
              Popular Locations
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {popularCombinations.map((combo) => (
                <button
                  key={combo.country}
                  onClick={() => handleQuickSelect(combo.language, combo.currency)}
                  className={`p-4 border-2 rounded-lg text-left transition-all hover:border-black hover:bg-gray-50 ${
                    selectedLanguage === combo.language && selectedCurrency === combo.currency 
                      ? 'border-black bg-gray-50' 
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{combo.flag}</span>
                    <div>
                      <div className="font-medium text-gray-900">{combo.country}</div>
                      <div className="text-sm text-gray-600">
                        {languages.find(l => l[0] === combo.language)?.[1]} • {combo.currency}
                      </div>
                    </div>
                    {selectedLanguage === combo.language && selectedCurrency === combo.currency && (
                      <Check className="w-5 h-5 text-black ml-auto" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Selection */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Language Selection */}
            <div>
              <h3 className="text-lg font-serif font-medium text-gray-900 mb-4">
                {t('selectLanguage')}
              </h3>
              <div className="max-h-48 overflow-y-auto border border-gray-200 rounded-lg">
                {languages.map((lang) => (
                  <button
                    key={lang[0]}
                    onClick={() => setSelectedLanguage(lang[0])}
                    className={`w-full p-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors ${
                      selectedLanguage === lang[0] ? 'bg-gray-100 text-black' : ''
                    }`}
                  >
                    <div className="font-medium flex items-center gap-3">
                      <span className="text-xl">{lang[4]}</span>
                      {lang[2]}
                    </div>
                    <div className="text-sm text-gray-600">{lang[1]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Currency Selection */}
            <div>
              <h3 className="text-lg font-serif font-medium text-gray-900 mb-4">
                {t('selectCurrency')}
              </h3>
              <div className="max-h-48 overflow-y-auto border border-gray-200 rounded-lg">
                {currencies.map((curr) => (
                  <button
                    key={curr[0]}
                    onClick={() => setSelectedCurrency(curr[0])}
                    className={`w-full p-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors ${
                      selectedCurrency === curr[0] ? 'bg-gray-100 text-black' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{curr[1]}</div>
                        <div className="text-sm text-gray-600">{curr[3]}</div>
                      </div>
                      <div className="text-lg font-medium text-black">{curr[2]}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 bg-white flex-shrink-0">
          <button
            onClick={handleConfirm}
            disabled={!isSelectionComplete}
            className={`w-full py-4 rounded-lg font-medium text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg mb-4 ${
              isSelectionComplete 
                ? 'bg-black text-white hover:bg-gray-800 hover:shadow-xl' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
            }`}
          >
            {t('confirmShippingLocation')}
          </button>
          <p className="text-center text-sm text-gray-500">
            {isSelectionComplete 
              ? 'You can change these settings anytime in the footer' 
              : 'Please select both language and currency to continue'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;