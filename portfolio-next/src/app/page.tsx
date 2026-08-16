import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AvailabilityBanner from "@/components/uae/AvailabilityBanner";
import Skills from "@/components/Skills";
import ArchitecturePrinciples from "@/components/ArchitecturalPrinciples";
import Projects from "@/components/Projects";
import WhyUaeAndRecruiterCard from "@/components/uae/WhyUaeAndRecruiterCard";
import AboutMe from "@/components/AboutMe";
import UaeFinalCta from "@/components/uae/UaeFinalCta";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const title = "Lalman — Frontend Engineer Available for UAE Relocation";
const description =
  "Frontend-focused Full Stack Engineer (React, Next.js, TypeScript, Node.js) available for immediate relocation to Dubai, Abu Dhabi, Sharjah, and across the UAE. Open to full-time roles with visa sponsorship.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Frontend Engineer UAE",
    "React Developer Dubai",
    "Next.js Developer UAE",
    "Frontend Developer Abu Dhabi",
    "Full Stack Engineer based in Abu Dhabi",
    "Frontend-focused Fullstack software developer",
  ],
  alternates: {
    canonical: "https://lalman.dev",
  },
  openGraph: {
    title,
    description,
    url: "https://lalman.dev",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AvailabilityBanner />
      <Skills />
      <ArchitecturePrinciples />
      <Projects />
      <WhyUaeAndRecruiterCard />
      <AboutMe />
      <UaeFinalCta />
      <ContactSection />
      <Footer />
    </>
  );
}
