import type { Metadata, Viewport } from "next";
import { DM_Mono, DM_Sans, Syne } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Lalman | Frontend Engineer",
    template: "%s | Lalman",
  },

  description:
    "Frontend-first Full Stack Engineer specializing in React, Next.js, TypeScript, AI-powered web applications, and modern user experiences.",

  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Full Stack Developer",
    "AI Engineer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Lalman",
    },
  ],

  creator: "Lalman",

  openGraph: {
    title: "Lalman | Frontend Engineer",
    description:
      "Frontend-first Full Stack Engineer building performant, scalable, AI-powered web applications.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lalman | Frontend Engineer",
    description:
      "Frontend-first Full Stack Engineer building performant web applications.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0908",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          syne.variable,
          dmSans.variable,
          dmMono.variable,
          "antialiased",
          "min-h-screen",
          "bg-[var(--bg-primary)]",
          "text-[var(--text-primary)]",
          "noise",
        ].join(" ")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
