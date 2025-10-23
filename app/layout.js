import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PerformanceMonitor from "./components/PerformanceMonitor";

// Optimized font loading with display swap and preload
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Only preload primary font
  fallback: ["Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
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
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        
        {/* Critical CSS inlining hint */}
        <link rel="preload" href="/globals.css" as="style" />
        
        {/* Viewport meta for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#1e40af" />
        
        {/* Prevent FOUC */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body { 
              font-family: system-ui, -apple-system, sans-serif; 
              visibility: hidden; 
            }
            body.fonts-loaded { 
              visibility: visible; 
            }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased fonts-loaded`}
        suppressHydrationWarning={true}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <PerformanceMonitor />
        
        {/* Performance monitoring script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Mark fonts as loaded to prevent FOUC
            document.body.classList.add('fonts-loaded');
            
            // Preload critical resources
            if ('requestIdleCallback' in window) {
              requestIdleCallback(() => {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = '/api/contact';
                document.head.appendChild(link);
              });
            }
          `
        }} />
      </body>
    </html>
  );
}
