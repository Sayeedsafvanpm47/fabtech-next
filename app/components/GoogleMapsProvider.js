'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { loadGoogleMapsAPI, isGoogleMapsLoaded } from '@/lib/googleMaps';

const GoogleMapsContext = createContext({
  isLoaded: false,
  loadError: null,
});

export const useGoogleMaps = () => {
  const context = useContext(GoogleMapsContext);
  if (!context) {
    throw new Error('useGoogleMaps must be used within a GoogleMapsProvider');
  }
  return context;
};

export default function GoogleMapsProvider({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    const initGoogleMaps = async () => {
      try {
        if (isGoogleMapsLoaded()) {
          setIsLoaded(true);
          return;
        }

        await loadGoogleMapsAPI();
        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to load Google Maps:', error);
        setLoadError(error);
      }
    };

    if (typeof window !== 'undefined') {
      initGoogleMaps();
    }
  }, []);

  return (
    <GoogleMapsContext.Provider value={{ isLoaded, loadError }}>
      {children}
    </GoogleMapsContext.Provider>
  );
}
