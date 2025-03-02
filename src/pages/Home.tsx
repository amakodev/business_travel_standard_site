import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';

// Animation variants
const fadeInUp = {
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home: React.FC = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <Container>
          <HeroContent
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <HeroTagline>Discover South Africa</HeroTagline>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <HeroTitle>Explore The Beauty of Cape Town</HeroTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <HeroDescription>
                Experience the magic of South Africa with our handcrafted travel packages. 
                From stunning beaches to majestic wildlife, we bring you the best of Cape Town and beyond.
              </HeroDescription>
            </motion.div>
            <ButtonGroup variants={fadeInUp}>
              <Button as={Link} to="/packages" variant="primary" size="large">
                View Packages
              </Button>
              <Button as={Link} to="/about" variant="outline" size="large">
                Learn More
              </Button>
            </ButtonGroup>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Services Preview Section */}
      <ServicesSection>
        <Container>
          <SectionTitle>
            <TitleAccent>Premium</TitleAccent> Travel Services
          </SectionTitle>
          <SectionSubtitle>
            Experience the best of South African travel with our premium services
          </SectionSubtitle>
          
          <ServicesGrid
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <ServiceCard variants={fadeInUp}>
              <ServiceIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </ServiceIcon>
              <ServiceTitle>Flight Booking</ServiceTitle>
              <ServiceDescription>
                Get the best deals on international and domestic flights with our extensive network of airline partners.
              </ServiceDescription>
              <ServiceLink as={Link} to="/services">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
                </svg>
              </ServiceLink>
            </ServiceCard>
            
            <ServiceCard variants={fadeInUp}>
              <ServiceIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
                </svg>
              </ServiceIcon>
              <ServiceTitle>Hotel Reservations</ServiceTitle>
              <ServiceDescription>
                From luxury hotels to cozy guesthouses, we offer accommodations that fit your preferences and budget.
              </ServiceDescription>
              <ServiceLink as={Link} to="/services">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
                </svg>
              </ServiceLink>
            </ServiceCard>
            
            <ServiceCard variants={fadeInUp}>
              <ServiceIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
                </svg>
              </ServiceIcon>
              <ServiceTitle>Guided Tours</ServiceTitle>
              <ServiceDescription>
                Explore Cape Town with our knowledgeable local guides who bring the city's rich history and culture to life.
              </ServiceDescription>
              <ServiceLink as={Link} to="/services">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
                </svg>
              </ServiceLink>
            </ServiceCard>
            
            <ServiceCard variants={fadeInUp}>
              <ServiceIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" />
                </svg>
              </ServiceIcon>
              <ServiceTitle>Premium Packages</ServiceTitle>
              <ServiceDescription>
                Our all-inclusive packages combine flights, accommodations, and activities for a hassle-free travel experience.
              </ServiceDescription>
              <ServiceLink as={Link} to="/packages">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
                </svg>
              </ServiceLink>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </ServicesSection>

      {/* Featured Destinations */}
      <DestinationsSection>
        <Container>
          <SectionTitle>
            Popular <TitleAccent>Destinations</TitleAccent>
          </SectionTitle>
          <SectionSubtitle>
            Explore these incredible South African destinations with our exclusive travel packages
          </SectionSubtitle>
          
          <DestinationsGrid
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <DestinationCard variants={fadeInUp}>
              <DestinationImage>
                <img src="/src/assets/images/table-mountain.jpg" alt="Table Mountain" />
                <DestinationOverlay />
              </DestinationImage>
              <DestinationContent>
                <DestinationTitle>Table Mountain</DestinationTitle>
                <DestinationLocation>Cape Town</DestinationLocation>
                <DestinationLink as={Link} to="/packages">
                  View Packages
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
                  </svg>
                </DestinationLink>
              </DestinationContent>
            </DestinationCard>
            
            <DestinationCard variants={fadeInUp}>
              <DestinationImage>
                <img src="/src/assets/images/cape-winelands.jpg" alt="Cape Winelands" />
                <DestinationOverlay />
              </DestinationImage>
              <DestinationContent>
                <DestinationTitle>Cape Winelands</DestinationTitle>
                <DestinationLocation>Stellenbosch & Franschhoek</DestinationLocation>
                <DestinationLink as={Link} to="/packages">
                  View Packages
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
                  </svg>
                </DestinationLink>
              </DestinationContent>
            </DestinationCard>
            
            <DestinationCard variants={fadeInUp}>
              <DestinationImage>
                <img src="/src/assets/images/garden-route.jpg" alt="Garden Route" />
                <DestinationOverlay />
              </DestinationImage>
              <DestinationContent>
                <DestinationTitle>Garden Route</DestinationTitle>
                <DestinationLocation>Western & Eastern Cape</DestinationLocation>
                <DestinationLink as={Link} to="/packages">
                  View Packages
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
                  </svg>
                </DestinationLink>
              </DestinationContent>
            </DestinationCard>
          </DestinationsGrid>
          
          <ExploreMoreButton 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button as={Link} to="/packages" variant="primary" size="large">
              Explore All Destinations
            </Button>
          </ExploreMoreButton>
        </Container>
      </DestinationsSection>

      {/* Testimonials Section */}
      <TestimonialsSection>
        <Container>
          <SectionTitle>
            What Our <TitleAccent>Clients Say</TitleAccent>
          </SectionTitle>
          <SectionSubtitle>
            Hear from travelers who experienced our premium travel services
          </SectionSubtitle>
          
          <TestimonialsGrid
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <TestimonialCard variants={fadeInUp}>
              <TestimonialQuote>
                "Our trip to Cape Town was absolutely amazing! Restro Travel took care of everything from flights to accommodations. The Table Mountain tour was breathtaking and our guide was very knowledgeable."
              </TestimonialQuote>
              <TestimonialAuthor>
                <TestimonialAuthorName>Michael Johnson</TestimonialAuthorName>
                <TestimonialAuthorLocation>London, UK</TestimonialAuthorLocation>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard variants={fadeInUp}>
              <TestimonialQuote>
                "The wine tour arranged by Restro Travel was the highlight of our trip. We visited three beautiful vineyards in Stellenbosch and had an amazing experience. Highly recommend their services!"
              </TestimonialQuote>
              <TestimonialAuthor>
                <TestimonialAuthorName>Sarah Williams</TestimonialAuthorName>
                <TestimonialAuthorLocation>New York, USA</TestimonialAuthorLocation>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard variants={fadeInUp}>
              <TestimonialQuote>
                "From the moment we arrived in Cape Town, everything was perfectly organized. The accommodations were excellent, and the safari experience was unforgettable. Thank you Restro Travel!"
              </TestimonialQuote>
              <TestimonialAuthor>
                <TestimonialAuthorName>David Chen</TestimonialAuthorName>
                <TestimonialAuthorLocation>Singapore</TestimonialAuthorLocation>
              </TestimonialAuthor>
            </TestimonialCard>
          </TestimonialsGrid>
        </Container>
      </TestimonialsSection>

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
              <CTATitle>Ready to Start Your African Adventure?</CTATitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CTADescription>
                Let us help you plan the perfect trip to Cape Town and beyond.
                Contact our travel experts today to create your dream vacation.
              </CTADescription>
            </motion.div>
            <CTAButtonGroup variants={fadeInUp}>
              <Button as={Link} to="/contact" variant="primary" size="large">
                Contact Us Now
              </Button>
              <Button as={Link} to="/packages" variant="outline" size="large">
                Browse Packages
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
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  height: 100vh;
  min-height: 600px;
  background-image: url('/src/assets/images/cape-town-aerial.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  max-width: 650px;
  margin: 0 auto;
  text-align: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
    margin: 0;
  }
