import {
  GraduationCap,
  Briefcase,
  Mail,
  MapPin,
  Phone,
  User,
  Rocket,
  Code2,
  Server,
  GitBranch,
  Accessibility,
  Zap,
  Layers,
  BrainCircuit,
} from "lucide-react";

import hnNews_bg from "/hackernews.png";
import resume_bg from "/resume.png";
import agentBg from "/agent-visualizer.png";

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

// Interfaces

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
// Data

export const SKILL_CATEGORY: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    description:
      "Building fast, accessible, and scalable user interfaces with modern React, Next.js, and TypeScript.",
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
    title: "Application Architecture",
    icon: Layers,
    description:
      "Designing maintainable application architecture with efficient rendering, predictable state, and reusable patterns.",
    skills: [
      { name: "Server Components" },
      { name: "Client Components" },
      { name: "SSR / CSR" },
      { name: "REST APIs" },
      { name: "State Management" },
      { name: "Routing & Navigation" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    description:
      "Building secure backend services, authentication systems, and scalable REST APIs for modern web applications.",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "JWT Authentication" },
      { name: "API Integration" },
      { name: "CRUD Operations" },
    ],
  },
  {
    title: "Performance & Quality",
    icon: Zap,
    description:
      "Delivering production-ready applications with a focus on performance, accessibility, responsiveness, and reliability.",
    skills: [
      { name: "Accessibility (ARIA)" },
      { name: "Responsive Design" },
      { name: "Code Splitting" },
      { name: "Loading & Error States" },
      { name: "Performance Optimization" },
      { name: "Reusable Components" },
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
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "GitHub", icon: SiGithub, color: "text-gray-800" },
  { name: "Vercel", icon: SiVercel, color: "text-black" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
  { name: "OpenAI API", icon: SiOpenai, color: "text-green-700" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Agent WorkFlow Visualizer",
    category: "Interactive Systems",
    keyFocus: "State Machines · Real-time UI · Parallel Execution",
    description:
      "A real-time execution panel that makes multi-agent AI workflows legible — tasks spawning in parallel, tools firing, failures retrying mid-flight, and partial outputs streaming in before completion. Built for financial analysts watching an AI research agent work through SEC filings and earnings data. The core challenge: modeling non-linear agent state (parallel groups, cancellations, retries) in a single reducer-based state machine where every event transition is predictable and the UI never contradicts actual execution order.",
    tag: ["React", "TypeScript", "Tailwind CSS", "Vite", "State Machine"],
    liveUrl: "https://agent-visualizer.vercel.app/",
    gitHubUrl: "https://github.com/lalman-dev/agent-visualizer",
    image: agentBg,
  },
  {
    id: 2,
    title: "HackerNews Search Portal",
    category: "Frontend Engineering",
    image: hnNews_bg,
    description:
      "A production-grade Next.js application built to explore real-world rendering, performance, and reliability tradeoffs. Uses server-side rendering for fast initial load and SEO, with client-side state for search, pagination, and category filtering. Designed with clear component boundaries, resilient loading and error states, and reusable UI patterns to handle unreliable external APIs.",
    keyFocus: "Rendering Strategy • SSR / CSR",
    tag: [
      "Next.js",
      "React",
      "TailwindCSS",
      "REST API",
      "SSR",
      "CSR",
      "Framer Motion",
    ],
    liveUrl: "https://hn-news-two.vercel.app/",
    gitHubUrl: "https://github.com/lalman-dev/hn-news",
    featured: true,
  },
  {
    id: 3,
    title: "AI Resume Studio",
    category: "Full Stack Engineering",
    image: resume_bg,
    description:
      "A full-stack resume builder with a strong emphasis on frontend architecture, data flow, and real-world form complexity. Built with React, TypeScript, and Redux Toolkit to manage multi-step workflows and predictable state transitions. Includes JWT-based authentication, protected routes, and AI-assisted content generation using OpenAI APIs, with a focus on usability, stability, and production-ready UI behavior.",
    keyFocus: "State Management • Auth • Forms",
    tag: [
      "React",
      "TypeScript",
      "Framer Motion",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
      "OpenAI API",
    ],
    liveUrl: "https://ai-resume-studio-snowy.vercel.app/",
    gitHubUrl: "https://github.com/lalman-dev/AI-Resume-Studio",
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
      "Focused on building frontend applications using Reaind CSS, with emphasis on component structure, state management, and responsive design.",
    icon: GraduationCap,
    color: "bg-pink-500",
  },
  {
    year: "Late 2025",
    title: "Production Application Development",
    company: "Independent / Community",
    description:
      "Designed and built multiple production-style projects, prioritizing accessibility, performance, and maintainable UI architecture while refining a cohesive personal portfolio.",
    icon: User,
    color: "bg-blue-500",
  },
  {
    year: "Jan 2026",
    title: "Professional Contribution",
    company: "Open to opportunities",
    description:
      "Seeking to contribute to real-world products, collaborate with experienced teams, and continue growing through ownership, feedback, and production-scale challenges.",
    icon: Rocket,
    color: "bg-yellow-500",
  },
  {
    year: "Apr 2026",
    title: "Technical Validation",
    company: "Multiple Product Companies",
    description:
      "Successfully progressed through technical assessments and interview rounds for frontend engineering roles, demonstrating production-level React, TypeScript, and modern web development skills across multiple organizations.",
    icon: Rocket,
    color: "bg-orange-500",
  },
  {
    year: "June 2026",
    title: "Frontend Engineer AI Intern",
    company: "FlyRank AI",
    description:
      "Joined FlyRank AI as a Frontend Engineer AI Intern, contributing to AI-powered web applications while collaborating with modern frontend technologies, scalable architectures, and real-world product development workflows.",
    icon: Briefcase,
    color: "bg-emerald-500",
  },
  {
    year: "Present",
    title: "Full Stack Engineering",
    company: "Actively Building & Open to Opportunities",
    description:
      "Expanding expertise beyond frontend engineering by building end-to-end applications with React, Next.js, Node.js, Express, MongoDB, and AI integrations, while seeking opportunities to deliver production-ready software in collaborative engineering teams.",
    icon: Rocket,
    color: "bg-violet-500",
  },
];
export const PASSION: Passion[] = [
  {
    icon: Layers,
    title: "Application Architecture",
    description:
      "Designing scalable frontend and backend systems with clear boundaries, reusable patterns, and maintainable code.",
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    description:
      "Optimizing rendering behavior, minimizing unnecessary re-renders, and ensuring smooth, responsive user interactions.",
  },
  {
    icon: Accessibility,
    title: "Accessibility & Semantics",
    description:
      "Building inclusive interfaces using semantic HTML, ARIA roles, and keyboard-friendly navigation patterns.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Applications",
    description:
      "Building intelligent experiences by integrating LLMs, prompt engineering, structured outputs, and workflow automation.",
  },
  {
    icon: GitBranch,
    title: "Product Thinking",
    description:
      "Building software that solves real user problems through continuous iteration, feedback, and measurable improvements.",
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
    value: "Uttar Pradesh, INDIA",
  },
  {
    icon: Mail,
    label: "Email",
    value: "lalman.dev7@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8858274145",
  },
];
