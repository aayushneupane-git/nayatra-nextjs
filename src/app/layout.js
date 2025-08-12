import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ogImage from "../../public/favicon.ico";
import customImage from "../../public/linkpreview.png";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://nepsoftsolutions.com"),
  title: "NepSoft Solutions | Expert Web & App Development",
  description:
    "NepSoft Solutions offers SEO-optimized websites, mobile apps, AI-powered software, and cloud solutions. Expert MERN stack and ERP development to grow your business.",
  keywords: [
    "web development company ",
    "website design Nepal",
    "MERN stack developer Nepal",
    "mobile app development Nepal",
    "custom software development Nepal",
    "AI software company Nepal",
    "ERP development Nepal",
    "cloud application development",
    "Next.js development services",
    "React development company Nepal",
    "SEO-friendly website development",
    "business automation software",
    "best software company Nepal",
    "top web development Nepal",
    "software outsourcing Nepal",
    "digital transformation Nepal",
  ],
  canonical: "https://nepsoftsolutions.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nepsoftsolutions.com",
    title: "NepSoft Solutions | Expert Web & App Development",
    description:
      "Top Nepal-based software company offering SEO-friendly websites, mobile apps, AI software, and cloud services tailored for your business growth.",
    siteName: "NepSoft Solutions",
    images: [
      {
        url: ogImage.customImage,
        width: 1200,
        height: 630,
        alt: "NepSoft Solutions - Web & App Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NepSoft Solutions | Expert Web & App Development",
    description:
      "NepSoft Solutions builds SEO-optimized websites, mobile apps, and AI-powered software to accelerate your business success.",
    images: [ogImage.customImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <link
          href="https://fonts.googleapis.com/css2?family=Andada+Pro:ital,wght@0,400..840;1,400..840&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
