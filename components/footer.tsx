"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border/70 bg-secondary/40">
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
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 md:py-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Los Santos Barbershop"
              className="h-10 w-auto"
            />
            <div>
              <p className="text-lg font-bold uppercase tracking-tight">
                Los Santos Barbershop
              </p>
              <p className="text-xs font-mono text-muted-foreground">
                Est. 2015 · Nicosia
              </p>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-2 text-sm font-mono text-muted-foreground">
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              Book a Chair
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <span>Βασιλίσσης Φρειδερίκης 27A, Nicosia 1035</span>
            <span>+357 00 000 000</span>
            <span>Tue–Fri 9:00–19:00 · Sat 9:00–17:00</span>
          </div>
        </div>
        <div className="mt-6 text-xs font-mono text-muted-foreground">
          Crafted with pride · Premium grooming, modern twist.
        </div>
      </div>
    </footer>
  );
}

