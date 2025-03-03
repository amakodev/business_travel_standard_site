import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import { fadeIn, fadeInUp, staggerContainer } from '../animations/transitions';
import { HeroPlaceholder, AvatarPlaceholder } from '../components/PlaceholderImage';
import { getPlaceholderCollection } from '../utils/imageUtils';

const Team: React.FC = () => {
  // Generate placeholder images for team members
  const teamAvatars = getPlaceholderCollection(6, 400, 500, 'people');

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroImageContainer>
          <HeroPlaceholder 
            category="people" 
            alt="Restro Travel Team"
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
              <SectionSubtitle>Meet Our Team</SectionSubtitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <HeroTitle>Travel Experts Who Care</HeroTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <HeroDescription>
                Our passionate team of travel specialists brings years of experience and local knowledge to create unforgettable South African journeys.
              </HeroDescription>
            </motion.div>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Team Members Section */}
      <TeamSection>
        <Container>
          <SectionIntro
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SectionTitle>Our Travel Specialists</SectionTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SectionDescription>
                Each member of our team is passionate about South African travel and committed to creating personalized experiences that exceed your expectations.
              </SectionDescription>
            </motion.div>
          </SectionIntro>

          <TeamGrid>
            <TeamMember
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <TeamMemberImage variants={fadeIn}>
                <AvatarPlaceholder 
                  category="people" 
                  alt="Sarah Johnson"
                />
              </TeamMemberImage>
              <TeamMemberInfo variants={fadeInUp}>
                <TeamMemberName>Sarah Johnson</TeamMemberName>
                <TeamMemberTitle>Founder & CEO</TeamMemberTitle>
                <TeamMemberBio>
                  With over 15 years in the travel industry and a deep love for South Africa, Sarah founded Restro Travel to share her passion for authentic travel experiences. Her extensive knowledge of Cape Town and surrounding areas ensures our clients discover the region's hidden gems.
                </TeamMemberBio>
                <TeamMemberSpecialties>
                  <SpecialtyTitle>Specialties:</SpecialtyTitle>
                  <SpecialtyList>
                    <SpecialtyItem>Luxury Travel</SpecialtyItem>
                    <SpecialtyItem>Wine Tours</SpecialtyItem>
                    <SpecialtyItem>Cultural Experiences</SpecialtyItem>
                  </SpecialtyList>
                </TeamMemberSpecialties>
              </TeamMemberInfo>
            </TeamMember>

            <TeamMember
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <TeamMemberInfo variants={fadeInUp}>
                <TeamMemberName>David Nkosi</TeamMemberName>
                <TeamMemberTitle>Head of Operations</TeamMemberTitle>
                <TeamMemberBio>
                  Born and raised in Cape Town, David brings authentic local perspective to our travel planning. His background in hospitality management and deep connections with local businesses allow him to create seamless travel experiences for our clients.
                </TeamMemberBio>
                <TeamMemberSpecialties>
                  <SpecialtyTitle>Specialties:</SpecialtyTitle>
                  <SpecialtyList>
                    <SpecialtyItem>Adventure Travel</SpecialtyItem>
                    <SpecialtyItem>Safari Experiences</SpecialtyItem>
                    <SpecialtyItem>Local Cuisine</SpecialtyItem>
                  </SpecialtyList>
                </TeamMemberSpecialties>
              </TeamMemberInfo>
              <TeamMemberImage variants={fadeIn}>
                <AvatarPlaceholder 
                  category="people" 
                  alt="David Nkosi"
                />
              </TeamMemberImage>
            </TeamMember>

            <TeamMember
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <TeamMemberImage variants={fadeIn}>
                <AvatarPlaceholder 
                  category="people" 
                  alt="Maria Fernandez"
                />
              </TeamMemberImage>
              <TeamMemberInfo variants={fadeInUp}>
                <TeamMemberName>Maria Fernandez</TeamMemberName>
                <TeamMemberTitle>Senior Travel Consultant</TeamMemberTitle>
                <TeamMemberBio>
                  Maria's international background and multilingual skills make her an invaluable asset for our global clientele. Her attention to detail and personalized approach ensure that each itinerary is perfectly tailored to our clients' preferences and interests.
                </TeamMemberBio>
                <TeamMemberSpecialties>
                  <SpecialtyTitle>Specialties:</SpecialtyTitle>
                  <SpecialtyList>
                    <SpecialtyItem>Family Travel</SpecialtyItem>
                    <SpecialtyItem>Honeymoons</SpecialtyItem>
                    <SpecialtyItem>Customized Itineraries</SpecialtyItem>
                  </SpecialtyList>
                </TeamMemberSpecialties>
              </TeamMemberInfo>
            </TeamMember>

            <TeamMember
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <TeamMemberInfo variants={fadeInUp}>
                <TeamMemberName>James Mbeki</TeamMemberName>
                <TeamMemberTitle>Adventure Specialist</TeamMemberTitle>
                <TeamMemberBio>
                  A former professional guide with extensive experience in South Africa's national parks, James specializes in creating thrilling adventure experiences. His knowledge of wildlife, hiking trails, and outdoor activities ensures unforgettable adventures for our clients.
                </TeamMemberBio>
                <TeamMemberSpecialties>
                  <SpecialtyTitle>Specialties:</SpecialtyTitle>
                  <SpecialtyList>
                    <SpecialtyItem>Wildlife Safaris</SpecialtyItem>
                    <SpecialtyItem>Hiking Expeditions</SpecialtyItem>
                    <SpecialtyItem>Outdoor Activities</SpecialtyItem>
                  </SpecialtyList>
                </TeamMemberSpecialties>
              </TeamMemberInfo>
              <TeamMemberImage variants={fadeIn}>
                <AvatarPlaceholder 
                  category="people" 
                  alt="James Mbeki"
                />
              </TeamMemberImage>
            </TeamMember>

            <TeamMember
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <TeamMemberImage variants={fadeIn}>
                <AvatarPlaceholder 
                  category="people" 
                  alt="Emma van der Merwe"
                />
              </TeamMemberImage>
              <TeamMemberInfo variants={fadeInUp}>
                <TeamMemberName>Emma van der Merwe</TeamMemberName>
                <TeamMemberTitle>Luxury Travel Specialist</TeamMemberTitle>
                <TeamMemberBio>
                  Emma's background in luxury hospitality gives her unique insight into South Africa's premium travel experiences. Her connections with exclusive properties and service providers allow her to create truly luxurious journeys for discerning travelers.
                </TeamMemberBio>
                <TeamMemberSpecialties>
                  <SpecialtyTitle>Specialties:</SpecialtyTitle>
                  <SpecialtyList>
                    <SpecialtyItem>Luxury Accommodations</SpecialtyItem>
                    <SpecialtyItem>Fine Dining Experiences</SpecialtyItem>
                    <SpecialtyItem>VIP Services</SpecialtyItem>
                  </SpecialtyList>
                </TeamMemberSpecialties>
              </TeamMemberInfo>
            </TeamMember>

            <TeamMember
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <TeamMemberInfo variants={fadeInUp}>
                <TeamMemberName>Thomas Wilson</TeamMemberName>
                <TeamMemberTitle>Customer Experience Manager</TeamMemberTitle>
                <TeamMemberBio>
                  Thomas ensures that every aspect of your journey exceeds expectations. His dedication to customer satisfaction and problem-solving skills make him an essential part of our team, ensuring smooth travel experiences from booking to return.
                </TeamMemberBio>
                <TeamMemberSpecialties>
                  <SpecialtyTitle>Specialties:</SpecialtyTitle>
                  <SpecialtyList>
                    <SpecialtyItem>Client Support</SpecialtyItem>
                    <SpecialtyItem>Travel Logistics</SpecialtyItem>
                    <SpecialtyItem>Special Requests</SpecialtyItem>
                  </SpecialtyList>
                </TeamMemberSpecialties>
              </TeamMemberInfo>
              <TeamMemberImage variants={fadeIn}>
                <AvatarPlaceholder 
                  category="people" 
                  alt="Thomas Wilson"
                />
              </TeamMemberImage>
            </TeamMember>
          </TeamGrid>
        </Container>
      </TeamSection>

      {/* Values Section */}
      <ValuesSection>
        <Container>
          <SectionIntro
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SectionTitle>Our Values</SectionTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SectionDescription>
                These core principles guide everything we do at Restro Travel, ensuring exceptional service and unforgettable experiences.
              </SectionDescription>
            </motion.div>
          </SectionIntro>

          <ValuesGrid
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <ValueCard variants={fadeInUp}>
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </ValueIcon>
              <ValueTitle>Authenticity</ValueTitle>
              <ValueDescription>
                We believe in creating genuine travel experiences that reflect the true spirit and culture of South Africa.
              </ValueDescription>
            </ValueCard>

            <ValueCard variants={fadeInUp}>
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
                </svg>
              </ValueIcon>
              <ValueTitle>Excellence</ValueTitle>
              <ValueDescription>
                We are committed to delivering exceptional service and attention to detail in every aspect of your travel experience.
              </ValueDescription>
            </ValueCard>

            <ValueCard variants={fadeInUp}>
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </ValueIcon>
              <ValueTitle>Personalization</ValueTitle>
              <ValueDescription>
                We understand that each traveler is unique, and we tailor our services to match your specific preferences and interests.
              </ValueDescription>
            </ValueCard>

            <ValueCard variants={fadeInUp}>
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                </svg>
              </ValueIcon>
              <ValueTitle>Responsiveness</ValueTitle>
              <ValueDescription>
                We are always available to assist you before, during, and after your journey, ensuring a smooth and worry-free travel experience.
              </ValueDescription>
            </ValueCard>

            <ValueCard variants={fadeInUp}>
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V8z" />
                </svg>
              </ValueIcon>
              <ValueTitle>Sustainability</ValueTitle>
              <ValueDescription>
                We are committed to responsible tourism practices that respect and preserve South Africa's natural environment and cultural heritage.
              </ValueDescription>
            </ValueCard>

            <ValueCard variants={fadeInUp}>
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </ValueIcon>
              <ValueTitle>Passion</ValueTitle>
              <ValueDescription>
                We are passionate about South Africa and dedicated to sharing its beauty, culture, and warmth with travelers from around the world.
              </ValueDescription>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </ValuesSection>

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
              <CTATitle>Ready to Plan Your South African Adventure?</CTATitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CTADescription>
                Our team of travel experts is ready to help you create the perfect journey.
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

const TeamSection = styled.section`
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

const TeamGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const TeamMember = styled(motion.div)`
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
      
      * {
        direction: ltr;
      }
    }
  }
`;

const TeamMemberImage = styled(motion.div)`
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

const TeamMemberInfo = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0;
  }
`;

const TeamMemberName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const TeamMemberTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const TeamMemberBio = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkGray};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TeamMemberSpecialties = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const SpecialtyTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const SpecialtyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SpecialtyItem = styled.li`
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.darkGray};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const ValuesSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.offWhite};
`;

const ValuesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ValueCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  text-align: center;
  transition: ${({ theme }) => theme.transition.normal};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.boxShadow.xl};
  }
`;

const ValueIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ValueTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ValueDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkGray};
  line-height: 1.6;
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

export default Team; 