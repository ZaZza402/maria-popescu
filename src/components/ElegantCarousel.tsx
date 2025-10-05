import React, { useState, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';

const ElegantCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gallery images - easy to update
  const images = [
    {
      src: './assets/female_portrait.jpg',
      alt: 'Cabinet de psihoterapie',
      title: 'Cabinetul nostru'
    },
    {
      src: './assets/female_portrait.jpg',
      alt: 'Maria Popescu - Psiholog',
      title: 'Dr. Maria Popescu'
    },
    {
      src: './assets/female_portrait.jpg',
      alt: 'Sala de consultații',
      title: 'Spațiul de consiliere'
    },
    {
      src: './assets/female_portrait.jpg',
      alt: 'Zona de relaxare',
      title: 'Zona de relaxare'
    },
    {
      src: './assets/female_portrait.jpg',
      alt: 'Mediul terapeutic',
      title: 'Mediul terapeutic'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-light to-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif text-brand-primary mb-4">
            Galerie
          </h2>
          <p className="text-lg text-brand-text/80 max-w-xl mx-auto">
            Cabinetul nostru oferă un mediu cald și profesional
          </p>
        </div>
        
        {/* Main Carousel */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
          <div className="relative h-96 lg:h-[500px]">
            {/* Images */}
            <div 
              className="flex transition-transform duration-700 ease-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative h-full">
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    priority={index === 0}
                    width={800}
                    height={500}
                  />
                  {/* Elegant overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent">
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-white text-xl font-semibold mb-1">
                        {image.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-brand-accent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 group"
              aria-label="Imaginea anterioară"
            >
              <i className="fas fa-chevron-left text-brand-primary group-hover:text-brand-accent transition-colors"></i>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 group"
              aria-label="Imaginea următoare"
            >
              <i className="fas fa-chevron-right text-brand-primary group-hover:text-brand-accent transition-colors"></i>
            </button>
          </div>

          {/* Elegant Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-brand-accent scale-125' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Mergi la imaginea ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Image Counter */}
        <div className="text-center mt-6">
          <span className="text-brand-text/60 text-sm">
            {currentSlide + 1} din {images.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ElegantCarousel;