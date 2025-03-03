import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';
import Button from './Button';

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  // Add scroll event listener to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Determine if we should use transparent styling
  const useTransparentStyle = transparent && !scrolled;
  
  return (
    <HeaderWrapper 
      transparent={transparent} 
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      <Container>
        <NavContainer>
          <LogoContainer to="/">
            <Logo $transparent={useTransparentStyle}>
              Restro<Accent $transparent={useTransparentStyle}>Travel</Accent>
            </Logo>
          </LogoContainer>
          
          <DesktopNav>
            <NavList>
              <NavItem>
                <NavLink 
                  to="/" 
                  $isActive={location.pathname === '/'} 
                  $transparent={useTransparentStyle}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  to="/about" 
                  $isActive={location.pathname === '/about'} 
                  $transparent={useTransparentStyle}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  to="/services" 
                  $isActive={location.pathname === '/services'} 
                  $transparent={useTransparentStyle}
                >
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  to="/team" 
                  $isActive={location.pathname === '/team'} 
                  $transparent={useTransparentStyle}
                >
                  The Team
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  to="/promotions" 
                  $isActive={location.pathname === '/promotions'} 
                  $transparent={useTransparentStyle}
                >
                  Promotions
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  to="/insurance" 
                  $isActive={location.pathname === '/insurance'} 
                  $transparent={useTransparentStyle}
                >
                  Travel Insurance
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  to="/packages" 
                  $isActive={location.pathname === '/packages'} 
                  $transparent={useTransparentStyle}
                >
                  Packages
                </NavLink>
              </NavItem>
            </NavList>
          </DesktopNav>
          
          <MenuButton onClick={toggleMenu} aria-label="Toggle menu" $transparent={useTransparentStyle}>
            <MenuIcon isOpen={isOpen} $transparent={useTransparentStyle}>
              <span></span>
              <span></span>
              <span></span>
            </MenuIcon>
          </MenuButton>
          
          <ContactButton>
            <Button 
              as={Link} 
              to="mailto:info@restrotravel.co.za" 
              variant={useTransparentStyle ? "outline" : "primary"} 
              size="small"
            >
              Contact Us
            </Button>
          </ContactButton>
        </NavContainer>
      </Container>
      
      <AnimatePresence>
        {isOpen && (
          <MobileNav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Container>
              <MobileNavList>
                <MobileNavItem>
                  <MobileNavLink to="/" $isActive={location.pathname === '/'}>Home</MobileNavLink>
                </MobileNavItem>
                <MobileNavItem>
                  <MobileNavLink to="/about" $isActive={location.pathname === '/about'}>About</MobileNavLink>
                </MobileNavItem>
                <MobileNavItem>
                  <MobileNavLink to="/services" $isActive={location.pathname === '/services'}>Services</MobileNavLink>
                </MobileNavItem>
                <MobileNavItem>
                  <MobileNavLink to="/team" $isActive={location.pathname === '/team'}>The Team</MobileNavLink>
                </MobileNavItem>
                <MobileNavItem>
                  <MobileNavLink to="/promotions" $isActive={location.pathname === '/promotions'}>Promotions</MobileNavLink>
                </MobileNavItem>
                <MobileNavItem>
                  <MobileNavLink to="/insurance" $isActive={location.pathname === '/insurance'}>Travel Insurance</MobileNavLink>
                </MobileNavItem>
                <MobileNavItem>
                  <MobileNavLink to="/packages" $isActive={location.pathname === '/packages'}>Packages</MobileNavLink>
                </MobileNavItem>
                <MobileNavItem>
                  <MobileNavButton as={Link} to="/contact" variant="primary" fullWidth>
                    Contact Us
                  </MobileNavButton>
                </MobileNavItem>
              </MobileNavList>
            </Container>
          </MobileNav>
        )}
      </AnimatePresence>
    </HeaderWrapper>
  );
};

