"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import React from "react";

export function BarberSection() {
  return (
    <section className="relative py-16 md:py-20">
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

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 md:mb-14 flex flex-col gap-3 md:gap-4">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">
            Master Barber
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
            Meet Fahed
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-mono max-w-2xl">
            Precision cuts, premium shaves, and a welcoming experience trusted by our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-secondary shadow-lg"
          >
            <Image
              src="/barber.jpg"
              alt="Fahed, Master Barber"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 border border-border">
              <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
              4.9 · 38 reviews
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                Crafting Signature Looks
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                From classic cuts to modern fades, Fahed delivers sharp results with meticulous attention to detail. Known for premium beard grooming, hot towel shaves, and a welcoming chair-side experience.
              </p>
            </div>

            <div className="grid gap-3 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  Languages
                </span>
                <span className="text-muted-foreground">English · Greek · Russian-friendly service</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  Specialties
                </span>
                <span className="text-muted-foreground">
                  Skin fades · Beard sculpting · Hot towel shaves · Kids & adults
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  Booking
                </span>
                <span className="text-muted-foreground">
                  High demand — book ahead to secure your slot.
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Precision Cuts", "Beard Grooming", "Hot Towel Shave", "Premium Products"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="flex gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors"
              >
                Book with Fahed
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold hover:border-primary/60 hover:text-primary transition-colors"
              >
                View availability
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

