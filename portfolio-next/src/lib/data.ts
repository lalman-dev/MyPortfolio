import {
  GraduationCap,
  Briefcase,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Code2,
  Server,
  GitBranch,
  Accessibility,
  Zap,
  Layers,
  BrainCircuit,
  Bot,
  ShieldCheck,
  Plane,
  Clock,
  FileCheck,
  Languages,
} from "lucide-react";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostman,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const hnNews_bg = "/hackernews.png";
const resume_bg = "/resume.png";
const agentBg = "/agent-visualizer.png";
const ryvoBg = "/ryvo.png";

// ---------- Skills ----------

export interface Skill {
  name: string;
}
export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: Skill[];
}

export const SKILL_CATEGORY: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    description:
      "Building fast, accessible, and scalable user interfaces with React, Next.js App Router, and TypeScript — with deliberate SSR/CSR decisions, Framer Motion animations, and component systems built for long-term maintainability.",
    skills: [
      { name: "React" },
      { name: "Next.js (App Router)" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Redux Toolkit" },
    ],
  },
  {
    title: "Full-Stack & API",
    icon: Server,
    description:
      "Building secure backend services, authentication systems, and REST APIs — from JWT auth and protected routes to MongoDB schema design and full booking lifecycle management.",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "NestJS" },
      { name: "MongoDB & Mongoose" },
      { name: "Auth.js v5" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Auth & Security",
    icon: ShieldCheck,
    description:
      "Implementing production-grade authentication with Google OAuth, email/password credentials, bcrypt hashing, JWT sessions, and ownership-verified API routes.",
    skills: [
      { name: "Auth.js v5" },
      { name: "Google OAuth" },
      { name: "JWT Authentication" },
      { name: "bcrypt" },
      { name: "Protected Routes" },
      { name: "Session Management" },
    ],
  },
  {
    title: "AI Integration",
    icon: Bot,
    description:
      "Integrating OpenAI and Anthropic APIs into production interfaces — streaming responses, structured outputs, retry logic, fallback states, and real-time agent execution visualization.",
    skills: [
      { name: "OpenAI API" },
      { name: "Anthropic API" },
      { name: "Streaming Responses" },
      { name: "Structured Outputs" },
      { name: "Retry Logic" },
      { name: "Agentic Interfaces" },
    ],
  },
  {
    title: "Application Architecture",
    icon: Layers,
    description:
      "Designing maintainable application architecture with efficient rendering strategy, predictable state machines, reusable patterns, and clear server/client component boundaries.",
    skills: [
      { name: "Server Components" },
      { name: "Client Components" },
      { name: "SSR / CSR / Hybrid" },
      { name: "State Machines" },
      { name: "Route Groups" },
      { name: "Monorepo (Turborepo)" },
    ],
  },
  {
    title: "Performance & Quality",
    icon: Zap,
    description:
      "Delivering production-ready applications optimized for Core Web Vitals, accessibility, and reliability — with skeleton loaders, error boundaries, and graceful empty states as baseline requirements.",
    skills: [
      { name: "Core Web Vitals" },
      { name: "Lighthouse Optimization" },
      { name: "Accessibility (ARIA)" },
      { name: "Responsive Design" },
      { name: "Loading & Error States" },
      { name: "Performance Optimization" },
    ],
  },
];

export interface TechItem {
  name: string;
  icon?: IconType | LucideIcon;
  color: string;
}

export const TECH_STACK: TechItem[] = [
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black/70" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-700" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "Redux Toolkit", icon: SiRedux, color: "text-violet-600" },
  { name: "Framer Motion", icon: SiFramer, color: "text-slate-700" },
  { name: "OpenAI API", icon: SiOpenai, color: "text-green-700" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "GitHub", icon: SiGithub, color: "text-gray-800" },
  { name: "Vercel", icon: SiVercel, color: "text-black" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
];

// ---------- Projects ----------

