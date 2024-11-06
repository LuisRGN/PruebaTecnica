import styled from "styled-components";
import { PiArrowCircleLeftThin } from 'react-icons/pi';

export const PreviusNext = styled.section`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-left: -4rem;
    @media (max-width: 768px) {
        margin-left: 0;
    }
`;
export const StyledIcon = styled(PiArrowCircleLeftThin)`
    cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
  
  &:hover {
    transform: scale(1.1); 
    color: #13847b; 
  }
`;

export const Options = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;