import Header from "@/components/header"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import TimelineSection from "@/components/sections/timeline-section"
import RouteSection from "@/components/sections/route-section"
import ContactSection from "@/components/sections/contact-section"
import GallerySection from "@/components/sections/gallery-section"
import Footer from "@/components/footer"
import LandingSection from "@/components/sections/landing-section"
import FlowSection from "@/components/sections/flow-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LandingSection />
      {/* {/* <AboutSection /> */}
      {/* <TimelineSection />  */}
      <FlowSection />
      {/* <RouteSection />
      <ContactSection /> */}
      <Footer />
    </div>
  )
}
