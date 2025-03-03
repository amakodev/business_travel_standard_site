import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from './Container';
import Button from './Button';
import { getAfricanTravelPlaceholder } from '../utils/imageUtils';

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  linkTo: string;
}

interface ServicesSectionProps {
  showButton?: boolean;
  compact?: boolean;
  className?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  showButton = true,
  compact = false,
  className
}) => {
  // Generate African-themed images for services
  const serviceImages = {
    flights: getAfricanTravelPlaceholder(400, 300, 'city'),
    hotels: getAfricanTravelPlaceholder(400, 300, 'city'),
    tours: getAfricanTravelPlaceholder(400, 300, 'safari'),
    packages: getAfricanTravelPlaceholder(400, 300, 'beach')
  };

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

  // Service items data
  const services: ServiceItemProps[] = [
    {
      title: 'Flight Booking',
      description: 'Get the best deals on international and domestic flights with our extensive network of airline partners.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
          <path fill="currentColor" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      ),
      imageUrl: serviceImages.flights,
      linkTo: '/services#flights'
    },
    {
      title: 'Hotel Reservations',
      description: 'From luxury hotels to cozy guesthouses, we offer accommodations that fit your preferences and budget.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
          <path fill="currentColor" d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
        </svg>
      ),
      imageUrl: serviceImages.hotels,
      linkTo: '/services#hotels'
    },
    {
      title: 'Guided Tours',
      description: 'Explore Cape Town with our knowledgeable local guides who bring the city\'s rich history and culture to life.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
          <path fill="currentColor" d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
        </svg>
      ),
      imageUrl: serviceImages.tours,
      linkTo: '/services#tours'
    },
    {
      title: 'Premium Packages',
      description: 'Our all-inclusive packages combine flights, accommodations, and activities for a hassle-free travel experience.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
          <path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" />
        </svg>
      ),
      imageUrl: serviceImages.packages,
      linkTo: '/packages'
    }
  ];

  // Display only 2 services if compact mode is enabled
  const displayedServices = compact ? services.slice(0, 2) : services;

  return (
    <ServicesWrapper className={className}>
      <Container>
        <ServicesHeader>
          <ServicesHeading>Our Premium Travel Services</ServicesHeading>
          <ServicesSubheading>
            Experience the best of South African travel with our comprehensive services
          </ServicesSubheading>
        </ServicesHeader>
        
        <ServicesGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {displayedServices.map((service, index) => (
            <ServiceCard 
              key={index}
              as={motion.div}
              variants={itemVariants}
            >
              <ServiceImageWrapper>
                <img src={service.imageUrl} alt={service.title} />
                <ServiceIconWrapper>
                  {service.icon}
                </ServiceIconWrapper>
              </ServiceImageWrapper>
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceLink as={Link} to={service.linkTo}>
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
                  </svg>
                </ServiceLink>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
        
        {showButton && (
          <ServicesButtonWrapper>
            <Button as={Link} to="/services" variant="primary" size="large">
              View All Services
            </Button>
          </ServicesButtonWrapper>
        )}
      </Container>
    </ServicesWrapper>
  );
};

const ServicesWrapper = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xl} 0`};
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ServicesHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ServicesSubheading = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.darkGray};
  max-width: 700px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ServiceCard = styled.div`
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

const ServiceImageWrapper = styled.div`
  position: relative;
  height: 200px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ServiceIconWrapper = styled.div`
  position: absolute;
  bottom: -24px;
  left: 24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.boxShadow.md};
`;

const ServiceContent = styled.div`
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg} ${theme.spacing.lg}`};
`;

const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ServiceDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const ServiceLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: ${({ theme }) => theme.transition.normal};
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ServicesButtonWrapper = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export default ServicesSection; 