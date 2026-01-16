import {
  GraduationCap,
  Briefcase,
  Mail,
  MapPin,
  Phone,
  Users,
  User,
  Rocket,
  Code2,
  Server,
  Wrench,
  GitBranch,
  Accessibility,
  Zap,
  Layers,
} from "lucide-react";

import hnNews_bg from "/hackernews.png";
import netflix_bg from "/netflix.png";
import resume_bg from "/resume.png";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiCss3,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNpm,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscRocket } from "react-icons/vsc";

// -------------------- Interfaces --------------------

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
// -------------------- Data --------------------

export const SKILL_CATEGORY: SkillCategory[] = [
  {
    title: "Frontend Architecture",
    icon: Code2,
    description:
      "Designing and building scalable, accessible, and maintainable UI systems using modern React and Next.js.",
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
    title: "State, Data & Rendering",
    icon: Server,
    description:
      "Managing async data, rendering strategies, and predictable client-side state in real-world applications.",
    skills: [
      { name: "Server Components" },
      { name: "Client Components" },
      { name: "SSR / CSR" },
      { name: "REST APIs" },
      { name: "Pagination & Search State" },
    ],
  },
  {
    title: "Performance, UX & Quality",
    icon: Users,
    description:
      "Focused on delivering fast, resilient, and user-friendly interfaces that hold up in production.",
    skills: [
      { name: "Accessibility (ARIA)" },
      { name: "Responsive Design" },
      { name: "Loading & Error States" },
      { name: "Code Splitting" },
      { name: "Reusable Component Patterns" },
    ],
  },
  {
    title: "Backend Exposure",
    icon: Wrench,
    description:
      "Hands-on experience integrating frontend systems with backend services and authentication flows.",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "JWT Authentication" },
      { name: "API Integration" },
    ],
  },
];

export const TECH_STACK: TechItem[] = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black/70" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "Framer Motion", icon: SiFramer, color: "text-slate-700" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "Redux Toolkit", icon: SiRedux, color: "text-violet-600" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
  { name: "NPM", icon: SiNpm, color: "text-red-700" },
  { name: "Vite", icon: VscRocket, color: "text-purple-500" },
];
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "HackerNews Search Portal",
    image: hnNews_bg,
    description:
      "A production-style Hacker News client built with Next.js App Router, focusing on rendering strategy and predictable UI behavior. Uses server-side rendering for fast initial load and SEO, with client-side state for search, pagination, and category filtering. Designed with clear component boundaries, resilient loading and error states, and reusable UI patterns to handle unreliable external APIs.",
    keyFocus: "Rendering Strategy • SSR / CSR",
    tag: ["Next.js", "React", "TailwindCSS", "REST API", "SSR", "CSR" , "Framer Motion"],
    liveUrl: "https://hn-news-two.vercel.app/",
    gitHubUrl: "https://github.com/lalman-dev/hn-news",
    category: "Frontend",
    featured: true,
  },
  {
    id: 2,
    title: "AI Resume Studio",
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
    category: "Full-Stack",
    featured: true,
  },
  {
    id: 3,
    title: "Netflix UI Clone",
    image: netflix_bg,
    description:
      "A responsive, API-driven streaming UI inspired by Netflix, built to practice scalable component design and real data rendering. Integrates the TMDb API to fetch and display dynamic content, with attention to responsive layouts, reusable components, and smooth UI interactions across screen sizes.",
    keyFocus: "Responsive UI • Component Design",
    tag: ["React", "TailwindCSS", "TMDb API", "Responsive Design"],
    liveUrl: "https://netfliaxapp.netlify.app/",
    gitHubUrl: "https://github.com/lalman-dev/NetflixClone-react-tailwind",
    category: "Frontend",
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
    title: "Frontend Engineering Focus",
    company: "Self-directed",
    description:
      "Focused on building frontend applications using React, TypeScript, and Tailwind CSS, with emphasis on component structure, state management, and responsive design.",
    icon: GraduationCap,
    color: "bg-pink-500",
  },
  {
    year: "Late 2025",
    title: "Production-Oriented Projects",
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
];
export const PASSION: Passion[] = [
  {
    icon: Layers,
    title: "Frontend Architecture",
    description:
      "Designing scalable component structures, clear data flow, and predictable state boundaries that remain maintainable as applications grow.",
  },
  {
    icon: Zap,
    title: "Performance & UX",
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
    icon: GitBranch,
    title: "Iterative Development",
    description:
      "Shipping early, debugging real issues, and refining implementations through feedback and continuous improvement.",
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
