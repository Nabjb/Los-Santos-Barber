"use client";

import React from "react";

import { ZoomParallax } from "@/components/ui/zoom-parallax";

const showcaseImages = [
  { src: "/showcase8.jpeg", alt: "Showcase 8" },
  { src: "/showcase9.jpeg", alt: "Showcase 9" },
  { src: "/showcase10.jpeg", alt: "Showcase 10" },
  { src: "/showcase11.jpeg", alt: "Showcase 11" },
  { src: "/showcase12.jpeg", alt: "Showcase 12" },
  { src: "/showcase13.jpeg", alt: "Showcase 13" },
  { src: "/showcase14.jpeg", alt: "Showcase 14" },
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

