// Google Maps API loader utility
let isLoaded = false;
let isLoading = false;
let loadPromise = null;

export const loadGoogleMapsAPI = () => {
  // If already loaded, return resolved promise
  if (isLoaded) {
    return Promise.resolve(window.google);
  }

  // If currently loading, return the existing promise
  if (isLoading) {
    return loadPromise;
  }

  // Start loading
  isLoading = true;
  loadPromise = new Promise((resolve, reject) => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
      // Script exists, wait for it to load
      if (window.google && window.google.maps) {
        isLoaded = true;
        isLoading = false;
        resolve(window.google);
        return;
      }
      
      // Wait for existing script to load
      existingScript.addEventListener('load', () => {
        isLoaded = true;
        isLoading = false;
        resolve(window.google);
      });
      
      existingScript.addEventListener('error', (error) => {
        isLoading = false;
        reject(error);
      });
      
      return;
    }

    // Create new script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      isLoaded = true;
      isLoading = false;
      resolve(window.google);
    };
    
    script.onerror = (error) => {
      isLoading = false;
      reject(error);
    };
    
    document.head.appendChild(script);
  });

  return loadPromise;
};

export const isGoogleMapsLoaded = () => {
  return isLoaded && window.google && window.google.maps && window.google.maps.places;
};

