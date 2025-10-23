'use client';

import { lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

// Lazy load components only when they come into view
export const LazyTrustSignals = lazy(() => import('./TrustSignals'));
export const LazyHomeFAQ = lazy(() => import('./HomeFAQ'));
export const LazyClients = lazy(() => import('./Clients'));
export const LazyContactEmergencySection = lazy(() => import('./ContactEmergencySection'));
export const LazyFloatingCTA = lazy(() => import('./FloatingCTA'));

// Generic loading component
const LoadingSpinner = ({ height = "400px" }) => (
  <div 
    className="flex items-center justify-center bg-gray-50" 
    style={{ height }}
  >
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

// Intersection Observer wrapper for lazy loading
export const LazySection = ({ 
  children, 
  fallback = <LoadingSpinner />, 
  threshold = 0.1,
  triggerOnce = true 
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin: '50px 0px', // Load 50px before coming into view
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

// Optimized component wrappers
export const OptimizedTrustSignals = (props) => (
  <LazySection fallback={<LoadingSpinner height="600px" />}>
    <LazyTrustSignals {...props} />
  </LazySection>
);

export const OptimizedHomeFAQ = (props) => (
  <LazySection fallback={<LoadingSpinner height="500px" />}>
    <LazyHomeFAQ {...props} />
  </LazySection>
);

export const OptimizedClients = (props) => (
  <LazySection fallback={<LoadingSpinner height="200px" />}>
    <LazyClients {...props} />
  </LazySection>
);

export const OptimizedContactEmergencySection = (props) => (
  <LazySection fallback={<LoadingSpinner height="700px" />}>
    <LazyContactEmergencySection {...props} />
  </LazySection>
);

export const OptimizedFloatingCTA = (props) => (
  <LazySection threshold={0} triggerOnce={false}>
    <LazyFloatingCTA {...props} />
  </LazySection>
);
