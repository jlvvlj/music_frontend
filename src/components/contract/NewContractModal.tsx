"use client";
import { useState } from "react";
import ProgressSteps from "@/components/contract/ProgressSteps";
import CreateStepCards from "@/components/contract/createStepCards";
import { STEPS } from "@/components/contract/types";
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
      <div className="h-full w-[1070px] flex flex-col gap-20 border-none">
        <div className="flex-1">
          <CreateStepCards step={activeStep} updateStep={handleClickSave} />
        </div>
      </div>
    </ContractBuilderProvider>
  );
}
