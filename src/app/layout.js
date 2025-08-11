// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'NepSoftSolutions',
  description: 'A description of NepSoftSolutions.',
  openGraph: {
    title: 'NepSoftSolutions',
    description: 'A description of NepSoftSolutions for social media.',
    images: ['/logo11.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NepSoftSolutions',
    description: 'A description of NepSoftSolutions for Twitter.',
    images: ['/logo11.png'],
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
