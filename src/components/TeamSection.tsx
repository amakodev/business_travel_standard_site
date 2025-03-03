import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from './Container';
import Button from './Button';
import { getPlaceholderCollection } from '../utils/imageUtils';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

interface TeamSectionProps {
  showButton?: boolean;
  compact?: boolean;
  className?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({
  showButton = true,
  compact = false,
  className
}) => {
  // Generate African-themed team member images
  const teamImages = getPlaceholderCollection(6, 300, 300, 'people');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Team members data
  const teamMembers: TeamMemberProps[] = [
    {
      name: 'Thabo Nkosi',
      role: 'Founder & CEO',
      bio: 'With over 15 years of experience in the travel industry, Thabo founded Restro Travel with a vision to showcase the beauty of South Africa to the world.',
      imageUrl: teamImages[0],
      socialLinks: {
        linkedin: '#',
        twitter: '#',
        email: 'thabo@restrotravel.com'
      }
    },
    {
      name: 'Amahle Zulu',
      role: 'Head of Operations',
      bio: 'Amahle ensures that every aspect of your travel experience runs smoothly, from booking to return. Her attention to detail is unmatched.',
      imageUrl: teamImages[1],
      socialLinks: {
        linkedin: '#',
        email: 'amahle@restrotravel.com'
      }
    },
    {
      name: 'David van der Merwe',
      role: 'Safari Specialist',
      bio: 'A former game ranger with extensive knowledge of South African wildlife, David creates unforgettable safari experiences for our clients.',
      imageUrl: teamImages[2],
      socialLinks: {
        twitter: '#',
        email: 'david@restrotravel.com'
      }
    },
    {
      name: 'Lerato Molefe',
      role: 'Cultural Experience Curator',
      bio: "Lerato's passion for South African culture and history helps her design authentic experiences that go beyond typical tourist attractions.",
      imageUrl: teamImages[3],
      socialLinks: {
        linkedin: '#',
        email: 'lerato@restrotravel.com'
      }
    },
    {
      name: 'Michael Thompson',
      role: 'Adventure Travel Guide',
      bio: "An adrenaline junkie and certified mountain guide, Michael specializes in creating thrilling adventures across South Africa's diverse landscapes.",
      imageUrl: teamImages[4],
      socialLinks: {
        twitter: '#',
        email: 'michael@restrotravel.com'
      }
    },
    {
      name: 'Nomsa Dlamini',
      role: 'Customer Relations Manager',
      bio: 'With her warm personality and problem-solving skills, Nomsa ensures that every client receives personalized attention and support.',
      imageUrl: teamImages[5],
      socialLinks: {
        linkedin: '#',
        email: 'nomsa@restrotravel.com'
      }
    }
  ];

  // Display only 3 team members if compact mode is enabled
  const displayedMembers = compact ? teamMembers.slice(0, 3) : teamMembers;

  return (
    <TeamWrapper className={className}>
      <Container>
        <TeamHeader>
          <TeamHeading>Meet Our Team</TeamHeading>
          <TeamSubheading>
            Our passionate local experts are dedicated to creating unforgettable South African experiences
          </TeamSubheading>
        </TeamHeader>
        
        <TeamGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {displayedMembers.map((member, index) => (
            <TeamMemberCard 
              key={index}
              as={motion.div}
              variants={itemVariants}
            >
              <MemberImageWrapper>
                <img src={member.imageUrl} alt={member.name} />
              </MemberImageWrapper>
              <MemberContent>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberBio>{member.bio}</MemberBio>
                
                {member.socialLinks && (
                  <SocialLinks>
                    {member.socialLinks.linkedin && (
                      <SocialLink href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                      </SocialLink>
                    )}
                    
                    {member.socialLinks.twitter && (
                      <SocialLink href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                        </svg>
                      </SocialLink>
                    )}
                    
                    {member.socialLinks.email && (
                      <SocialLink href={`mailto:${member.socialLinks.email}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </SocialLink>
                    )}
                  </SocialLinks>
                )}
              </MemberContent>
            </TeamMemberCard>
          ))}
        </TeamGrid>
        
        {showButton && (
          <TeamButtonWrapper>
            <Button as={Link} to="/about#team" variant="primary" size="large">
              Meet the Full Team
            </Button>
          </TeamButtonWrapper>
        )}
      </Container>
    </TeamWrapper>
  );
};

const TeamWrapper = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xl} 0`};
  background-color: ${({ theme }) => theme.colors.white};
`;

const TeamHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const TeamHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TeamSubheading = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.darkGray};
  max-width: 700px;
  margin: 0 auto;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const TeamMemberCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  transition: ${({ theme }) => theme.transition.normal};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow.lg};
  }
`;

const MemberImageWrapper = styled.div`
  height: 300px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const MemberName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const MemberRole = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 500;
`;

const MemberBio = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transition.normal};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const TeamButtonWrapper = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export default TeamSection; 