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

## Placeholder Images

The website uses placeholder images from external services to demonstrate the layout and design. In a production environment, these would be replaced with actual images.

### Image Utilities

The project includes a comprehensive set of image utilities in `src/utils/imageUtils.ts`:

- `getPlaceholderImage()`: Generates placeholder images using Picsum Photos
- `getTextPlaceholder()`: Creates text-based placeholders with customizable colors
- `getTravelPlaceholder()`: Specialized function for travel-themed images
- `getPlaceholderCollection()`: Generates multiple placeholder images at once

### Placeholder Components

The `src/components/PlaceholderImage.tsx` file provides reusable components:

- `PlaceholderImage`: Base component with customizable properties
- `HeroPlaceholder`: Specialized for hero/banner images (1920x1080)
- `CardPlaceholder`: Optimized for card displays (400x300)
- `AvatarPlaceholder`: For profile/avatar images (150x150)
- `GalleryPlaceholder`: For gallery displays (600x400)

### Usage Example

```jsx
// Import the components
import { CardPlaceholder, HeroPlaceholder } from '../components/PlaceholderImage';
import { getPlaceholderCollection } from '../utils/imageUtils';

// Generate a collection of images
const destinationImages = getPlaceholderCollection(3, 600, 400, 'nature');

// Use in your component
<HeroPlaceholder category="travel" alt="Beautiful landscape" />

<CardPlaceholder 
  category="city" 
  text="Cape Town" 
  useTextOverlay={true}
  bgColor="#1976D2"
  alt="Cape Town"
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
