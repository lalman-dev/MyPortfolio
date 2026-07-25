import type { Metadata } from "next";
import { Syne, DM_Mono, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lalman — Frontend & Full Stack Engineer",
  description:
    "Frontend-first Full Stack Engineer building scalable web applications with React, Next.js, TypeScript, Node.js, Express, and MongoDB. Experienced in AI integration, authentication, and modern application architecture.",
  openGraph: {
    title: "Lalman — Frontend & Full Stack Engineer",
    description:
      "Frontend-first Full Stack Engineer building scalable web applications with React, Next.js, TypeScript, Node.js, Express, and MongoDB.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    if (stored === "dark") document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${dmMono.variable} ${dmSans.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${syne.variable} ${dmMono.variable} ${dmSans.variable} noise`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
