import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { CardsActivityGoal } from "@/components/activity-goal";
import { SingleRate, StepProps, TieredRate } from "./types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import ToasterDemo from "./ToasterDemo";
import { Avatar } from "../ui/avatar";
import Image from "next/image";
import { TableCommon } from "./TableCommon";
import { recordingTracks } from "@/app/data/data";
import { RecordingsColumn } from "./RecordingsColumn";

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

const teamMembers = [
  { id: 1, avatar: '/julie.svg', name: 'Julie Depree', role: 'Master Owner', revenue: 60 },
  { id: 2, avatar: '/amandine.svg', name: 'Jeff Scott', role: 'Master Owner', revenue: 40 },
]

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

const Royalties = ({ updateStep }: StepProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
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

  useEffect(() => {
    if (currentTabIndex >= TABS.length) {
      updateStep(1);
    } else {
      setTab(TABS[currentTabIndex].value);
    }
  }, [currentTabIndex]);

  const handleChangeSingleRatePercentage = (value: number) => {
    setSingleRate({
      percentage: value,
    });
  };

  const handleClickNextTab = () => {
    setCurrentTabIndex(currentTabIndex + 1);
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
    setCurrentTabIndex(currentTabIndex + 1);
  };

  const handleClickBack = () => {
    updateStep(-1);
  };

  const onTabChange = (value: string) => {
    setTab(value as string);
  };

  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="w-full pb-7 pt-16 bg-modal rounded-s-3xl h-[645px] flex flex-col justify-between">
        <div className="scrollbox overflow-auto w-full h-full">
          <div className="h-[calc(100%-40px)] px-10">
            <h1 className="text-3xl font-semibold tracking-tight mb-3">
              And producers shares
            </h1>
            <p className="text-sm text-muted-foreground mb-[98px]">
              Enter the appropriate amount of shares to each producer on the team
            </p>
            {teamMembers.map((member) =>
              <div className="flex items-start justify-between gap-4 pl-4 py-3 rounded-md mb-5 w-[82%] mx-auto bg-[#4FABFE]">
                <Avatar className="bg-[#A3D3FF] mt-2">
                  <Image
                    src={member.avatar || "https://ui.shadcn.com/avatars/01.png"}
                    width={100}
                    height={100}
                    alt="avatar"
                  />
                </Avatar>
                <div className="pt-3">
                  <p className="text-sm font-medium leading-none">{member.name}</p>
                  <p className="text-sm">{member.role}</p>
                </div>
                <div className="">
                  <CardsActivityGoal
                    label="SHARES OF Profits"
                    initialValue={member.revenue || 30}
                    unit="%"
                    step={10}
                    buttonTitle=""
                    minValue={0}
                    maxValue={100}
                    buttonHidden
                    onClickButton={() => { }}
                    setGoal={() => { }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between w-full mt-8 px-10">
          <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleClickBack}
          >
            <ArrowLeftIcon className="mr-1" />
            Back
          </Button>
          <ToasterDemo toastTitle="Recordings added successfully!" updateStep={updateStep}/>
        </div>
      </div>
      <div className="relative flex items-end flex-col pb-7 pt-16 bg-modal-foreground rounded-r-3xl h-[645px]">
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
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-start justify-between gap-4 pl-4 pt-1.5 rounded-md mb-5 w-[85%] bg-modal-foreground right-card">
                    <Avatar className="bg-[#A3D3FF] mt-2 h-11 w-11">
                      <Image
                        src={member.avatar || "https://ui.shadcn.com/avatars/01.png"}
                        width={100}
                        height={100}
                        alt="avatar"
                      />
                    </Avatar>
                    <div className="pt-3">
                      <p className="text-sm font-medium leading-none text-[#4EABFE]">
                        {member.name}
                      </p>
                      <p className="text-sm text-[#6DB5F9]">{member.role}</p>
                    </div>
                    <div className="">
                      <CardsActivityGoal
                        label="SHARES OF REVENUES"
                        initialValue={member.revenue || 30}
                        unit="%"
                        step={10}
                        buttonTitle="Set Share"
                        minValue={0}
                        maxValue={100}
                        buttonHidden
                        onClickButton={() => { }}
                        setGoal={() => { }}
                      />
                    </div>
                  </div>
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
