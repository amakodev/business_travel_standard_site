import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import barba from '@barba/core';
import { AnimatePresence } from 'framer-motion';

// Styles
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import VoiceIntroduction from './components/VoiceIntroduction';

// Utils
import { prefetchWhenIdle } from './utils/prefetch';
import { setupLazyImageLoading, preloadCriticalImages } from './utils/imageOptimization';

// Lazy-load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Team = lazy(() => import('./pages/Team'));
const Promotions = lazy(() => import('./pages/Promotions'));
const TravelInsurance = lazy(() => import('./pages/TravelInsurance'));
const Packages = lazy(() => import('./pages/Packages'));

// Loading component for suspense fallback
const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-spinner"></div>
  </div>
);

// Critical images to preload
const criticalImages = [
  '/assets/images/hero-bg.jpg',
  '/assets/images/logo.svg'
];

// Barba.js transitions
const initBarba = () => {
  // Make sure the barba wrapper exists before initializing
  if (document.querySelector('[data-barba="wrapper"]')) {
    barba.init({
      preventRunning: true, // Prevent transitions from running simultaneously
      transitions: [
        {
          name: 'default-transition',
          leave(data: any) {
            return new Promise<void>(resolve => {
              const done = resolve;
              
              // Use CSS animations for better performance
              const current = data.current.container;
              requestAnimationFrame(() => {
                current.classList.add('barba-leave');
                setTimeout(done, 500);
              });
            });
          },
          enter(data: any) {
            return new Promise<void>(resolve => {
              const done = resolve;
              
              // Use CSS animations for better performance
              const next = data.next.container;
              next.classList.add('barba-enter');
              
              // Scroll to top on page change - smooth and performant
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
              
              requestAnimationFrame(() => {
                setTimeout(() => {
                  next.classList.remove('barba-enter');
                  done();
                }, 50);
              });
            });
          },
          after() {
            // Force layout recalculation to prevent paint issues
            window.dispatchEvent(new Event('resize'));
          }
        }
      ],
      views: [
        {
          namespace: 'home',
          beforeEnter() {
            // Pre-load critical resources for the home page
            document.body.classList.add('is-home');
          },
          afterLeave() {
            document.body.classList.remove('is-home');
          }
        }
      ]
    });
  } else {
    console.warn('Barba wrapper not found. Skipping initialization.');
  }
};

// Route change detection component
const RouteChangeHandler = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Set up lazy loading for images after route change
    setTimeout(() => {
      setupLazyImageLoading();
    }, 200);
    
    // Prefetch related pages based on current route
    if (location.pathname === '/') {
      // When on home, prefetch most commonly visited pages with delay
      prefetchWhenIdle(() => import('./pages/About'), 1000);
      prefetchWhenIdle(() => import('./pages/Services'), 1500);
    } else if (location.pathname === '/about') {
      // When on about, prefetch team and services
      prefetchWhenIdle(() => import('./pages/Team'), 500);
      prefetchWhenIdle(() => import('./pages/Services'), 800);
    } else if (location.pathname === '/services') {
      // When on services, prefetch packages and insurance
      prefetchWhenIdle(() => import('./pages/Packages'), 500);
      prefetchWhenIdle(() => import('./pages/TravelInsurance'), 800);
    }

    // Force repaint to prevent visual glitches
    window.dispatchEvent(new Event('resize'));
    
    // Scroll to top on page change with option for smooth scrolling
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);
  
  return null;
};

// Layout wrapper
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  // Determine if current page is home to make header transparent
  const isHome = location.pathname === '/';
  
  return (
    <>
      <Header transparent={isHome} />
      <main data-barba="container" data-barba-namespace={location.pathname.replace('/', '') || 'home'}>
        {children}
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  const barbaWrapperRef = useRef<HTMLDivElement>(null);
  
  // Initialize Barba.js on component mount
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initBarba();
      
      // Set up image optimizations
      setupLazyImageLoading();
      preloadCriticalImages(criticalImages);
    }, 100);
    
    // Preload critical assets
    prefetchWhenIdle(() => import('./pages/About'), 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <div ref={barbaWrapperRef} data-barba="wrapper">
        <Router>
          <RouteChangeHandler />
          <Layout>
            <AnimatePresence mode="wait">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/promotions" element={<Promotions />} />
                  <Route path="/insurance" element={<TravelInsurance />} />
                  <Route path="/packages" element={<Packages />} />
                  {/* Other routes will be added here as we create the pages */}
                </Routes>
              </Suspense>
            </AnimatePresence>
          </Layout>
          {/* Voice Introduction will be available on all pages */}
          <VoiceIntroduction />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
