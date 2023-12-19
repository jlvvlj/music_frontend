"use client";
import { useState } from "react";
import ProgressSteps from "@/components/contract/ProgressSteps";
import CreateStepCards from "@/components/contract/createStepCards";
import { STEPS } from "@/components/contract/types";

export default function NewContractPage() {
  const [activeStep, setActiveStep] = useState(1);

  const handleUpdateActiveStep = (step = 1) => {
    setActiveStep(step);
  };

  // ** Actions
  const handleClickSave = () => {
    if (activeStep < STEPS.length) {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="mx-4">
        <ProgressSteps step={activeStep} updateStep={handleUpdateActiveStep} />
      </div>
      <div className="flex-1">
        <CreateStepCards step={activeStep} updateStep={handleClickSave} />
      </div>
    </div>
  );
}
