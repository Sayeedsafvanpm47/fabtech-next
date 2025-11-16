import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PerformanceMonitor from "./components/PerformanceMonitor";
import GoogleMapsProvider from "./components/GoogleMapsProvider";

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
    template: "%s | Fabtech Services Trading & Contracting | Deep Cleaning & Facility Management"
  },
  description: "Fabtech Services offers comprehensive facility management solutions in Qatar, covering deep cleaning, general cleaning, residential and commercial cleaning, post-construction cleaning, pest control, disinfection services, staffing supply, hospitality staffing, maintenance services, landscaping, civil works, MEP support, property management, and full facility management services. Trusted across Qatar for professional, reliable, and high-quality service delivery.",
  keywords: [
    "facility management",
    "facility management qatar",
    "property maintenance",
    "commercial cleaning",
    "residential cleaning",
    "deep cleaning qatar",
    "pest control qatar",
    "post construction cleaning",
    "building management",
    "maintenance services qatar",
    "landscaping services qatar",
    "hospitality staffing qatar",
    "staff supply qatar",
    "civil works qatar",
    "MEP services qatar",
    "FM services qatar",
    "cleaning company in qatar",
    "security services qatar",
    "property management qatar",
    "disinfection services qatar",
    "amc services qatar",
    "general cleaning qatar",
    "construction cleaning qatar"
  ],
  authors: [{ name: "Fabtech Services Trading & Contracting" }],
  creator: "Fabtech Services Trading & Contracting",
  publisher: "Fabtech Services Trading & Contracting",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  },
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
    url: 'https://fabtechqatar.com',
    title: 'Fabtech Services Trading & Contracting - Professional Facility Management Services',
    description: "Fabtech Services offers comprehensive facility management solutions in Qatar, covering deep cleaning, general cleaning, residential and commercial cleaning, post-construction cleaning, pest control, disinfection services, staffing supply, hospitality staffing, maintenance services, landscaping, civil works, MEP support, property management, and full facility management services. Trusted across Qatar for professional, reliable, and high-quality service delivery.",
    siteName: 'Fabtech Services Trading & Contracting Qatar',
    images: [
      {
        url: 'https://fabtechqatar.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FabTech Qatar - Professional Facility Management Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fabtech Services Trading & Contracting - Professional Facility Management Services',
    description: "Fabtech Services offers comprehensive facility management solutions in Qatar, covering deep cleaning, general cleaning, residential and commercial cleaning, post-construction cleaning, pest control, disinfection services, staffing supply, hospitality staffing, maintenance services, landscaping, civil works, MEP support, property management, and full facility management services. Trusted across Qatar for professional, reliable, and high-quality service delivery.",
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
        <meta name="theme-color" content="#dc2626" />
        
        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="FabTech Qatar" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://fabtechqatar.com" />
        
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
            <GoogleMapsProvider>
              <Navigation />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
              <PerformanceMonitor />
            </GoogleMapsProvider>
        
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
