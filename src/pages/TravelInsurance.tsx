import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import { fadeIn, fadeInUp, staggerContainer } from '../animations/transitions';
import { HeroPlaceholder, CardPlaceholder } from '../components/PlaceholderImage';
import { getAfricanTravelPlaceholder } from '../utils/imageUtils';

const TravelInsurance: React.FC = () => {
  // Get specific African-themed images for insurance cards
  const insuranceImages = {
    standard: getAfricanTravelPlaceholder(400, 300, 'city'),
    premium: getAfricanTravelPlaceholder(400, 300, 'safari'),
    family: getAfricanTravelPlaceholder(400, 300, 'beach')
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroImageContainer>
          <HeroPlaceholder 
            category="travel" 
            alt="Travel insurance protection"
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
              <SectionSubtitle>Peace of Mind</SectionSubtitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <HeroTitle>Travel Insurance Coverage</HeroTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <HeroDescription>
                Protect your journey with our comprehensive travel insurance options designed specifically for South African adventures.
              </HeroDescription>
            </motion.div>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Insurance Options Section */}
      <InsuranceOptionsSection>
        <Container>
          <SectionContent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SectionTitle>Coverage Options</SectionTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SectionSubheading>Comprehensive Protection for Your Journey</SectionSubheading>
            </motion.div>
            
            <PlanGrid>
              <PlanCard variants={fadeInUp}>
                <PlanImageWrapper>
                  <img src={insuranceImages.standard} alt="Standard coverage plan" />
                </PlanImageWrapper>
                <PlanBadge>Most Popular</PlanBadge>
                <PlanType>Standard Coverage</PlanType>
                <PlanPrice>R350<span>/person</span></PlanPrice>
                <PlanFeatures>
                  <PlanFeature>Medical emergencies up to R5 million</PlanFeature>
                  <PlanFeature>Trip cancellation protection</PlanFeature>
                  <PlanFeature>Luggage coverage up to R15,000</PlanFeature>
                  <PlanFeature>24/7 emergency assistance</PlanFeature>
                  <PlanFeature>Flight delay compensation</PlanFeature>
                </PlanFeatures>
                <Button as={Link} to="/contact" variant="primary" fullWidth>
                  Select Plan
                </Button>
              </PlanCard>

              <PlanCard variants={fadeInUp}>
                <PlanImageWrapper>
                  <img src={insuranceImages.premium} alt="Premium coverage plan" />
                </PlanImageWrapper>
                <PlanType>Premium Coverage</PlanType>
                <PlanPrice>R650<span>/person</span></PlanPrice>
                <PlanFeatures>
                  <PlanFeature>Medical emergencies up to R10 million</PlanFeature>
                  <PlanFeature>Trip cancellation protection</PlanFeature>
                  <PlanFeature>Luggage coverage up to R30,000</PlanFeature>
                  <PlanFeature>24/7 emergency assistance</PlanFeature>
                  <PlanFeature>Flight delay compensation</PlanFeature>
                  <PlanFeature>Adventure activities coverage</PlanFeature>
                  <PlanFeature>Rental car excess coverage</PlanFeature>
                </PlanFeatures>
                <Button as={Link} to="/contact" variant="primary" fullWidth>
                  Select Plan
                </Button>
              </PlanCard>

              <PlanCard variants={fadeInUp}>
                <PlanImageWrapper>
                  <img src={insuranceImages.family} alt="Family coverage plan" />
                </PlanImageWrapper>
                <PlanType>Family Coverage</PlanType>
                <PlanPrice>R1,200<span>/family</span></PlanPrice>
                <PlanFeatures>
                  <PlanFeature>Coverage for up to 2 adults and 3 children</PlanFeature>
                  <PlanFeature>Medical emergencies up to R8 million per person</PlanFeature>
                  <PlanFeature>Trip cancellation protection</PlanFeature>
                  <PlanFeature>Luggage coverage up to R25,000 per person</PlanFeature>
                  <PlanFeature>24/7 emergency assistance</PlanFeature>
                  <PlanFeature>Child-specific coverage benefits</PlanFeature>
                </PlanFeatures>
                <Button as={Link} to="/contact" variant="primary" fullWidth>
                  Select Plan
                </Button>
              </PlanCard>
            </PlanGrid>
          </SectionContent>
        </Container>
      </InsuranceOptionsSection>

      {/* Coverage Details Section */}
      <CoverageDetailsSection>
        <Container>
          <SectionContent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SectionTitle>What's Covered</SectionTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SectionSubheading>Comprehensive Protection for Every Situation</SectionSubheading>
            </motion.div>

            <CoverageGrid>
              <CoverageItem variants={fadeInUp}>
                <CoverageIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </CoverageIcon>
                <CoverageTitle>Medical Emergencies</CoverageTitle>
                <CoverageDescription>
                  Coverage for emergency medical treatment, hospital stays, and emergency medical evacuation.
                </CoverageDescription>
              </CoverageItem>

              <CoverageItem variants={fadeInUp}>
                <CoverageIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                    <path fill="currentColor" d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 15H4v-2h16v2zm0-5H4V8h16v6z" />
                  </svg>
                </CoverageIcon>
                <CoverageTitle>Lost or Damaged Luggage</CoverageTitle>
                <CoverageDescription>
                  Compensation for lost, stolen, or damaged baggage during your journey.
                </CoverageDescription>
              </CoverageItem>

              <CoverageItem variants={fadeInUp}>
                <CoverageIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                    <path fill="currentColor" d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
                  </svg>
                </CoverageIcon>
                <CoverageTitle>Trip Cancellation</CoverageTitle>
                <CoverageDescription>
                  Reimbursement for prepaid, non-refundable expenses if you need to cancel your trip.
                </CoverageDescription>
              </CoverageItem>

              <CoverageItem variants={fadeInUp}>
                <CoverageIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                    <path fill="currentColor" d="M17 5H3c-1.1 0-2 .9-2 2v9h2c0 1.65 1.35 3 3 3s3-1.35 3-3h5.5c0 1.65 1.35 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z" />
                  </svg>
                </CoverageIcon>
                <CoverageTitle>Travel Delays</CoverageTitle>
                <CoverageDescription>
                  Coverage for additional expenses caused by significant travel delays.
                </CoverageDescription>
              </CoverageItem>
            </CoverageGrid>
          </SectionContent>
        </Container>
      </CoverageDetailsSection>

      {/* FAQ Section */}
      <FAQSection>
        <Container>
          <SectionContent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SectionTitle>Frequently Asked Questions</SectionTitle>
            </motion.div>
            
            <FAQList>
              <FAQItem variants={fadeInUp}>
                <FAQQuestion>When should I purchase travel insurance?</FAQQuestion>
                <FAQAnswer>
                  We recommend purchasing travel insurance as soon as you book your trip to maximize coverage for trip cancellation and pre-existing conditions.
                </FAQAnswer>
              </FAQItem>
              
              <FAQItem variants={fadeInUp}>
                <FAQQuestion>Are adventure activities covered?</FAQQuestion>
                <FAQAnswer>
                  Our Premium Coverage plan includes protection for many adventure activities like hiking, safari tours, and boat excursions. Some extreme activities may require additional coverage.
                </FAQAnswer>
              </FAQItem>
              
              <FAQItem variants={fadeInUp}>
                <FAQQuestion>How do I file a claim?</FAQQuestion>
                <FAQAnswer>
                  Claims can be filed online through our customer portal or by contacting our 24/7 assistance line. We recommend keeping all documentation related to your expenses for a smooth claims process.
                </FAQAnswer>
              </FAQItem>
              
              <FAQItem variants={fadeInUp}>
                <FAQQuestion>Is COVID-19 covered by your travel insurance?</FAQQuestion>
                <FAQAnswer>
                  Yes, our policies include coverage for COVID-19 related medical expenses and trip cancellations, subject to the terms and conditions of your specific plan.
                </FAQAnswer>
              </FAQItem>
            </FAQList>
          </SectionContent>
        </Container>
      </FAQSection>

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
              <CTATitle>Ready to Protect Your Journey?</CTATitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CTADescription>
                Speak with our insurance specialists to find the right coverage for your South African adventure.
              </CTADescription>
            </motion.div>
            <CTAButtonGroup variants={fadeInUp}>
              <Button as={Link} to="/contact" variant="primary" size="large">
                Get a Quote
              </Button>
              <Button as={Link} to="/services" variant="outline" size="large">
                Explore Other Services
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
  height: 60vh;
  min-height: 400px;
  background-image: url('/src/assets/images/travel-insurance-hero.jpg');
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
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4));
`;

const HeroImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const SectionSubtitle = styled.div`
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
`;

const HeroDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const InsuranceOptionsSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.white};
`;

const CoverageDetailsSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.offWhite};
`;

const FAQSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.white};
`;

const CTASection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['2xl']} 0`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const SectionContent = styled(motion.div)`
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.black};
`;

const SectionSubheading = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  color: ${({ theme }) => theme.colors.darkGray};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const PlanGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PlanCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  transition: ${({ theme }) => theme.transition.normal};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow.xl};
  }
`;

const PlanBadge = styled.div`
  position: absolute;
  top: -15px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.accent1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
`;

const PlanType = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.black};
`;

const PlanPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.primary};
  
  span {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.xl} 0;
`;

const PlanFeature = styled.li`
  padding: ${({ theme }) => `${theme.spacing.sm} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  
  &:before {
    content: "✓";
    margin-right: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.success};
    font-weight: bold;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const CoverageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CoverageItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
`;

const CoverageIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CoverageTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.black};
`;

const CoverageDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
`;

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
  }
`;

const FAQQuestion = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.black};
`;

const FAQAnswer = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
`;

const CTAContent = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CTADescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.9;
`;

const CTAButtonGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const PlanImageWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md} 0 0;
  overflow: hidden;
`;

export default TravelInsurance; 