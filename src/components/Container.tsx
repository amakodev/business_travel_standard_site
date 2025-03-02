import styled from 'styled-components';
import { Theme } from '../styles/theme';

interface ContainerProps {
  fluid?: boolean;
  theme: Theme;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.md};
  
  /* Responsive container widths */
  ${({ fluid, theme }) => !fluid && `
    @media (min-width: ${theme.breakpoints.sm}) {
      max-width: 540px;
    }
    
    @media (min-width: ${theme.breakpoints.md}) {
      max-width: 720px;
    }
    
    @media (min-width: ${theme.breakpoints.lg}) {
      max-width: 960px;
    }
    
    @media (min-width: ${theme.breakpoints.xl}) {
      max-width: 1140px;
    }
    
    @media (min-width: ${theme.breakpoints.xxl}) {
      max-width: 1320px;
    }
  `}
`;

export default Container; 