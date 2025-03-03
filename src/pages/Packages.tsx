import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import { fadeIn, fadeInUp, staggerContainer } from '../animations/transitions';
import { HeroPlaceholder, CardPlaceholder, GalleryPlaceholder } from '../components/PlaceholderImage';
import { getPlaceholderCollection } from '../utils/imageUtils';
import { SafariGallery, CapeTownGallery } from '../components/AfricanImageGallery';

const Packages: React.FC = () => {
  // Generate placeholder images for different package types
  const packageImages = {
    capeTown: getPlaceholderCollection(1, 600, 400, 'city')[0],
    safari: getPlaceholderCollection(1, 600, 400, 'safari')[0],
    gardenRoute: getPlaceholderCollection(1, 600, 400, 'nature')[0],
    winelands: getPlaceholderCollection(1, 600, 400, 'food')[0],
    beach: getPlaceholderCollection(1, 600, 400, 'beach')[0]
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroImageContainer>
          <HeroPlaceholder 
            category="travel" 
            alt="South African travel packages"
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
              <SectionSubtitle>Explore South Africa</SectionSubtitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <HeroTitle>Travel Packages & Experiences</HeroTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <HeroDescription>
                Discover our carefully curated packages designed to showcase the best of South Africa's landscapes, culture, and attractions.
              </HeroDescription>
            </motion.div>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Featured Packages Section */}
      <FeaturedPackagesSection>
        <Container>
          <SectionContent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SectionTitle>Featured Packages</SectionTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SectionSubheading>Handcrafted Experiences for Every Traveler</SectionSubheading>
            </motion.div>
            
            <PackageGrid>
              <PackageCard variants={fadeInUp}>
                <PackageThumbnail>
                  <img src={packageImages.capeTown} alt="Cape Town Explorer" />
                  <PackageDuration>7 Days</PackageDuration>
                </PackageThumbnail>
                <PackageContent>
                  <PackageTitle>Cape Town Explorer</PackageTitle>
                  <PackagePrice>From R14,500 <span>per person</span></PackagePrice>
                  <PackageDescription>
                    Experience the beauty of Cape Town with this comprehensive package including Table Mountain, Cape Point, and Robben Island tours.
                  </PackageDescription>
                  <PackageFeatures>
                    <PackageFeature>Luxury accommodations</PackageFeature>
                    <PackageFeature>Private guided tours</PackageFeature>
                    <PackageFeature>Wine tasting experience</PackageFeature>
                  </PackageFeatures>
                  <ButtonGroup>
                    <Button as={Link} to="/contact" variant="primary" fullWidth>
                      Book Now
                    </Button>
                    <Button as={Link} to="/packages/cape-town" variant="outline" fullWidth>
                      View Details
                    </Button>
                  </ButtonGroup>
                </PackageContent>
              </PackageCard>

              <PackageCard variants={fadeInUp}>
                <PackageThumbnail>
                  <img src={packageImages.safari} alt="Luxury Safari Adventure" />
                  <PackageDuration>5 Days</PackageDuration>
                </PackageThumbnail>
                <PackageContent>
                  <PackageTitle>Luxury Safari Adventure</PackageTitle>
                  <PackagePrice>From R22,900 <span>per person</span></PackagePrice>
                  <PackageDescription>
                    Encounter Africa's majestic wildlife on this luxury safari experience with expert guides and premium accommodations.
                  </PackageDescription>
                  <PackageFeatures>
                    <PackageFeature>Game drives</PackageFeature>
                    <PackageFeature>Luxury lodge accommodations</PackageFeature>
                    <PackageFeature>All meals included</PackageFeature>
                  </PackageFeatures>
                  <ButtonGroup>
                    <Button as={Link} to="/contact" variant="primary" fullWidth>
                      Book Now
                    </Button>
                    <Button as={Link} to="/packages/safari" variant="outline" fullWidth>
                      View Details
                    </Button>
                  </ButtonGroup>
                </PackageContent>
              </PackageCard>

              <PackageCard variants={fadeInUp}>
                <PackageThumbnail>
                  <img src={packageImages.gardenRoute} alt="Garden Route Journey" />
                  <PackageDuration>10 Days</PackageDuration>
                </PackageThumbnail>
                <PackageContent>
                  <PackageTitle>Garden Route Journey</PackageTitle>
                  <PackagePrice>From R19,800 <span>per person</span></PackagePrice>
                  <PackageDescription>
                    Drive along South Africa's stunning Garden Route, exploring coastal towns, forests, and beaches at your own pace.
                  </PackageDescription>
                  <PackageFeatures>
                    <PackageFeature>Car rental included</PackageFeature>
                    <PackageFeature>Boutique accommodations</PackageFeature>
                    <PackageFeature>Guided nature walks</PackageFeature>
                  </PackageFeatures>
                  <ButtonGroup>
                    <Button as={Link} to="/contact" variant="primary" fullWidth>
                      Book Now
                    </Button>
                    <Button as={Link} to="/packages/garden-route" variant="outline" fullWidth>
                      View Details
                    </Button>
                  </ButtonGroup>
                </PackageContent>
              </PackageCard>
            </PackageGrid>
          </SectionContent>
        </Container>
      </FeaturedPackagesSection>

      {/* Safari Gallery Section */}
      <GallerySection>
        <Container>
          <SectionContent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SectionTitle>Safari Experiences</SectionTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SectionSubheading>Encounter Africa's Majestic Wildlife</SectionSubheading>
            </motion.div>
            
            <SafariGallery 
              imageCount={4} 
              interactive={true}
              captions={[
                "Witness the majesty of African elephants in their natural habitat",
                "Experience thrilling game drives with expert local guides",
                "Observe the iconic Big Five on safari adventures",
                "Stay in luxury lodges surrounded by pristine wilderness"
              ]}
            />
            
            <GalleryButtonWrapper variants={fadeInUp}>
              <Button as={Link} to="/packages/safari" variant="primary">
                View Safari Packages
              </Button>
            </GalleryButtonWrapper>
          </SectionContent>
        </Container>
      </GallerySection>

      {/* Special Deals Section */}
      <SpecialDealsSection>
        <Container>
          <SectionContent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SectionTitle>Special Deals</SectionTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SectionSubheading>Limited Time Offers on Popular Packages</SectionSubheading>
            </motion.div>

            <DealsGrid>
              <DealCard variants={fadeInUp}>
                <DealBadge>Save 15%</DealBadge>
                <DealImage>
                  <img src={packageImages.winelands} alt="Cape Winelands Tour" />
                </DealImage>
                <DealContent>
                  <DealTitle>Cape Winelands Tour</DealTitle>
                  <DealPrice>
                    <OldPrice>R8,500</OldPrice>
                    <NewPrice>R7,225</NewPrice>
                    <span>per person</span>
                  </DealPrice>
                  <DealDescription>
                    Explore South Africa's premium wine regions with this 3-day tour package. Valid for bookings made before 30 November.
                  </DealDescription>
                  <Button as={Link} to="/contact" variant="primary" fullWidth>
                    Book This Deal
                  </Button>
                </DealContent>
              </DealCard>

              <DealCard variants={fadeInUp}>
                <DealBadge>Family Special</DealBadge>
                <DealImage>
                  <img src={packageImages.beach} alt="Family Beach Holiday" />
                </DealImage>
                <DealContent>
                  <DealTitle>Family Beach Holiday</DealTitle>
                  <DealPrice>
                    <NewPrice>Kids Stay Free</NewPrice>
                    <span>for bookings of 7+ nights</span>
                  </DealPrice>
                  <DealDescription>
                    Bring your family to South Africa's beautiful beaches with our special family package where kids under 12 stay free.
                  </DealDescription>
                  <Button as={Link} to="/contact" variant="primary" fullWidth>
                    Book This Deal
                  </Button>
                </DealContent>
              </DealCard>
            </DealsGrid>
          </SectionContent>
        </Container>
      </SpecialDealsSection>

      {/* Cape Town Gallery Section */}
      <GallerySection>
        <Container>
          <SectionContent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SectionTitle>Cape Town Highlights</SectionTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SectionSubheading>Explore the Mother City's Iconic Attractions</SectionSubheading>
            </motion.div>
            
            <CapeTownGallery 
              imageCount={6} 
              interactive={false}
              captions={[
                "Table Mountain offers breathtaking views of Cape Town",
                "Visit the historic Robben Island, where Nelson Mandela was imprisoned",
                "Explore the vibrant V&A Waterfront with shops and restaurants",
                "Discover the colorful Bo-Kaap neighborhood",
                "Relax on the beautiful beaches of Camps Bay",
                "Take a scenic drive along Chapman's Peak"
              ]}
            />
            
            <GalleryButtonWrapper variants={fadeInUp}>
              <Button as={Link} to="/packages/cape-town" variant="primary">
                View Cape Town Packages
              </Button>
            </GalleryButtonWrapper>
          </SectionContent>
        </Container>
      </GallerySection>

      {/* Package Benefits Section */}
      <BenefitsSection>
        <Container>
          <SectionContent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SectionTitle>Why Book With Us</SectionTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SectionSubheading>The Advantages of Our Travel Packages</SectionSubheading>
            </motion.div>

            <BenefitsGrid>
              <BenefitItem variants={fadeInUp}>
                <BenefitIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </BenefitIcon>
                <BenefitTitle>Expert Local Knowledge</BenefitTitle>
                <BenefitDescription>
                  Our packages are designed by South Africans who know the best spots, experiences, and hidden gems.
                </BenefitDescription>
              </BenefitItem>

              <BenefitItem variants={fadeInUp}>
                <BenefitIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                    <path fill="currentColor" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                  </svg>
                </BenefitIcon>
                <BenefitTitle>Value for Money</BenefitTitle>
                <BenefitDescription>
                  Our packages include premium experiences at the best possible prices through our local partnerships.
                </BenefitDescription>
              </BenefitItem>

              <BenefitItem variants={fadeInUp}>
                <BenefitIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                    <path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                  </svg>
                </BenefitIcon>
                <BenefitTitle>Secure Booking</BenefitTitle>
                <BenefitDescription>
                  Book with confidence with our secure payment system and travel insurance options.
                </BenefitDescription>
              </BenefitItem>

              <BenefitItem variants={fadeInUp}>
                <BenefitIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                    <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </BenefitIcon>
                <BenefitTitle>Handpicked Locations</BenefitTitle>
                <BenefitDescription>
                  Every destination in our packages has been personally visited and vetted by our travel experts.
                </BenefitDescription>
              </BenefitItem>
            </BenefitsGrid>
          </SectionContent>
        </Container>
      </BenefitsSection>

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
              <CTATitle>Ready for Your South African Adventure?</CTATitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CTADescription>
                Contact our travel specialists to customize any package to your preferences and schedule.
              </CTADescription>
            </motion.div>
            <CTAButtonGroup variants={fadeInUp}>
              <Button as={Link} to="/contact" variant="primary" size="large">
                Start Planning
              </Button>
              <Button as={Link} to="/insurance" variant="outline" size="large">
                Explore Insurance Options
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
  background-image: url('/src/assets/images/packages-hero.jpg');
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

const FeaturedPackagesSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.white};
`;

const SpecialDealsSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.offWhite};
`;

