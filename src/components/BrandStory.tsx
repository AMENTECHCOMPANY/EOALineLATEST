import React from 'react';
import { Heart, Music, Users, Shirt } from 'lucide-react';
import { useLocalization } from '../contexts/LocalizationContext';

const BrandStory: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Our Vision */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-lg font-serif font-light text-gray-900 mb-3">{t('ourVision')}</h2>
            <div className="w-8 h-px bg-black mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs text-gray-700 leading-relaxed font-light mb-4">
              {t('visionText1')}
            </p>
            <p className="text-xs text-gray-700 leading-relaxed font-light mb-4">
              {t('visionText2')}
            </p>
            <p className="text-xs text-gray-700 leading-relaxed font-light">
              {t('visionText3')}
            </p>
          </div>
        </div>

        {/* Our Brand */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-lg font-serif font-light text-gray-900 mb-3">{t('ourBrand')}</h2>
            <div className="w-8 h-px bg-black mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-xs text-gray-700 leading-relaxed font-light">
                {t('brandText1')}
              </p>
              <p className="text-xs text-gray-700 leading-relaxed font-light">
                {t('brandText2')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-white border border-gray-100">
                <Heart className="w-4 h-4 text-black mx-auto mb-2" />
                <h3 className="font-serif font-light text-gray-900 mb-1 text-xs">{t('faith')}</h3>
                <p className="text-xs text-gray-600 font-light">{t('faithDescription')}</p>
              </div>
              <div className="text-center p-3 bg-white border border-gray-100">
                <Music className="w-4 h-4 text-black mx-auto mb-2" />
                <h3 className="font-serif font-light text-gray-900 mb-1 text-xs">{t('music')}</h3>
                <p className="text-xs text-gray-600 font-light">{t('musicDescription')}</p>
              </div>
              <div className="text-center p-3 bg-white border border-gray-100">
                <Users className="w-4 h-4 text-black mx-auto mb-2" />
                <h3 className="font-serif font-light text-gray-900 mb-1 text-xs">{t('family')}</h3>
                <p className="text-xs text-gray-600 font-light">{t('familyDescription')}</p>
              </div>
              <div className="text-center p-3 bg-white border border-gray-100">
                <Shirt className="w-4 h-4 text-black mx-auto mb-2" />
                <h3 className="font-serif font-light text-gray-900 mb-1 text-xs">{t('style')}</h3>
                <p className="text-xs text-gray-600 font-light">{t('styleDescription')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-lg font-serif font-light text-gray-900 mb-3">{t('ourMission')}</h2>
            <div className="w-8 h-px bg-black mx-auto"></div>
          </div>
          
          <div className="bg-black p-6 text-center">
            <h3 className="text-sm font-serif font-light text-white mb-3">
              {t('missionTitle')}
            </h3>
            <p className="text-xs text-white leading-relaxed font-light">
              {t('missionText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;