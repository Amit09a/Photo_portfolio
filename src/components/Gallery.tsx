import React, { useState } from 'react';
import { photos } from '../data/photos';
import { Photo } from '../types';
import Lightbox from './Lightbox';

const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...new Set(photos.map(photo => photo.category))];
  const filteredPhotos = filter === 'All' ? photos : photos.filter(photo => photo.category === filter);

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A curated collection of my finest work across various photography genres
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map(photo => (
            <div
              key={photo.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer transform transition-all duration-500 hover:scale-105"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{photo.title}</h3>
                  <p className="text-sm text-gray-300">{photo.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onNext={() => {
            const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
            const nextIndex = (currentIndex + 1) % filteredPhotos.length;
            setSelectedPhoto(filteredPhotos[nextIndex]);
          }}
          onPrevious={() => {
            const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
            const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
            setSelectedPhoto(filteredPhotos[prevIndex]);
          }}
        />
      )}
    </section>
  );
};

export default Gallery;