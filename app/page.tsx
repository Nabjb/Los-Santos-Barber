import { HeroSection04 } from "@/components/ui/hero-04";
import { ServicesTimeline } from "@/components/services-timeline";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ShowcaseSection } from "@/components/showcase-section";
import { BarberSection } from "@/components/barber-section";
import { LocationSection } from "@/components/location-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection04 />
      <ServicesTimeline />
      <TestimonialsSection />
      <ShowcaseSection />
      <BarberSection />
      <LocationSection />
      <Footer />
    </main>
  );
}

