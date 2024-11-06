import styled from "styled-components";

export const ContainerPageFinish = styled.div`
@media (min-width: 768px) {
  height: 100vh;
  background: linear-gradient(283.73deg, #231331 -29.4%, #00CCBC 50.02%);
}
`;

export const ContainerPage1 = styled.div`
@media (min-width: 768px) {
  height: 100vh;
}
`;

export const StyledSvg = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const BackgroundSvg = styled.div<{ isPageSix: boolean }>`
    border-radius: 10rem 0 0 10rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: end;
    justify-content: center;
    background: ${(props) =>
    props.isPageSix
      ? 'none' // Si es la página 6, no hay fondo
      : 'linear-gradient(283.73deg, #231331 -29.4%, #00CCBC 50.02%)'};
`;

export const LogoMobile = styled.div`
  display: flex;
  justify-content: end;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Paragraph = styled.p`
    font-size: 1.3rem;
    color: #231331;
`;

export const Container = styled.section`
    margin-left: 7rem;
    margin-right: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
        margin-top: 2rem;
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
    @media (max-width: 375px) {
        margin-left: 1rem;
        margin-right: 1rem;
  }
`;

export const NameInput = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`
export const Begin = styled.button`
    border-radius: 2rem;
    padding: 0.9rem 1.6rem 0.9rem 1.6rem;
    color: white;
    background-color: #231331;
    border: none;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    &:disabled {
        background-color: #ccc;
        color: #888;
        cursor: not-allowed;
    }
`;

export const InputName = styled.input`
border: none; 
outline: none;
border-bottom: 1px solid #00000047;
`;

export const ContainerDesktop = styled.section`
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 62% 38%;
        gap: 1rem;
        height: 100%;
    }
`;

export const SelectButtons = styled.button<{ isSelected: boolean }>`
    border-radius: 2rem;
    color: ${({ isSelected }) => (isSelected ? '#fff' : '#231331')};
    background-color: ${({ isSelected }) => (isSelected ? '#231331' : 'transparent')};
    border-color: #231331;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 11.5rem;
    height: 3rem;
    margin: 0.1rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
        background-color: #231331;
        transform: scale(1.04);
        border: none;
        color: white;
    }
    @media (max-width: 768px) {
      width: 49%;
    }
`;
export const ProgressContainer = styled.div`
    width: 100%;
    height: 10px;
    position: fixed;
    z-index: 5;
    top: 0;

`
export const ProgressBar = styled.div<{ width: string }>`
  height: 100%;
  background-color: #231331;
  transition: width 0.3s ease;
  width: ${(props) => props.width};
`;
export const ContainerCountPage = styled.div`
    position: absolute;
    @media (max-width: 768px) {
      top: 20px;
      right: 20px;
    }
    @media (min-width: 768px) {
      top: 70px;
      right: 35px;
    }
`;
export const CurrentPageStyle = styled.span`
    font-weight: bold;
    font-size: 22px;
`;
export const TotalPageStyle = styled.span`
    font-size: 15px;
`;
export const LinePageStyle = styled.span`
    font-size: 24px;
`;