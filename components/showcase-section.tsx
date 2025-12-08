"use client";

import React from "react";

import { ZoomParallax } from "@/components/ui/zoom-parallax";

const showcaseImages = [
  { src: "/showcase1.jpg", alt: "Showcase 1" },
  { src: "/showcase2.jpeg", alt: "Showcase 2" },
  { src: "/showcase3.webp", alt: "Showcase 3" },
  { src: "/showcase4.png", alt: "Showcase 4" },
  { src: "/showcase5.jpg", alt: "Showcase 5" },
  { src: "/showcase6.jpg", alt: "Showcase 6" },
  { src: "/showcase7.webp", alt: "Showcase 7" },
];

export function ShowcaseSection() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-10 md:mb-14">
        <p className="text-sm uppercase tracking-wider text-muted-foreground">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
          Our Work
        </h2>
        <p className="text-sm md:text-base text-muted-foreground font-mono max-w-2xl mt-3">
          Selected cuts, shaves, and grooming moments from Los Santos Barbershop.
          Scroll to explore the parallax gallery.
        </p>
      </div>

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

      <ZoomParallax images={showcaseImages} />
    </section>
  );
}

