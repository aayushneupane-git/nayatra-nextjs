// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://nepsoftsolutions.com"),
  title: "NepSoft",
  description: "This is where the future of software development",
  keywords: [
    "software",
    "development",
    "agency",
    "web development",
    "mobile apps",
  ],
  authors: [{ name: "NepSoft", url: "https://nepsoftsolutions.com" }],
  creator: "NepSoft",

  openGraph: {
    title: "NepSoft",
    description: "This is where the future of software development",
    url: "https://nepsoftsolutions.com",
    siteName: "NepSoft",
    type: "website",
    images: [
      {
        url: "https://nepsoftsolution.com/logo3.png", // keep your logo image
        width: 1200,
        height: 630,
        alt: "NepSoft Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NepSoft",
    description: "This is where the future of software development",
    images: ["https://nepsoftsolution.com/logo3.png"],
  },

  icons: {
    icon: "https://nepsoftsolution.com/logo3.png",
    apple: "https://nepsoftsolution.com/logo3.png",
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
