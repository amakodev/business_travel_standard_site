/**
 * Utility functions for generating placeholder images
 */

export type ImageCategory = 
  | 'nature' 
  | 'city' 
  | 'people' 
  | 'animals' 
  | 'food' 
  | 'travel' 
  | 'architecture' 
  | 'business' 
  | 'nightlife' 
  | 'beach' 
  | 'mountain' 
  | 'safari';

interface PlaceholderOptions {
  width: number;
  height: number;
  category?: ImageCategory;
  grayscale?: boolean;
  blur?: number; // 1-10
  text?: string;
  bgColor?: string;
  textColor?: string;
}

/**
 * Generates a placeholder image URL using Picsum Photos
 * @param options Configuration options for the placeholder
 * @returns URL string for the placeholder image
 */
export const getPlaceholderImage = (options: PlaceholderOptions): string => {
  const { 
    width, 
    height, 
    category,
    grayscale = false,
    blur = 0
  } = options;
  
  // Base URL for Picsum Photos
  let url = `https://picsum.photos/${width}/${height}`;
  
  // Add query parameters
  const params = new URLSearchParams();
  
  // Add random seed to prevent caching the same image
  const seed = Math.floor(Math.random() * 1000);
  params.append('random', seed.toString());
  
  // Add grayscale if requested
  if (grayscale) {
    params.append('grayscale', '');
  }
  
  // Add blur if requested (1-10)
  if (blur > 0 && blur <= 10) {
    params.append('blur', blur.toString());
  }
  
  // Add category as a tag if specified
  if (category) {
    // For Picsum, we can't filter by category directly, but we can use it as a seed
    params.append('category', category);
  }
  
  // Append parameters if any exist
  if (params.toString()) {
    url += `?${params.toString()}`;
  }
  
  return url;
};

/**
 * Generates a placeholder image URL with text overlay using PlaceHolder.com
 * @param options Configuration options for the placeholder
 * @returns URL string for the placeholder image with text
 */
export const getTextPlaceholder = (options: PlaceholderOptions): string => {
  const { 
    width, 
    height, 
    text = 'Placeholder',
    bgColor = '1976D2', // Default blue color
    textColor = 'FFFFFF' // Default white text
  } = options;
  
  // Remove # if present in color codes
  const bg = bgColor.replace('#', '');
  const fg = textColor.replace('#', '');
  
  return `https://via.placeholder.com/${width}x${height}/${bg}/${fg}?text=${encodeURIComponent(text)}`;
};

/**
 * Generates a travel-themed placeholder image
 * @param width Image width
 * @param height Image height
 * @param specificType Optional specific travel category
 * @returns URL string for a travel-themed placeholder
 */
export const getTravelPlaceholder = (
  width: number, 
  height: number, 
  specificType?: 'beach' | 'mountain' | 'city' | 'safari'
): string => {
  return getPlaceholderImage({
    width,
    height,
    category: specificType || 'travel'
  });
};

/**
 * Generates a collection of placeholder images with the same dimensions
 * @param count Number of images to generate
 * @param width Image width
 * @param height Image height
 * @param category Optional category for the images
 * @returns Array of placeholder image URLs
 */
export const getPlaceholderCollection = (
  count: number,
  width: number,
  height: number,
  category?: ImageCategory
): string[] => {
  return Array(count).fill(0).map((_, index) => 
    getPlaceholderImage({
      width,
      height,
      category
    })
  );
}; 