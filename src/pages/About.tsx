import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import { fadeIn, fadeInUp, staggerContainer } from '../animations/transitions';
import { HeroPlaceholder, CardPlaceholder, AvatarPlaceholder, GalleryPlaceholder } from '../components/PlaceholderImage';
import { getPlaceholderCollection } from '../utils/imageUtils';

const About: React.FC = () => {
  // Generate placeholder images for team members
  const teamAvatars = getPlaceholderCollection(4, 300, 400, 'people');

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroImageContainer>
          <HeroPlaceholder 
            category="travel" 
            alt="About Restro Travel"
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
              <SectionSubtitle>About Us</SectionSubtitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <HeroTitle>Discover Our Story</HeroTitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <HeroDescription>
                At Restro Travel, we're passionate about creating unforgettable travel experiences in the beautiful city of Cape Town and beyond.
              </HeroDescription>
            </motion.div>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Our Story Section */}
      <StorySection>
        <Container>
          <SectionContent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <SectionTitle>
              Our <TitleAccent>Story</TitleAccent>
            </SectionTitle>
            
            <StoryGrid>
              <StoryContent variants={fadeInUp}>
                <p>
                  Founded in 2010, Restro Travel was born from a deep love for South Africa and a desire to share its incredible beauty with travelers from around the world. What started as a small tour operation has grown into a full-service travel agency specializing in premium, customized travel experiences.
                </p>
                <p>
                  Our team consists of passionate local experts who know every hidden gem in Cape Town and beyond. We've spent years exploring South Africa's diverse landscapes, from the vibrant city life to pristine beaches, rugged mountains, and spectacular wildlife reserves.
                </p>
                <p>
                  We believe that travel should be transformative, creating memories that last a lifetime. That's why we put so much care into crafting each itinerary, ensuring that every client experiences the authentic culture, breathtaking scenery, and warm hospitality that South Africa is famous for.
                </p>
              </StoryContent>
              <StoryImage variants={fadeIn}>
                <GalleryPlaceholder 
                  category="travel" 
                  alt="Restro Travel Team"
                />
              </StoryImage>
            </StoryGrid>
          </SectionContent>
        </Container>
      </StorySection>

      {/* Mission & Values Section */}
      <MissionSection>
        <Container>
          <SectionContent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <SectionTitle>
              Our <TitleAccent>Mission & Values</TitleAccent>
            </SectionTitle>
            
            <ValuesGrid>
              <ValueCard variants={fadeInUp}>
                <ValueIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
                    <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </ValueIcon>
                <ValueTitle>Passion</ValueTitle>
                <ValueDescription>
                  We're passionate about travel and sharing the beauty of South Africa with our clients, putting our heart into every trip we plan.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard variants={fadeInUp}>
                <ValueIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </ValueIcon>
                <ValueTitle>Expertise</ValueTitle>
                <ValueDescription>
                  Our team's in-depth local knowledge ensures authentic experiences and insider access to the best South Africa has to offer.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard variants={fadeInUp}>
                <ValueIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
                    <path fill="currentColor" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
                  </svg>
                </ValueIcon>
                <ValueTitle>Personalization</ValueTitle>
                <ValueDescription>
                  We craft bespoke itineraries tailored to each client's preferences, ensuring every trip is unique and memorable.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard variants={fadeInUp}>
                <ValueIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
                    <path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </ValueIcon>
                <ValueTitle>Quality</ValueTitle>
                <ValueDescription>
                  We partner with the finest accommodations and service providers to deliver premium experiences without compromise.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard variants={fadeInUp}>
                <ValueIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
                    <path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                  </svg>
                </ValueIcon>
                <ValueTitle>Reliability</ValueTitle>
                <ValueDescription>
                  From planning to execution, we provide seamless experiences with 24/7 support throughout your journey.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard variants={fadeInUp}>
                <ValueIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
                    <path fill="currentColor" d="M8.55 12c-1.07-.71-2.25-1.27-3.53-1.61 1.28.34 2.46.9 3.53 1.61zm10.43-1.61c-1.29.34-2.49.91-3.57 1.64 1.08-.73 2.28-1.3 3.57-1.64zm.73.3l.23-.33c-2.32.65-4.39 1.85-6.14 3.55-1.75-1.7-3.82-2.9-6.14-3.55l.23.33c2.17.65 4.03 1.76 5.64 3.24.07.05.15.09.23.13.07-.04.15-.08.22-.13 1.62-1.48 3.48-2.59 5.64-3.24zM12 4C7.24 4 3.25 6.96 1.53 11.08c0 0-.3 1.05.73 1.05h19.47c1.15 0 .73-1.05.73-1.05C20.75 6.96 16.76 4 12 4zm11.33 9.33c-.63 0-1.13.75-.99 1.35a10 10 0 0 1-20.68 0c.14-.6-.36-1.35-.99-1.35-.69 0-1.21.71-.97 1.36C1.44 18.9 6.33 22 12 22s10.56-3.1 12.3-7.31c.25-.65-.28-1.36-.97-1.36zM12 18c-4.05 0-7.72-1.54-10.48-4.04-.18-.17-.27-.41-.24-.66.04-.25.22-.46.46-.56C2.45 12.39 5.37 12 8 12c.94 0 1.86.06 2.76.15-.43.82-.76 1.68-.96 2.58-.13.6.1 1.27.71 1.27h3c.61 0 .84-.67.71-1.27-.2-.9-.53-1.76-.96-2.58.9-.09 1.82-.15 2.76-.15 2.63 0 5.55.39 6.26.74.24.1.42.32.46.56.03.25-.05.5-.24.66C19.72 16.46 16.05 18 12 18zm-8.71-7.71C3.72 9.36 5.56 8.8 7.5 8.8c1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 1.94 0 3.78.56 5.21 1.49.15.1.24.27.24.44 0 .12-.04.24-.1.35-.14.2-.37.29-.55.29-.11 0-.24-.04-.33-.11-.47-.3-1.77-.94-3.46-1.02a9.62 9.62 0 0 0-2 .01c-.43.07-.7.53-.48.92.34.58.42 1.33.17 2-.28.74-1.05.99-1.7.99-.71 0-1.4-.28-1.91-.8-.51.52-1.2.8-1.91.8-.64 0-1.42-.25-1.7-.99-.25-.67-.17-1.42.17-2 .22-.38-.04-.85-.48-.92-.9-.15-1.45-.01-2-.01-1.69.08-3 .72-3.45 1.03-.1.06-.22.1-.34.1-.17 0-.41-.09-.55-.29a.634.634 0 0 1-.1-.35c.01-.18.1-.35.24-.45z"/>
                  </svg>
                </ValueIcon>
                <ValueTitle>Sustainability</ValueTitle>
                <ValueDescription>
                  We're committed to responsible tourism that respects local communities and preserves South Africa's natural beauty.
                </ValueDescription>
              </ValueCard>
            </ValuesGrid>
          </SectionContent>
        </Container>
      </MissionSection>

      {/* Team Section */}
      <TeamSection>
        <Container>
          <SectionContent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <SectionTitle>
              Meet Our <TitleAccent>Team</TitleAccent>
            </SectionTitle>
            <SectionSubtitle>
              Our experienced team of travel experts is dedicated to creating unforgettable experiences
            </SectionSubtitle>
            
            <TeamGrid>
              <TeamMember variants={fadeInUp}>
                <TeamMemberImage>
                  <AvatarPlaceholder 
                    category="people" 
                    alt="Sarah Johnson"
                  />
                </TeamMemberImage>
                <TeamMemberInfo>
                  <TeamMemberName>Sarah Johnson</TeamMemberName>
                  <TeamMemberRole>Founder & CEO</TeamMemberRole>
                  <TeamMemberBio>
                    With over 15 years in the travel industry and a deep love for South Africa, Sarah founded Restro Travel to share her passion with travelers worldwide.
                  </TeamMemberBio>
                </TeamMemberInfo>
              </TeamMember>
              
              <TeamMember variants={fadeInUp}>
                <TeamMemberImage>
                  <AvatarPlaceholder 
                    category="people" 
                    alt="David Nkosi"
                  />
                </TeamMemberImage>
                <TeamMemberInfo>
                  <TeamMemberName>David Nkosi</TeamMemberName>
                  <TeamMemberRole>Head of Tours</TeamMemberRole>
                  <TeamMemberBio>
                    Born and raised in Cape Town, David's intimate knowledge of the region and its hidden gems ensures our tours are authentic and unforgettable.
                  </TeamMemberBio>
                </TeamMemberInfo>
              </TeamMember>
              
              <TeamMember variants={fadeInUp}>
                <TeamMemberImage>
                  <AvatarPlaceholder 
                    category="people" 
                    alt="Maria Patel"
                  />
                </TeamMemberImage>
                <TeamMemberInfo>
                  <TeamMemberName>Maria Patel</TeamMemberName>
                  <TeamMemberRole>Luxury Travel Specialist</TeamMemberRole>
                  <TeamMemberBio>
                    With her expertise in high-end travel experiences, Maria crafts bespoke luxury itineraries that exceed our most discerning clients' expectations.
                  </TeamMemberBio>
                </TeamMemberInfo>
              </TeamMember>
              
              <TeamMember variants={fadeInUp}>
                <TeamMemberImage>
                  <AvatarPlaceholder 
                    category="people" 
                    alt="James Williams"
                  />
                </TeamMemberImage>
                <TeamMemberInfo>
                  <TeamMemberName>James Williams</TeamMemberName>
                  <TeamMemberRole>Adventure Travel Expert</TeamMemberRole>
                  <TeamMemberBio>
                    An avid adventurer, James specializes in creating thrilling experiences from wildlife safaris to mountain treks and ocean adventures.
                  </TeamMemberBio>
                </TeamMemberInfo>
              </TeamMember>
            </TeamGrid>
          </SectionContent>
        </Container>
      </TeamSection>

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
              <CTATitle>Ready to Experience South Africa?</CTATitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CTADescription>
                Contact our team to start planning your dream African adventure today.
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

const StorySection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.white};
`;

const MissionSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.offWhite};
`;

const TeamSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.white};
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

const SectionSubtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const TitleAccent = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StoryContent = styled(motion.div)`
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.darkGray};
    line-height: 1.7;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;

const StoryImage = styled(motion.div)`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ValuesGrid = styled.div`
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

const ValueCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
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

const ValueIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ValueTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.black};
`;

const ValueDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TeamMember = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  transition: ${({ theme }) => theme.transition.normal};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.boxShadow.xl};
  }
`;

const TeamMemberImage = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ${({ theme }) => theme.transition.normal};
  }
  
  ${TeamMember}:hover & img {
    transform: scale(1.05);
  }
`;

const TeamMemberInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const TeamMemberName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.black};
`;

const TeamMemberRole = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TeamMemberBio = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
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

export default About; 