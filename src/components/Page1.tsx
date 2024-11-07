import React, { useEffect, useState } from 'react';
import * as Styles from "../styles/SharedStyles";
import CurrentPage from './CurrentPage';
import { PageProps, RootState } from '../interfaces/Props';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../redux/slice';
import { AppDispatch } from '../redux/store';


const Pagina1: React.FC<PageProps> = ({ currentStep, setCurrentStep, totalSteps }) => {
    const nameFromRedux = useSelector((state: RootState) => state.slice.sliceData.name);
    const [namePage, setNamePage] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();

    const handleNextStep = () => {
        dispatch(setName(namePage));

        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    useEffect(() => {
        if (nameFromRedux && !namePage) {
            setNamePage(nameFromRedux);
        }
    }, [nameFromRedux, namePage]);

    return (
        <Styles.ContainerPage1>
            <Styles.LogoMobile >
                <Styles.ImgSvg src="https://res.cloudinary.com/dtoditltb/image/upload/v1730930423/Imagen_de_WhatsApp_2024-11-06_a_las_16.57.43_fea909a1.png" alt="" />
            </Styles.LogoMobile>
            <Styles.ContainerDesktop>
                <Styles.Container>
                    <CurrentPage currentStep={currentStep} totalSteps={totalSteps} />
                    <Styles.StyledSvg>
                        <img src="/logoSvg.svg" alt="" />
                    </Styles.StyledSvg>
                    <Styles.Paragraph>
                        Muchas gracias por tu interés en conocer 
                        <strong> customerScoops, </strong>que a través de Formularios 
                        <br /> Conversacionales Inteligente te ayudamos
                        <br />
                        a aumentar el revenue y rentabilidad
                        de tu negocio.
                    </Styles.Paragraph>
                    <Styles.Paragraph>
                        Queremos conocerte, ¿cuál es tu nombre?
                    </Styles.Paragraph>
                    <Styles.NameInput>
                        <Styles.InputName 
                        type="text" value={namePage} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNamePage(e.target.value)} 
                        placeholder="Nombre" />
                        <section>
                            <Styles.Begin 
                            onClick={handleNextStep} 
                            disabled={namePage.trim() === ""}>Comenzar
                            </Styles.Begin>
                        </section>
                    </Styles.NameInput>
                </Styles.Container>
                <Styles.StyledSvg>
                    <Styles.BackgroundSvg>
                        <Styles.Desktop src="https://res.cloudinary.com/dtoditltb/image/upload/v1730953452/Imagen_de_WhatsApp_2024-11-06_a_las_23.18.06_7448ee1a_ztdgng.png" alt="" />
                    </Styles.BackgroundSvg>
                </Styles.StyledSvg>
            </Styles.ContainerDesktop>
        </Styles.ContainerPage1>
    )
}

export default Pagina1;