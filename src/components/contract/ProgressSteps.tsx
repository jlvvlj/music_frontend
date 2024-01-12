"use client";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import clsx from "clsx";
import { STEPS, StepIndex } from "./types";
import { cn } from "@/lib/utils";

const ProgressSteps = ({ className, currentStep, handleNext, steps }: any) => {

  const afterWidth = () => {
    return currentStep === StepIndex.SHARES
      ? "after:w-[10%]"
      : currentStep === StepIndex.RECORDINGS
      ? "after:w-[30%]"
      : currentStep === StepIndex.ADDITIONALCONDITIONS
      ? "after:w-[40%]"
      : currentStep === StepIndex.BUDGET
      ? "after:w-[50%]"
      : currentStep === StepIndex.ROYALTIES_ADVANCES
      ? "after:w-[60%]"
      : currentStep === StepIndex.ABATEMENTS
      ? "after:w-[70%]"
      : currentStep === StepIndex.BROADCASTING
      ? "after:w-[80%]"
      : currentStep === StepIndex.DERIVATIVE_USE
      ? "after:w-[90%]"
      : currentStep === StepIndex.INTRODUCTION
      ? "after:w-[100%]"
      : "";
  };

  return (
    <>
      <div className={cn("w-full max-w-[454px] my-0 py-0", className)}>
        <div
          className={clsx(
            "flex justify-between relative before:absolute before:bg-[#f3e7f3] before:h-[1px] before:w-[99%] before:top-[50%] before:-translate-y-1/2 before:left-0 after:absolute after:bg-mblue after:h-[2px] after:top-[50%] after:-translate-y-1/2 after:transition-all after:duration-500 after:ease-in-out after:-translae-y-1/2 after:left-0",
            afterWidth()
          )}
        >
          {steps?.map((step:any) => (
            <div key={step.id} className="relative z-[1] w-7 h-7 rounded-full flex justify-center items-center bg-modal">
              <div
                className={clsx(
                  "w-5 h-5 rounded-full border-2 border-mblue border-solid  duration-300 ease-in flex justify-center items-center cursor-pointer",
                  currentStep > step.id ? "bg-mblue" : " bg-modal"
                )}
                onClick={handleNext}
              >
                {currentStep > step.id ? (
                  <span className="relative z-10 flex h-[10px] w-[10px] items-center justify-center rounded-full bg-mblue">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                ) : currentStep === step.id && (
                  <div className="rounded-full h-2 w-2 bg-mblue"></div>
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
