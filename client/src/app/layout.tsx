import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ChatFlow – Real-Time Messaging App",
  description:
    "ChatFlow is a fast, secure, and seamless messaging platform built with Next.js and Express. Stay connected with real-time messaging, group chats, and media sharing.",
  applicationName: "ChatFlow",
  authors: [{ name: "Emmanuel", url: "https://emmanuel-victor.netlify.app/" }],
  creator: "Emmanuel",
  generator: "Next.js 15",
  keywords: [
    "chat app",
    "real-time messaging",
    "Next.js",
    "Express",
    "Prisma",
    "PostgreSQL",
    "WebSocket",
  ],
  openGraph: {
    title: "ChatFlow – Real-Time Messaging App",
    description:
      "ChatFlow is a modern messaging platform offering real-time communication, group chats, and media sharing.",
    url: "https://chatflow.app",
    siteName: "ChatFlow",
    images: [
      {
        url: "https://chatflow.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "ChatFlow – Real-Time Messaging App",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatFlow – Real-Time Messaging App",
    description:
      "A modern chat app for real-time conversations, group messaging, and seamless media sharing.",
    images: ["https://chatflow.app/twitter-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
