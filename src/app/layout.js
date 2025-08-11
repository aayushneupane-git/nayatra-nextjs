import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://nepsoft.org"), // ensures relative URLs become absolute
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
        url: "/LOGO.png",
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
    images: ["/LOGO.png"],
  },

  icons: {
    icon: [{ url: "/logo_white.png", sizes: "any" }],
    apple: [{ url: "/logo_white.png", sizes: "180x180" }],
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
