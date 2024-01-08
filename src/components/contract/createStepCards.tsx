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
import { STEPS, StepIndex } from "./types";
import Contributors from "./Contributors";
import Recordings from "./Recordings";
import RoyaltyAdvances from "./RoyaltyAdvances";
import BaseFilterWrapper from "./BaseFilterWrapper";
import ProgressSteps from "./ProgressSteps";
import DerivativeUse from "./DerivativeUse";

const CreateStepCards = ({
  step,
  updateStep,
}: {
  step: StepIndex;
  updateStep: (step: number) => void;
}) => {
  const [isProducerMode, setIsProducerMode] = useState(false);

  const handleSetProducer = (b: boolean) => {
    console.log(b);
    setIsProducerMode(b);
  };

  const loadCardByStep = useCallback((stepper: JSX.Element) => {
    switch (step) {
      case StepIndex.CONTRIBUTORS:
        return <Contributors updateStep={updateStep}>{stepper}</Contributors>;
      case StepIndex.SHARES:
        return <Shares updateStep={updateStep} />;
      case StepIndex.RECORDINGS:
        return <Recordings updateStep={updateStep} />;
      // return isProducerMode ? <ProducerRecordings /> : <ArtistRecordings />;
      case StepIndex.ROYALTIES:
        return <Royalties updateStep={updateStep} />;
      case StepIndex.BUDGET:
        return <Budget updateStep={updateStep} />;
      case StepIndex.ROYALTIES_ADVANCES:
        return <RoyaltyAdvances updateStep={updateStep} />;
      case StepIndex.ABATEMENTS:
        return <Abatements updateStep={updateStep} />;
      case StepIndex.BROADCASTING:
        return <Broadcasting updateStep={updateStep} />;
      case StepIndex.DERIVATIVE_USE:
        return <DerivativeUse updateStep={updateStep} />;
      default:
        return ;
    }
  }, [step]);

  const Stepper = (
    <div className="mx-4 hidden lg:block">
      <ProgressSteps step={step} updateStep={updateStep} />
    </div>
  );

  return (
    <>
      <div className="h-full flex flex-col">
        <div className="flex-1 h-full">{loadCardByStep(Stepper)}</div>
      </div>
    </>
  );
};

export default CreateStepCards;
