import React from 'react';
import * as Styles from "../styles/SharedStyles";
import { ProgressBarProps } from '../interfaces/Props';


const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
        <Styles.ProgressContainer>
            <Styles.ProgressBar width={`${progress}%`}/>
        </Styles.ProgressContainer>
  );
};

export default ProgressBar;