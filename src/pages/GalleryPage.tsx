import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gallery images - you can replace these with actual image paths
  const galleryImages = [
    {
      id: 1,
      src: './assets/female_portrait.jpg',
      alt: 'Cabinetul de psihologie - Sala de consultații',
      category: 'Cabinet'
    },
    {
      id: 2,
      src: './assets/female_portrait.jpg',
      alt: 'Spațiul de relaxare și meditație',
      category: 'Spații'
    },
    {
      id: 3,
      src: './assets/female_portrait.jpg',
      alt: 'Activități terapeutice pentru copii',
      category: 'Terapie'
    },
    {
      id: 4,
      src: './assets/female_portrait.jpg',
      alt: 'Materiale și instrumente de evaluare',
      category: 'Evaluări'
    },
    {
      id: 5,
      src: './assets/female_portrait.jpg',
      alt: 'Sesiune de grup pentru adolescenți',
      category: 'Terapie'
    },
    {
      id: 6,
      src: './assets/female_portrait.jpg',
      alt: 'Zona de joacă terapeutică',
      category: 'Copii'
    },
    {
      id: 7,
      src: './assets/female_portrait.jpg',
      alt: 'Biblioteca de resurse psihologice',
      category: 'Resurse'
    },
    {
      id: 8,
      src: './assets/female_portrait.jpg',
      alt: 'Certificări și diplome',
      category: 'Acreditări'
    },
  ];

  const categories = ['Toate', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState('Toate');

  const filteredImages = activeCategory === 'Toate' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setCurrentSlide(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-light to-white py-16 lg:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-light text-brand-primary mb-4" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
              Galeria Noastră
            </h1>
            <p className="text-lg text-brand-text/80 max-w-2xl mx-auto">
              Descoperiți spațiile noastre terapeutice și atmosfera caldă în care desfășurăm sesiunile de psihoterapie și consiliere psihologică.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-brand-accent text-white shadow-lg'
                    : 'bg-brand-light text-brand-primary hover:bg-brand-accent/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-accent/10 to-brand-primary/10">
                    <div className="aspect-square">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <i className="fas fa-search-plus text-white text-2xl"></i>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-medium">{image.alt}</p>
                      <span className="text-brand-accent text-xs">{image.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <i className="fas fa-times text-lg"></i>
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <i className="fas fa-chevron-left text-lg"></i>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <i className="fas fa-chevron-right text-lg"></i>
              </button>

              {/* Main Image */}
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredImages[currentSlide]?.src}
                  alt={filteredImages[currentSlide]?.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brand-primary mb-2">
                    {filteredImages[currentSlide]?.alt}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full text-sm">
                    {filteredImages[currentSlide]?.category}
                  </span>
                </div>
              </motion.div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                {currentSlide + 1} / {filteredImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GalleryPage;