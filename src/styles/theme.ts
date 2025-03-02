// Theme configuration for Restro Travel website
// Colors reflect South African and Cape Town vibes with travel aesthetics

export const theme = {
  colors: {
    // Primary colors
    primary: '#E94E1B',     // Vibrant orange - representative of African sunsets
    secondary: '#1B75BB',   // Ocean blue - representing Cape Town's coastline
    tertiary: '#28A745',    // Green - symbolizing South African landscapes
    
    // Neutral colors
    white: '#FFFFFF',
    offWhite: '#F8F9FA',
    lightGray: '#E9ECEF',
    mediumGray: '#CED4DA',
    darkGray: '#6C757D',
    black: '#212529',
    
    // Accent colors
    accent1: '#FFD700',     // Gold - luxury travel
    accent2: '#7D3C98',     // Purple - premium service
    accent3: '#F39C12',     // Amber - warmth and hospitality
    
    // Status colors
    success: '#28A745',
    warning: '#FFC107',
    danger: '#DC3545',
    info: '#17A2B8',
  },
  
  fonts: {
    heading: '"Montserrat", sans-serif',
    body: '"Open Sans", sans-serif',
    accent: '"Ubuntu", sans-serif',
  },
  
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    md: '1rem',       // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
  },
  
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
  },
  
  borderRadius: {
    sm: '0.125rem',   // 2px
    md: '0.25rem',    // 4px
    lg: '0.5rem',     // 8px
    xl: '1rem',       // 16px
    circle: '50%',
    pill: '9999px',
  },
  
  boxShadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
  },
  
  transition: {
    fast: 'all 0.2s ease',
    normal: 'all 0.3s ease',
    slow: 'all 0.5s ease',
  },
  
  zIndex: {
    hide: -1,
    base: 0,
    raised: 1,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
};

export type Theme = typeof theme; 