export interface PageProps {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    totalSteps: number;
}

export interface RootState {
    slice: {
        sliceData: {
          name: string;
          positionSecond: string;
            positionThree: string;
            positionFour: string;
            positionFive: string;
        };
      };
}

export type CurrentPageProps = {
  currentStep: number;
  totalSteps: number;
};

export type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};