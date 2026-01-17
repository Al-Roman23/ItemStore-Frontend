// Home Page - Landing Page With All 7 Sections

import {
  HeroSection,
  FeaturesSection,
  CategoriesSection,
  StatsSection,
  TestimonialsSection,
  NewsletterSection,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero Banner */}
      <HeroSection />

      {/* Section 2: Features */}
      <FeaturesSection />

      {/* Section 3: Categories */}
      <CategoriesSection />

      {/* Section 4: Stats/Numbers */}
      <StatsSection />

      {/* Section 5: Testimonials */}
      <TestimonialsSection />

      {/* Section 6: CTA */}
      <CTASection />

      {/* Section 7: Newsletter */}
      <NewsletterSection />
    </>
  );
}