const BenefitsSection = styled.section`
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

const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PackageCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
  overflow: hidden;
  transition: ${({ theme }) => theme.transition.normal};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow.xl};
  }
`;

const PackageThumbnail = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${PackageCard}:hover & img {
    transform: scale(1.05);
  }
`;

const PackageDuration = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const PackageContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const PackageTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.black};
`;

const PackagePrice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  
  span {
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const PackageDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PackageFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.xl} 0;
`;

const PackageFeature = styled.li`
  padding: ${({ theme }) => `${theme.spacing.xs} 0`};
  font-size: ${({ theme }) => theme.fontSizes.md};
  display: flex;
  align-items: center;
  
  &:before {
    content: "✓";
    margin-right: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.success};
    font-weight: bold;
  }
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DealsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DealCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
  overflow: hidden;
  position: relative;
  transition: ${({ theme }) => theme.transition.normal};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow.xl};
  }
`;

const DealBadge = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.accent1};
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const DealImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${DealCard}:hover & img {
    transform: scale(1.05);
  }
`;

const DealContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const DealTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.black};
`;

const DealPrice = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  span {
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.darkGray};
    margin-top: ${({ theme }) => theme.spacing.xs};
  }
`;

const OldPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

const NewPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const DealDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const BenefitItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const BenefitIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const BenefitTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.black};
`;

const BenefitDescription = styled.p`
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

const GallerySection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['2xl']} 0`};
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const GalleryButtonWrapper = styled(motion.div)`
  margin-top: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

export default Packages; 