export interface Project {
  id: number;
  title: string;
  category: string;
  keyFocus: string;
  problem: string;
  solution: string;
  impact: string;
  tag: string[];
  liveUrl: string;
  gitHubUrl: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Agent Workflow Visualizer",
    category: "Interactive Systems",
    keyFocus: "State Machines · Real-time UI · Parallel Execution",
    problem:
      "Multi-agent AI workflows are difficult to reason about in production: parallel task execution, retries, and streaming outputs leave users with no reliable visibility into system state.",
    solution:
      "Engineered a real-time execution panel on a reducer-based state machine, modeling parallel task groups, cancellations, and retries as predictable event transitions so the UI remains consistent with actual execution order at every step.",
    impact:
      "Enables analysts to observe an AI research agent processing SEC filings and earnings data in real time, with complete visibility into running, failed, and queued tasks.",
    tag: ["React", "TypeScript", "Tailwind CSS", "Vite", "State Machine"],
    liveUrl: "https://agent-visualizer.vercel.app/",
    gitHubUrl: "https://github.com/lalman-dev/agent-visualizer",
    image: agentBg,
  },
  {
    id: 2,
    title: "Ryvo — Vehicle Booking Platform",
    category: "Full Stack Engineering",
    keyFocus: "Auth · Database · Booking Lifecycle · Theme System",
    problem:
      "Vehicle booking demos commonly lack production-grade fundamentals — fake auth, no real database persistence, no booking lifecycle, and no consideration for multi-provider authentication flows.",
    solution:
      "Built a full-stack booking platform on Next.js App Router with MongoDB, Auth.js v5 supporting Google OAuth and email/password credentials with bcrypt, 28 vehicles across 7 categories, booking creation and cancellation with server-side ownership verification, and a premium dark/light theme system via CSS custom properties.",
    impact:
      "Complete production flow — browse → authenticate → book → cancel — deployed on Vercel. Architecture decisions cover database schema design, JWT session strategy, server vs client component boundaries, and API route security.",
    tag: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Auth.js v5",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://ryvo-lux.vercel.app/",
    gitHubUrl: "https://github.com/lalman-dev/ryvo",
    image: ryvoBg,
  },
  {
    id: 3,
    title: "HackerNews Search Portal",
    category: "Frontend Engineering",
    keyFocus: "Rendering Strategy · SSR / CSR · Performance",
    problem:
      "Required a production-grade evaluation of rendering strategy — balancing fast, SEO-optimized initial loads against rich client interactivity — against a third-party API with inconsistent reliability.",
    solution:
      "Architected on Next.js with server-side rendering for initial load and SEO, client-side state for search, pagination, and filtering, and resilient loading and error handling to absorb API instability.",
    impact:
      "Lighthouse 98 mobile / 99 desktop, 100/100 Best Practices & SEO. Fully interactive and stable under inconsistent API conditions.",
    tag: ["Next.js", "React", "Tailwind CSS", "REST API", "SSR", "CSR"],
    liveUrl: "https://hn-news-two.vercel.app/",
    gitHubUrl: "https://github.com/lalman-dev/hn-news",
    image: hnNews_bg,
  },
  {
    id: 4,
    title: "AI Resume Studio",
    category: "Full Stack Engineering",
    keyFocus: "State Management · Auth · AI Streaming",
    problem:
      "Multi-step form workflows are a common failure point in production applications — fragile state management leads directly to data loss and inconsistent UI states.",
    solution:
      "Built a full-stack resume builder using React, TypeScript, and Redux Toolkit for predictable multi-step state management, backed by JWT-based authentication, protected routes, and OpenAI-powered content generation with streaming responses and retry logic.",
    impact:
      "Delivers a stable, production-ready workflow from sign-up through AI-assisted resume generation. Fixed a JWT inconsistency across 12 API routes with a single global Axios interceptor.",
    tag: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
      "OpenAI API",
    ],
    liveUrl: "https://ai-resume-studio-snowy.vercel.app/",
    gitHubUrl: "https://github.com/lalman-dev/AI-Resume-Studio",
    image: resume_bg,
  },
];

export interface JourneyStep {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    year: "Feb 2025",
    title: "Foundation in Web Development",
    company: "Self-directed",
    description:
      "Established a strong foundation in HTML, CSS, and core web fundamentals, developing an early understanding of how structure, semantics, and layout impact user experience.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "May 2025",
    title: "Modern Frontend Engineering",
    company: "Self-directed",
    description:
      "Built production-style applications with React, TypeScript, and Tailwind CSS — focusing on component architecture, state management, and rendering strategy decisions.",
    icon: GraduationCap,
    color: "bg-pink-500",
  },
  {
    year: "Late 2025",
    title: "Full-Stack Development",
    company: "Independent",
    description:
      "Extended into full-stack development — Node.js, Express, MongoDB, JWT auth, REST APIs. Built and deployed AI-integrated applications with OpenAI and Anthropic APIs.",
    icon: Server,
    color: "bg-blue-500",
  },
  {
    year: "Apr 2026",
    title: "Technical Validation",
    company: "Multiple Product Companies",
    description:
      "Progressed through technical assessments and interview rounds at multiple product companies, demonstrating production-level React, TypeScript, and full-stack skills.",
    icon: Rocket,
    color: "bg-orange-500",
  },
  {
    year: "June 2026",
    title: "Frontend AI Engineer Intern",
    company: "FlyRank AI",
    description:
      "Building AI-powered web features using React, Next.js, TypeScript, and Tailwind CSS. Integrating REST APIs and LLM services, shipping streaming interfaces and structured AI output handling for a production SaaS product.",
    icon: Briefcase,
    color: "bg-emerald-500",
  },
  {
    year: "Aug 2026",
    title: "Ryvo — Full-Stack Platform Shipped",
    company: "Independent",
    description:
      "Designed and shipped Ryvo — a full-stack vehicle booking platform with dual auth (Google OAuth + email/password), MongoDB, booking lifecycle management, and a premium dark/light theme system. Deployed on Vercel.",
    icon: Rocket,
    color: "bg-indigo-500",
  },
  {
    year: "Present",
    title: "Seeking First Full-Time Role",
    company: "Dubai, UAE · Available Immediately",
    description:
      "Based in Dubai, actively seeking a full-time full-stack or frontend engineering role. Four live production projects, a current AI internship, and immediate availability — no notice period, no relocation delay.",
    icon: Rocket,
    color: "bg-violet-500",
  },
];

