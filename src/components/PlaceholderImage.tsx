import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getPlaceholderImage, getTextPlaceholder, getTravelPlaceholder, ImageCategory } from '../utils/imageUtils';

interface PlaceholderImageProps {
  width: number;
  height: number;
  category?: ImageCategory;
  text?: string;
  useTextOverlay?: boolean;
  bgColor?: string;
  textColor?: string;
  alt?: string;
  className?: string;
  rounded?: boolean;
  shadow?: boolean;
  grayscale?: boolean;
  blur?: number;
  animate?: boolean;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width,
  height,
  category = 'travel',
  text,
  useTextOverlay = false,
  bgColor,
  textColor,
  alt = 'Placeholder image',
  className,
  rounded = false,
  shadow = false,
  grayscale = false,
  blur = 0,
  animate = true
}) => {
  // Generate the appropriate image URL based on props
  const imageUrl = useTextOverlay
    ? getTextPlaceholder({ width, height, text, bgColor, textColor })
    : getPlaceholderImage({ width, height, category, grayscale, blur });

  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <ImageContainer
      as={animate ? motion.div : 'div'}
      className={className}
      initial={animate ? "hidden" : undefined}
      animate={animate ? "visible" : undefined}
      variants={animate ? imageVariants : undefined}
      $rounded={rounded}
      $shadow={shadow}
    >
      <StyledImage 
        src={imageUrl} 
        alt={alt} 
        width={width} 
        height={height}
        $rounded={rounded}
      />
    </ImageContainer>
  );
};

// Styled components for the image container and image
const ImageContainer = styled.div<{ $rounded?: boolean; $shadow?: boolean }>`
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: ${({ $rounded, theme }) => $rounded ? theme.borderRadius.lg : '0'};
  box-shadow: ${({ $shadow, theme }) => $shadow ? theme.boxShadow.md : 'none'};
`;

const StyledImage = styled.img<{ $rounded?: boolean }>`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: ${({ $rounded, theme }) => $rounded ? theme.borderRadius.lg : '0'};
`;

export default PlaceholderImage;

// Export a specialized version for hero images
export const HeroPlaceholder: React.FC<Omit<PlaceholderImageProps, 'width' | 'height'>> = (props) => {
  return (
    <PlaceholderImage
      width={1920}
      height={1080}
      rounded={false}
      shadow={false}
      {...props}
    />
  );
};

// Export a specialized version for card images
export const CardPlaceholder: React.FC<Omit<PlaceholderImageProps, 'width' | 'height'>> = (props) => {
  return (
    <PlaceholderImage
      width={400}
      height={300}
      rounded={true}
      shadow={true}
      {...props}
    />
  );
};

// Export a specialized version for profile/avatar images
export const AvatarPlaceholder: React.FC<Omit<PlaceholderImageProps, 'width' | 'height'>> = (props) => {
  return (
    <PlaceholderImage
      width={150}
      height={150}
      rounded={true}
      shadow={true}
      category="people"
      {...props}
    />
  );
};

// Export a specialized version for gallery images
export const GalleryPlaceholder: React.FC<Omit<PlaceholderImageProps, 'width' | 'height'>> = (props) => {
  return (
    <PlaceholderImage
      width={600}
      height={400}
      rounded={true}
      shadow={true}
      {...props}
    />
  );
}; 