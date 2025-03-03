/**
 * Utility functions for generating placeholder images with African travel themes
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

// African-themed keywords to use as seeds for more relevant images
const africanKeywords = [
  'safari', 'savanna', 'wildlife', 'capetown', 'tablemountain', 
  'africa', 'southafrica', 'kruger', 'winelands', 'gardenroute',
  'elephant', 'lion', 'zebra', 'giraffe', 'african'
];

// Collection of specific image IDs from Picsum that have an African travel theme
const africanImageIds = [
  // Safari/Wildlife
  '1020', '1024', '1074', '219', '365', '433', '577', '593', 
  // Landscapes/Nature
  '325', '535', '631', '667', '678', '1039', '1043', '1051',
  // Cities/Architecture
  '164', '395', '401', '447', '538', '652', '678', '804',
  // Beaches/Coastal
  '790', '827', '855', '1001', '1024', '1027', '1052', '1074'
];

interface PlaceholderOptions {
  width: number;
  height: number;
  category?: ImageCategory;
  grayscale?: boolean;
  blur?: number; // 1-10
  text?: string;
  bgColor?: string;
  textColor?: string;
  useAfricanTheme?: boolean;
}

/**
 * Generates a placeholder image URL using Picsum Photos with African travel themes
 * @param options Configuration options for the placeholder
 * @returns URL string for the placeholder image
 */
export const getPlaceholderImage = (options: PlaceholderOptions): string => {
  const { 
    width, 
    height, 
    category,
    grayscale = false,
    blur = 0,
    useAfricanTheme = true
  } = options;
  
  // Use specific African-themed images when possible
  if (useAfricanTheme) {
    // Select a random African-themed image ID
    const randomIndex = Math.floor(Math.random() * africanImageIds.length);
    const imageId = africanImageIds[randomIndex];
    
    // Base URL with specific image ID
    let url = `https://picsum.photos/id/${imageId}/${width}/${height}`;
    
    // Add query parameters
    const params = new URLSearchParams();
    
    // Add grayscale if requested
    if (grayscale) {
      params.append('grayscale', '');
    }
    
    // Add blur if requested (1-10)
    if (blur > 0 && blur <= 10) {
      params.append('blur', blur.toString());
    }
    
    // Append parameters if any exist
    if (params.toString()) {
      url += `?${params.toString()}`;
    }
    
    return url;
  } else {
    // Fallback to random images with category-based seeding
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
  }
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
    text = 'South African Travel',
    bgColor = '1976D2', // Default blue color
    textColor = 'FFFFFF' // Default white text
  } = options;
  
  // Remove # if present in color codes
  const bg = bgColor.replace('#', '');
  const fg = textColor.replace('#', '');
  
  return `https://via.placeholder.com/${width}x${height}/${bg}/${fg}?text=${encodeURIComponent(text)}`;
};

/**
 * Generates an African travel-themed placeholder image
 * @param width Image width
 * @param height Image height
 * @param specificType Optional specific travel category
 * @returns URL string for an African travel-themed placeholder
 */
export const getAfricanTravelPlaceholder = (
  width: number, 
  height: number, 
  specificType?: 'safari' | 'beach' | 'mountain' | 'city' | 'winelands'
): string => {
  // Map specific types to appropriate African image IDs
  let specificImageIds: string[] = [];
  
  switch (specificType) {
    case 'safari':
      specificImageIds = ['1020', '1024', '219', '365', '433', '577'];
      break;
    case 'beach':
      specificImageIds = ['790', '827', '855', '1001', '1027'];
      break;
    case 'mountain':
      specificImageIds = ['325', '535', '631', '667', '1039'];
      break;
    case 'city':
      specificImageIds = ['164', '395', '401', '447', '538'];
      break;
    case 'winelands':
      specificImageIds = ['452', '538', '667', '678', '1051'];
      break;
    default:
      // Use all African image IDs if no specific type
      specificImageIds = africanImageIds;
  }
  
  // Select a random image ID from the specific category
  const randomIndex = Math.floor(Math.random() * specificImageIds.length);
  const imageId = specificImageIds[randomIndex];
  
  return `https://picsum.photos/id/${imageId}/${width}/${height}`;
};

// Alias for backward compatibility
export const getTravelPlaceholder = getAfricanTravelPlaceholder;

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
  // Ensure we don't reuse the same image IDs
  const usedIndices = new Set<number>();
  const result: string[] = [];
  
  for (let i = 0; i < count; i++) {
    // Find an unused index
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * africanImageIds.length);
    } while (usedIndices.has(randomIndex) && usedIndices.size < africanImageIds.length);
    
    // If we've used all indices, just pick a random one
    if (usedIndices.size >= africanImageIds.length) {
      randomIndex = Math.floor(Math.random() * africanImageIds.length);
    } else {
      usedIndices.add(randomIndex);
    }
    
    const imageId = africanImageIds[randomIndex];
    result.push(`https://picsum.photos/id/${imageId}/${width}/${height}`);
  }
  
  return result;
}; 