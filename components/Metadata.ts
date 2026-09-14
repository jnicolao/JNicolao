import { Metadata } from "next";

const url = "https://jnicolao.com";
const icon = "/icons/android-chrome-512x512.png";
const ogImageUrl = `${url}/images/og.jpg`;

const description =
  "Justine Nicolao is a Software Engineer in Nairobi, Kenya, building web and mobile products with Next.js, React, TypeScript and Flutter.";

export const metadata: Metadata = {
  title: "Justine Nicolao | Software Engineer",
  description,
  keywords: [
    "Justine Nicolao",
    "Justine Bororio",
    "Justine",
    "Software Engineer Nairobi",
    "Frontend Engineer Kenya",
    "React Developer",
    "Next.js Developer",
    "Flutter Developer",
  ],
  creator: "Justine Nicolao",
  authors: [{ name: "Justine Nicolao", url }],
  metadataBase: new URL(url),
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Justine Nicolao | Software Engineer",
    description,
    url,
    siteName: "Justine Nicolao",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Justine Nicolao, Software Engineer, Nairobi, Kenya",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon,
    shortcut: icon,
    apple: "https://jnicolao.com/icons/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "https://jnicolao.com/icons/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "https://jnicolao.com/icons/favicon-32x32.png",
        sizes: "32x32",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Justine Nicolao | Software Engineer",
    description,
    site: "@jnicolao5",
    creator: "@jnicolao5",
    images: [ogImageUrl],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#000000",
};
