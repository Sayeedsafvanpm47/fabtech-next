import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "FabTech - Professional Facility Management Services",
    template: "%s | FabTech Facility Management"
  },
  description: "Professional facility management services including maintenance, cleaning, security, and property management. Trusted by businesses across the region.",
  keywords: ["facility management", "property maintenance", "commercial cleaning", "security services", "building management"],
  authors: [{ name: "FabTech" }],
  creator: "FabTech",
  publisher: "FabTech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fabtech-services.com',
    title: 'FabTech - Professional Facility Management Services',
    description: 'Professional facility management services including maintenance, cleaning, security, and property management.',
    siteName: 'FabTech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FabTech - Professional Facility Management Services',
    description: 'Professional facility management services including maintenance, cleaning, security, and property management.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
