"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Scissors, Star } from "lucide-react";
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

        <div className="md:max-w-5xl grid md:grid-cols-2 gap-8 md:gap-10 items-center bg-secondary/30 border border-border/60 rounded-2xl p-5 md:p-8 shadow-sm backdrop-blur mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-border bg-secondary shadow-lg"
          >
            <Image
              src="/barber.jpg"
              alt="Fahed, Master Barber"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover filter sepia contrast-110 brightness-95"
              priority
            />
            <div className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-15" style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)",
              backgroundSize: "6px 6px"
            }} />
            <div className="absolute top-4 right-4 bg-background/85 backdrop-blur-sm px-3 py-2 rounded-full text-xs font-semibold border border-border shadow-sm">
              Since 2015
            </div>
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

            <div className="border-l-2 border-border/80 pl-4 space-y-3 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-wide">
                  Languages
                </span>
                <span className="text-muted-foreground">English · Greek · Russian-friendly service</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-wide">
                  <Scissors className="h-4 w-4" />
                  Specialties
                </span>
                <span className="text-muted-foreground">
                  Skin fades · Beard sculpting · Hot towel shaves · Kids & adults
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-wide">
                  Booking
                </span>
                <span className="text-muted-foreground">
                  High demand — book ahead to secure your slot.
                </span>
              </div>
            </div>

            <div className="h-px border-t border-dashed border-border/70 my-1" />

            <div className="flex flex-wrap gap-2">
              {["Precision Cuts", "Beard Grooming", "Hot Towel Shave", "Premium Products"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide shadow-[2px_2px_0_rgba(0,0,0,0.25)]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href="https://lossantosbarberz.setmore.com/"
                className="inline-flex items-center justify-center rounded-md border-2 border-border bg-primary/90 px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[3px_3px_0_rgba(0,0,0,0.35)] hover:bg-primary transition-colors"
              >
                Book a Chair with Fahed
              </a>
              <a
                href="https://lossantosbarberz.setmore.com/"
                className="inline-flex items-center justify-center rounded-md border-2 border-dashed border-border px-5 py-3 text-sm font-semibold hover:border-primary/60 hover:text-primary transition-colors"
              >
                See the Chair List
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

