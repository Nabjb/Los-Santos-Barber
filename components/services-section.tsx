"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scissors, Sparkles, Droplet, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Hair & Beard Cut",
    duration: "30 mins",
    price: "€15",
    icon: Scissors,
  },
  {
    id: 2,
    name: "Beard Trim",
    duration: "15 mins",
    price: "€7",
    icon: Sparkles,
  },
  {
    id: 3,
    name: "Beard Shave",
    duration: "15 mins",
    price: "€8",
    icon: Droplet,
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-20 px-6">
        {/* Section Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-wider text-muted-foreground mb-4"
          >
            FAHED
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-tight"
          >
            Services
          </motion.h2>
        </div>

        {/* Services List */}
        <div className="space-y-4 max-w-4xl">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="bg-secondary border border-border rounded-lg p-6 md:p-8 flex items-center justify-between group cursor-pointer transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-background rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>

                  {/* Service Info */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-1">
                      {service.name}
                    </h3>
                    <p className="text-sm md:text-base font-mono text-muted-foreground">
                      {service.duration} · {service.price}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <motion.div
                  className="flex-shrink-0"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Optional: Add-on text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center font-mono text-sm text-muted-foreground max-w-2xl mx-auto"
        >
          ALL SERVICES INCLUDE CONSULTATION · PREMIUM PRODUCTS · HOT TOWEL FINISH
        </motion.p>
      </div>

      {/* Background Grid - Subtle continuation */}
      <div
        className="absolute block dark:hidden inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e5e5 1px, transparent 1px),
            linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />
      <div
        className="absolute hidden dark:block inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #404040 1px, transparent 1px),
            linear-gradient(to bottom, #404040 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />
    </section>
  );
}

