import {
  Zap,
  Layers,
  Accessibility,
  ShieldCheck,
  Workflow,
  Sparkles,
  MapPin,
  Briefcase,
  Clock,
  Plane,
  FileCheck,
  Languages,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Strength {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ENGINEERING_STRENGTHS: Strength[] = [
  {
    icon: Zap,
    title: "Rendering & Performance",
    description:
      "Rendering strategy — SSR, CSR, or hybrid — selected deliberately against SEO, load-time, and interactivity requirements rather than framework defaults.",
  },
  {
    icon: Layers,
    title: "Component Architecture",
    description:
      "Component and design-system boundaries structured for reuse and long-term maintainability, avoiding one-off implementations that accumulate technical debt.",
  },
  {
    icon: Workflow,
    title: "State Management",
    description:
      "Explicit, predictable state transitions across multi-step flows using Redux Toolkit and React state, engineered to eliminate hidden side effects.",
  },
  {
    icon: ShieldCheck,
    title: "Auth & API Integration",
    description:
      "JWT-based authentication, protected routing, and REST API integration, with error and loading states designed as core UI requirements rather than exceptions.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description:
      "Semantic HTML, ARIA roles, and keyboard navigation implemented as baseline requirements for every interface, not optional polish.",
  },
  {
    icon: Sparkles,
    title: "Motion & Interaction",
    description:
      "Interface motion built with Framer Motion to reinforce state changes and hierarchy — applied with restraint, in service of clarity rather than decoration.",
  },
];

export interface UaeProject {
  id: number;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  liveUrl: string;
  gitHubUrl: string;
  image: string;
}

export const UAE_PROJECTS: UaeProject[] = [
  {
    id: 1,
    title: "AI Agent Workflow Visualizer",
    problem:
      "Multi-agent AI workflows are difficult to reason about in production: parallel task execution, retries, and streaming outputs leave users with no reliable visibility into system state.",
    solution:
      "Engineered a real-time execution panel on a reducer-based state machine, modeling parallel task groups, cancellations, and retries as predictable event transitions so the UI remains consistent with actual execution order at every step.",
    impact:
      "Enables analysts to observe an AI research agent processing SEC filings and earnings data in real time, with complete visibility into running, failed, and queued tasks.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "State Machine"],
    liveUrl: "https://agent-visualizer.vercel.app/",
    gitHubUrl: "https://github.com/lalman-dev/agent-visualizer",
    image: "/agent-visualizer.png",
  },
  {
    id: 2,
    title: "HackerNews Search Portal",
    problem:
      "Required a production-grade evaluation of rendering strategy — balancing fast, SEO-optimized initial loads against rich client interactivity — against a third-party API with inconsistent reliability.",
    solution:
      "Architected on Next.js with server-side rendering for initial load and SEO, client-side state for search, pagination, and filtering, and resilient loading and error handling to absorb API instability.",
    impact:
      "Delivers strong PageSpeed performance while remaining fully interactive and stable under inconsistent API conditions.",
    tech: ["Next.js", "React", "Tailwind CSS", "REST API", "SSR", "CSR"],
    liveUrl: "https://hn-news-two.vercel.app/",
    gitHubUrl: "https://github.com/lalman-dev/hn-news",
    image: "/hackernews.png",
  },
  {
    id: 3,
    title: "AI Resume Studio",
    problem:
      "Multi-step form workflows are a common failure point in production applications — fragile state management leads directly to data loss and inconsistent UI states.",
    solution:
      "Built a full-stack resume builder using React, TypeScript, and Redux Toolkit for predictable multi-step state management, backed by JWT-based authentication, protected routes, and OpenAI-powered content generation.",
    impact:
      "Delivers a stable, production-ready workflow from sign-up through AI-assisted resume generation.",
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
      "OpenAI API",
    ],
    liveUrl: "https://ai-resume-studio-snowy.vercel.app/",
    gitHubUrl: "https://github.com/lalman-dev/AI-Resume-Studio",
    image: "/resume.png",
  },
];

export const AVAILABILITY_TAGS = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Hybrid",
  "Remote",
  "On-site",
  "Visa Sponsorship Needed",
  "Immediate Relocation",
];

export interface RecruiterField {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const RECRUITER_INFO: RecruiterField[] = [
  { icon: MapPin, label: "Current Location", value: "India" },
  { icon: Plane, label: "Preferred Location", value: "United Arab Emirates" },
  { icon: Briefcase, label: "Employment Type", value: "Full-Time" },
  { icon: Clock, label: "Availability", value: "Immediate" },
  { icon: Plane, label: "Relocation", value: "Available" },
  { icon: FileCheck, label: "Visa", value: "Employment Visa Required" },
  { icon: Languages, label: "Languages", value: "English, Hindi" },
];

// TODO: replace with a real number before publishing — used for the
// "Call" / WhatsApp CTAs on the recruiter card and final CTA section.
export const UAE_PHONE_DISPLAY = "+971 XX XXX XXXX";
export const UAE_WHATSAPP_URL = "https://wa.me/971XXXXXXXXX";

export const WHY_UAE_POINTS = [
  {
    title: "A market built for engineering impact",
    description:
      "The UAE's product and technology sector is expanding rapidly across fintech, logistics, and government digital services — an environment where sound frontend architecture decisions compound in value.",
  },
  {
    title: "Positioned for ownership and growth",
    description:
      "Seeking a team where I can take direct ownership of product surfaces, collaborate closely with backend and design functions, and progress toward a senior engineering track.",
  },
  {
    title: "Available without delay",
    description:
      "No notice period constraints — available for interviews and relocation as soon as a role is confirmed.",
  },
];
