"use client";
import { useCallback, useState } from "react";
import ProgressSteps from "@/components/contract/ProgressSteps";
import { STEPS, StepIndex } from "@/components/contract/types";
import { ContractBuilderProvider } from "@/contexts/ContractBuilderContext";
import Contributors from "./Contributors";
import Shares from "./Shares";
import Recordings from "./Recordings";
import Teams from "./Teams";
import AdditionalConditions from "./AdditionalConditions";
import Budget from "./Budget";
import RoyaltyAdvances from "./RoyaltyAdvances";
import Abatements from "./Abatements";
import Broadcasting from "./Broadcasting";
import DerivativeUse from "./DerivativeUse";
import Introduction from "./Introduction";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const albumSchema = z.object({
  album: z.object({
    title: z.string().refine((value) => value.trim() !== "", {
      message: "Title is required.",
    }),
    cover: z.string().refine((value) => value.trim() !== "", {
      message: "Cover is required.",
    }),
    audios: z.array(z.object({
      id: z.string(),
      title: z.string(),
      audio: z.string(),
      url: z.string(),
      code: z.string(),
    })).refine((value) => value.length > 0, {
      message: "At least one audio is required.",
    }),
  }),
});

const membersSchema = z.object({
  members: z.object({
    masterOwners: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        surName: z.string(),
        value: z.string(),
        email: z.string(),
        avatar: z.string(),
        code: z.string(),
        revenue: z.number(),
        role: z.string(),
      })
    ).refine((value) => value.length > 0, {
      message: "At least one Master Owner is required.",
    }),

    artists: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        surName: z.string(),
        value: z.string(),
        email: z.string(),
        avatar: z.string(),
        code: z.string(),
        revenue: z.number(),
        role: z.string(),
      })
    ).refine((value) => value.length > 0, {
      message: "At least one Artists is required.",
    }),
  }).refine((value) => value.masterOwners.length > 0 || value.artists.length > 0, {
    message: "At least one Master Owner & Artists is required.",
  }),
});