`;

const HeroTagline = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.2;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
  }
`;

const HeroDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.9;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  justify-content: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-start;
  }
`;

const ServicesSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.white};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.black};
`;

const TitleAccent = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
`;

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  transition: ${({ theme }) => theme.transition.normal};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.boxShadow.xl};
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.black};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-grow: 1;
`;

const ServiceLink = styled(Button)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background: none;
  border: none;
  padding: 0;
  font-weight: 600;
  
  svg {
    transition: ${({ theme }) => theme.transition.fast};
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

const DestinationsSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.offWhite};
`;

const DestinationsGrid = styled(motion.div)`
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

const DestinationCard = styled(motion.div)`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  background-color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transition.normal};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.boxShadow.xl};
    
    img {
      transform: scale(1.1);
    }
  }
`;

const DestinationImage = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ${({ theme }) => theme.transition.normal};
  }
`;

const DestinationOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
`;

const DestinationContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const DestinationTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const DestinationLocation = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const DestinationLink = styled(ServiceLink)``;

const ExploreMoreButton = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const TestimonialsSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.white};
`;

const TestimonialsGrid = styled(motion.div)`
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

const TestimonialCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
`;

const TestimonialQuote = styled.blockquote`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;
  
  &::before {
    content: '❝';
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.lightGray};
    position: absolute;
    top: -1.5rem;
    left: -0.8rem;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
`;

const TestimonialAuthorName = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;

const TestimonialAuthorLocation = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const CTASection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.black};
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/src/assets/images/cta-background.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
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

const CTAButtonGroup = styled(ButtonGroup)`
  justify-content: center;
`;

export default Home; 