"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { cn } from "@/lib/utils";

const testimonials = [
  {
    tempId: 0,
    testimonial: "Greatest barber in town.",
    by: "Βασίλης Καλαπαχτιερ",
    rating: 5,
  },
  {
    tempId: 1,
    testimonial: "Best burber ever!!!",
    by: "Savvas Kalaitsides",
    rating: 5,
  },
  {
    tempId: 2,
    testimonial: "The best barber in town.",
    by: "Dimos Garage",
    rating: 5,
  },
  {
    tempId: 3,
    testimonial:
      "The best barber, not only good with the haircuts but also amazing with a beard's care.",
    by: "Tzio Mata",
    rating: 5,
  },
  {
    tempId: 4,
    testimonial: "The best in Cyprus 💪🏽🇨🇾",
    by: "Xousein 11",
    rating: 5,
  },
  {
    tempId: 5,
    testimonial: "10/10",
    by: "Moustafa Imbrahim",
    rating: 5,
  },
  {
    tempId: 6,
    testimonial:
      "Excellent stylist and a great guy! Both for adults and kids. We have a very happy boy today!",
    by: "Gareth Griffiths",
    rating: 5,
  },
  {
    tempId: 7,
    testimonial: "The besttt",
    by: "Giorgios Pastou",
    rating: 5,
  },
  {
    tempId: 8,
    testimonial: "The best barbershop in Nicosia",
    by: "Sokratis Kalogeridis",
    rating: 5,
  },
  {
    tempId: 9,
    testimonial:
      "Los Santos is hands down one of the best barbershops in the area! The service is top-notch, and the barbers are highly skilled in both classic and modern styles. The prices are in line with other local shops, but the quality here really stands out. The atmosphere is welcoming, and the attention to detail is impressive. I highly recommend booking a slot in advance, as they can get busy.",
    by: "Julien Catinis",
    rating: 4,
  },
  {
    tempId: 10,
    testimonial: "(No written comment)",
    by: "David Torosyan",
    rating: 5,
  },
  {
    tempId: 11,
    testimonial: "(No written comment)",
    by: "Axmet Ibrahim",
    rating: 5,
  },
];

const getInitials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

interface TestimonialCardProps {
  position: number;
  testimonial: (typeof testimonials)[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out rounded-xl",
        isCenter
          ? "z-10 bg-primary text-primary-foreground border-primary shadow-lg"
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath:
          "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)",
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0px 8px 0px 4px hsl(var(--border))"
          : "0px 0px 0px 0px transparent",
      }}
    >
      <div
        className={cn(
          "mb-4 h-14 w-14 rounded-full bg-muted flex items-center justify-center text-sm font-semibold uppercase",
          isCenter ? "ring-2 ring-primary/70 text-foreground" : "ring-1 ring-border text-foreground"
        )}
        aria-hidden
      >
        {getInitials(testimonial.by)}
      </div>

      <div className="flex items-center gap-1 mb-3" aria-label={`${testimonial.rating} star rating`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-border"
            )}
            aria-hidden
          />
        ))}
      </div>

      <h3
        className={cn(
          "text-base sm:text-xl font-medium leading-relaxed",
          isCenter ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {testimonial.testimonial}
      </h3>

      <p
        className={cn(
          "absolute bottom-6 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i -= 1) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i += 1) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 300);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-secondary/40 border border-border rounded-2xl"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded-xl",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded-xl",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

