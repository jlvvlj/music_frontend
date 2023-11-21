"use client";
import { useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export enum StepType {
  TRACK = 1,
  SHARES,
  CONTRACT,
  CONTRACT2,
  CONTRACT3,
}

const steps = [
  {
    label: "Track",
    step: StepType.TRACK,
  },
  {
    label: "Shares",
    step: StepType.SHARES,
  },
  {
    label: "Contract",
    step: StepType.CONTRACT,
  },
  {
    label: "Contract II",
    step: StepType.CONTRACT2,
  },
  {
    label: "Contract III",
    step: StepType.CONTRACT3,
  },
];
const ProgressSteps = ({
  step: activeStep,
  updateStep,
}: {
  step: StepType;
  updateStep?: (step: number) => void;
}) => {
  const totalSteps = steps.length;

  const afterWidth = () => {
    const width = `${((100 / (totalSteps - 1)) * (activeStep - 1)).toFixed()}`;
    return activeStep === StepType.SHARES
      ? "after:w-[25%]"
      : activeStep === StepType.CONTRACT
      ? "after:w-[50%]"
      : activeStep === StepType.CONTRACT2
      ? "after:w-[75%]"
      : activeStep >= StepType.CONTRACT3
      ? "after:w-full"
      : "";
  };

  return (
    <>
      <div className="w-full max-w-[800px] my-0 mx-auto py-0 px-4">
        <div
          className={clsx(
            "flex justify-between mt-[70px] relative before:absolute before:bg-[#f3e7f3] before:h-1 before:w-full before:top-[50%] before:-translate-y-1/2 before:left-0 after:absolute after:bg-indigo-600 after:h-1 after:top-[45%] after:transition-all after:duration-500 after:ease-in-out after:-translae-y-1/2 after:left-0",
            afterWidth()
          )}
        >
          {steps.map(({ step, label }) => (
            <div key={step} className="relative z-[1] w-fit">
              <div
                className={clsx(
                  "w-9 h-9 rounded-full border-[3px] border-solid duration-300 ease-in flex justify-center items-center border-indigo-600 cursor-pointer",
                  activeStep >= step ? "bg-indigo-600" : " bg-white"
                )}
                onClick={() => {
                  if (updateStep) updateStep(step)
                }}
              >
                {activeStep > step ? (
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                    <CheckIcon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                ) : (
                    <span
                      className={clsx(
                        "text-lg",
                        activeStep >= step ? "text-white" : "text-indigo-300"
                      )}
                    >
                      {step}
                    </span>
                )}
              </div>
              <div className="absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="text-sm text-white font-medium whitespace-nowrap">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProgressSteps;
