import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageLightbox({ images, initialIndex, isOpen, onClose }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={onClose}
        >
          <button
            className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={onClose}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-6 text-white p-4 hover:bg-white/10 rounded-full"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={48} />
          </button>

          <motion.img
            key={currentIndex}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            src={images[currentIndex]}
            alt="Expanded view"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />

          <button
            className="absolute right-6 text-white p-4 hover:bg-white/10 rounded-full"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={48} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
