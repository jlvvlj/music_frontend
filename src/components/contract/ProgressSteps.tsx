"use client";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import clsx from "clsx";
import { STEPS, StepIndex } from "./types";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLElement> {
  step: StepIndex;
  updateStep?: (step: number) => void;
}

const ProgressSteps = ({ className, step: activeStep, updateStep }: Props) => {
  const totalSteps = STEPS.length;

  const afterWidth = () => {
    const width = `${((100 / (totalSteps - 1)) * (activeStep - 1)).toFixed()}`;
    return activeStep === StepIndex.SHARES
      ? "after:w-[12.5%]"
      : activeStep === StepIndex.RECORDINGS
      ? "after:w-[25%]"
      : activeStep === StepIndex.BUDGET
      ? "after:w-[38%]"
      : activeStep === StepIndex.ROYALTIES
      ? "after:w-[50%]"
      : activeStep === StepIndex.ROYALTIES_ADVANCES
      ? "after:w-[62.5%]"
      : activeStep === StepIndex.ABATEMENTS
      ? "after:w-[75%]"
      : activeStep === StepIndex.BROADCASTING
      ? "after:w-[87.5%]"
      : activeStep === StepIndex.DERIVATIVE_USE
      ? "after:w-[100%]"
      : "";
  };

  return (
    <>
      <div className={cn("w-full max-w-[400px] my-0 py-0", className)}>
        <div
          className={clsx(
            "flex justify-between relative before:absolute before:bg-[#f3e7f3] before:h-[1px] before:w-[99%] before:top-[50%] before:-translate-y-1/2 before:left-0 after:absolute after:bg-mblue after:h-[2px] after:top-[50%] after:-translate-y-1/2 after:transition-all after:duration-500 after:ease-in-out after:-translae-y-1/2 after:left-0",
            afterWidth()
          )}
        >
          {STEPS.map(({ step, label }) => (
            <div key={step} className="relative z-[1] w-fit">
              <div
                className={clsx(
                  "w-5 h-5 rounded-full border-2 border-mblue border-solid  duration-300 ease-in flex justify-center items-center cursor-pointer",
                  activeStep > step ? "bg-mblue" : " bg-modal"
                )}
                onClick={() => {
                  if (updateStep) updateStep(step);
                }}
              >
                {activeStep > step ? (
                  <span className="relative z-10 flex h-[10px] w-[10px] items-center justify-center rounded-full bg-mblue">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                ) : activeStep === step ? (
                  <div className="rounded-full h-2 w-2 bg-mblue"></div>
                ) : (
                  <span
                    className={clsx(
                      "text-[10px]",
                      activeStep >= step ? "" : "text-mblue"
                    )}
                  >
                    {step}
                  </span>
                )}
              </div>
              {/* <div className="absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="text-sm font-medium whitespace-nowrap">
                  {label}
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProgressSteps;
