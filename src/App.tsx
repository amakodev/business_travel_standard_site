import React, { useEffect, useRef } from 'react';
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

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Promotions from './pages/Promotions';
import TravelInsurance from './pages/TravelInsurance';
import Packages from './pages/Packages';

// Barba.js transitions
const initBarba = () => {
  // Make sure the barba wrapper exists before initializing
  if (document.querySelector('[data-barba="wrapper"]')) {
    barba.init({
      transitions: [
        {
          name: 'default-transition',
          leave(data: any) {
            return new Promise<void>(resolve => {
              const done = resolve;
              // Fade out current page
              const current = data.current.container;
              current.style.opacity = '0';
              current.style.transition = 'opacity 0.5s';
              
              setTimeout(done, 500);
            });
          },
          enter(data: any) {
            return new Promise<void>(resolve => {
              const done = resolve;
              // Fade in new page
              const next = data.next.container;
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
        }
      ]
    });
  } else {
    console.warn('Barba wrapper not found. Skipping initialization.');
  }
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
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <div ref={barbaWrapperRef} data-barba="wrapper">
        <Router>
          <Layout>
            <AnimatePresence mode="wait">
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
