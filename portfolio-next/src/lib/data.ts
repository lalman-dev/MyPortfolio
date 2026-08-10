import {
  GraduationCap,
  Briefcase,
  Mail,
  MapPin,
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

export interface Skill {
  name: string;
}
export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tag: string[];
  liveUrl: string;
  gitHubUrl: string;
  category: string;
  featured?: boolean;
  image: string;
  keyFocus: string;
}

export interface TechItem {
  name: string;
  icon?: IconType | LucideIcon;
  color: string;
}

export interface JourneyStep {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Passion {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SocialLinks {
  name: string;
  icon: IconType;
  url: string;
  color: string;
  bgColor: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
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

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Agent Workflow Visualizer",
    category: "Interactive Systems",
    keyFocus: "State Machines · Real-time UI · Parallel Execution",
    description:
      "A real-time execution panel that makes multi-agent AI workflows legible — tasks spawning in parallel, tools firing, failures retrying mid-flight, and partial outputs streaming in before completion. The core challenge: modeling non-linear agent state in a single reducer-based state machine where every event transition is predictable and the UI never contradicts actual execution order. Mock SSE engine enables complete frontend testing with zero backend dependency.",
    tag: ["React", "TypeScript", "Tailwind CSS", "Vite", "State Machine"],
    liveUrl: "https://agent-visualizer.vercel.app/",
    gitHubUrl: "https://github.com/lalman-dev/agent-visualizer",
    image: agentBg,
    featured: true,
  },
  {
    id: 2,
    title: "Ryvo — Vehicle Booking Platform",
    category: "Full Stack Engineering",
    keyFocus: "Auth · Database · Booking Lifecycle · Theme System",
    description:
      "A full-stack premium vehicle booking platform built with Next.js App Router, MongoDB, and Auth.js v5. Supports Google OAuth and email/password credentials with bcrypt. 28 vehicles across 7 categories with category filter capsules and price range filtering. Complete booking lifecycle — create, confirm, cancel — with server-side ownership verification. Premium dark/light theme system via CSS custom properties with next-themes.",
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
    featured: true,
  },
  {
    id: 3,
    title: "HackerNews Search Portal",
    category: "Frontend Engineering",
    keyFocus: "Rendering Strategy · SSR / CSR · Performance",
    description:
      "A production-grade Next.js application built around deliberate rendering decisions — SSR for content pages (fast first paint, SEO), CSR for search and pagination (eliminates server round trips). Recursive comment thread rendering with correct ARIA at every nesting depth. Lighthouse 98 mobile / 99 desktop, 100/100 Best Practices & SEO. Resilient loading and error states for unreliable external APIs.",
    tag: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SSR",
      "CSR",
      "Framer Motion",
    ],
    liveUrl: "https://hn-news-two.vercel.app/",
    gitHubUrl: "https://github.com/lalman-dev/hn-news",
    image: hnNews_bg,
    featured: true,
  },
  {
    id: 4,
    title: "AI Resume Studio",
    category: "Full Stack Engineering",
    keyFocus: "State Management · Auth · AI Streaming",
    description:
      "A full-stack AI resume builder with streaming OpenAI integration, structured outputs, retry logic, and graceful fallback states. Redux Toolkit manages multi-step editing flows with consistent state across complex user interactions. JWT auth across 12 API routes fixed with a single global Axios interceptor. Debugged three silent stack failures across MongoDB, API routing, and Multer layers.",
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
    featured: true,
  },
];

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
    company: "Abu Dhabi, UAE · Available Immediately",
    description:
      "Based in Abu Dhabi, actively seeking a full-time full-stack or frontend engineering role. Four live production projects, a current AI internship, and immediate availability — no notice period, no relocation delay.",
    icon: Rocket,
    color: "bg-violet-500",
  },
];

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

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Abu Dhabi, UAE",
  },
  {
    icon: Mail,
    label: "Email",
    value: "lalman.dev7@gmail.com",
  },
];
