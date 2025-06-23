import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProductsSection } from "@/components/products-section"
import { ContactSection } from "@/components/contact-section"
import { ThreeBackground } from "@/components/three-background"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <ThreeBackground />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <ContactSection />
      </div>
    </main>
  )
}
