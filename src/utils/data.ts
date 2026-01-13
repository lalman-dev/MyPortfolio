import {
  GraduationCap,
  Briefcase,
  Heart,
  Coffee,
  BookOpen,
  Mail,
  MapPin,
  Phone,
  Users,
  User,
  Rocket,
  Code2,
  Server,
  Wrench,
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
  { name: "Redux Toolkit", icon: SiRedux, color: "text-violet-600" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
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
    tag: ["Next.js", "React", "TailwindCSS", "REST API", "SSR", "CSR"],
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
    year: "Feb-2025",
    title: "Started exploring coding journey",
    company: "self-taught",
    description:
      "Experimented with HTML out of curiosity and quickly discovered a passion for building on the web, inspiring a decision to pursue coding full-time.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "May-2025",
    title: "Frontend development journey",
    company: "self-taught",
    description:
      "Transitioned into structured learning with React, TypeScript, and TailwindCSS, focusing on creating responsive interfaces and modern web applications.",
    icon: GraduationCap,
    color: "bg-pink-500",
  },
  {
    year: "Late-2025",
    title: "Projects & Portfolio",
    company: "community / self-taught",
    description:
      "Built multiple projects, gained experience in problem-solving, and refined a personal portfolio emphasizing accessibility, recruiter appeal, and cohesive branding.",
    icon: User,
    color: "bg-blue-500",
  },
  {
    year: "Future",
    title: "Professional Opportunities",
    company: "aspiring",
    description:
      "Excited to apply my skills in real-world projects, join a team, and continue crafting meaningful digital experiences.",
    icon: Rocket,
    color: "bg-yellow-500",
  },
];

export const PASSION: Passion[] = [
  {
    icon: Heart,
    title: "User Experience",
    description:
      "Crafting clean, responsive interfaces from Figma to code, ensuring usability and visual appeal.",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description:
      "Breaking down complex challenges into practical solutions with clear logic and maintainable code.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Exploring new frameworks and best practices to stay adaptable, innovative, and future-ready.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Excited to contribute in team environments, share ideas openly, and learn from peers while building meaningful products.",
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
