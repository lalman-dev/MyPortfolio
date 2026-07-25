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
      "Choosing between SSR, CSR, and hybrid rendering deliberately — based on SEO, load time, and interactivity needs, not by default.",
  },
  {
    icon: Layers,
    title: "Component Architecture",
    description:
      "Building reusable, well-bounded components and design systems that scale with a product instead of accumulating one-off code.",
  },
  {
    icon: Workflow,
    title: "State Management",
    description:
      "Predictable, explicit state transitions using Redux Toolkit and React state — avoiding hidden side effects in multi-step flows.",
  },
  {
    icon: ShieldCheck,
    title: "Auth & API Integration",
    description:
      "JWT-based authentication, protected routes, and REST API integration built with clear error and loading states as first-class UI.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description:
      "Semantic HTML, ARIA roles, and keyboard-friendly navigation treated as a requirement, not an afterthought.",
  },
  {
    icon: Sparkles,
    title: "Motion & Interaction",
    description:
      "Purposeful animation with Framer Motion — used to clarify state changes and hierarchy, not to decorate.",
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
      "Multi-agent AI workflows are hard to trust — parallel tasks, retries, and streaming outputs give users no visibility into what the system is actually doing.",
    solution:
      "Built a real-time execution panel on a reducer-based state machine that models parallel task groups, cancellations, and retries as predictable event transitions, so the UI never contradicts actual execution order.",
    impact:
      "Analysts can watch an AI research agent work through SEC filings and earnings data live, with full visibility into what's running, what failed, and what's queued next.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "State Machine"],
    liveUrl: "https://agent-visualizer.vercel.app/",
    gitHubUrl: "https://github.com/lalman-dev/agent-visualizer",
    image: "/agent-visualizer.png",
  },
  {
    id: 2,
    title: "HackerNews Search Portal",
    problem:
      "Needed to prove out production rendering tradeoffs — fast, SEO-friendly initial loads versus rich client interactivity — against an external API that isn't fully reliable.",
    solution:
      "Built on Next.js with server-side rendering for the initial load and SEO, client-side state for search/pagination/filtering, and resilient loading and error states for an unpredictable API.",
    impact:
      "Strong PageSpeed scores while staying fully interactive and stable under inconsistent API responses.",
    tech: ["Next.js", "React", "Tailwind CSS", "REST API", "SSR", "CSR"],
    liveUrl: "https://hn-news-two.vercel.app/",
    gitHubUrl: "https://github.com/lalman-dev/hn-news",
    image: "/hackernews.png",
  },
  {
    id: 3,
    title: "AI Resume Studio",
    problem:
      "Resume builders live and die on multi-step forms — fragile state management here easily causes data loss or an inconsistent UI mid-flow.",
    solution:
      "Full-stack resume builder using React, TypeScript, and Redux Toolkit for predictable multi-step state, JWT-based authentication and protected routes, and OpenAI-powered content generation.",
    impact:
      "A stable, production-ready path from sign-up through AI-assisted resume generation.",
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
    title: "A market building at speed",
    description:
      "The UAE's product and engineering scene is growing fast across fintech, logistics, and government digital services — the kind of environment where frontend architecture decisions compound quickly.",
  },
  {
    title: "Room to grow with a team",
    description:
      "Looking for a team where I can take ownership of real product surfaces, work closely with backend and design, and grow from early-career into a senior engineering track.",
  },
  {
    title: "Ready to relocate now",
    description:
      "No notice period blocking a start date — available for interviews and relocation as soon as a role is confirmed.",
  },
];
