import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioButtonCard } from "../cards/RadioButtonCard";
import RoyaltyCard from "./RoyaltyCard";
import { Button } from "../ui/button";
import { STEPS } from "./types";

interface Props extends React.PropsWithChildren {
  currentStep?: number;
  updateStep: (step: number) => void;
}

export default function RoyaltyAdvances({
  currentStep = 6,
  updateStep,
}: Props) {
  const handleChangeRadioButtons = (value: string) => {
    console.log(value);
    if (value.toLowerCase() === "yes") {
      return true;
    }
    return false;
  };

  const handleClickNext = () => {
    updateStep(1);
  };

  const handleClickBack = () => {
    updateStep(-1);
  };

  const handleClickSkip = () => {
    updateStep(1);
  };

  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="flex flex-col gap-10 bg-modal p-8 rounded-l-3xl pt-16">
        <div className="space-y-6 w-full">
          <h1 className="text-3xl font-semibold tracking-tight">
            Royalties Advances
          </h1>
          <p className="text-sm text-muted-foreground">Lorem Ipsum</p>
        </div>
        <div className="p-5">
          <p className="text-base font-normal">
            Advances on Artist Royalties
          </p>
          <p className="text-[#A1A1AA] text-sm font-normal">
            Select if a Royalties Advance will be paid
          </p>
        </div>
        <div className="flex-1 px-5">
          <RoyaltyCard />
        </div>
        <div className="flex justify-between w-full mt-10 px-4">
          <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleClickBack}
          >
            <ArrowLeftIcon className="mr-1" />
            Back
          </Button>
          <div className="flex gap-4">
            <Button className="" variant="outline" onClick={handleClickNext}>
              Skip
            </Button>
            <Button
              className="bg-mblue"
              variant="outline"
              onClick={handleClickNext}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <div className="relative flex items-end px-4 flex-col pb-7 pt-16 bg-modal-foreground rounded-r-3xl h-[645px]">
        <div className="w-full no-scrollbar overflow-y-scroll">
          <Card className="bg-modal border-muted">
            <CardHeader>
              <CardTitle>Royalties Advances</CardTitle>
              <CardDescription>Royalties Advances for Artists</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-6 px-20">
              <div className="rounded-xl bg-modal-foreground px-[10px] py-2 min-w-[150px] min-h-[90px] space-y-4">
                <p className="text-white text-[12px] font-normal">At Signature</p>
                <p className="text-mblue text-[12px] font-normal">EUR 3000</p>
              </div>
              <div className="rounded-xl bg-modal-foreground px-[10px] py-2 min-w-[150px] min-h-[90px] space-y-4">
                <p className="text-white text-[12px] font-normal">
                  At commercial release
                </p>
                <p className="text-mblue text-[12px] font-normal">EUR 3000</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
