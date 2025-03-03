/**
 * Utility for prefetching React components to improve performance
 */

/**
 * Prefetches a React component by dynamically importing it
 * This helps speed up initial load when the component is needed
 * 
 * @param importFunc - The dynamic import function for the component
 */
export const prefetchComponent = (importFunc: () => Promise<any>): void => {
  // Start loading the component in the background
  // This initializes the request but doesn't block the main thread
  importFunc().catch(() => {
    // Silently catch errors - prefetching is an optimization, 
    // not something that should interrupt the experience if it fails
  });
};

/**
 * Prefetches multiple components at once
 * Useful when you want to preload several pages or components together
 * 
 * @param importFuncs - Array of dynamic import functions
 */
export const prefetchComponents = (importFuncs: Array<() => Promise<any>>): void => {
  importFuncs.forEach(prefetchComponent);
};

/**
 * Delayed prefetch that waits until the browser is idle
 * This ensures that prefetching doesn't interfere with more important tasks
 * 
 * @param importFunc - The dynamic import function
 * @param delay - Optional delay in ms before prefetching
 */
export const prefetchWhenIdle = (importFunc: () => Promise<any>, delay: number = 0): void => {
  if ('requestIdleCallback' in window) {
    // Use requestIdleCallback for browsers that support it
    window.requestIdleCallback(() => {
      setTimeout(() => prefetchComponent(importFunc), delay);
    });
  } else {
    // Fallback to setTimeout for browsers without requestIdleCallback
    setTimeout(() => prefetchComponent(importFunc), delay + 200);
  }
};

/**
 * Prefetches components based on the current route
 * This can be used to intelligently prefetch related pages
 * 
 * @param currentPath - The current route path
 * @param importMapping - Object mapping route patterns to import functions
 */
export const prefetchRelatedRoutes = (
  currentPath: string,
  importMapping: Record<string, Array<() => Promise<any>>>
): void => {
  // Find all patterns that match the current path
  Object.entries(importMapping).forEach(([pattern, imports]) => {
    if (new RegExp(pattern).test(currentPath)) {
      // If the pattern matches, prefetch all associated components
      prefetchComponents(imports);
    }
  });
}; 