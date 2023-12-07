"use client";
import { useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export enum StepIndex {
  CONTRIBUTIONS = 1,
  CONTRIBUTORS,
  SHARES,
  ROLE,
  FORM,
  RECORDINGS,
  BUDGET,
  ROYALTIES,
  ABATEMENTS,
  BROADCASTING,
}

export enum ContributionSubType {}

export type Step = {
  label: string;
  step: StepIndex;
  title: string;
  saveBtnHidden: boolean;
  description: string;
};

export const STEPS = [
  {
    label: "Contributions",
    step: StepIndex.CONTRIBUTIONS,
    title: "Contributions",
    saveBtnHidden: true,
    description: "Does the contract involve multiple stakeholders?",
  },
  {
    label: "Contributors",
    step: StepIndex.CONTRIBUTORS,
    title: "Contributors",
    saveBtnHidden: false,
    description: "Add the contributors who will be on the contract.",
  },
  {
    label: "Shares",
    step: StepIndex.SHARES,
    title: "Shares",
    saveBtnHidden: false,
    description: "Something here...",
  },
  {
    label: "Role",
    step: StepIndex.ROLE,
    title: "Role",
    saveBtnHidden: true,
    description: "Are you a producer or an artist?",
  },
  {
    label: "Form",
    step: StepIndex.FORM,
    title: "Personal Information",
    saveBtnHidden: false,
    description: "Pleas add some details about you",
  },
  {
    label: "Recordings",
    step: StepIndex.RECORDINGS,
    title: "Recordings",
    saveBtnHidden: false,
    description: "Enter firm and optional recordings details",
  },
  {
    label: "Budgets",
    step: StepIndex.BUDGET,
    title: "Initial Budget",
    saveBtnHidden: false,
    description: "Enter the budget  details",
  },
  {
    label: "Royalties",
    step: StepIndex.ROYALTIES,
    title: "Royalties",
    saveBtnHidden: false,
    description: "Enter the contract royalties details",
  },
  {
    label: "Abatements",
    step: StepIndex.ABATEMENTS,
    title: "Abatements",
    saveBtnHidden: false,
    description: "Enter the contract royalties details",
  },
  {
    label: "BroadCasting",
    step: StepIndex.BROADCASTING,
    title: "Broadcasting right & Secondary Use",
    saveBtnHidden: false,
    description: "Enter the contract secondary use details",
  },

  // {
  //   label: "Contract",
  //   step: StepIndex.CONTRACT,
  //   title: "",
  //   saveBtnHidden: false,
  //   description: "",
  // },
  // {
  //   label: "Contract II",
  //   step: StepIndex.CONTRACT2,
  //   title: "",
  //   saveBtnHidden: false,
  //   description: "",
  // },
  // {
  //   label: "Contract III",
  //   step: StepIndex.CONTRACT3,
  //   title: "",
  //   saveBtnHidden: false,
  //   description: "",
  // },
];
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
    return activeStep === StepIndex.CONTRIBUTORS
      ? "after:w-[11%]"
      : activeStep === StepIndex.SHARES
      ? "after:w-[22%]"
      : activeStep === StepIndex.ROLE
      ? "after:w-[33%]"
      : activeStep === StepIndex.FORM
      ? "after:w-[44%]"
      : activeStep === StepIndex.RECORDINGS
      ? "after:w-[55%]"
      : activeStep === StepIndex.BUDGET
      ? "after:w-[67%]"
      : activeStep === StepIndex.ROYALTIES
      ? "after:w-[78%]"
      : activeStep === StepIndex.ABATEMENTS
      ? "after:w-[89%]"
      : activeStep >= StepIndex.BROADCASTING
      ? "after:w-[99%]"
      : "";
  };

  return (
    <>
      <div className="w-full max-w-[1200px] my-0 mx-auto py-0 px-4">
        <div
          className={clsx(
            "flex justify-between mt-[70px] relative before:absolute before:bg-[#f3e7f3] before:h-1 before:w-[99%] before:top-[50%] before:-translate-y-1/2 before:left-0 after:absolute after:bg-accent after:h-1 after:top-[45%] after:transition-all after:duration-500 after:ease-in-out after:-translae-y-1/2 after:left-0",
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
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                ) : (
                  <span
                    className={clsx(
                      activeStep >= step ? "text-white" : "text-[#f3e7f3]",
                      activeStep === step ? "text-xl" : "text-md"
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
