import React, { useCallback, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioButtonCard } from "../cards/RadioButtonCard";
import { STEPS, StepIndex } from "./types";
import RoyaltyAdvances from "./RoyaltyAdvances";
import Abatements from "./Abatements";
import Broadcasting from "./Broadcasting";
import DerivativeUse from "./DerivativeUse";

interface Props extends React.PropsWithChildren {
  currentStep?: number;
  updateStep: (step: number) => void;
}

export default function BaseFilterWrapper({
  currentStep = 6,
  updateStep,
}: Props) {
  const [showDetails, setShowDetails] = useState(false);
  const [cardValue, setCardValue] = useState("yes");
  const handleUpdateStep = (value: number) => {
    updateStep(value);
    setShowDetails(false);
  };

  const loadCardByStep = useCallback(() => {
    switch (currentStep) {
      case StepIndex.ROYALTIES_ADVANCES:
        return <RoyaltyAdvances updateStep={handleUpdateStep} />;
      case StepIndex.ABATEMENTS:
        return <Abatements updateStep={handleUpdateStep} />;
      case StepIndex.BROADCASTING:
        return <Broadcasting updateStep={handleUpdateStep} />;
      case StepIndex.DERIVATIVE_USE:
        return <DerivativeUse updateStep={handleUpdateStep} />;
      default:
        return <></>;
    }
  }, [currentStep]);

  const handleChangeRadioButtons = (value: string) => {
    console.log(value);
    if (value.toLowerCase() === "yes") {
      setShowDetails(true);
    } else {
      updateStep(1);
    }
  };

  return (
    <>
      {showDetails ? (
        <>{loadCardByStep()}</>
      ) : (
        <div className="bg-modal px-[55px] pt-9 pb-24 rounded-3xl">
          <div className="w-full flex justify-between">
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold tracking-tight">
                {STEPS[currentStep - 1].title}
              </h1>
              <p className="text-sm text-muted-foreground">
                {STEPS[currentStep - 1].description}
              </p>
            </div>
          </div>
          <div className="hidden space-y-6 pb-16 md:block mt-14">
            <div className="mt-4 mx-auto flex w-full flex-col justify-center space-y-6">
              <div className="flex flex-col space-y-2 text-center">
                <p className="text-sm text-white lg:text-2xl leading-5 font-normal">
                  {STEPS[currentStep - 1].subTitle}
                </p>
              </div>
            </div>
          </div>
          <CardContent className="space-y-6">
            <RadioGroup
              value="card"
              className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 lg:px-20"
              onValueChange={handleChangeRadioButtons}
            >
              <RadioButtonCard title="YES" className="hover:bg-mblue" />
              <RadioButtonCard title="NO" className="hover:bg-gray-900" />
            </RadioGroup>
          </CardContent>
        </div>
      )}
    </>
  );
}
