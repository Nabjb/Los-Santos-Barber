"use client";

import { Clock, Droplet, Scissors, Sparkles } from "lucide-react";
import React from "react";

const servicesData = [
  {
    title: "Hair & Beard Cut",
    duration: "30 mins",
    price: "€15",
    description:
      "Classic haircut with precise beard sculpting",
    icon: Scissors,
    backgroundImage: "/first_service.jpg",
  },
  {
    title: "Beard Trim",
    duration: "15 mins",
    price: "€7",
    description:
      "Clean beard line-up, fade",
    icon: Sparkles,
    backgroundImage: "/second_service.jpg",
  },
  {
    title: "Beard Shave",
    duration: "15 mins",
    price: "€8",
    description:
      "Traditional straight-razor shave",
    icon: Droplet,
    backgroundImage: "/third_service.jpg",
  },
];

export function ServicesTimeline() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
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

      <div className="mx-auto max-w-7xl relative z-20 px-6">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            PREMIUM SERVICES
          </p>
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight">
            OUR SERVICES
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground font-mono max-w-2xl">
            Premium grooming tailored to every gentleman.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const cardContent = (
              <>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="h-20 w-20 md:h-24 md:w-24 rounded-xl bg-background/90 border-2 border-white/20 flex items-center justify-center group-hover:border-primary/50 transition-colors backdrop-blur-sm">
                      <Icon className="h-10 w-10 md:h-12 md:w-12 text-foreground" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4 tracking-tight text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Duration & Price */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 border border-white/20 font-mono text-sm text-foreground backdrop-blur-sm">
                      <Clock className="h-4 w-4" />
                      {service.duration}
                    </span>
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {service.price}
                    </span>
                  </div>
                </div>
              </>
            );

            return (
              <div
                key={service.title}
                className="group relative rounded-xl p-8 md:p-10 border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
                style={{
                  backgroundImage: `url(${service.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

