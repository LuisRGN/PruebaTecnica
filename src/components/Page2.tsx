import * as Styles from "../styles/SharedStyles";
import { GoArrowRight } from "react-icons/go";
import CurrentPage from './CurrentPage';
import { PageProps, RootState } from "../interfaces/Props";
import { useDispatch, useSelector } from 'react-redux';
import { setPositionSecond } from '../redux/slice';
import { useState, useEffect } from "react";
import { AppDispatch } from "../redux/store";
import { secondOptions } from "../constants/options";


const Page2: React.FC<PageProps> = ({ currentStep, setCurrentStep, totalSteps }) => {

    const name = useSelector((state: RootState) => state.slice.sliceData.name);
    const position = useSelector((state: RootState) => state.slice.sliceData.positionSecond);
    const dispatch = useDispatch<AppDispatch>();
    const [selectedPosition, setSelectedPosition] = useState<string>("");

    useEffect(() => {
        if (position) {
            setSelectedPosition(position);
        }
    }, [position]);

    const handlePositionSelect = (position: string): void => {
        setSelectedPosition(position);
        dispatch(setPositionSecond(position));
    };

    const handleNextStep = (): void => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevStep = (): void => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }

    return (
        <section>
            <Styles.ContainerPage1>
                <Styles.LogoMobile >
                    <img src="/svgMobile.svg" alt="" />
                </Styles.LogoMobile>
                <Styles.ContainerDesktop>
                    <Styles.Container>
                        <CurrentPage currentStep={currentStep} totalSteps={totalSteps} />
                        <Styles.StyledSvg>
                        <img src="/logoSvg.svg" alt="" />
                        </Styles.StyledSvg>
                        <Styles.Paragraph>
                            <strong>Genial {name}, </strong>
                            ahora nos gustaría tener cierta info para diseñar
                            una gran propuesta de valor para ti:
                        </Styles.Paragraph>
                        <Styles.Paragraph>
                            ¿Cuál es tu cargo/posición dentro de tu empresa?
                        </Styles.Paragraph>
                        <Styles.Options>
                            {secondOptions.map((option, index) => (
                                <Styles.SelectButtons
                                    key={index}
                                    onClick={() => handlePositionSelect(option)}
                                    isSelected={selectedPosition === option}>
                                    {option}
                                </Styles.SelectButtons>
                            ))}
                        </Styles.Options>
                        <Styles.PreviusNext>
                            <Styles.StyledIcon size="3.5rem" onClick={handlePrevStep} />
                            <section>
                                <Styles.Begin
                                    disabled={!selectedPosition}
                                    onClick={handleNextStep}>Siguiente
                                    <GoArrowRight color="#13847b" />
                                </Styles.Begin>
                            </section>
                        </Styles.PreviusNext>
                    </Styles.Container>
                    <Styles.StyledSvg>
                    <Styles.BackgroundSvg isPageSix={false}>
                        <img src="/svg.svg" alt="" />
                    </Styles.BackgroundSvg>
                    </Styles.StyledSvg>
                </Styles.ContainerDesktop>
            </Styles.ContainerPage1>
        </section>
    )
}

export default Page2