interface HeaderWrapperProps {
  transparent: boolean;
  scrolled: boolean;
}

const HeaderWrapper = styled(motion.header)<HeaderWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  background-color: ${({ transparent, scrolled, theme }) => 
    transparent && !scrolled ? 'rgba(0, 0, 0, 0.15)' : theme.colors.white};
  backdrop-filter: ${({ transparent, scrolled }) => 
    transparent && !scrolled ? 'blur(5px)' : 'none'};
  -webkit-backdrop-filter: ${({ transparent, scrolled }) => 
    transparent && !scrolled ? 'blur(5px)' : 'none'};
  box-shadow: ${({ transparent, scrolled, theme }) => 
    transparent && !scrolled ? 'none' : `0 2px 10px rgba(0, 0, 0, 0.1)`};
  transition: ${({ theme }) => theme.transition.normal};
  height: 80px;
  display: flex;
  align-items: center;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

interface LogoProps {
  $transparent?: boolean;
}

const Logo = styled.h1<LogoProps>`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  margin: 0;
  color: ${({ $transparent, theme }) => 
    $transparent ? theme.colors.white : theme.colors.black};
  text-shadow: ${({ $transparent, theme }) => 
    $transparent ? `0 1px 3px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.2)` : 'none'};
  transition: color 0.3s ease, text-shadow 0.3s ease;
`;

interface AccentProps {
  $transparent?: boolean;
}

const Accent = styled.span<AccentProps>`
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: ${({ $transparent, theme }) => 
    $transparent ? `0 1px 3px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.2)` : 'none'};
  transition: text-shadow 0.3s ease;
`;

const DesktopNav = styled.nav`
  display: none;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  position: relative;
`;

interface NavLinkProps {
  $isActive: boolean;
  $transparent?: boolean;
}

const NavLink = styled(Link)<NavLinkProps>`
  display: block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  color: ${({ $isActive, $transparent, theme }) => 
    $isActive 
      ? theme.colors.primary 
      : ($transparent ? theme.colors.white : theme.colors.dark)};
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '500')};
  text-decoration: none;
  transition: ${({ theme }) => theme.transition.fast};
  text-shadow: ${({ $transparent, theme }) => 
    $transparent ? `0 1px 3px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.2)` : 'none'};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transition.fast};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    
    &::after {
      width: 100%;
    }
  }
`;

interface MenuButtonProps {
  $transparent?: boolean;
}

const MenuButton = styled.button<MenuButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  margin-left: auto;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

interface MenuIconProps {
  isOpen: boolean;
  $transparent?: boolean;
}

const MenuIcon = styled.div<MenuIconProps>`
  width: 24px;
  height: 18px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: ${({ $transparent, theme }) => 
      $transparent ? theme.colors.white : theme.colors.black};
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    
    &:nth-child(1) {
      top: ${({ isOpen }) => isOpen ? '8px' : '0px'};
      transform: ${({ isOpen }) => isOpen ? 'rotate(135deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      top: 8px;
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      top: ${({ isOpen }) => isOpen ? '8px' : '16px'};
      transform: ${({ isOpen }) => isOpen ? 'rotate(-135deg)' : 'rotate(0)'};
    }
  }
`;

const ContactButton = styled.div`
  display: none;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    margin-left: ${({ theme }) => theme.spacing.md};
  }
`;

const MobileNav = styled(motion.nav)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: ${({ theme }) => theme.spacing.md} 0;
`;

const MobileNavItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  &:last-child {
    margin-top: ${({ theme }) => theme.spacing.md};
    margin-bottom: 0;
  }
`;

interface MobileNavLinkProps {
  $isActive: boolean;
}

const MobileNavLink = styled(Link)<MobileNavLinkProps>`
  display: block;
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.primary : theme.colors.dark};
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '500')};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  transition: ${({ theme }) => theme.transition.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.offWhite};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileNavButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export default Header; 