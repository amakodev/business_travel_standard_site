import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import { fadeIn, fadeInUp, staggerContainer } from '../animations/transitions';
import { HeroPlaceholder, CardPlaceholder, GalleryPlaceholder } from '../components/PlaceholderImage';
import { getPlaceholderCollection } from '../utils/imageUtils';

const Services: React.FC = () => {
  // Generate placeholder images for services
  const serviceImages = getPlaceholderCollection(5, 600, 400, 'travel');

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroImageContainer>
          <HeroPlaceholder 
            category="travel" 
            alt="Premium Travel Services"
            animate={false}
          />
        </HeroImageContainer>
        <Container>
          <HeroContent
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SectionSubtitle>Our Services</SectionSubtitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <HeroTitle>Premium Travel Services</HeroTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <HeroDescription>
                Discover our comprehensive range of travel services designed to create unforgettable South African experiences.
              </HeroDescription>
            </motion.div>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Services List Section */}
      <ServicesListSection>
        <Container>
          <SectionContent>
            <ServicesGrid>
              <ServiceItem
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                <ServiceImage variants={fadeIn}>
                  <CardPlaceholder 
                    category="travel" 
                    alt="Flight Booking Services"
                  />
                </ServiceImage>
                <ServiceInfo variants={fadeInUp}>
                  <ServiceTitle>Flight Booking</ServiceTitle>
                  <ServiceDescription>
                    <p>At Restro Travel, we take the stress out of flight bookings by providing a seamless service that ensures you get the best value for your journey to South Africa and beyond.</p>
                    <p>Our partnerships with major airlines allow us to offer competitive rates on international and domestic flights, with flexible booking options to accommodate your travel plans.</p>
                    <ServiceFeatures>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Best price guarantees on flights</ServiceFeatureText>
                      </ServiceFeature>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Flexible booking options</ServiceFeatureText>
                      </ServiceFeature>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Assistance with special requests</ServiceFeatureText>
                      </ServiceFeature>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>24/7 support for flight changes</ServiceFeatureText>
                      </ServiceFeature>
                    </ServiceFeatures>
                  </ServiceDescription>
                  <Button as={Link} to="/contact" variant="primary">Inquire Now</Button>
                </ServiceInfo>
              </ServiceItem>

              <ServiceItem
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                <ServiceInfo variants={fadeInUp}>
                  <ServiceTitle>Accommodation</ServiceTitle>
                  <ServiceDescription>
                    <p>From luxury hotels with panoramic views of Table Mountain to boutique guesthouses in the Cape Winelands, we offer a curated selection of accommodations to suit every preference and budget.</p>
                    <p>Our team personally inspects each property to ensure it meets our high standards of comfort, service, and location, providing you with a truly memorable stay in South Africa.</p>
                    <ServiceFeatures>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Handpicked quality accommodations</ServiceFeatureText>
                      </ServiceFeature>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Options for all budgets</ServiceFeatureText>
                      </ServiceFeature>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Special amenities for our clients</ServiceFeatureText>
                      </ServiceFeature>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Personalized recommendations</ServiceFeatureText>
                      </ServiceFeature>
                    </ServiceFeatures>
                  </ServiceDescription>
                  <Button as={Link} to="/contact" variant="primary">Inquire Now</Button>
                </ServiceInfo>
                <ServiceImage variants={fadeIn}>
                  <CardPlaceholder 
                    category="architecture" 
                    alt="Luxury Accommodation"
                  />
                </ServiceImage>
              </ServiceItem>

              <ServiceItem
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                <ServiceImage variants={fadeIn}>
                  <CardPlaceholder 
                    category="nature" 
                    alt="Guided Tours"
                  />
                </ServiceImage>
                <ServiceInfo variants={fadeInUp}>
                  <ServiceTitle>Guided Tours</ServiceTitle>
                  <ServiceDescription>
                    <p>Experience South Africa through the eyes of our knowledgeable local guides who bring the region's rich history, culture, and natural beauty to life.</p>
                    <p>From walking tours of Cape Town's vibrant neighborhoods to wildlife safaris and wine tasting excursions, our guided tours offer authentic experiences that go beyond the typical tourist attractions.</p>
                    <ServiceFeatures>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Expert local guides</ServiceFeatureText>
                      </ServiceFeature>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Small group options available</ServiceFeatureText>
                      </ServiceFeature>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Private customized tours</ServiceFeatureText>
                      </ServiceFeature>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Access to exclusive experiences</ServiceFeatureText>
                      </ServiceFeature>
                    </ServiceFeatures>
                  </ServiceDescription>
                  <Button as={Link} to="/contact" variant="primary">Inquire Now</Button>
                </ServiceInfo>
              </ServiceItem>

              <ServiceItem
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                <ServiceInfo variants={fadeInUp}>
                  <ServiceTitle>Transportation</ServiceTitle>
                  <ServiceDescription>
                    <p>Navigate South Africa with ease with our comprehensive transportation services, from airport transfers to private drivers for your entire stay.</p>
                    <p>We work with reliable local operators to ensure comfortable, safe, and convenient travel throughout your journey, allowing you to focus on enjoying your South African adventure.</p>
                    <ServiceFeatures>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Airport transfers</ServiceFeatureText>
                      </ServiceFeature>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Private drivers and vehicles</ServiceFeatureText>
                      </ServiceFeature>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Car rental assistance</ServiceFeatureText>
                      </ServiceFeature>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Luxury vehicle options</ServiceFeatureText>
                      </ServiceFeature>
                    </ServiceFeatures>
                  </ServiceDescription>
                  <Button as={Link} to="/contact" variant="primary">Inquire Now</Button>
                </ServiceInfo>
                <ServiceImage variants={fadeIn}>
                  <CardPlaceholder 
                    category="city" 
                    alt="Transportation Services"
                  />
                </ServiceImage>
              </ServiceItem>

              <ServiceItem
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                <ServiceImage variants={fadeIn}>
                  <CardPlaceholder 
                    category="safari" 
                    alt="Custom Travel Packages"
                  />
                </ServiceImage>
                <ServiceInfo variants={fadeInUp}>
                  <ServiceTitle>Custom Travel Packages</ServiceTitle>
                  <ServiceDescription>
                    <p>Let us create a bespoke travel experience tailored specifically to your interests, preferences, and budget, combining the best of South Africa into a seamless itinerary.</p>
                    <p>Our travel experts work closely with you to design a personalized journey that captures the essence of South Africa, whether you're seeking adventure, relaxation, culture, or a mix of experiences.</p>
                    <ServiceFeatures>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Personalized itinerary planning</ServiceFeatureText>
                      </ServiceFeature>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>All-inclusive package options</ServiceFeatureText>
                      </ServiceFeature>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Special interest tours</ServiceFeatureText>
                      </ServiceFeature>
                      <ServiceFeature>
                        <ServiceFeatureIcon>✓</ServiceFeatureIcon>
                        <ServiceFeatureText>Multi-destination journeys</ServiceFeatureText>
                      </ServiceFeature>
                    </ServiceFeatures>
                  </ServiceDescription>
                  <Button as={Link} to="/contact" variant="primary">Inquire Now</Button>
                </ServiceInfo>
              </ServiceItem>
            </ServicesGrid>
          </SectionContent>
        </Container>
      </ServicesListSection>

      {/* CTA Section */}
      <CTASection>
        <Container>
          <CTAContent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <CTATitle>Ready to Book Your South African Adventure?</CTATitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CTADescription>
                Contact our travel experts today to start planning your perfect journey.
              </CTADescription>
            </motion.div>
            <CTAButtonGroup variants={fadeInUp}>
              <Button as={Link} to="/contact" variant="primary" size="large">
                Contact Us
              </Button>
              <Button as={Link} to="/packages" variant="outline" size="large">
                View Packages
              </Button>
            </CTAButtonGroup>
          </CTAContent>
        </Container>
      </CTASection>
    </PageWrapper>
  );
};

// Styled Components
const PageWrapper = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  width: 100%;
  height: 60vh;
  min-height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.white};
  margin-bottom: 4rem;
  overflow: hidden;
`;

const HeroImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
  z-index: -1;
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.2;
`;

const HeroDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesListSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.white};
`;

const SectionContent = styled.div`
  position: relative;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const ServicesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const ServiceItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  
  &:nth-child(even) {
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      direction: rtl;
      
      ${/* This ensures text alignment isn't affected by the rtl direction */ ""}
      * {
        direction: ltr;
      }
    }
  }
`;

const ServiceImage = styled(motion.div)`
  height: 400px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ServiceInfo = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0;
  }
`;

const ServiceTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
`;

const ServiceDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.darkGray};
    line-height: 1.7;
  }
`;

const ServiceFeatures = styled.ul`
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ServiceFeatureIcon = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

const ServiceFeatureText = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
`;

const CTASection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.black};
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/src/assets/images/cta-background.jpg');
  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.colors.white};
`;

const CTAContent = styled(motion.div)`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CTADescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.9;
`;

const CTAButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  justify-content: center;
`;

export default Services; 