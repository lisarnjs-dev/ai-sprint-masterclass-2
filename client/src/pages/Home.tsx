/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * Home: All sections assembled, grain overlay, scroll reveal
 * Color: #000000 bg / #FFFFFF text / #6e6e73 muted
 * Typography: Playfair Display + DM Sans + JetBrains Mono
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import CurriculumSection from "@/components/sections/CurriculumSection";
import InstructorSection from "@/components/sections/InstructorSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import ApplySection from "@/components/sections/ApplySection";
import { BeamsBackground } from "@/components/BeamsBackground";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#000", color: "#fff" }}
    >
      {/* Grain texture overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <HeroSection />
        <BeamsBackground className="py-32 md:py-48">
          <div className="container">
            <StatsSection />
          </div>
        </BeamsBackground>
        <BeamsBackground className="py-32 md:py-48" intensity="subtle">
          <div className="container">
            <AboutSection />
          </div>
        </BeamsBackground>
        <CurriculumSection />
        <BeamsBackground className="py-32 md:py-48" intensity="medium">
          <div className="container">
            <InstructorSection />
          </div>
        </BeamsBackground>
        <BeamsBackground className="py-32 md:py-48" intensity="subtle">
          <div className="container">
            <TestimonialsSection />
          </div>
        </BeamsBackground>
        <BeamsBackground className="py-32 md:py-48" intensity="medium">
          <div className="container">
            <FaqSection />
          </div>
        </BeamsBackground>
        <ApplySection />
      </main>

      <Footer />
      <FloatingCta />
    </div>
  );
}
