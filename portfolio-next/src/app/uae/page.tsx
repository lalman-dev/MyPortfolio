import type { Metadata } from "next";
import UaeNav from "@/components/uae/UaeNav";
import UaeHero from "@/components/uae/UaeHero";
import AvailabilityBanner from "@/components/uae/AvailabilityBanner";
import ProfessionalSummary from "@/components/uae/ProfessionalSummary";
import EngineeringStrengths from "@/components/uae/EngineeringStrengths";
import UaeTechStack from "@/components/uae/UaeTechStack";
import UaeProjects from "@/components/uae/UaeProjects";
import WhyUaeAndRecruiterCard from "@/components/uae/WhyUaeAndRecruiterCard";
import UaeFinalCta from "@/components/uae/UaeFinalCta";
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
    "Full Stack Engineer UAE relocation",
    "Visa sponsorship frontend developer",
  ],
  alternates: {
    canonical: "https://lalman.dev/uae",
  },
  openGraph: {
    title,
    description,
    url: "https://lalman.dev/uae",
    images: ["/og-image.png"],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function UaePage() {
  return (
    <>
      <UaeNav />
      <main>
        <UaeHero />
        <AvailabilityBanner />
        <ProfessionalSummary />
        <EngineeringStrengths />
        <UaeTechStack />
        <UaeProjects />
        <WhyUaeAndRecruiterCard />
        <UaeFinalCta />
      </main>
      <Footer />
    </>
  );
}
