"use client";
import { useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { STEPS, StepIndex } from "./types";

const ProgressSteps = ({
  step: activeStep,
  updateStep,
}: {
  step: StepIndex;
  updateStep?: (step: number) => void;
}) => {
  const totalSteps = STEPS.length;

  const afterWidth = () => {
    const width = `${((100 / (totalSteps - 1)) * (activeStep - 1)).toFixed()}`;
    return activeStep === StepIndex.SHARES
      ? "after:w-[12.5%]"
      : activeStep === StepIndex.RECORDINGS
      ? "after:w-[25%]"
      : activeStep === StepIndex.BUDGET
      ? "after:w-[37.5%]"
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
      <div className="w-full max-w-[1200px] my-0 mx-auto py-0 px-4">
        <div
          className={clsx(
            "flex justify-between relative before:absolute before:bg-[#f3e7f3] before:h-1 before:w-[99%] before:top-[50%] before:-translate-y-1/2 before:left-0 after:absolute after:bg-accent after:h-[5px] after:top-[50%] after:-translate-y-1/2 after:transition-all after:duration-500 after:ease-in-out after:-translae-y-1/2 after:left-0",
            afterWidth()
          )}
        >
          {STEPS.map(({ step, label }) => (
            <div key={step} className="relative z-[1] w-fit">
              <div
                className={clsx(
                  "w-9 h-9 rounded-full border-2 border-muted  duration-300 ease-in flex justify-center items-center cursor-pointer",
                  activeStep >= step ? "bg-popover" : " bg-accent"
                )}
                onClick={() => {
                  if (updateStep) updateStep(step);
                }}
              >
                {activeStep > step ? (
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-popover group-hover:bg-indigo-800">
                    <CheckIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </span>
                ) : (
                  <span
                    className={clsx(
                      activeStep >= step ? "" : "text-muted-foreground",
                      activeStep === step ? "text-xl" : "text-md"
                    )}
                  >
                    {step}
                  </span>
                )}
              </div>
              <div className="absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="text-sm font-medium whitespace-nowrap">
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
