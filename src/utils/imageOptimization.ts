/**
 * Utilities for optimizing images and improving loading performance
 */

/**
 * Creates an IntersectionObserver to lazy load images when they come into viewport
 * This reduces initial load time and saves bandwidth
 */
export const setupLazyImageLoading = (): void => {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLImageElement;
          
          // Replace src with the value from data-src
          if (lazyImage.dataset.src) {
            lazyImage.src = lazyImage.dataset.src;
          }
          
          // Replace srcset if it exists
          if (lazyImage.dataset.srcset) {
            lazyImage.srcset = lazyImage.dataset.srcset;
          }
          
          // Remove lazy class to apply loaded styles
          lazyImage.classList.remove('lazy');
          
          // Stop observing the image
          imageObserver.unobserve(lazyImage);
        }
      });
    });
    
    // Get all images with the lazy class
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    const lazyImages = document.querySelectorAll('img.lazy');
    
    // Simple scroll-based lazy loading
    const lazyLoad = () => {
      lazyImages.forEach((img: Element) => {
        const lazyImage = img as HTMLImageElement;
        const rect = lazyImage.getBoundingClientRect();
        
        // Check if image is in viewport
        if (
          rect.top <= window.innerHeight && 
          rect.bottom >= 0
        ) {
          if (lazyImage.dataset.src) {
            lazyImage.src = lazyImage.dataset.src;
          }
          if (lazyImage.dataset.srcset) {
            lazyImage.srcset = lazyImage.dataset.srcset;
          }
          lazyImage.classList.remove('lazy');
        }
      });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationchange', lazyLoad);
    
    // Initial check
    lazyLoad();
  }
};

/**
 * Preloads critical images to ensure they're available immediately when needed
 * @param imagePaths - Array of image paths to preload
 */
export const preloadCriticalImages = (imagePaths: string[]): void => {
  imagePaths.forEach(path => {
    const img = new Image();
    img.src = path;
  });
};

/**
 * Gets appropriate image size based on screen width
 * Useful for responsive images to load appropriate size
 * 
 * @param baseUrl - Base URL of the image
 * @param sizes - Object mapping breakpoints to image sizes
 */
export const getResponsiveImageUrl = (
  baseUrl: string,
  sizes: { [key: string]: string }
): string => {
  const screenWidth = window.innerWidth;
  
  // Define breakpoints
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
  };
  
  // Determine which size to use based on screen width
  if (screenWidth < breakpoints.sm && sizes.sm) {
    return `${baseUrl}/${sizes.sm}`;
  } else if (screenWidth < breakpoints.md && sizes.md) {
    return `${baseUrl}/${sizes.md}`;
  } else if (screenWidth < breakpoints.lg && sizes.lg) {
    return `${baseUrl}/${sizes.lg}`;
  } else if (screenWidth < breakpoints.xl && sizes.xl) {
    return `${baseUrl}/${sizes.xl}`;
  } else {
    // Default to largest size
    return `${baseUrl}/${sizes.default || sizes.xl || sizes.lg || 'original'}`;
  }
};

/**
 * Generates a placeholder gradient for images while they load
 * This provides a smoother visual experience
 * 
 * @param colors - Array of colors to use in the gradient
 */
export const generatePlaceholderGradient = (colors: string[] = ['#f6f7f8', '#edeef1']): string => {
  return `linear-gradient(to right, ${colors[0]} 0%, ${colors[1]} 20%, ${colors[0]} 40%, ${colors[0]} 100%)`;
}; 