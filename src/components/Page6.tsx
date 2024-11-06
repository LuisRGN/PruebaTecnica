import * as Styles from "../styles/SharedStyles";
import CurrentPage from './CurrentPage';
import { PageProps } from "../interfaces/Props";


const Page6: React.FC<PageProps> = ({ currentStep, totalSteps }) => {
    return (
        <section>
            <Styles.ContainerPageFinish>
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
                        <Styles.BackgroundSvg isPageSix={currentStep === 6}>
                            <img src="/svg.svg" alt="" />
                        </Styles.BackgroundSvg>
                    </Styles.StyledSvg>
                </Styles.ContainerDesktop>
            </Styles.ContainerPageFinish>
        </section>
    )
}

export default Page6