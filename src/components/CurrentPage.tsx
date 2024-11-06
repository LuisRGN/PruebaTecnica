import React from 'react';
import * as Styles from "../styles/SharedStyles";
import { CurrentPageProps } from '../interfaces/Props';

const CurrentPage: React.FC<CurrentPageProps> = ({ currentStep, totalSteps }) => {

  return (
    <Styles.ContainerCountPage>
        <Styles.CurrentPageStyle>0{currentStep}</Styles.CurrentPageStyle><Styles.LinePageStyle>|</Styles.LinePageStyle><Styles.TotalPageStyle>0{totalSteps}</Styles.TotalPageStyle>
    </Styles.ContainerCountPage>
  );
};

export default CurrentPage;