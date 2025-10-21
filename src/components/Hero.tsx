import React, { useEffect, useState } from "react";
import { useLocalization } from '../contexts/LocalizationContext';

type Slide = {
  type: "video" | "image";
  src: string;
  caption: string;
};

const Hero: React.FC = () => {
  const { t } = useLocalization();

  // TUMIE Coming Soon slides - enhanced with better design
  const comingSoonSlides = [
    {
      type: "image" as const,
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20F.JPG",
      caption: "TUMI HOODIE",
      subtitle: "Premium comfort meets faith-inspired design",
    },
    {
      type: "image" as const,
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20M%20-%20Side_.JPG",
      caption: "TUMI FULL SET",
      subtitle: "Complete hoodie and sweat pants collection",
    },

    {
      type: "image" as const,
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM-PT-M-2.png",
      caption: "TUMI SWEAT PANTS",
      subtitle: "Luxury comfort for everyday wear",
    },
  ];

  const heroSlides: Slide[] = [
    // Videos
    {
      type: "video",
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/hero%20videos/EOA%20Tumi%20Hero%20Video.mp4",
      caption: "E.O.A FASHION",
    },
    {
      type: "video",
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/hero%20videos/Hero%20Video%20-%20LV.MP4",
      caption: "SALE IS ON",
    },
  ];

  // TUMI Collection images
  const tumiSlides = [
    {
      type: "image" as const,
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-WT-F-11.jpg",
      caption: "TUMI COLLECTION"
    },
    {
      type: "image" as const,
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-BL-F-2.jpg",
      caption: "TUMI COLLECTION",
    },

    {
      type: "image" as const,
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-WT-F-8.jpg",
      caption: "TUMI COLLECTION",
    },

    {
      type: "image" as const,
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-WB-MF-5.jpg",
      caption: "TUMI COLLECTION",
    },
    {
      type: "image" as const,
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-WT-M-2.jpg",
      caption: "TUMI COLLECTION",
    },
  ];

  // LA VEIRA Collection images
  const laVeiraSlides = [
    {
      type: "image" as const,
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-GP-F-4.jpg",
      caption: "LA VEIRA COLLECTION",
    },
    {
      type: "image" as const,
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Cropped/LV-GP-M-1.jpg",
      caption: "LA VEIRA COLLECTION"
    },

    {
      type: "image" as const,
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-GP-F-5.jpg",
      caption: "LA VEIRA COLLECTION",
    },


    {
      type: "image" as const,
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-GP-16.jpg",
      caption: "LA VEIRA COLLECTION",
    },
    {
      type: "image" as const,
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Cropped/LV-GP-1.jpg",
      caption: "LA VEIRA COLLECTION",
    },
  ];




  type Slide = {
    type: "video" | "image";
    src: string;
    caption: string;
    subtitle?: string;
  };

  // State for coming soon slides
  const [currentComingSoonSlide, setCurrentComingSoonSlide] = useState(0);

  // State for TUMI collection slider
  const [currentTumiSlide, setCurrentTumiSlide] = useState(0);

  // State for LA VEIRA collection slider
  const [currentLaVeiraSlide, setCurrentLaVeiraSlide] = useState(0);

  // Auto-rotate coming soon slides
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentComingSoonSlide((prev) => (prev + 1) % comingSoonSlides.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // Auto-rotate TUMI slides
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTumiSlide((prev) => (prev + 1) % tumiSlides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  // Auto-rotate LA VEIRA slides
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentLaVeiraSlide((prev) => (prev + 1) % laVeiraSlides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const nextComingSoonSlide = () =>
      setCurrentComingSoonSlide((prev) => (prev + 1) % comingSoonSlides.length);

  const prevComingSoonSlide = () =>
      setCurrentComingSoonSlide((prev) => (prev - 1 + comingSoonSlides.length) % comingSoonSlides.length);

  const nextTumiSlide = () =>
      setCurrentTumiSlide((prev) => (prev + 1) % tumiSlides.length);

  const prevTumiSlide = () =>
      setCurrentTumiSlide((prev) => (prev - 1 + tumiSlides.length) % tumiSlides.length);

  const nextLaVeiraSlide = () =>
      setCurrentLaVeiraSlide((prev) => (prev + 1) % laVeiraSlides.length);

  const prevLaVeiraSlide = () =>
      setCurrentLaVeiraSlide((prev) => (prev - 1 + laVeiraSlides.length) % laVeiraSlides.length);

  return (
      <section className="w-full">
        {/* --- TUMIE Coming Soon Consolidated Slide --- */}
        <div className="h-screen relative">
          {comingSoonSlides.map((slide, index) => (
              <div
                  key={`coming-soon-${index}`}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentComingSoonSlide ? "opacity-100" : "opacity-0"
                  }`}
              >
                <img
                    src={slide.src}
                    alt={slide.caption}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="bg-black/70 backdrop-blur-md px-4 md:px-16 py-4 md:py-12 rounded-xl border border-amber-400/50 max-w-sm md:max-w-3xl mx-4 shadow-2xl">
                      <div className="mb-6">
                    <span className="inline-block bg-white text-black px-3 py-1 rounded-full text-xs md:text-sm font-medium tracking-wide-elegant mb-3 md:mb-4">
                      {t('comingSoon')}
                    </span>
                      </div>
                      <h2 className="text-lg md:text-4xl lg:text-5xl font-serif font-medium mb-2 md:mb-4 tracking-elegant leading-tight">
                        {slide.caption}
                      </h2>
                      <p className="text-sm md:text-xl text-beige-200 font-medium mb-1 md:mb-2">
                        {slide.subtitle}
                      </p>
                      <p className="text-xs md:text-lg text-gray-300 font-medium mb-4 md:mb-8">
                        {t('beFirstToExperience')}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center">
                        <button className="bg-white text-black px-4 md:px-8 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium hover:bg-gray-200 transition-all duration-300 shadow-lg">
                          {t('notifyMe')}
                        </button>
                        <button className="border-2 border-white text-white px-4 md:px-8 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium hover:bg-white hover:text-black transition-all duration-300">
                          {t('learnMore')}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ))}

          {/* Coming Soon Navigation Arrows */}
          <button
              onClick={prevComingSoonSlide}
              aria-label="Previous coming soon slide"
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 text-2xl"
          >
            ‹
          </button>
          <button
              onClick={nextComingSoonSlide}
              aria-label="Next coming soon slide"
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 text-2xl"
          >
            ›
          </button>

          {/* Coming Soon Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {comingSoonSlides.map((_, idx) => (
                <button
                    key={`coming-soon-dot-${idx}`}
                    onClick={() => setCurrentComingSoonSlide(idx)}
                    aria-label={`Go to coming soon slide ${idx + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === currentComingSoonSlide ? "bg-[#fbbf2480]" : "bg-white/50 hover:bg-white/80"
                    }`}
                />
            ))}
          </div>
        </div>

        {/* --- First video (full screen) --- */}
        <div className="h-screen relative">
          <video
              src={heroSlides[0].src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-8 py-4 rounded-lg border border-primary-400/30">
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-center tracking-elegant">
              {t('eoaLine')}
            </h2>
          </div>
        </div>

        {/* --- Second video (full screen) --- */}
        <div className="h-screen relative">
          <video
              src={heroSlides[1].src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-8 py-4 rounded-lg border border-primary-400/30">
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-center tracking-elegant">
              {heroSlides[1].caption}
            </h2>
          </div>
        </div>

        {/* --- TUMI Collection Slider (full screen) --- */}
        <div className="relative h-screen">
          {tumiSlides.map((slide, idx) => (
              <div
                  key={`tumi-${idx}`}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                      idx === currentTumiSlide ? "opacity-100" : "opacity-0"
                  }`}
              >
                <img
                    src={slide.src}
                    alt={slide.caption}
                    className="w-full h-full object-cover object-[50%_20%]"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-8 py-4 rounded-lg border border-primary-400/30">
                  <h2 className="text-2xl md:text-3xl font-serif font-medium text-center tracking-elegant">
                    {slide.caption}
                  </h2>
                </div>
              </div>
          ))}

          <button
              onClick={prevTumiSlide}
              aria-label="Previous Tumi slide"
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 text-2xl"
          >
            ‹
          </button>
          <button
              onClick={nextTumiSlide}
              aria-label="Next Tumi slide"
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 text-2xl"
          >
            ›
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {tumiSlides.map((_, idx) => (
                <button
                    key={`tumi-dot-${idx}`}
                    onClick={() => setCurrentTumiSlide(idx)}
                    aria-label={`Go to Tumi slide ${idx + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === currentTumiSlide ? "bg-[#fbbf2480]" : "bg-white/50 hover:bg-white/80"
                    }`}
                />
            ))}
          </div>
        </div>

        {/* --- LA VEIRA Collection Slider (full screen) --- */}
        <div className="relative h-screen">
          {laVeiraSlides.map((slide, idx) => (
              <div
                  key={`laveira-${idx}`}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                      idx === currentLaVeiraSlide ? "opacity-100" : "opacity-0"
                  }`}
              >
                <img
                    src={slide.src}
                    alt={slide.caption}
                    className="w-full h-full object-cover object-[50%_20%]"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-8 py-4 rounded-lg border border-primary-400/30">
                  <h2 className="text-2xl md:text-3xl font-serif font-medium text-center tracking-elegant">
                    {slide.caption}
                  </h2>
                </div>
              </div>
          ))}

          <button
              onClick={prevLaVeiraSlide}
              aria-label="Previous La Veira slide"
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 text-2xl"
          >
            ‹
          </button>
          <button
              onClick={nextLaVeiraSlide}
              aria-label="Next La Veira slide"
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 text-2xl"
          >
            ›
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {laVeiraSlides.map((_, idx) => (
                <button
                    key={`laveira-dot-${idx}`}
                    onClick={() => setCurrentLaVeiraSlide(idx)}
                    aria-label={`Go to La Veira slide ${idx + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === currentLaVeiraSlide ? "bg-[#fbbf2480]" : "bg-white/50 hover:bg-white/80"
                    }`}
                />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Hero;