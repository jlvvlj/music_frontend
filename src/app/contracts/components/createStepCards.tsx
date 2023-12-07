"use client";
import { useCallback, useState, useEffect } from "react";
import clsx from "clsx";
// ** Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup } from "@/components/ui/radio-group";
import { STEPS, StepIndex } from "./ProgressSteps";
import { MiniCard } from "@/components/cards/minicard";
import { Icons } from "@/components/ui/icons";
import { Notifications } from "@/components/track/notifications";
import TrackUpload from "./TrackUpload";
import TeamAllocation from "./TeamAllocation";
import Shares from "./Shares";
import CardFilter from "./CardFilter";
import { Button } from "@/components/ui/button";
import AdaptForm from "./AdaptForm";
import { Separator } from "@/components/ui/separator";
import ProducerRecordings from "./ProducerRecordings";
import Budget from "./Budget";
import Royalties from "./Royalties";
import Abatements from "./Abatements";
import Broadcasting from "./Broadcasting";
import ProducerForm from "./ProducerForm";
import ArtistForm from "./ArtistForm";
import ArtistRecordings from "./ArtistRecordings";

const CreateStepCards = ({
  step,
  updateStep,
}: {
  step: StepIndex;
  updateStep: VoidFunction;
}) => {
  const [isProducerMode, setIsProducerMode] = useState(false);

  const handleSetProducer = (b: boolean) => {
    console.log(b);
    setIsProducerMode(b);
  };

  const loadCardByStep = useCallback(() => {
    switch (step) {
      case StepIndex.CONTRIBUTIONS:
        return (
          <CardFilter
            type="contribution"
            option1="Yes"
            option2="No"
            updateStep={updateStep}
          />
        );
      case StepIndex.CONTRIBUTORS:
        return <TeamAllocation />;
      case StepIndex.SHARES:
        return <Shares />;
      case StepIndex.ROLE:
        return (
          <CardFilter
            type="role"
            option1="Producer"
            option2="Artists"
            updateStep={updateStep}
            setProducer={handleSetProducer}
          />
        );
      case StepIndex.FORM:
        return (
          <div className="w-full max-w-[840px] mx-auto border border-solid border-[#27272A] rounded-xl px-20 py-8">
            {isProducerMode ? <ProducerForm /> : <ArtistForm />}
          </div>
        );
      case StepIndex.RECORDINGS:
        return isProducerMode ? <ProducerRecordings /> : <ArtistRecordings />;
      case StepIndex.BUDGET:
        return <Budget />;
      case StepIndex.ROYALTIES:
        return <Royalties />;
      case StepIndex.ABATEMENTS:
        return <Abatements />;
      case StepIndex.BROADCASTING:
        return <Broadcasting />;
      default:
        return <></>;
    }
  }, [step]);

  return (
    <>
      <div className="hidden space-y-6 p-8 pb-16 md:block mt-6">
        <div className="mt-12 mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[500px]">
          <div className="flex flex-col space-y-8 text-center w-full">
            <h1 className="text-3xl font-semibold tracking-tight">
              {STEPS[step - 1].title}
            </h1>
            <p className="text-sm text-muted-foreground">
              {STEPS[step - 1].description}
            </p>
          </div>
        </div>
      </div>
      <div className="px-8 pb-8">{loadCardByStep()}</div>
      <div className="w-full flex justify-end px-12 mb-5">
        <Button
          className={clsx(
            "px-12",
            STEPS[step - 1].saveBtnHidden ? "hidden" : ""
          )}
          onClick={updateStep}
        >
          Save
        </Button>
      </div>
    </>
  );
};

export default CreateStepCards;
