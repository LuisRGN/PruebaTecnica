import React, { useState/* , useEffect  */} from 'react';
import Pagina1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import ProgressBar from './components/ProgressBar';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 6;

  const renderPage = () => {
    switch (currentStep) {
      case 1:
        return <Pagina1 currentStep={currentStep} setCurrentStep={setCurrentStep} totalSteps={totalSteps} />;
      case 2:
        return <Page2 currentStep={currentStep} setCurrentStep={setCurrentStep} totalSteps={totalSteps} />;
      case 3:
        return <Page3 currentStep={currentStep} setCurrentStep={setCurrentStep} totalSteps={totalSteps} />;
      case 4:
        return <Page4 currentStep={currentStep} setCurrentStep={setCurrentStep} totalSteps={totalSteps} />;
      case 5:
        return <Page5 currentStep={currentStep} setCurrentStep={setCurrentStep} totalSteps={totalSteps} />;
      case 6:
        return <Page6 currentStep={currentStep} setCurrentStep={setCurrentStep} totalSteps={totalSteps} /> 
      default:
        return <Pagina1 currentStep={currentStep} setCurrentStep={setCurrentStep} totalSteps={totalSteps} />;
    }
  };

  return (
    <div>
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <div
      >
        {renderPage()}
      </div>
    </div>
  );
};

export default App;