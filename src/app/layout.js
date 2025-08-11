import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ogImage from "../public/logo3.png";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://nepsoftsolutions.com"),
  title: "NepSoft Solutions | Future of Software Development",
  description:
    "NepSoft Solutions builds modern, SEO-friendly websites, web apps, and innovative tech solutions. We specialize in web development, mobile applications, AI-powered software, and business automation.",
  keywords: [
    "NepSoft Solutions",
    "website development",
    "web app development",
    "custom software development",
    "mobile app development",
    "React development",
    "Next.js development",
    "Node.js backend",
    "MERN stack development",
    "e-commerce development",
    "UI/UX design",
    "SEO optimization",
    "cloud-based solutions",
    "AI-powered applications",
    "ERP development",
    "business automation",
    "IT consulting",
    "custom web solutions",
    "software company Nepal",
    "full stack developer",
    "web design",
    "digital transformation",
    "app development company",
    "best software company",
    "modern website design",
  ],
  openGraph: {
    type: "website",
    url: "https://nepsoftsolutions.com",
    title: "NepSoft Solutions | Future of Software Development",
    description:
      "We create high-quality, scalable websites and applications tailored to your business needs using cutting-edge technologies.",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NepSoft Solutions | Future of Software Development",
    description:
      "Building SEO-optimized websites, apps, and software solutions to help your business grow.",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
      },
    ],
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
        <div>
          <Navbar />
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
