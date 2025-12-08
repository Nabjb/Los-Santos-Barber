"use client";

import { Clock, Droplet, Scissors, Sparkles } from "lucide-react";
import React from "react";

import { Timeline } from "@/components/ui/timeline";

const servicesData = [
  {
    title: "Hair & Beard Cut",
    duration: "30 mins",
    price: "€15",
    description:
      "Classic haircut with precise beard sculpting, finished with hot towel and styling.",
    icon: Scissors,
  },
  {
    title: "Beard Trim",
    duration: "15 mins",
    price: "€7",
    description:
      "Clean beard line-up, fade, and conditioning to keep it sharp and fresh.",
    icon: Sparkles,
  },
  {
    title: "Beard Shave",
    duration: "15 mins",
    price: "€8",
    description:
      "Traditional straight-razor shave with hot towel prep and soothing finish.",
    icon: Droplet,
  },
];

export function ServicesTimeline() {
  const timelineData = servicesData.map((service) => {
    const Icon = service.icon;
    return {
      title: service.title,
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="mt-1 h-11 w-11 rounded-lg bg-background border border-border flex items-center justify-center">
              <Icon className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <p className="text-sm md:text-base text-muted-foreground font-mono flex items-center gap-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-background/80 border border-border">
                  <Clock className="h-4 w-4" />
                  {service.duration}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-background/80 border border-border">
                  {service.price}
                </span>
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      ),
    };
  });

  return (
    <section className="relative py-10 md:py-16">
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
      <Timeline
        heading="Our Services"
        subheading="Premium grooming tailored to every gentleman."
        data={timelineData}
      />
    </section>
  );
}

