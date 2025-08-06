import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up">
          Amit Meena
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-0 animate-fade-in-up-delay-1">
          Capturing moments that tell stories
        </p>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-up-delay-2">
          amateur photographer specializing in portraits, landscapes, and street photography. 
          Every frame is a story waiting to be told.
        </p>
        
        <button
          onClick={scrollToGallery}
          className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 opacity-0 animate-fade-in-up-delay-3"
        >
          View My Work
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-0 animate-fade-in-up-delay-4">
        <button onClick={scrollToGallery} className="animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;