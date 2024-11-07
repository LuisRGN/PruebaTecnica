import * as Styles from "../styles/SharedStyles";
import { GoArrowRight } from "react-icons/go"
import CurrentPage from './CurrentPage';
import { PageProps, RootState } from "../interfaces/Props";
import { useDispatch, useSelector } from 'react-redux';
import { setPositionThree } from '../redux/slice';
import { useState, useEffect } from "react";
import { AppDispatch } from "../redux/store";
import { thirdOptions, letters } from "../constants/options";


const Page3: React.FC<PageProps> = ({ currentStep, setCurrentStep, totalSteps }) => {

    const position = useSelector((state: RootState) => state.slice.sliceData.positionThree);
    const dispatch = useDispatch<AppDispatch>();
    const [selectedPosition, setSelectedPosition] = useState<string>("");

    useEffect(() => {
        if (position) {
            setSelectedPosition(position);
        }
    }, [position]);

    const handlePositionSelect = (position: string): void => {
        setSelectedPosition(position);
        dispatch(setPositionThree(position));
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
                            ¿Cuáles son tus principales desafíos para 2024?
                        </Styles.Paragraph>
                        <Styles.Options>
                            {thirdOptions.map((option, index) => (
                                <Styles.SelectButtons2
                                    key={index}
                                    onClick={() => handlePositionSelect(option)}
                                    isSelected={selectedPosition === option}>
                                    <Styles.StyledLetter>
                                        {letters[index]}
                                    </Styles.StyledLetter>
                                    {option}
                                </Styles.SelectButtons2>
                            ))}
                        </Styles.Options>
                        <Styles.PreviusNext>
                            <Styles.StyledIcon size="3.5rem" onClick={handlePrevStep} />
                            <section>
                                <Styles.Begin
                                    onClick={handleNextStep}
                                    disabled={!selectedPosition}>Siguiente
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

export default Page3