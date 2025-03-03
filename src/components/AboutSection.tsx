import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from './Container';
import Button from './Button';
import { getAfricanTravelPlaceholder } from '../utils/imageUtils';

interface AboutSectionProps {
  showButton?: boolean;
  compact?: boolean;
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  showButton = true,
  compact = false,
  className
}) => {
  // Generate African-themed images for the about section
  const aboutImages = {
    main: getAfricanTravelPlaceholder(800, 600, 'city'),
    secondary: getAfricanTravelPlaceholder(400, 300, 'mountain')
  };

  return (
    <AboutWrapper className={className}>
      <Container>
        <AboutContent>
          <AboutTextContent>
            <AboutHeading>About Restro Travel</AboutHeading>
            <AboutSubheading>Your Gateway to South African Adventures</AboutSubheading>
            
            <AboutDescription>
              Founded in 2010, Restro Travel has grown to become one of South Africa's premier travel agencies, 
              specializing in curated experiences that showcase the best of Cape Town and beyond.
            </AboutDescription>
            
            {!compact && (
              <>
                <AboutDescription>
                  Our team of passionate local experts has intimate knowledge of South Africa's diverse landscapes, 
                  rich culture, and hidden gems. We pride ourselves on creating personalized travel experiences 
                  that go beyond the typical tourist routes.
                </AboutDescription>
                
                <AboutDescription>
                  Whether you're seeking a thrilling safari adventure, a relaxing beach getaway, or an immersive 
                  cultural experience, we design each itinerary with care and attention to detail, ensuring 
                  unforgettable memories for our clients.
                </AboutDescription>
              </>
            )}
            
            {showButton && (
              <AboutButton>
                <Button as={Link} to="/about" variant="primary">
                  Learn More About Us
                </Button>
              </AboutButton>
            )}
          </AboutTextContent>
          
          <AboutImageContent>
            <MainImageWrapper>
              <img src={aboutImages.main} alt="Cape Town skyline with Table Mountain" />
            </MainImageWrapper>
            
            {!compact && (
              <SecondaryImageWrapper>
                <img src={aboutImages.secondary} alt="South African landscape" />
              </SecondaryImageWrapper>
            )}
          </AboutImageContent>
        </AboutContent>
      </Container>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xl} 0`};
  background-color: ${({ theme }) => theme.colors.white};
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const AboutTextContent = styled.div`
  @media (min-width: 768px) {
    padding-right: ${({ theme }) => theme.spacing.xl};
  }
`;

const AboutHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const AboutSubheading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 500;
`;

const AboutDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const AboutButton = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const AboutImageContent = styled.div`
  position: relative;
`;

const MainImageWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  
  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;

const SecondaryImageWrapper = styled.div`
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 60%;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
  border: 5px solid ${({ theme }) => theme.colors.white};
  
  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export default AboutSection; 