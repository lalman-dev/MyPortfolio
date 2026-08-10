# Lalman — Full-Stack Engineer Portfolio

A production-ready portfolio built with **Next.js 15**, showcasing full-stack engineering, AI integration, auth systems, and performance-focused development.

🌐 **Live:** https://lalman.dev  
🇦🇪 **UAE Profile:** https://lalman.dev/uae

---

## About

This portfolio reflects how I build software in professional environments — deliberate rendering decisions, production-grade auth, AI integration, and maintainable architecture. It's both a showcase and a demonstration of the engineering standards I apply to real products.

Currently based in **Abu Dhabi, UAE** — available immediately for full-time roles.

---

## Projects Showcased

### 🤖 AI Agent Workflow Visualizer
Real-time visualisation platform for AI multi-agent execution. Reducer-based state machine, mock SSE streaming, parallel async lifecycle management.  
**React · TypeScript · Tailwind CSS · Vite**  
→ [agent-visualizer.vercel.app](https://agent-visualizer.vercel.app)

### 🚗 Ryvo — Vehicle Booking Platform
Full-stack booking platform with Google OAuth + email/password auth, MongoDB, 28 vehicles across 7 categories, booking lifecycle with cancellation, and a premium dark/light theme system.  
**Next.js · TypeScript · MongoDB · Auth.js v5 · Tailwind CSS · Framer Motion**  
→ [ryvo-lux.vercel.app](https://ryvo-lux.vercel.app)

### 📰 Hacker News Portal
Deliberate SSR/CSR split per page. Lighthouse 98 mobile / 99 desktop, 100/100 Best Practices & SEO. Recursive comment threading with correct ARIA at every nesting depth.  
**Next.js · TypeScript · Tailwind CSS v4 · Framer Motion**  
→ [hn-news-two.vercel.app](https://hn-news-two.vercel.app)

### 📄 AI Resume Studio
Full-stack AI resume builder. Streaming OpenAI integration, Redux multi-step flows, JWT auth fixed across 12 API routes with one global Axios interceptor.  
**React · TypeScript · Node.js · Express · MongoDB · OpenAI API**  
→ [ai-resume-studio-snowy.vercel.app](https://ai-resume-studio-snowy.vercel.app)

---

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 15, React 19, TypeScript |
| Styling | Tailwind CSS v4, Framer Motion |
| Backend | Node.js, Express, NestJS, MongoDB, Mongoose |
| Auth | Auth.js v5, Google OAuth, bcrypt, JWT |
| AI | OpenAI API, Anthropic API, Streaming |
| Icons | Lucide React, React Icons |
| Theme | next-themes |
| Deployment | Vercel |

---

## Architecture

```text
portfolio-next/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main portfolio
│   │   └── uae/              # UAE-specific hiring page
│   ├── components/
│   │   ├── home/             # Main portfolio sections
│   │   └── uae/              # UAE page components
│   ├── context/              # ThemeContext
│   └── lib/
│       ├── data.ts           # Main portfolio data
│       └── uae-data.ts       # UAE page data
└── public/                   # Images, OG image, favicon
```

---

## Getting Started

```bash
git clone https://github.com/lalman-dev/MyPortfolio.git
cd MyPortfolio/portfolio-next
npm install
npm run dev
```

Visit `http://localhost:3000`

---

## Contact

**Portfolio** → https://lalman.dev  
**UAE Profile** → https://lalman.dev/uae  
**Email** → lalman.dev7@gmail.com  
**GitHub** → https://github.com/lalman-dev  
**LinkedIn** → https://linkedin.com/in/lalman-dev

---

Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
