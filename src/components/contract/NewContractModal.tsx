"use client";
import { useState } from "react";
import ProgressSteps from "@/components/contract/ProgressSteps";
import CreateStepCards from "@/components/contract/createStepCards";
import { STEPS, StepIndex } from "@/components/contract/types";
import { ContractBuilderProvider } from "@/contexts/ContractBuilderContext";

export default function NewContract() {
  const [activeStep, setActiveStep] = useState(1);

  const handleUpdateActiveStep = (step = 1) => {
    setActiveStep(step);
  };

  // ** Actions
  const handleClickSave = (step: number) => {
    console.log(activeStep);
    if (step > 0) {
      if (activeStep < STEPS.length) setActiveStep(activeStep + step);
    } else {
      if (activeStep > 1) setActiveStep(activeStep + step);
    }
  };

  return (
    <ContractBuilderProvider>
      <div className="h-[inherit] xl:w-[1241px] w-full flex flex-col gap-20 relative">
        <div className={`absolute top-9 hidden lg:block z-10 ${activeStep === StepIndex.INTRODUCTION || activeStep === StepIndex.ADDITIONALCONDITIONS ? 'left-1/2 translate-x-[-50%] w-[454px]' : 'left-[88px] w-[50%]'}`}>
          <ProgressSteps
            step={activeStep}
            updateStep={handleUpdateActiveStep}
          />
        </div>
        <div className="flex-1 h-full">
          <CreateStepCards step={activeStep} updateStep={handleClickSave} />
        </div>
      </div>
    </ContractBuilderProvider>
  );
}
