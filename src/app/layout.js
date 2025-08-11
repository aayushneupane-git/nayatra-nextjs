// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://nepsoft.org"),
  title: "NepSoft",
  description: "This is where the future of software development",
  keywords: [
    "software",
    "development",
    "agency",
    "web development",
    "mobile apps",
  ],
  authors: [{ name: "NepSoft", url: "https://nepsoft.org" }],
  creator: "NepSoft",

  openGraph: {
    title: "NepSoft",
    description: "This is where the future of software development",
    url: "https://nepsoft.org",
    siteName: "NepSoft",
    type: "website",
    images: [
      {
        url: "/logo3.png", // updated here
        width: 1200,
        height: 630,
        alt: "NepSoft",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NepSoft",
    description: "This is where the future of software development",
    images: ["/logo3.png"], // updated here
  },

  icons: {
    icon: [
      { url: "/logo3.png", sizes: "any" }, // updated here
    ],
    apple: [
      { url: "/logo3.png", sizes: "180x180" }, // updated here
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
