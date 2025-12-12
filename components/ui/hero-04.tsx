/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight } from "@aliimam/icons";
import { Button } from "@/components/ui/button";

export function HeroSection04() {
  return (
    <section className="min-h-screen overflow-hidden relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl relative z-20 px-4 md:px-6">
        <div className="relative ">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm absolute -top-4 left-20 font-medium tracking-wider"
          >
            EST. 2023
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            className={`z-20 text-primary relative font-bold text-center tracking-[-4px] text-6xl md:text-9xl xl:tracking-[-1rem] md:tracking-[-14px] xl:text-[10rem] flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6`}
          >
            <img
              src="/logo.png"
              alt="LosSantos Barbershop logo"
              className="h-14 w-auto md:h-20 object-contain"
            />
            <span>LOS SANTOS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-4xl hidden xl:block absolute -bottom-12 right-6 font-thin tracking-[6px] z-30"
          >
            BARBERSHOP
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-4xl absolute xl:hidden -bottom-12 left-24 font-thin tracking-[6px] z-30"
          >
            BARBERSHOP
          </motion.p>
        </div>
        <div className="grid relative">
          <div className="space-y-6 pt-12 md:pt-20 flex gap-6 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex gap-4 md:gap-6 bg-secondary w-full max-w-xl h-fit p-6 md:p-10 items-end text-lg font-bold md:text-2xl lg:text-3xl"
            >
              <div className="font-semibold text-xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  / CLASSIC CUTS
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.15 }}
                >
                  / BEARD GROOMING
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  / HOT TOWEL SHAVES
                </motion.div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute hidden md:flex left-1/2 -translate-x-1/2 -top-10 w-fit overflow-hidden bg-secondary max-w-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=300&h=450&fit=crop"
              alt="Barbershop interior"
              className="h-[400px] w-auto object-cover grayscale"
            />
            <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
              PREMIUM GROOMING EXPERIENCE
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex md:hidden w-full overflow-hidden bg-secondary mt-6 rounded-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=800&fit=crop"
              alt="Barbershop interior"
              className="w-full object-cover grayscale"
            />
            <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
              PREMIUM GROOMING EXPERIENCE
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="md:mt-40 mt-10 px-2"
        >
          <p className="mx-auto max-w-2xl font-mono text-center text-sm font-medium tracking-wide md:text-base">
            WE&apos;RE A PREMIUM BARBERSHOP OFFERING
            <br />
            TRADITIONAL GROOMING WITH A MODERN TWIST
            <br />
            FOR THE DISTINGUISHED GENTLEMAN
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.7, type: "spring", stiffness: 200 }}
          className="flex justify-center pt-4 md:pt-6"
        >
          <Button asChild size={"lg"} className="w-full max-w-xs">
            <Link href="https://lossantosbarberz.setmore.com/" target="_blank" rel="noreferrer">
              Book Appointment
            </Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.9 }}
          className="md:flex mt-20 items-end justify-between"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="w-60 h-36 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0"
            >
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=300&h=200&fit=crop"
                alt="Haircut service"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="w-60 h-36 absolute left-6 -top-6 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0"
            >
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=300&h=200&fit=crop"
                alt="Beard trim service"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="w-60 h-36 absolute left-12 -top-12 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0"
            >
              <img
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=300&h=200&fit=crop"
                alt="Hot towel shave"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            <div className="flex items-center md:justify-end gap-2">
              <span className="text-lg font-medium tracking-wider">
                OUR SERVICES
              </span>
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <ArrowDownRight className="size-6" />
              </motion.div>
            </div>
            <div className="mt-3 md:text-right">
              <h2 className={`text-5xl uppercase tracking-[-4px]`}>
                Style without Limits
              </h2>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div
        className="absolute block dark:hidden inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e5e5e5 1px, transparent 1px),
        linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <div
        className="absolute hidden dark:block inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #404040 1px, transparent 1px),
        linear-gradient(to bottom, #404040 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </section>
  );
}

