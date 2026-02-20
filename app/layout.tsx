import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aayush Shah - Full Stack Developer",
  description: "Full Stack Developer with 2+ years of experience building scalable MEAN stack applications. Skilled in REST APIs, real-time systems, and performance optimization.",
  keywords: ["Full Stack Developer", "MEAN Stack", "Node.js", "Angular", "Next.js", "MongoDB", "Redis"],
  authors: [{ name: "Aayush Shah" }],
  openGraph: {
    title: "Aayush Shah - Full Stack Developer",
    description: "Building scalable web apps with modern technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
