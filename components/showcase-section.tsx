"use client";

import React from "react";

import { ZoomParallax } from "@/components/ui/zoom-parallax";

const showcaseImages = [
  { src: "/showcase8.jpeg", alt: "Los Santos Barbershop - Premium haircut and grooming service in Nicosia" },
  { src: "/showcase9.jpeg", alt: "Expert barber styling at Los Santos Barbershop, Nicosia" },
  { src: "/showcase10.jpeg", alt: "Professional beard grooming service at Los Santos Barbershop" },
  { src: "/showcase11.jpeg", alt: "Classic men's haircut at Los Santos Barbershop, Cyprus" },
  { src: "/showcase12.jpeg", alt: "Premium barbering services at Los Santos Barbershop in Nicosia" },
  { src: "/showcase13.jpeg", alt: "Traditional barbershop experience at Los Santos, Nicosia" },
  { src: "/showcase14.jpeg", alt: "Los Santos Barbershop - Best barbershop in Nicosia, Cyprus" },
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

