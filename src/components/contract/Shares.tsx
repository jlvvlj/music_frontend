import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { CardsActivityGoal } from "@/components/activity-goal";
import { SingleRate, StepProps, TeamMember, TieredRate } from "./types";
import { Avatar } from "../ui/avatar";
import { TableCommon } from "./TableCommon";
import { recordingTracks } from "@/app/data/data";
import { RecordingsColumn } from "./RecordingsColumn";
import ShareCardRight from "./ShareCardRight";
import useContractBuilder from "@/hooks/useContractBuilder";
import { Steps } from "@/contexts/ContractBuilderContext";
import ShareCard from "./ShareCard";

type Tab = {
  label: string;
  value: string;
};

const TABS: Tab[] = [
  {
    label: "Single Rate",
    value: "single",
  },
  {
    label: "Tiered Rate",
    value: "tiered",
  },
];

const rateFormSchema = z.object({
  from: z.number().default(0),
  to: z.number().default(0),
  percentage: z.number().default(0),
});

type RateFormValues = z.infer<typeof rateFormSchema>;
const defaultValues: Partial<RateFormValues> = {};

const baseRate = {
  from: 0,
  to: 0,
  percentage: 0,
};

const Royalties = ({ handleNextStep, handleBackStep }: any) => {
  const [tab, setTab] = useState(TABS[0].value);
  const [singleRate, setSingleRate] = useState<SingleRate>({
    percentage: 0,
  });
  const [tieredRateInput, setTieredRateInput] = useState<TieredRate>(baseRate);
  const [tieredRates, setTieredRates] = useState<TieredRate[]>([]);

  // ** form
  const form = useForm<RateFormValues>({
    resolver: zodResolver(rateFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const handleChangeSingleRatePercentage = (value: number) => {
    setSingleRate({
      percentage: value,
    });
  };

  const onSubmit = (data: RateFormValues) => {
    console.log(data);
    const _tieredRates = [...tieredRates];
    _tieredRates.push(data);
    setTieredRates(_tieredRates);

    setTimeout(() => {
      form.reset(baseRate);
    }, 500);
  };


  const handleClickNext = () => {
    toast("Shares added successfully!", {
      description: "Shares",
      action: {
        label: "X",
        onClick: () => { },
      },
      position: "top-right"
    });
    handleNextStep()
  };

  const { members, dispatch } = useContractBuilder();
  const handleUpdateGoal = (member: any, value: number) => {
    const _members = [...members];
    const newMember = {
      ...member,
      revenue: value,
    };
    const index = _members.findIndex((m) => m.id === member.id);
    const m = _members.splice(index, 1, newMember);

    dispatch({
      type: Steps.SHARES,
      payload: {
        members: _members,
      },
    });
  };

  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="w-full pb-7 pt-[92px] bg-modal rounded-s-3xl h-[782px] flex flex-col justify-between">
        <div className="scrollbox overflow-auto w-full h-full">
          <div className="h-[calc(100%-40px)] px-10">
            <h1 className="text-3xl font-semibold tracking-tight mb-3">
              And producers shares
            </h1>
            <p className="text-sm text-muted-foreground mb-[98px]">
              Enter the appropriate amount of shares to each producer on the team
            </p>
            {members.map((member, index) => (
              <ShareCard
                key={index}
                member={member}
                updateGoal={(v) => handleUpdateGoal(member, v)}
                buttonHidden={true}
                avatar={true}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between w-full mt-8 px-10">
          <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleBackStep}
          >
            <ArrowLeftIcon className="mr-1" />
            Back
          </Button>
          <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleClickNext}
          >
            Next
            <ArrowRightIcon className="ml-1" />
          </Button>
        </div>
      </div>
      <div className="relative flex items-end flex-col pb-7 pt-6 bg-modal-foreground rounded-r-3xl h-[782px]">
        <div className="scrollbox overflow-auto px-4 w-full h-full">
          <div className="p-8 rounded-2xl bg-modal border border-muted w-full">
            <h6 className="text-2xl	mb-3">Team & Shares</h6>
            <p className="text-muted-foreground mb-7 text-sm">
              Shares fo artists participating in this contract.
            </p>
            <div className="pl-10">
              <h6 className="text-lg mb-3">Album level shares</h6>
              <p className="text-muted-foreground mb-7 text-sm">
                Edit the shares on each track for a specific allocation
              </p>
              <div className="pl-4 gap-10">
                {members.map((member, index) => (
                  <ShareCardRight
                    key={index}
                    member={member}
                    updateGoal={(v) => handleUpdateGoal(member, v)}
                    buttonHidden={true}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-modal border border-muted w-full p-4 mt-8">
            <TableCommon data={recordingTracks} columns={RecordingsColumn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Royalties;
