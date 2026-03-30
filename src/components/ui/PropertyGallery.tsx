"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface PropertyGalleryProps {
  images: string[];
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!images || images.length === 0) return null;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Main Image View */}
      <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden bg-charcoal-900 border border-charcoal-800/50 group">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[activeIndex]}
              alt={`Property image ${activeIndex + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Controls Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal-950/50 backdrop-blur-md flex items-center justify-center text-cream-100 hover:bg-gold-500 hover:text-charcoal-900 transition-colors border border-charcoal-700/50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal-950/50 backdrop-blur-md flex items-center justify-center text-cream-100 hover:bg-gold-500 hover:text-charcoal-900 transition-colors border border-charcoal-700/50"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Fullscreen Toggle */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-charcoal-950/50 backdrop-blur-md flex items-center justify-center text-cream-100 hover:bg-gold-500 hover:text-charcoal-900 transition-colors border border-charcoal-700/50 opacity-0 group-hover:opacity-100"
          aria-label="View fullscreen"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Counter */}
        <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-charcoal-950/60 backdrop-blur-md border border-charcoal-700/50 text-xs font-heading font-medium text-cream-100">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide py-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative flex-shrink-0 w-24 h-20 md:w-32 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                activeIndex === idx
                  ? "border-gold-500 scale-100 opacity-100"
                  : "border-transparent opacity-50 hover:opacity-100 scale-95 hover:scale-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 96px, 128px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal-950/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-charcoal-800/50 text-cream-100 hover:bg-gold-500 hover:text-charcoal-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-[90vw] h-[80vh]">
              <Image
                src={images[activeIndex]}
                alt={`Property image ${activeIndex + 1} fullscreen`}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
            
            {images.length > 1 && (
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-charcoal-800/80 flex items-center justify-center text-cream-100 hover:bg-gold-500 hover:text-charcoal-900 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-charcoal-800/80 flex items-center justify-center text-cream-100 hover:bg-gold-500 hover:text-charcoal-900 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-charcoal-800/80 text-sm font-heading text-cream-100">
               {activeIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
