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
import Stacked from "./Stacked";
import ContractBaseForm from "./ContractBaseForm";
import { StepIndex } from "./types";
import Contributors from "./Contributors";

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
        return <Contributors />;
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
      case StepIndex.STACKED:
        return <Stacked />;
      default:
        return <></>;
    }
  }, [step]);

  return (
    <>
      <div className="px-8 pb-8">
        <ContractBaseForm step={step}>{loadCardByStep()}</ContractBaseForm>
      </div>
    </>
  );
};

export default CreateStepCards;
