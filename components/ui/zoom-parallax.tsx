"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

interface Image {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect max 7 images */
  images: Image[];
}

// Detect Safari browser
function isSafari(): boolean {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent.toLowerCase();
  const isSafari = /safari/.test(ua) && !/chrome/.test(ua) && !/chromium/.test(ua);
  const isIOS = /iphone|ipad|ipod/.test(ua);
  return isSafari || isIOS;
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement>(null);
  const [isSafariBrowser, setIsSafariBrowser] = useState(false);

  useEffect(() => {
    setIsSafariBrowser(isSafari());
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Reduced scale values for Safari to improve performance
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, isSafariBrowser ? 2.5 : 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, isSafariBrowser ? 3 : 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, isSafariBrowser ? 3.5 : 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, isSafariBrowser ? 4 : 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, isSafariBrowser ? 4.5 : 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div 
        className="sticky top-0 h-screen overflow-hidden"
        style={{
          // Safari-specific optimizations
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
          willChange: "transform",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
      >
        {images.map(({ src, alt }, index) => {
          const scale = scales[index % scales.length];

          return (
            <motion.div
              key={index}
              style={{ 
                scale,
                // Force hardware acceleration for Safari
                WebkitTransform: "translateZ(0)",
                transform: "translateZ(0)",
                willChange: "transform",
              }}
              className={`absolute top-0 flex h-full w-full items-center justify-center ${
                index === 1
                  ? "[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]"
                  : ""
              } ${
                index === 2
                  ? "[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]"
                  : ""
              } ${
                index === 3
                  ? "[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]"
                  : ""
              } ${
                index === 4
                  ? "[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]"
                  : ""
              } ${
                index === 5
                  ? "[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]"
                  : ""
              } ${
                index === 6
                  ? "[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]"
                  : ""
              } `}
            >
              <div 
                className="relative h-[25vh] w-[25vw] rounded-2xl border border-border shadow-lg overflow-hidden bg-secondary"
                style={{
                  // Additional Safari optimizations
                  WebkitTransform: "translateZ(0)",
                  transform: "translateZ(0)",
                  willChange: "transform",
                }}
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={alt || `Parallax image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover"
                  priority={index === 0}
                  style={{
                    // Force GPU acceleration for images
                    WebkitTransform: "translateZ(0)",
                    transform: "translateZ(0)",
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

