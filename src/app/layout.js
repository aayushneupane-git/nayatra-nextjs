import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ogImage from "../../public/logo3.png";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://nepsoftsolutions.com"),
  title: "NepSoft Solutions | Web & App Development in Nepal",
  description:
    "NepSoft Solutions builds SEO-optimized websites, mobile apps, and AI-powered software. Expert in MERN stack, ERP systems, and cloud solutions. Let's grow your business.",
  keywords: [
    "web development company Nepal",
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
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nepsoftsolutions.com",
    title: "NepSoft Solutions | Web & App Development in Nepal",
    description:
      "SEO-optimized websites, mobile apps, and AI solutions from Nepal's top software development company.",
    siteName: "NepSoft Solutions",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: "NepSoft Solutions - Web & App Development in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NepSoft Solutions | Web & App Development in Nepal",
    description:
      "Building SEO-optimized websites, apps, and software for your business success.",
    images: [ogImage.src],
  },
  icons: {
    icon: ogImage.src,
    apple: ogImage.src,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Schema Markup for SEO Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NepSoft Solutions",
              url: "https://nepsoftsolutions.com",
              logo: "https://nepsoftsolutions.com/logo.png",
              description:
                "NepSoft Solutions builds SEO-optimized websites, mobile apps, and AI-powered software.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+977-XXXXXXXXXX",
                contactType: "Customer Service",
                areaServed: "NP",
                availableLanguage: ["English", "Nepali"],
              },
              sameAs: [
                "https://www.facebook.com/nepsoftsolutions",
                "https://www.linkedin.com/company/nepsoftsolutions",
              ],
            }),
          }}
        />
      </head>
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
