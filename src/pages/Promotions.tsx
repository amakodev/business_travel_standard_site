import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import { fadeIn, fadeInUp, staggerContainer } from '../animations/transitions';
import { HeroPlaceholder, CardPlaceholder } from '../components/PlaceholderImage';
import { getPlaceholderCollection } from '../utils/imageUtils';

const Promotions: React.FC = () => {
  // Generate placeholder images for promotions
  const promotionImages = getPlaceholderCollection(3, 600, 400, 'travel');
  
  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroImageContainer>
          <HeroPlaceholder 
            category="travel" 
            alt="Special Travel Promotions"
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
              <SectionSubtitle>Limited Time Offers</SectionSubtitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <HeroTitle>Special Travel Promotions</HeroTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <HeroDescription>
                Take advantage of our exclusive deals and seasonal promotions to experience the best of South Africa at unbeatable prices.
              </HeroDescription>
            </motion.div>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Current Promotions Section */}
      <PromotionsSection>
        <Container>
          <SectionIntro
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SectionTitle>Current Special Offers</SectionTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SectionDescription>
                Book now to secure these limited-time deals on our most popular travel experiences
              </SectionDescription>
            </motion.div>
          </SectionIntro>

          <PromotionsGrid>
            <PromotionCard
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <PromotionImage variants={fadeIn}>
                <CardPlaceholder 
                  category="city" 
                  alt="Cape Town Explorer Package"
                />
                <PromotionBadge>20% OFF</PromotionBadge>
              </PromotionImage>
              <PromotionContent variants={fadeInUp}>
                <PromotionTitle>Cape Town Explorer Package</PromotionTitle>
                <PromotionDuration>Valid until: August 31, 2023</PromotionDuration>
                <PromotionDescription>
                  Experience the best of Cape Town with our comprehensive 5-day package including accommodation, guided tours, and exclusive experiences.
                </PromotionDescription>
                <PromotionFeatures>
                  <PromotionFeature>
                    <FeatureIcon>✓</FeatureIcon>
                    <FeatureText>4 nights at premium hotel</FeatureText>
                  </PromotionFeature>
                  <PromotionFeature>
                    <FeatureIcon>✓</FeatureIcon>
                    <FeatureText>Table Mountain cable car tickets</FeatureText>
                  </PromotionFeature>
                  <PromotionFeature>
                    <FeatureIcon>✓</FeatureIcon>
                    <FeatureText>Cape Peninsula tour</FeatureText>
                  </PromotionFeature>
                  <PromotionFeature>
                    <FeatureIcon>✓</FeatureIcon>
                    <FeatureText>Wine tasting experience</FeatureText>
                  </PromotionFeature>
                </PromotionFeatures>
                <PromotionPricing>
                  <OriginalPrice>R12,500 per person</OriginalPrice>
                  <CurrentPrice>R9,999 per person</CurrentPrice>
                </PromotionPricing>
                <Button as={Link} to="/contact" variant="primary">Book Now</Button>
              </PromotionContent>
            </PromotionCard>

            <PromotionCard
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <PromotionImage variants={fadeIn}>
                <CardPlaceholder 
                  category="safari" 
                  alt="Safari Adventure"
                />
                <PromotionBadge>15% OFF</PromotionBadge>
              </PromotionImage>
              <PromotionContent variants={fadeInUp}>
                <PromotionTitle>Safari Adventure</PromotionTitle>
                <PromotionDuration>Valid until: September 30, 2023</PromotionDuration>
                <PromotionDescription>
                  Embark on an unforgettable wildlife safari experience with expert guides and luxury accommodation in the heart of South Africa's game reserves.
                </PromotionDescription>
                <PromotionFeatures>
                  <PromotionFeature>
                    <FeatureIcon>✓</FeatureIcon>
                    <FeatureText>3 nights at luxury safari lodge</FeatureText>
                  </PromotionFeature>
                  <PromotionFeature>
                    <FeatureIcon>✓</FeatureIcon>
                    <FeatureText>Daily game drives</FeatureText>
                  </PromotionFeature>
                  <PromotionFeature>
                    <FeatureIcon>✓</FeatureIcon>
                    <FeatureText>All meals included</FeatureText>
                  </PromotionFeature>
                  <PromotionFeature>
                    <FeatureIcon>✓</FeatureIcon>
                    <FeatureText>Transfer from Cape Town</FeatureText>
                  </PromotionFeature>
                </PromotionFeatures>
                <PromotionPricing>
                  <OriginalPrice>R18,000 per person</OriginalPrice>
                  <CurrentPrice>R15,300 per person</CurrentPrice>
                </PromotionPricing>
                <Button as={Link} to="/contact" variant="primary">Book Now</Button>
              </PromotionContent>
            </PromotionCard>

            <PromotionCard
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <PromotionImage variants={fadeIn}>
                <CardPlaceholder 
                  category="nature" 
                  alt="Garden Route Discovery"
                />
                <PromotionBadge>25% OFF</PromotionBadge>
              </PromotionImage>
              <PromotionContent variants={fadeInUp}>
                <PromotionTitle>Garden Route Discovery</PromotionTitle>
                <PromotionDuration>Valid until: October 15, 2023</PromotionDuration>
                <PromotionDescription>
                  Journey along South Africa's breathtaking Garden Route with this comprehensive 7-day package featuring stunning coastal scenery and unique experiences.
                </PromotionDescription>
                <PromotionFeatures>
                  <PromotionFeature>
                    <FeatureIcon>✓</FeatureIcon>
                    <FeatureText>6 nights accommodation</FeatureText>
                  </PromotionFeature>
                  <PromotionFeature>
                    <FeatureIcon>✓</FeatureIcon>
                    <FeatureText>Guided tour with expert local guide</FeatureText>
                  </PromotionFeature>
                  <PromotionFeature>
                    <FeatureIcon>✓</FeatureIcon>
                    <FeatureText>Tsitsikamma National Park visit</FeatureText>
                  </PromotionFeature>
                  <PromotionFeature>
                    <FeatureIcon>✓</FeatureIcon>
                    <FeatureText>Knysna lagoon cruise</FeatureText>
                  </PromotionFeature>
                </PromotionFeatures>
                <PromotionPricing>
                  <OriginalPrice>R16,000 per person</OriginalPrice>
                  <CurrentPrice>R12,000 per person</CurrentPrice>
                </PromotionPricing>
                <Button as={Link} to="/contact" variant="primary">Book Now</Button>
              </PromotionContent>
            </PromotionCard>
          </PromotionsGrid>
        </Container>
      </PromotionsSection>

      {/* Seasonal Deals Section */}
      <SeasonalDealsSection>
        <Container>
          <SectionIntro
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SectionTitle>Seasonal Specials</SectionTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SectionDescription>
                Take advantage of these seasonal offers for the best value on your South African adventure
              </SectionDescription>
            </motion.div>
          </SectionIntro>

          <SeasonalDealsGrid
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <SeasonalDealCard variants={fadeInUp}>
              <SeasonalDealIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
                </svg>
              </SeasonalDealIcon>
              <SeasonalDealTitle>Early Bird Booking</SeasonalDealTitle>
              <SeasonalDealDescription>
                Book your trip at least 3 months in advance and receive a 10% discount on any of our packages.
              </SeasonalDealDescription>
              <Button as={Link} to="/packages" variant="outline" size="small">View Packages</Button>
            </SeasonalDealCard>

            <SeasonalDealCard variants={fadeInUp}>
              <SeasonalDealIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
                </svg>
              </SeasonalDealIcon>
              <SeasonalDealTitle>Off-Peak Season</SeasonalDealTitle>
              <SeasonalDealDescription>
                Travel during May-June or September-October and enjoy 15% off accommodation and selected activities.
              </SeasonalDealDescription>
              <Button as={Link} to="/packages" variant="outline" size="small">View Packages</Button>
            </SeasonalDealCard>

            <SeasonalDealCard variants={fadeInUp}>
              <SeasonalDealIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
              </SeasonalDealIcon>
              <SeasonalDealTitle>Extended Stay</SeasonalDealTitle>
              <SeasonalDealDescription>
                Book a stay of 10 days or more and receive a complimentary private tour and airport transfers.
              </SeasonalDealDescription>
              <Button as={Link} to="/packages" variant="outline" size="small">View Packages</Button>
            </SeasonalDealCard>

            <SeasonalDealCard variants={fadeInUp}>
              <SeasonalDealIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </SeasonalDealIcon>
              <SeasonalDealTitle>Multi-Destination</SeasonalDealTitle>
              <SeasonalDealDescription>
                Book any two destinations in South Africa and receive a 20% discount on your third destination.
              </SeasonalDealDescription>
              <Button as={Link} to="/packages" variant="outline" size="small">View Packages</Button>
            </SeasonalDealCard>
          </SeasonalDealsGrid>
        </Container>
      </SeasonalDealsSection>

      {/* Newsletter Section */}
      <NewsletterSection>
        <Container>
          <NewsletterContent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <NewsletterTitle>Stay Updated on Exclusive Offers</NewsletterTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <NewsletterDescription>
                Subscribe to our newsletter to receive the latest promotions and travel deals directly to your inbox.
              </NewsletterDescription>
            </motion.div>
            <NewsletterForm variants={fadeInUp}>
              <NewsletterInput type="email" placeholder="Your email address" />
              <Button variant="primary">Subscribe</Button>
            </NewsletterForm>
            <NewsletterDisclaimer variants={fadeInUp}>
              By subscribing, you agree to receive marketing emails from Restro Travel. You can unsubscribe at any time.
            </NewsletterDisclaimer>
          </NewsletterContent>
        </Container>
      </NewsletterSection>

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
              <CTATitle>Ready to Book Your Discounted Adventure?</CTATitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CTADescription>
                Contact our travel experts today to secure these limited-time offers.
              </CTADescription>
            </motion.div>
            <CTAButtonGroup variants={fadeInUp}>
              <Button as={Link} to="/contact" variant="primary" size="large">
                Contact Us
              </Button>
              <Button as={Link} to="/packages" variant="outline" size="large">
                View All Packages
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
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
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

const PromotionsSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.white};
`;

const SectionIntro = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: ${({ theme }) => theme.spacing.sm} auto 0;
  }
`;

const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.darkGray};
  line-height: 1.6;
`;

const PromotionsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const PromotionCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const PromotionImage = styled(motion.div)`
  position: relative;
  height: 300px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: auto;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PromotionBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const PromotionContent = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
`;

const PromotionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const PromotionDuration = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-style: italic;
`;

const PromotionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkGray};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PromotionFeatures = styled.ul`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const PromotionFeature = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const FeatureIcon = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

const FeatureText = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
`;

const PromotionPricing = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  margin-top: auto;
`;

const OriginalPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkGray};
  text-decoration: line-through;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const CurrentPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

const SeasonalDealsSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.offWhite};
`;

const SeasonalDealsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SeasonalDealCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: ${({ theme }) => theme.transition.normal};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.boxShadow.xl};
  }
`;

const SeasonalDealIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SeasonalDealTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SeasonalDealDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkGray};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-grow: 1;
`;

const NewsletterSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['2xl']} 0`};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
`;

const NewsletterContent = styled(motion.div)`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`;

const NewsletterTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const NewsletterDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.9;
`;

const NewsletterForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const NewsletterInput = styled.input`
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.md};
  flex-grow: 1;
`;

const NewsletterDisclaimer = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.7;
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

export default Promotions; 