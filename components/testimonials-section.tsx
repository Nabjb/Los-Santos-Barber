"use client";

import React from "react";

import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export function TestimonialsSection() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 md:mb-14 flex flex-col gap-3 md:gap-4">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">
            Voices of Los Santos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
            Client Reviews
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-mono max-w-2xl">
            4.9 rating · 38 reviews · Trusted by our community for precise cuts,
            clean shaves, and a premium barbershop experience.
          </p>
        </div>
        <StaggerTestimonials />
      </div>
    </section>
  );
}

