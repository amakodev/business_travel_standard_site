import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { getPlaceholderCollection, getAfricanTravelPlaceholder } from '../utils/imageUtils';

interface AfricanImageGalleryProps {
  title?: string;
  subtitle?: string;
  imageCount?: number;
  imageWidth?: number;
  imageHeight?: number;
  category?: 'safari' | 'beach' | 'mountain' | 'city' | 'winelands';
  showCaption?: boolean;
  captions?: string[];
  className?: string;
  interactive?: boolean;
}

const AfricanImageGallery: React.FC<AfricanImageGalleryProps> = ({
  title = 'Discover South Africa',
  subtitle = 'Experience the beauty of African landscapes and wildlife',
  imageCount = 6,
  imageWidth = 400,
  imageHeight = 300,
  category,
  showCaption = true,
  captions,
  className,
  interactive = true
}) => {
  // Generate African-themed images
  const images = React.useMemo(() => {
    return getPlaceholderCollection(imageCount, imageWidth, imageHeight);
  }, [imageCount, imageWidth, imageHeight]);

  // Default captions if none provided
  const defaultCaptions = [
    'Experience the breathtaking landscapes of South Africa',
    'Encounter majestic wildlife on safari adventures',
    'Explore vibrant Cape Town and its surroundings',
    'Discover the stunning coastlines and beaches',
    'Enjoy world-class wineries in the Cape Winelands',
    'Journey through the scenic Garden Route',
    'Witness the beauty of Table Mountain',
    'Immerse yourself in rich cultural experiences'
  ];

  const imageCaptions = captions || defaultCaptions;
  
  // For interactive gallery
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <GalleryContainer className={className}>
      {(title || subtitle) && (
        <GalleryHeader>
          {title && <GalleryTitle>{title}</GalleryTitle>}
          {subtitle && <GallerySubtitle>{subtitle}</GallerySubtitle>}
        </GalleryHeader>
      )}
      
      {interactive ? (
        <InteractiveGallery>
          <GalleryNavButton onClick={prevImage} position="left">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </GalleryNavButton>
          
          <AnimatePresence mode="wait">
            <GalleryImageWrapper
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GalleryImage src={images[activeIndex]} alt={imageCaptions[activeIndex % imageCaptions.length]} />
              {showCaption && (
                <GalleryCaption>
                  {imageCaptions[activeIndex % imageCaptions.length]}
                </GalleryCaption>
              )}
            </GalleryImageWrapper>
          </AnimatePresence>
          
          <GalleryNavButton onClick={nextImage} position="right">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </GalleryNavButton>
          
          <GalleryDots>
            {images.map((_, index) => (
              <GalleryDot 
                key={index} 
                $active={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </GalleryDots>
        </InteractiveGallery>
      ) : (
        <GalleryGrid>
          {images.map((image, index) => (
            <GalleryItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GalleryImage src={image} alt={imageCaptions[index % imageCaptions.length]} />
              {showCaption && (
                <GalleryCaption>
                  {imageCaptions[index % imageCaptions.length]}
                </GalleryCaption>
              )}
            </GalleryItem>
          ))}
        </GalleryGrid>
      )}
    </GalleryContainer>
  );
};

// Styled components
const GalleryContainer = styled.div`
  width: 100%;
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const GalleryHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const GalleryTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const GallerySubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkGray};
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const GalleryItem = styled(motion.div)`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  background-color: ${({ theme }) => theme.colors.white};
`;

const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

const GalleryCaption = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

// Interactive gallery components
const InteractiveGallery = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.md};
`;

const GalleryImageWrapper = styled(motion.div)`
  width: 100%;
`;

const GalleryNavButton = styled.button<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ position }) => position === 'left' ? 'left: 10px;' : 'right: 10px;'}
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const GalleryDots = styled.div`
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 2;
`;

const GalleryDot = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $active, theme }) => 
    $active ? theme.colors.primary : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${({ $active, theme }) => 
      $active ? theme.colors.primary : 'rgba(255, 255, 255, 0.8)'};
  }
`;

export default AfricanImageGallery;

// Export a specialized version for safari images
export const SafariGallery: React.FC<Omit<AfricanImageGalleryProps, 'category'>> = (props) => {
  return (
    <AfricanImageGallery
      category="safari"
      title="Safari Adventures"
      subtitle="Encounter Africa's majestic wildlife in their natural habitat"
      {...props}
    />
  );
};

// Export a specialized version for Cape Town images
export const CapeTownGallery: React.FC<Omit<AfricanImageGalleryProps, 'category'>> = (props) => {
  return (
    <AfricanImageGallery
      category="city"
      title="Cape Town Highlights"
      subtitle="Explore the vibrant city nestled between mountains and ocean"
      {...props}
    />
  );
};

// Export a specialized version for wine country images
export const WinelandsGallery: React.FC<Omit<AfricanImageGalleryProps, 'category'>> = (props) => {
  return (
    <AfricanImageGallery
      category="winelands"
      title="Cape Winelands"
      subtitle="Discover South Africa's premier wine regions and vineyards"
      {...props}
    />
  );
}; 