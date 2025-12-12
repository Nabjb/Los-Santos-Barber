"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ProductSlider } from "@/components/ui/product-slider";

type Category = "nishman" | "arren";

interface Product {
  id: string;
  name: string;
  image: string;
  description?: string;
}

const products: Record<Category, Product[]> = {
  nishman: [
    {
      id: "nishman1",
      name: "M4 Matte Finish Super High Hold Wax",
      image: "/products/nishman1.png",
      description:
        "Ultra strong matte wax for maximum hold and long-lasting shape.",
    },
    {
      id: "nishman2",
      name: "M5 Fibre Hair Sculpting Paste",
      image: "/products/nishman2.png",
      description:
        "Matte fiber paste that builds texture and strong hold with a natural finish.",
    },
    {
      id: "nishman3",
      name: "M1 Matte Paste (Argan)",
      image: "/products/nishman3.png",
      description:
        "Strong-hold matte styling paste that shapes hair easily without weighing it down.",
    },
    {
      id: "nishman4",
      name: "M3 Texturizing Matte Paste",
      image: "/products/nishman4.png",
      description:
        'Flexible matte paste that gives a textured, "mess up" style with light to medium hold.',
    },
    {
      id: "nishman5",
      name: "M6 Pliable Matte Styling Wax (Inca Inchi)",
      image: "/products/nishman5.png",
      description:
        "Easy-to-apply pliable matte wax with Inca Inchi for strong, healthy-looking hold.",
    },
    {
      id: "nishman6",
      name: "S5 Spider Wax (Keratin)",
      image: "/products/nishman6.png",
      description:
        "Elastic spider-web wax with keratin that delivers ultra-strong hold, high texture, and long-lasting definition.",
    },
    {
      id: "nishman7",
      name: "M2 Matte Clay Wax (Keratin)",
      image: "/products/nishman7.png",
      description:
        "Keratin-infused matte clay wax for strong hold, volume and natural texture.",
    },
    {
      id: "nishman8",
      name: "P1 Powder Styling Mattifying Volume Powder",
      image: "/products/nishman8.png",
      description:
        "Lightweight styling powder that transforms into a creamy matte wax to boost volume and texture with light, non-greasy hold.",
    },
  ],
  arren: [
    {
      id: "arren1",
      name: "Ultra Hold Fixing Hairspray",
      image: "/products/arren1.png",
      description:
        "Super-strong hold hairspray that locks your style in place and fights frizz all day.",
    },
    {
      id: "arren2",
      name: "High Hold Molding Clay",
      image: "/products/arren2.png",
      description:
        "Strong-hold matte clay that adds texture and shape with lightweight, residue-free styling.",
    },
    {
      id: "arren3",
      name: "Ultra Hold Pomade",
      image: "/products/arren3.png",
      description:
        "Extra-strong hold pomade with low shine and no residue for precise, long-lasting styling.",
    },
  ],
};

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e5e5 1px, transparent 1px),
              linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-20 px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Premium Products
          </p>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
            Our Products
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
            Premium grooming products from trusted brands. Select a category to explore.
          </p>
        </div>

        {/* Category Selection */}
        {!selectedCategory ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <motion.button
              onClick={() => setSelectedCategory("nishman")}
              className="group relative rounded-2xl border-2 border-border p-8 md:p-12 hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden h-full min-h-[300px] md:min-h-[400px]"
              style={{
                backgroundImage: "url(/products/nishman_background_img.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4 tracking-tight text-white">
                    Nishman
                  </h3>
                  <p className="text-sm md:text-base text-white/90 font-mono mb-6">
                    {products.nishman.length} premium products
                  </p>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold">
                  <span>Explore</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.button>

            <motion.button
              onClick={() => setSelectedCategory("arren")}
              className="group relative rounded-2xl border-2 border-border p-8 md:p-12 hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden h-full min-h-[300px] md:min-h-[400px]"
              style={{
                backgroundImage: "url(/products/arren_background_img.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4 tracking-tight text-white">
                    Arren
                  </h3>
                  <p className="text-sm md:text-base text-white/90 font-mono mb-6">
                    {products.arren.length} premium products
                  </p>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold">
                  <span>Explore</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.button>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Back to Categories</span>
                </button>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                  {selectedCategory === "nishman" ? "Nishman" : "Arren"} Products
                </h3>
              </div>
              <ProductSlider products={products[selectedCategory]} />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}

