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
            <Logo>Restro<Accent>Travel</Accent></Logo>
          </LogoContainer>
          
          <DesktopNav>
            <NavList>
              <NavItem>
                <NavLink to="/" $isActive={location.pathname === '/'}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" $isActive={location.pathname === '/about'}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/services" $isActive={location.pathname === '/services'}>Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/team" $isActive={location.pathname === '/team'}>The Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/promotions" $isActive={location.pathname === '/promotions'}>Promotions</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/insurance" $isActive={location.pathname === '/insurance'}>Travel Insurance</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/packages" $isActive={location.pathname === '/packages'}>Packages</NavLink>
              </NavItem>
            </NavList>
          </DesktopNav>
          
          <MenuButton onClick={toggleMenu} aria-label="Toggle menu">
            <MenuIcon isOpen={isOpen}>
              <span></span>
              <span></span>
              <span></span>
            </MenuIcon>
          </MenuButton>
          
          <ContactButton>
            <Button as={Link} to="mailto:info@restrotravel.co.za" variant="primary" size="small">
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
    transparent && !scrolled ? 'transparent' : theme.colors.white};
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

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
`;

const Accent = styled.span`
  color: ${({ theme }) => theme.colors.primary};
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
}

const NavLink = styled(Link)<NavLinkProps>`
  display: block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.primary : theme.colors.black};
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '400')};
  text-decoration: none;
  transition: ${({ theme }) => theme.transition.fast};
  
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

const MenuButton = styled.button`
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
}

const MenuIcon = styled.div<MenuIconProps>`
  width: 24px;
  height: 16px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    
    &:nth-child(1) {
      top: ${({ isOpen }) => (isOpen ? '7px' : '0px')};
      transform: ${({ isOpen }) => (isOpen ? 'rotate(135deg)' : 'none')};
    }
    
    &:nth-child(2) {
      top: 7px;
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      left: ${({ isOpen }) => (isOpen ? '-60px' : '0')};
    }
    
    &:nth-child(3) {
      top: ${({ isOpen }) => (isOpen ? '7px' : '14px')};
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-135deg)' : 'none')};
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
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
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

const MobileNavLink = styled(NavLink)`
  display: block;
  padding: ${({ theme }) => theme.spacing.sm};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  
  &::after {
    display: none;
  }
`;

const MobileNavButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export default Header; 