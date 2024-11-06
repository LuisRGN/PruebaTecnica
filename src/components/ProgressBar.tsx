import React from 'react';
import { ProgressContainer, ProgressBar as StyledProgressBar } from '../styles/App.styles';
import { ProgressBarProps } from '../interfaces/Props';


const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
        <ProgressContainer>
            <StyledProgressBar width={`${progress}%`}/>
        </ProgressContainer>
  );
};

export default ProgressBar;