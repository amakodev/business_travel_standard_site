import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

interface GlobalStylesProps {
  theme: Theme;
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&family=Ubuntu:wght@300;400;500;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.offWhite};
    color: ${({ theme }) => theme.colors.black};
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    &.loading {
      overflow: hidden;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transition.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  img, video {
    max-width: 100%;
    height: auto;
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  ul, ol {
    list-style: none;
  }

  /* Container widths */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  /* Utility classes */
  .text-center {
    text-align: center;
  }

  .text-primary {
    color: ${({ theme }) => theme.colors.primary};
  }

  .text-secondary {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }

  .mb-1 {
    margin-bottom: ${({ theme }) => theme.spacing.xs} !important;
  }

  .mb-2 {
    margin-bottom: ${({ theme }) => theme.spacing.sm} !important;
  }

  .mb-3 {
    margin-bottom: ${({ theme }) => theme.spacing.md} !important;
  }

  .mb-4 {
    margin-bottom: ${({ theme }) => theme.spacing.lg} !important;
  }

  .mb-5 {
    margin-bottom: ${({ theme }) => theme.spacing.xl} !important;
  }

  .pt-0 {
    padding-top: 0 !important;
  }

  .pt-1 {
    padding-top: ${({ theme }) => theme.spacing.xs} !important;
  }

  .pt-2 {
    padding-top: ${({ theme }) => theme.spacing.sm} !important;
  }

  .pt-3 {
    padding-top: ${({ theme }) => theme.spacing.md} !important;
  }

  .pt-4 {
    padding-top: ${({ theme }) => theme.spacing.lg} !important;
  }

  .pt-5 {
    padding-top: ${({ theme }) => theme.spacing.xl} !important;
  }

  /* Page Loader Styles */
  .page-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: ${({ theme }) => theme.zIndex.modal};
  }

  .loader-spinner {
    width: 50px;
    height: 50px;
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: ${({ theme }) => theme.colors.primary};
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUpFade {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Barba.js page transition classes */
  .barba-container {
    position: relative;
  }

  [data-barba="container"] {
    opacity: 1;
    transition: opacity 0.3s ease;
    
    &.barba-leave {
      opacity: 0;
    }
    
    &.barba-enter {
      opacity: 0;
    }
  }

  /* Image Optimizations */
  img {
    will-change: transform;
    transform: translateZ(0);
  }

  /* Improved scrolling */
  * {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
  }
`;

export default GlobalStyles; 