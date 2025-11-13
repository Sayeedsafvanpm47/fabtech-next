'use client';

import dynamic from 'next/dynamic';

const OptimizedFloatingCTA = dynamic(() => import('./LazyWrapper').then(mod => ({ default: mod.OptimizedFloatingCTA })), {
  ssr: false
});

export default function ClientFloatingCTA() {
  return <OptimizedFloatingCTA />;
}

