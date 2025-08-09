import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NepSoft",
  description: "This is where the future of software development",
  keywords: "software, development, agency, web development, mobile apps",
  authors: [{ name: "NepSoft", url: "https://nepsoft.org" }],
  creator: "NepSoft",
  openGraph: {
    title: "NepSoft",
    description: "This is where the future of software development",
    url: "https://nepsoft.org",
    siteName: "NepSoft",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div>
            <Navbar />
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