export default function NewContract() {
  const [steps, setSteps] = useState(STEPS);
  const [contractCreation, setContractCreation] = useState({
    album: {
      title: "",
      cover: "",
      audios: [],
    },
    members: { masterOwners: [], artists: [] },
    rates: [],
    shares: [],
    additionalConditions: null,
    initialBudget: [],
    royaltyAdvances: { options: [], subOptions: [] },
    abatements: [],
    broadCastings: [],
    derivativeUses: [],
  });
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [checkedBoxes, setCheckedBoxes] = useState<any>({
    4: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
  });

  const schema = currentStep === StepIndex.CONTRIBUTORS ? albumSchema : currentStep === StepIndex.TEAMS ? membersSchema : ""

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema as any),
    defaultValues: contractCreation,
  });

  const handleBack = () => {
    if (currentStep === StepIndex.ADDITIONALCONDITIONS) {
      if (checkedBoxes[StepIndex.SHARES]) {
        setCurrentStep(StepIndex.SHARES);
      } else {
        setCurrentStep(StepIndex.RECORDINGS);
      }
    } else if (currentStep < StepIndex.BUDGET) {
      setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
    } else if (currentStep === StepIndex.ADDITIONALCONDITIONS) {
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
        .find((page) => checkedBoxes[page] && parseInt(page, 10) < currentStep);
      if (previousPage && parseInt(previousPage) < 5) {
        setCurrentStep(StepIndex.ADDITIONALCONDITIONS);
      } else if (previousPage) {
        setCurrentStep(
          previousPage
            ? parseInt(previousPage, 10)
            : StepIndex.ADDITIONALCONDITIONS
        );
      } else {
        setCurrentStep(StepIndex.ADDITIONALCONDITIONS);
      }
    }
  };

  const handleNext = () => {
    if (currentStep === StepIndex.RECORDINGS) {
      if (!checkedBoxes[StepIndex.SHARES]) {
        setCurrentStep(StepIndex.ADDITIONALCONDITIONS);
      } else {
        setCurrentStep(StepIndex.SHARES);
      }
    } else if (currentStep < StepIndex.ADDITIONALCONDITIONS) {
      setCurrentStep((prevStep) => Math.min(prevStep + 1, 11));
    } else if (currentStep === StepIndex.ADDITIONALCONDITIONS) {
      const selectedSteps = Object.keys(checkedBoxes).filter(
        (step) =>
          checkedBoxes[step] &&
          parseInt(step, 11) > StepIndex.ADDITIONALCONDITIONS
      );
      if (selectedSteps.length > 0) {
        const nextStep = Math.min(...selectedSteps.map(Number));
        setCurrentStep(nextStep);
      } else {
        setCurrentStep(StepIndex.INTRODUCTION);
      }
    } else {
      const nextPage = Object.keys(checkedBoxes).find(
        (page) => checkedBoxes[page] && parseInt(page, 11) > currentStep
      );
      if (nextPage && currentStep !== 10) {
        setCurrentStep(parseInt(nextPage));
      } else {
        setCurrentStep(StepIndex.INTRODUCTION);
      }
    }
  };

  const handleSwitchChange = (step: any, e: any) => {
    if (e) {
      if (!steps.some((st) => st.id === step.id))
        setSteps((prevSteps) =>
          [...prevSteps, step].sort((a, b) => a.id - b.id)
        );
    } else
      setSteps((prevSteps) => prevSteps.filter(({ id }) => id !== step.id));
    setCheckedBoxes((prevSteps: any) => {
      return { ...prevSteps, [step.id]: e };
    });
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("data Console in onSubmit", data);
    console.log("watch Console in onSubmit", watch());
  };

  const loadCardByStep = useCallback(() => {
    switch (currentStep) {
      case StepIndex.CONTRIBUTORS:
        return (
          <Contributors
            handleNextStep={handleNext}
            contractCreation={contractCreation}
            setContractCreation={setContractCreation}
            register={register}
          />
        );
      case StepIndex.TEAMS:
        return (
          <Teams
            handleNextStep={handleNext}
            handleBackStep={handleBack}
            contractCreation={contractCreation}
            handleSwitchChange={handleSwitchChange}
            setContractCreation={setContractCreation}
          />
        );
      case StepIndex.RECORDINGS:
        return (
          <Recordings
            handleNextStep={handleNext}
            handleBackStep={handleBack}
            contractCreation={contractCreation}
            setContractCreation={setContractCreation}
          />
        );
      case StepIndex.SHARES:
        return (
          <Shares
            handleNextStep={handleNext}
            handleBackStep={handleBack}
            contractCreation={contractCreation}
            setContractCreation={setContractCreation}
          />
        );
      case StepIndex.ADDITIONALCONDITIONS:
        return (
          <AdditionalConditions
            handleNextStep={handleNext}
            handleBackStep={handleBack}
            checkedBoxes={checkedBoxes}
            handleSwitchChange={handleSwitchChange}
            contractCreation={contractCreation}
            setContractCreation={setContractCreation}
          />
        );
      case StepIndex.BUDGET:
        return (
          <Budget
            handleNextStep={handleNext}
            handleBackStep={handleBack}
            contractCreation={contractCreation}
            setContractCreation={setContractCreation}
          />
        );
      case StepIndex.ROYALTIES_ADVANCES:
        return (
          <RoyaltyAdvances
            handleNextStep={handleNext}
            handleBackStep={handleBack}
            contractCreation={contractCreation}
            setContractCreation={setContractCreation}
          />
        );
      case StepIndex.ABATEMENTS:
        return (
          <Abatements
            handleNextStep={handleNext}
            handleBackStep={handleBack}
            contractCreation={contractCreation}
            setContractCreation={setContractCreation}
          />
        );
      case StepIndex.BROADCASTING:
        return (
          <Broadcasting
            handleNextStep={handleNext}
            handleBackStep={handleBack}
            contractCreation={contractCreation}
            setContractCreation={setContractCreation}
          />
        );
      case StepIndex.DERIVATIVE_USE:
        return (
          <DerivativeUse
            handleNextStep={handleNext}
            handleBackStep={handleBack}
            contractCreation={contractCreation}
            setContractCreation={setContractCreation}
          />
        );
      case StepIndex.INTRODUCTION:
        return (
          <Introduction
            handleNextStep={handleNext}
            handleBackStep={handleBack}
            contractCreation={contractCreation}
          />
        );
      default:
        return;
    }
  }, [currentStep, handleNext]);

  return (
    <ContractBuilderProvider>
      <div className="h-[inherit] xl:w-[1241px] w-full flex flex-col gap-20 relative">
        <div
          className={`absolute top-9 hidden lg:block z-10 ${currentStep === StepIndex.INTRODUCTION ||
            currentStep === StepIndex.ADDITIONALCONDITIONS
            ? "left-1/2 translate-x-[-50%] w-[454px]"
            : "left-[88px] w-[50%]"
            }`}
        >
          <ProgressSteps
            currentStep={currentStep}
            handleNext={handleNext}
            steps={steps?.sort((a: any, b: any) => a.id - b.id)}
          />
        </div>
        <div className="flex-1 h-full">
          <form onSubmit={handleSubmit(onSubmit as any)}>
            {/* {loadCardByStep()} */}
            {currentStep === StepIndex.CONTRIBUTORS && (
              <Contributors
                handleNextStep={handleNext}
                contractCreation={contractCreation}
                setContractCreation={setContractCreation}
                register={register}
                watch={watch}
                setValue={setValue}
                schema={albumSchema}
                errors={errors}
              />
            )}

            {currentStep === StepIndex.TEAMS && (
              <Teams
                handleNextStep={handleNext}
                handleBackStep={handleBack}
                contractCreation={contractCreation}
                handleSwitchChange={handleSwitchChange}
                setContractCreation={setContractCreation}
                watch={watch}
                setValue={setValue}
                schema={membersSchema}
                errors={errors}
              />
            )}

            {currentStep === StepIndex.RECORDINGS && (
              <Recordings
                handleNextStep={handleNext}
                handleBackStep={handleBack}
                contractCreation={contractCreation}
                setContractCreation={setContractCreation}
                watch={watch}
                setValue={setValue}
              />
            )}

            {currentStep === StepIndex.SHARES && (
              <Shares
                handleNextStep={handleNext}
                handleBackStep={handleBack}
                contractCreation={contractCreation}
                setContractCreation={setContractCreation}
                watch={watch}
                setValue={setValue}
              />
            )}

            {currentStep === StepIndex.ADDITIONALCONDITIONS && (
              <AdditionalConditions
                handleNextStep={handleNext}
                handleBackStep={handleBack}
                checkedBoxes={checkedBoxes}
                handleSwitchChange={handleSwitchChange}
                contractCreation={contractCreation}
                setContractCreation={setContractCreation}
                setValue={setValue}
              />
            )}

            {currentStep === StepIndex.BUDGET && (
              <Budget
                handleNextStep={handleNext}
                handleBackStep={handleBack}
                contractCreation={contractCreation}
                setContractCreation={setContractCreation}
                setValue={setValue}
              />
            )}

            {currentStep === StepIndex.ROYALTIES_ADVANCES && (
              <RoyaltyAdvances
                handleNextStep={handleNext}
                handleBackStep={handleBack}
                contractCreation={contractCreation}
                setContractCreation={setContractCreation}
                watch={watch}
                setValue={setValue}
              />
            )}

            {currentStep === StepIndex.ABATEMENTS && (
              <Abatements
                handleNextStep={handleNext}
                handleBackStep={handleBack}
                contractCreation={contractCreation}
                setContractCreation={setContractCreation}
                watch={watch}
                setValue={setValue}
              />
            )}

            {currentStep === StepIndex.BROADCASTING && (
              <Broadcasting
                handleNextStep={handleNext}
                handleBackStep={handleBack}
                contractCreation={contractCreation}
                setContractCreation={setContractCreation}
                watch={watch}
                setValue={setValue}
              />
            )}

            {currentStep === StepIndex.DERIVATIVE_USE && (
              <DerivativeUse
                handleNextStep={handleNext}
                handleBackStep={handleBack}
                contractCreation={contractCreation}
                setContractCreation={setContractCreation}
                watch={watch}
                setValue={setValue}
              />
            )}

            {currentStep === StepIndex.INTRODUCTION && (
              <Introduction
                handleNextStep={handleNext}
                handleBackStep={handleBack}
                contractCreation={contractCreation}
                watch={watch}
                setValue={setValue}
              />
            )}
          </form>
        </div>
      </div>
    </ContractBuilderProvider>
  );
}
