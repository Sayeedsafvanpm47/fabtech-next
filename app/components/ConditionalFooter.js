'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Check if we're on a service page (individual service, not the main services page)
  const isServicePage = pathname?.startsWith('/services/') && pathname !== '/services';
  
  return <Footer showServiceLinks={isServicePage} />;
}


