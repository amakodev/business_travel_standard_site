import { Transition } from '@barba/core';

// Page transition variants for Framer Motion
export const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.9],
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

// Section entry animations
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Create barba.js transitions
export const createBarbaTransitions = (): Transition[] => [
  {
    name: 'default-transition',
    leave(data) {
      return new Promise(resolve => {
        const done = resolve;
        
        // Fade out current page
        const current = data.current.container as HTMLElement;
        current.style.opacity = '0';
        current.style.transition = 'opacity 0.5s';
        
        setTimeout(done, 500);
      });
    },
    enter(data) {
      return new Promise(resolve => {
        const done = resolve;
        
        // Fade in new page
        const next = data.next.container as HTMLElement;
        next.style.opacity = '0';
        next.style.transition = 'opacity 0.5s';
        
        // Scroll to top on page change
        window.scrollTo(0, 0);
        
        setTimeout(() => {
          next.style.opacity = '1';
          done();
        }, 50);
      });
    }
  },
  {
    name: 'home-to-about',
    from: { route: '/' },
    to: { route: '/about' },
    leave(data) {
      return new Promise(resolve => {
        const done = resolve;
        
        // Custom transition for home to about
        const current = data.current.container as HTMLElement;
        current.style.opacity = '0';
        current.style.transition = 'opacity 0.7s';
        
        setTimeout(done, 700);
      });
    },
    enter(data) {
      return new Promise(resolve => {
        const done = resolve;
        
        // Custom entry for about page
        const next = data.next.container as HTMLElement;
        next.style.opacity = '0';
        next.style.transform = 'translateY(20px)';
        next.style.transition = 'opacity 0.5s, transform 0.5s';
        
        window.scrollTo(0, 0);
        
        setTimeout(() => {
          next.style.opacity = '1';
          next.style.transform = 'translateY(0)';
          done();
        }, 50);
      });
    }
  }
];

// Scroll to element utility
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Reveal elements on scroll utility
export const revealOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

export const intersectionObserverConfig = {
  threshold: 0.2,
  triggerOnce: true,
};

// Type definitions
export interface PageProps {
  transitionState?: string;
} 