# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Restro Travel Website

A modern travel website for a South African travel agency specializing in Cape Town and surrounding areas.

## Features

- Responsive design for all device sizes
- Modern UI with animations using Framer Motion
- Styled with styled-components
- React Router for navigation
- Voice introduction for first-time visitors
- African-themed placeholder images

## African-Themed Placeholder Images

The website uses carefully selected African-themed placeholder images to showcase the beauty of South Africa and provide an authentic travel experience. In a production environment, these would be replaced with actual images from the travel destinations.

### Image Utilities

The project includes a comprehensive set of image utilities in `src/utils/imageUtils.ts`:

- `getPlaceholderImage()`: Generates African-themed placeholder images using curated Picsum Photos IDs
- `getTextPlaceholder()`: Creates text-based placeholders with customizable colors
- `getAfricanTravelPlaceholder()`: Specialized function for African travel-themed images with categories:
  - Safari/Wildlife
  - Beaches/Coastal
  - Mountains/Landscapes
  - Cities/Architecture
  - Winelands
- `getPlaceholderCollection()`: Generates multiple African-themed placeholder images at once

### Placeholder Components

The `src/components/PlaceholderImage.tsx` file provides reusable components:

- `PlaceholderImage`: Base component with customizable properties
- `HeroPlaceholder`: Specialized for hero/banner images (1920x1080)
- `CardPlaceholder`: Optimized for card displays (400x300)
- `AvatarPlaceholder`: For profile/avatar images (150x150)
- `GalleryPlaceholder`: For gallery displays (600x400)

### African Image Gallery

The `src/components/AfricanImageGallery.tsx` component provides specialized galleries:

- `AfricanImageGallery`: Base gallery component with interactive or grid layouts
- `SafariGallery`: Pre-configured gallery for safari/wildlife images
- `CapeTownGallery`: Pre-configured gallery for Cape Town city images
- `WinelandsGallery`: Pre-configured gallery for Cape Winelands images

### Usage Example

```jsx
// Import the components
import { CardPlaceholder, HeroPlaceholder } from '../components/PlaceholderImage';
import { getPlaceholderCollection, getAfricanTravelPlaceholder } from '../utils/imageUtils';
import { SafariGallery, CapeTownGallery } from '../components/AfricanImageGallery';

// Generate a collection of African-themed images
const safariImages = getPlaceholderCollection(3, 600, 400);

// Use specific African travel categories
const winelands = getAfricanTravelPlaceholder(800, 600, 'winelands');
const beachImage = getAfricanTravelPlaceholder(800, 600, 'beach');

// Use in your component
<HeroPlaceholder category="safari" alt="African safari experience" />

<CardPlaceholder 
  category="city" 
  text="Cape Town" 
  useTextOverlay={true}
  bgColor="#1976D2"
  alt="Cape Town"
/>

// Add a pre-configured gallery
<SafariGallery imageCount={4} />

// Or a custom gallery
<AfricanImageGallery 
  title="Explore South Africa" 
  category="beach"
  imageCount={6}
  interactive={true}
/>
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Project Structure

- `/src/components`: Reusable UI components
- `/src/pages`: Page components
- `/src/styles`: Theme and global styles
- `/src/utils`: Utility functions
- `/src/animations`: Animation definitions

## Dependencies

- React
- React Router
- Styled Components
- Framer Motion
- Web Speech API (for voice introduction)

## License

This project is licensed under the MIT License.
