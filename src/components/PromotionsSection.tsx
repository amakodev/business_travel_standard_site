import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from './Container';
import Button from './Button';
import { getAfricanTravelPlaceholder } from '../utils/imageUtils';

interface PromotionItemProps {
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  imageUrl: string;
  linkTo: string;
  badge?: string;
}

interface PromotionsSectionProps {
  showButton?: boolean;
  compact?: boolean;
  className?: string;
}

const PromotionsSection: React.FC<PromotionsSectionProps> = ({
  showButton = true,
  compact = false,
  className
}) => {
  // Generate African-themed promotion images
  const promotionImages = {
    safari: getAfricanTravelPlaceholder(600, 400, 'safari'),
    winelands: getAfricanTravelPlaceholder(600, 400, 'winelands'),
    beach: getAfricanTravelPlaceholder(600, 400, 'beach'),
    city: getAfricanTravelPlaceholder(600, 400, 'city')
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

  // Promotion items data
  const promotions: PromotionItemProps[] = [
    {
      title: 'Safari Adventure Special',
      description: 'Experience the thrill of a South African safari with our special package including luxury accommodations, guided game drives, and all meals.',
      discount: 'Save 15%',
      validUntil: 'Valid until 30 November 2023',
      imageUrl: promotionImages.safari,
      linkTo: '/packages/safari',
      badge: 'Most Popular'
    },
    {
      title: 'Cape Winelands Escape',
      description: 'Indulge in a 3-day tour of South Africa\'s premier wine regions with tastings at award-winning vineyards and gourmet dining experiences.',
      discount: 'Save 10%',
      validUntil: 'Valid until 15 December 2023',
      imageUrl: promotionImages.winelands,
      linkTo: '/packages/winelands'
    },
    {
      title: 'Family Beach Holiday',
      description: 'Bring your family to South Africa\'s beautiful beaches with our special family package where kids under 12 stay free.',
      discount: 'Kids Stay Free',
      validUntil: 'Valid for bookings of 7+ nights',
      imageUrl: promotionImages.beach,
      linkTo: '/packages/beach',
      badge: 'Family Special'
    },
    {
      title: 'Cape Town City Explorer',
      description: 'Discover the vibrant city of Cape Town with this comprehensive package including Table Mountain, Cape Point, and Robben Island tours.',
      discount: 'Save 12%',
      validUntil: 'Valid until 31 January 2024',
      imageUrl: promotionImages.city,
      linkTo: '/packages/cape-town'
    }
  ];

  // Display only 2 promotions if compact mode is enabled
  const displayedPromotions = compact ? promotions.slice(0, 2) : promotions;

  return (
    <PromotionsWrapper className={className}>
      <Container>
        <PromotionsHeader>
          <PromotionsHeading>Special Offers & Promotions</PromotionsHeading>
          <PromotionsSubheading>
            Limited-time deals on our most popular South African travel experiences
          </PromotionsSubheading>
        </PromotionsHeader>
        
        <PromotionsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {displayedPromotions.map((promotion, index) => (
            <PromotionCard 
              key={index}
              as={motion.div}
              variants={itemVariants}
            >
              <PromotionImageWrapper>
                <img src={promotion.imageUrl} alt={promotion.title} />
                <PromotionDiscount>{promotion.discount}</PromotionDiscount>
                {promotion.badge && (
                  <PromotionBadge>{promotion.badge}</PromotionBadge>
                )}
              </PromotionImageWrapper>
              <PromotionContent>
                <PromotionTitle>{promotion.title}</PromotionTitle>
                <PromotionDescription>{promotion.description}</PromotionDescription>
                <PromotionValidity>{promotion.validUntil}</PromotionValidity>
                <PromotionButton>
                  <Button as={Link} to={promotion.linkTo} variant="primary" fullWidth>
                    Book This Deal
                  </Button>
                </PromotionButton>
              </PromotionContent>
            </PromotionCard>
          ))}
        </PromotionsGrid>
        
        {showButton && (
          <PromotionsButtonWrapper>
            <Button as={Link} to="/promotions" variant="primary" size="large">
              View All Promotions
            </Button>
          </PromotionsButtonWrapper>
        )}
      </Container>
    </PromotionsWrapper>
  );
};

const PromotionsWrapper = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xl} 0`};
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const PromotionsHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const PromotionsHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const PromotionsSubheading = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.darkGray};
  max-width: 700px;
  margin: 0 auto;
`;

const PromotionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const PromotionCard = styled.div`
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

const PromotionImageWrapper = styled.div`
  position: relative;
  height: 200px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PromotionDiscount = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: ${({ theme }) => theme.colors.accent1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const PromotionBadge = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const PromotionContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const PromotionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const PromotionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const PromotionValidity = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-style: italic;
`;

const PromotionButton = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const PromotionsButtonWrapper = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export default PromotionsSection; 