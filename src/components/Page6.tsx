import * as Styles from "../styles/SharedStyles";
import CurrentPage from './CurrentPage';
import { PageProps } from "../interfaces/Props";


const Page6: React.FC<PageProps> = ({ currentStep, totalSteps }) => {
    return (
        <section>
            <Styles.ContainerPageFinish>
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
                            <strong>Muchas Gracias</strong><br />
                            por querer ser parte de la familia Scoopers
                        </Styles.Paragraph>
                        <Styles.Paragraph>
                            Nos vemos pronto!
                        </Styles.Paragraph>
                        <section>
                            <Styles.Begin
                                onClick={() => window.location.href = "https://www.customerscoops.com/"}>
                                Finalizar
                            </Styles.Begin>
                        </section>
                    </Styles.Container>
                    <Styles.StyledSvg>
                        <Styles.BackgroundSvg>
                            <Styles.DesktopNoBackground src="https://res.cloudinary.com/dtoditltb/image/upload/v1730952132/Imagen_de_WhatsApp_2024-11-06_a_las_22.49.48_a7f80ead_1_uxfaa9.png" alt="" />
                        </Styles.BackgroundSvg>
                    </Styles.StyledSvg>
                </Styles.ContainerDesktop>
            </Styles.ContainerPageFinish>
        </section>
    )
}

export default Page6