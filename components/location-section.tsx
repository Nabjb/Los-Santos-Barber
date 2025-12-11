"use client";

import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import React from "react";

export function LocationSection() {
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
            Find Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
            Location & Contact
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-mono max-w-2xl">
            4.9 · 38 reviews · Book your chair, walk-ins welcome when available.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-secondary/50 p-6 shadow-sm">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide mb-3">
              <MapPin className="h-5 w-5" />
              Address
            </div>
            <p className="text-lg font-semibold leading-snug">
              Βασιλίσσης Φρειδερίκης 27A
              <br />
              Nicosia, Pallouriotissa 1035
            </p>
            <a
              href="https://maps.google.com/?q=%CE%92%CE%B1%CF%83%CE%B9%CE%BB%CE%AF%CF%83%CF%83%CE%B7%CF%82%20%CF%86%CF%81%CE%B5%CE%B9%CE%B4%CE%B5%CF%81%CE%AF%CE%BA%CE%B7%CF%82%2027A%20Nicosia%201035"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:text-primary"
            >
              Open in Maps <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-secondary/50 p-6 shadow-sm">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide mb-3">
              <Clock className="h-5 w-5" />
              Hours
            </div>
            <ul className="space-y-1 text-base">
              <li className="flex justify-between text-muted-foreground">
                <span>Mon</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Tue – Fri</span>
                <span>9:00 – 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sat</span>
                <span>9:00 – 17:00</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Sun</span>
                <span>Closed</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground font-mono">
              Walk-ins welcome when slots are open. Booking recommended.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-secondary/50 p-6 shadow-sm">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide mb-3">
              <Phone className="h-5 w-5" />
              Contact
            </div>
            <div className="space-y-3">
              <a
                href="tel:+35700000000"
                className="inline-flex items-center justify-center rounded-md border-2 border-border bg-primary/90 px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[3px_3px_0_rgba(0,0,0,0.35)] hover:bg-primary transition-colors w-full"
              >
                Call the Shop
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border-2 border-dashed border-border px-4 py-3 text-sm font-semibold hover:border-primary/60 hover:text-primary transition-colors w-full"
              >
                Book Online
              </a>
              <p className="text-sm text-muted-foreground font-mono">
                Instagram / DM: @LosSantosBarbers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

