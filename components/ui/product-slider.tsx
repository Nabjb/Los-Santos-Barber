"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  image: string;
  description?: string;
}

interface ProductSliderProps {
  products: Product[];
}

export function ProductSlider({ products }: ProductSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Safety check: ensure products array exists and reset index if needed
  useEffect(() => {
    if (!products || products.length === 0) {
      return;
    }
    // Reset index if it's out of bounds
    if (currentIndex >= products.length) {
      setCurrentIndex(0);
    }
  }, [products, currentIndex]);

  // Safety check: ensure products array exists and has items
  if (!products || products.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-border bg-secondary/30 p-6 md:p-10 text-center">
        <p className="text-muted-foreground">No products available.</p>
      </div>
    );
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < products.length) {
      setCurrentIndex(index);
    }
  };

  // Ensure we have a valid product
  const safeIndex = Math.max(0, Math.min(currentIndex, products.length - 1));
  const currentProduct = products[safeIndex];

  return (
    <>
      {/* Main Slider */}
      <div className="relative rounded-2xl border-2 border-border bg-secondary/30 p-6 md:p-10 overflow-hidden">
        {/* Product Image */}
        <div className="relative aspect-square max-w-2xl mx-auto mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={safeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full cursor-pointer"
              onClick={() => setIsFullscreen(true)}
            >
              <Image
                src={currentProduct.image}
                alt={currentProduct.name}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Product Info */}
        <div className="text-center mb-8">
          <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-2">
            {currentProduct.name}
          </h4>
          {currentProduct.description && (
            <p className="text-sm md:text-base text-muted-foreground font-mono max-w-xl mx-auto">
              {currentProduct.description}
            </p>
          )}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={goToPrevious}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
            aria-label="Previous product"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-200",
                  index === safeIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-primary/50"
                )}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
            aria-label="Next product"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Product Counter */}
        <div className="text-center text-sm font-mono text-muted-foreground">
          {safeIndex + 1} / {products.length}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Close fullscreen"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Fullscreen Image */}
              <div className="relative w-full h-full">
                <Image
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Navigation in Fullscreen */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-background/90 border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Previous product"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-background/90 border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Next product"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

