import styled, { css } from 'styled-components';
import { Theme } from '../styles/theme';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';

interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  disabled?: boolean;
  theme: Theme;
}

// Button size styles
const getButtonSize = (size: ButtonSize = 'medium', theme: Theme) => {
  switch (size) {
    case 'small':
      return css`
        font-size: ${theme.fontSizes.sm};
        padding: ${theme.spacing.xs} ${theme.spacing.sm};
      `;
    case 'large':
      return css`
        font-size: ${theme.fontSizes.lg};
        padding: ${theme.spacing.md} ${theme.spacing.lg};
      `;
    default:
      return css`
        font-size: ${theme.fontSizes.md};
        padding: ${theme.spacing.sm} ${theme.spacing.md};
      `;
  }
};

// Button variant styles
const getButtonVariant = (variant: ButtonVariant = 'primary', theme: Theme) => {
  switch (variant) {
    case 'secondary':
      return css`
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.white};
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary};
        }
      `;
    case 'tertiary':
      return css`
        background-color: ${theme.colors.tertiary};
        color: ${theme.colors.white};
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.secondary};
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${theme.colors.primary};
        border: 2px solid ${theme.colors.primary};
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
        }
      `;
    case 'ghost':
      return css`
        background-color: transparent;
        color: ${theme.colors.primary};
        border: none;
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.lightGray};
        }
      `;
    default:
      return css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.secondary};
        }
      `;
  }
};

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.fast};
  border: none;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${({ size, theme }) => getButtonSize(size, theme)}
  ${({ variant, theme }) => getButtonVariant(variant, theme)}
  
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:focus {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
  
  svg {
    width: 1em;
    height: 1em;
  }
`;

export default Button; 