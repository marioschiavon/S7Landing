import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S7 | Desenvolvimento de Software & Automação",
  description: "Desenvolvemos softwares que escalam negócios e automatizam operações. Tecnologia B2B de ponta.",
  icons: {
    icon: "/s7-logo.jpg",
  },
  openGraph: {
    title: "S7 Software Development",
    description: "Desenvolvemos softwares que escalam negócios e automatizam operações.",
    url: "https://s7tech.com",
    siteName: "S7",
    images: [
      {
        url: "/s7-logo.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
