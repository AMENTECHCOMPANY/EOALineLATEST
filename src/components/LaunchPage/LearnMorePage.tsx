import React, { useState, useEffect } from 'react';
import { ArrowLeft, Star, Heart, Shield, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import LaunchNavbar from './LaunchNavbar';
import LaunchFooter from './LaunchFooter';

const LearnMorePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const comingSoonSlides = [
    {
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20F.JPG",
      title: "TUMI Hoodie",
      subtitle: "Premium comfort meets faith-inspired design"
    },
    {
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20M%20-%20Side_.JPG",
      title: "TUMI Full Set",
      subtitle: "Complete hoodie and sweat pants collection"
    },
    {
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM-PT-M-2.png",
      title: "TUMI Sweat Pants",
      subtitle: "Luxury comfort for everyday wear"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % comingSoonSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [comingSoonSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % comingSoonSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + comingSoonSlides.length) % comingSoonSlides.length);
  };

  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Premium Materials",
      description: "Crafted from the finest fabrics with attention to every detail"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Faith-Inspired Design",
      description: "Each piece carries spiritual meaning and biblical inspiration"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "Lifetime warranty on craftsmanship and materials"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Easy Worldwide Shipping",
      description: "Complimentary express delivery to your doorstep"
    }
  ];

  const teaserImages = [
    {
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20F.JPG",
      title: "TUMI Hoodie",
      description: "Premium comfort meets faith-inspired design"
    },
    {
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20M%20-%20Side_.JPG",
      title: "TUMI Full Set",
      description: "Complete hoodie and sweat pants collection"
    },
    {
      src: "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM-PT-M-2.png",
      title: "TUMI Sweat Pants",
      description: "Luxury comfort for everyday wear"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <LaunchNavbar />

      {/* Hero Section with Slideshow */}
      <section className="relative h-screen bg-black">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-24 left-4 z-20 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Launch Page
        </button>

        {/* Slideshow */}
        <div className="relative h-full w-full overflow-hidden">
          {comingSoonSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
          ))}

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-amber-400 font-medium text-sm">COMING SOON</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-serif font-light text-white mb-4 leading-tight">
              {comingSoonSlides[currentSlide].title}
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              {comingSoonSlides[currentSlide].subtitle}
            </p>

            <div className="flex items-center gap-6 text-white/70 mb-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-400 fill-current" />
                <span>Faith-Inspired</span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {comingSoonSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Teaser Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4">
              Exclusive Preview
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get a glimpse of what's coming. Each piece in the TUMI Complete Set has been meticulously 
              designed to represent the perfect fusion of luxury and faith.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teaserImages.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square mb-4">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600">
                  {image.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4">
              Why TUMI Complete Set?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              More than just clothing, it's a statement of faith, quality, and timeless style.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Don't Miss the Launch
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Join thousands of others who are waiting for this exclusive release. 
            Be among the first to experience luxury Christian fashion redefined.
          </p>
          
          <button
            onClick={() => window.history.back()}
            className="bg-amber-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-500 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            Get Notified When Available
          </button>
        </div>
      </section>

      <LaunchFooter />
    </div>
  );
};

export default LearnMorePage;