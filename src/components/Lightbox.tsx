import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Photo } from '../types';

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ photo, onClose, onNext, onPrevious }) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrevious]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
      >
        <X className="h-8 w-8" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={onPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
      >
        <ChevronLeft className="h-12 w-12" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
      >
        <ChevronRight className="h-12 w-12" />
      </button>

      {/* Image Container */}
      <div className="max-w-full max-h-full flex flex-col items-center">
        <img
          src={a}
          alt={a}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
        
        {/* Image Info */}
        <div className="text-center text-white mt-6 max-w-2xl">
          <h3 className="text-2xl font-bold mb-2">{photo.title}</h3>
          <p className="text-gray-300 mb-2">{photo.category}</p>
          {photo.description && (
            <p className="text-gray-400">{photo.description}</p>
          )}
        </div>
      </div>

      {/* Background Click to Close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  );
};

export default Lightbox;