export interface Passion {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PASSION: Passion[] = [
  {
    icon: Layers,
    title: "Application Architecture",
    description:
      "Designing scalable full-stack systems with clear server/client boundaries, reusable patterns, and maintainable code that teams can extend.",
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    description:
      "Deliberate rendering strategy — SSR, CSR, or hybrid — selected against real product requirements. Lighthouse scores as a baseline, not a goal.",
  },
  {
    icon: Accessibility,
    title: "Accessibility & Semantics",
    description:
      "Semantic HTML, ARIA roles, and keyboard navigation as baseline requirements for every interface — not optional polish.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Applications",
    description:
      "Building intelligent interfaces with OpenAI and Anthropic APIs — streaming responses, structured outputs, retry logic, and real-time agent execution visualization.",
  },
  {
    icon: ShieldCheck,
    title: "Auth & Security",
    description:
      "Production-grade authentication — Google OAuth, email/password credentials, bcrypt hashing, JWT sessions, and ownership-verified API routes.",
  },
  {
    icon: GitBranch,
    title: "Product Thinking",
    description:
      "Building software that solves real user problems. Architecture decisions made against product requirements, not framework defaults.",
  },
];

export interface WhyUaePoint {
  title: string;
  description: string;
}

export const WHY_UAE_POINTS: WhyUaePoint[] = [
  {
    title: "A market built for engineering impact",
    description:
      "The UAE's product and technology sector is expanding rapidly across fintech, logistics, and government digital services — an environment where sound full-stack architecture decisions compound in value.",
  },
  {
    title: "Positioned for ownership and growth",
    description:
      "Seeking a team where I can take direct ownership of product surfaces end to end — interface, API, database — collaborate closely with backend and design functions, and progress toward a senior engineering track.",
  },
  {
    title: "Available without delay",
    description:
      "Based in Dubai — no notice period, no relocation delay. Available for in-person interviews across Dubai, Abu Dhabi or UAE from day one.",
  },
  {
    title: "Connected to the market",
    description:
      "Actively networking at UAE tech meetups and startup events including Hub71 Abu Dhabi and AI Tinkerers and other places in Dubai — building local relationships alongside the job search.",
  },
];

export interface RecruiterField {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const RECRUITER_INFO: RecruiterField[] = [
  { icon: MapPin, label: "Current Location", value: "Dubai, UAE" },
  {
    icon: Plane,
    label: "Preferred Location",
    value: "Dubai · Abu Dhabi · Remote",
  },
  { icon: Briefcase, label: "Employment Type", value: "Full-Time" },
  { icon: Clock, label: "Availability", value: "Immediate" },
  { icon: Plane, label: "Relocation", value: "Based in UAE" },
  { icon: FileCheck, label: "Visa", value: "Currently on Visit Visa" },
  { icon: Languages, label: "Languages", value: "English, Hindi" },
];

export const UAE_PHONE_DISPLAY = "+971 56 588 7134";
export const UAE_WHATSAPP_URL = "https://wa.me/971565887134";

export const AVAILABILITY_TAGS = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Hybrid",
  "Remote",
  "On-site",
  "Employment Visa Required",
  "Available Immediately",
];

// ---------- Contact / Social ----------

export interface SocialLinks {
  name: string;
  icon: IconType;
  url: string;
  color: string;
  bgColor: string;
}

export const SOCIAL_LINKS: SocialLinks[] = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/lalman-dev/",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/lalman-dev/",
    color: "hover:text-blue-500",
    bgColor: "hover:bg-blue-100",
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    url: "https://x.com/imchaudhary2",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-100",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:lalman.dev7@gmail.com",
    color: "hover:text-red-500",
    bgColor: "hover:bg-red-100",
  },
];

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const CONTACT_INFO: ContactInfo[] = [
  { icon: MapPin, label: "Location", value: "Dubai, UAE" },
  { icon: Mail, label: "Email", value: "lalman.dev7@gmail.com" },
  { icon: Phone, label: "Phone", value: UAE_PHONE_DISPLAY },
];
