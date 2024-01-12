"use client";
import { useCallback, useState } from "react";
import ProgressSteps from "@/components/contract/ProgressSteps";
import { STEPS, StepIndex } from "@/components/contract/types";
import { ContractBuilderProvider } from "@/contexts/ContractBuilderContext";
import Contributors from "./Contributors";
import Shares from "./Shares";
import Recordings from "./Recordings";
import Royalties from "./Royalties";
import AdditionalConditions from "./AdditionalConditions";
import Budget from "./Budget";
import RoyaltyAdvances from "./RoyaltyAdvances";
import Abatements from "./Abatements";
import Broadcasting from "./Broadcasting";
import DerivativeUse from "./DerivativeUse";
import Introduction from "./Introduction";

export default function NewContract() {
  const [steps, setSteps] = useState(STEPS);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [checkedBoxes, setCheckedBoxes] = useState({
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  });

  const handleBack = () => {
    if (currentStep < 5) {
      setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
    } else if (currentStep === 4) {
      const previousPage = Object.keys(checkedBoxes)
        .reverse()
        .find((page) => checkedBoxes[page] && parseInt(page, 11) < currentStep);
      if (previousPage) {
        setCurrentStep(parseInt(previousPage));
      } else {
        setCurrentStep(2);
      }
    } else {
      const previousPage = Object.keys(checkedBoxes)
        .reverse()
        .find((page) => checkedBoxes[page] && parseInt(page, 11) < currentStep);
      if (previousPage) {
        setCurrentStep(parseInt(previousPage));
      } else {
        setCurrentStep(4);
      }
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prevStep) => Math.min(prevStep + 1, 11));
    } else if (currentStep === 4) {
      const selectedSteps = Object.keys(checkedBoxes).filter(
        (step) => checkedBoxes[step]
      );
      if (selectedSteps.length > 0) {
        const nextStep = Math.min(...selectedSteps.map(Number));
        setCurrentStep(nextStep);
      } else {
        setCurrentStep(10);
      }
    } else {
      const nextPage = Object.keys(checkedBoxes).find(
        (page) => checkedBoxes[page] && parseInt(page, 11) > currentStep
      );
      if (nextPage) {
        setCurrentStep(parseInt(nextPage));
      } else {
        setCurrentStep(10);
      }
    }
  };

  const handleSwitchChange = (step: any, e: any) => {
    setSteps((prevSteps) => e ? [...prevSteps, step].sort((a, b) => a.id - b.id) : prevSteps.filter(({ id }) => id !== step.id))
    setCheckedBoxes((prevSteps) => { return { ...prevSteps, [step.id]: e } });
  };

  const loadCardByStep = useCallback(() => {
    switch (currentStep) {
      case StepIndex.CONTRIBUTORS:
        return <Contributors handleNextStep={handleNext} ></Contributors>;
      case StepIndex.SHARES:
        return <Shares handleNextStep={handleNext} handleBackStep={handleBack} />;
      case StepIndex.RECORDINGS:
        return <Recordings handleNextStep={handleNext} handleBackStep={handleBack} />;
      case StepIndex.ADDITIONALCONDITIONS:
        return <AdditionalConditions handleNextStep={handleNext} handleBackStep={handleBack} handleSwitchChange={handleSwitchChange} />;
      case StepIndex.BUDGET:
        return <Budget handleNextStep={handleNext} handleBackStep={handleBack} />;
      case StepIndex.ROYALTIES_ADVANCES:
        return <RoyaltyAdvances handleNextStep={handleNext} handleBackStep={handleBack} />;
      case StepIndex.ABATEMENTS:
        return <Abatements handleNextStep={handleNext} handleBackStep={handleBack} />;
      case StepIndex.BROADCASTING:
        return <Broadcasting handleNextStep={handleNext} handleBackStep={handleBack} />;
      case StepIndex.DERIVATIVE_USE:
        return <DerivativeUse handleNextStep={handleNext} handleBackStep={handleBack} />;
      case StepIndex.INTRODUCTION:
        return <Introduction handleNextStep={handleNext} handleBackStep={handleBack} />;
      default:
        return;
    }
  }, [currentStep, handleNext]);

  return (
    <ContractBuilderProvider>
      <div className="h-[inherit] xl:w-[1241px] w-full flex flex-col gap-20 relative">
        <div className={`absolute top-9 hidden lg:block z-10 ${currentStep === StepIndex.INTRODUCTION || currentStep === StepIndex.ADDITIONALCONDITIONS ? 'left-1/2 translate-x-[-50%] w-[454px]' : 'left-[88px] w-[50%]'}`}>
          <ProgressSteps
            currentStep={currentStep}
            handleNext={handleNext}
            steps={steps?.sort((a:any, b:any) => a.id - b.id)}
          />
        </div>
        <div className="flex-1 h-full">
          {loadCardByStep()}
        </div>
      </div>
    </ContractBuilderProvider>
  );
}
