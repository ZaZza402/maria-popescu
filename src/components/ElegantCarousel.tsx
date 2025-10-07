import React, { useState } from 'react';
import OptimizedImage from './OptimizedImage';

const ElegantCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gallery images - easy to update
  const images = [
    {
      src: './assets/female_portrait.jpg',
      alt: 'Maria Popescu - Psiholog Clinician',
      title: 'Cabinet de Psihologie'
    },
    {
      src: './assets/mp-therapy.jpg',
      alt: 'Sala de consultații psihologice',
      title: 'Spațiu Terapeutic'
    },
    {
      src: './assets/mp-notes.jpg',
      alt: 'Materiale și resurse terapeutice',
      title: 'Mediu Profesional'
    },
    {
      src: './assets/mp-team.jpg',
      alt: 'Echipa de specialiști',
      title: 'Resurse Profesionale'
    }
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-brand-primary mb-6">
            Cabinetul Nostru
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-lg text-brand-text/70 max-w-2xl mx-auto leading-relaxed">
            Un spațiu cald, sigur și profesional dedicat bunăstării tale emoționale
          </p>
        </div>
        
        {/* Elegant Gallery Container */}
        <div className="bg-gradient-to-br from-brand-light/30 to-white rounded-3xl p-8 shadow-xl border border-brand-accent/10">
          {/* Main Image Display */}
          <div className="relative mb-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <OptimizedImage
                src={images[currentSlide].src}
                alt={images[currentSlide].alt}
                className="w-full h-full object-cover transition-all duration-500 ease-out"
                loading="eager"
                priority={true}
                width={1000}
                height={750}
              />
            </div>
            
            {/* Elegant Progress Bar */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 max-w-xs">
                <div className="bg-white/20 backdrop-blur-sm rounded-full h-1 overflow-hidden">
                  <div 
                    className="h-full bg-brand-accent rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Image Title and Description */}
          <div className="text-center mb-8">
            <h3 className="text-xl lg:text-2xl font-semibold text-brand-primary mb-3">
              {images[currentSlide].title}
            </h3>
            <div className="w-16 h-0.5 bg-brand-accent mx-auto"></div>
          </div>

          {/* Thumbnail Navigation */}
          {images.length > 1 && (
            <div className="flex justify-center gap-3 flex-wrap mb-6">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    index === currentSlide 
                      ? 'ring-3 ring-brand-accent shadow-lg scale-105' 
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Vizualizează ${image.title}`}
                >
                  <div className="w-16 h-16 lg:w-20 lg:h-20">
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={80}
                      height={80}
                    />
                  </div>
                  {index === currentSlide && (
                    <div className="absolute inset-0 bg-brand-accent/20"></div>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Elegant Progress Indicator */}
          <div className="flex justify-center items-center gap-4">
            <div className="text-brand-text/40 text-sm font-medium">
              {images[currentSlide].title}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-brand-light rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-accent rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
                />
              </div>
              <span className="text-brand-text/40 text-xs">
                {currentSlide + 1}/{images.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElegantCarousel;