// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://nepsoftsolutions.com"),
  title: "NepSoft - Future of Software Development",
  description: "Innovative software development agency specializing in web and mobile applications. We build the future of digital solutions.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "tech agency",
    "custom software",
    "NepSoft Solutions"
  ],
  authors: [{ name: "NepSoft Solutions", url: "https://nepsoftsolutions.com" }],
  creator: "NepSoft Solutions",
  publisher: "NepSoft Solutions",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph using logo3.png
  openGraph: {
    title: "NepSoft - Future of Software Development",
    description: "Innovative software development agency building digital solutions for tomorrow's needs.",
    url: "https://nepsoftsolutions.com",
    siteName: "NepSoft Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo3.png", // Using your logo image
        width: 1200,
        height: 630,
        alt: "NepSoft Solutions Logo",
        type: "image/png",
      },
    ],
  },

  // Twitter Card using logo3.png
  twitter: {
    card: "summary_large_image",
    site: "@nepsoft", // Replace with your actual Twitter handle
    creator: "@nepsoft",
    title: "NepSoft - Future of Software Development",
    description: "Building innovative digital solutions for tomorrow's needs.",
    images: {
      url: "/logo3.png", // Using your logo image
      alt: "NepSoft Solutions Logo",
      width: 1200,
      height: 630,
    },
  },

  // Icons using logo3.png
  icons: {
    icon: [
      { url: "/logo3.png", sizes: "any" },
      { url: "/logo3.png", type: "image/png", sizes: "16x16" },
      { url: "/logo3.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/logo3.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo3.png",
      },
    ],
  },

  alternates: {
    canonical: "https://nepsoftsolutions.com",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  appleWebApp: {
    title: "NepSoft Solutions",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}