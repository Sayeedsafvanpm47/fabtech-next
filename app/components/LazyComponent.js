'use client';

import { useState, useEffect, useRef } from 'react';

export default function LazyComponent({ 
  children, 
  fallback = null, 
  rootMargin = '50px',
  threshold = 0.1,
  className = ''
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold, hasLoaded]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : (fallback || <LazyPlaceholder />)}
    </div>
  );
}

function LazyPlaceholder() {
  return (
    <div className="animate-pulse bg-gray-200 rounded-lg h-64 flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
        <p className="text-gray-500 text-sm">Loading content...</p>
      </div>
    </div>
  );
}

