import styled from "styled-components";

export const StyledLetter = styled.span`
    background-color: #00ccbc;  
    color: white;              
    padding: 14px 18px;
    border-radius: 50%;        
    font-weight: bold; 
`;

export const SelectButtons2 = styled.button<{ isSelected: boolean }>`
    border-radius: 2rem;
    color: ${({ isSelected }) => (isSelected ? '#fff' : '#231331')};
    background-color: ${({ isSelected }) => (isSelected ? '#231331' : 'transparent')};
    border-color: #231331;
    place-items: center;
    width: 14rem;
    height: 4rem;
    margin: 0.1rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    display: grid;
    grid-template-columns: 20% 80%;
   
    &:hover{
        background-color: #231331;
        transform: scale(1.04);
        border: none;
        color: white;
    }
    @media (max-width: 768px) {
        width: 100%;
        grid-template-columns: 15% 80%;
    }
`;