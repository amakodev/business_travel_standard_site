import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from './Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterLogoSection>
            <FooterLogo to="/">
              Restro<FooterLogoAccent>Travel</FooterLogoAccent>
            </FooterLogo>
            <FooterTagline>
              Experience the beauty of Cape Town and beyond with our premium travel services.
            </FooterTagline>
            <SocialLinks>
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.977.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.977-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.977-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.469a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>
              </SocialLink>
            </SocialLinks>
          </FooterLogoSection>
          
          <FooterLinksSection>
            <FooterNavColumn>
              <FooterNavTitle>Quick Links</FooterNavTitle>
              <FooterNavList>
                <FooterNavItem>
                  <FooterNavLink to="/">Home</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/about">About Us</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/services">Our Services</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/packages">Travel Packages</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/contact">Contact Us</FooterNavLink>
                </FooterNavItem>
              </FooterNavList>
            </FooterNavColumn>
            
            <FooterNavColumn>
              <FooterNavTitle>Services</FooterNavTitle>
              <FooterNavList>
                <FooterNavItem>
                  <FooterNavLink to="/services">Flight Booking</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/services">Hotel Reservation</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/services">Guided Tours</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/insurance">Travel Insurance</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/services">Transportation</FooterNavLink>
                </FooterNavItem>
              </FooterNavList>
            </FooterNavColumn>
            
            <FooterNavColumn>
              <FooterNavTitle>Contact</FooterNavTitle>
              <ContactInfo>
                <ContactItem>
                  <ContactIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                  </ContactIcon>
                  <ContactText>123 Long Street, Cape Town, South Africa</ContactText>
                </ContactItem>
                <ContactItem>
                  <ContactIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </ContactIcon>
                  <ContactText>info@restrotravel.co.za</ContactText>
                </ContactItem>
                <ContactItem>
                  <ContactIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"/></svg>
                  </ContactIcon>
                  <ContactText>+27 (0) 21 123 4567</ContactText>
                </ContactItem>
                <ContactItem>
                  <ContactIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                  </ContactIcon>
                  <ContactText>Mon-Fri: 9:00 AM - 6:00 PM</ContactText>
                </ContactItem>
              </ContactInfo>
            </FooterNavColumn>
          </FooterLinksSection>
        </FooterContent>
        
        <Divider />
        
        <FooterBottom>
          <Copyright>
            © {currentYear} Restro Travel. All rights reserved.
          </Copyright>
          <FooterTerms>
            <FooterTermsLink to="/privacy-policy">Privacy Policy</FooterTermsLink>
            <FooterTermsLink to="/terms-of-service">Terms of Service</FooterTermsLink>
          </FooterTerms>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.lg};
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 2fr;
  }
`;

const FooterLogoSection = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-right: ${({ theme }) => theme.spacing.lg};
  }
`;

const FooterLogo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: inline-block;
`;

const FooterLogoAccent = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const FooterTagline = styled.p`
  color: ${({ theme }) => theme.colors.mediumGray};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transition.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const FooterLinksSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FooterNavColumn = styled.div``;

const FooterNavTitle = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FooterNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterNavItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const FooterNavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.mediumGray};
  text-decoration: none;
  transition: ${({ theme }) => theme.transition.fast};
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(5px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ContactIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 3px;
`;

const ContactText = styled.p`
  color: ${({ theme }) => theme.colors.mediumGray};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.md};
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.mediumGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0;
  }
`;

const FooterTerms = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FooterTermsLink = styled(Link)`
  color: ${({ theme }) => theme.colors.mediumGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-decoration: none;
  transition: ${({ theme }) => theme.transition.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Footer; 