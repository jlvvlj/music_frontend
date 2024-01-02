import React, { useState } from "react";
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
import { Badge } from "@/registry/new-york/ui/badge";
import { Switch } from "@/registry/default/ui/switch";
import { STEPS } from "./types";
import { ScrollArea } from "@/registry/new-york/ui/scroll-area";
import { CardsActivityGoal } from "../activity-goal";
import { Avatar } from "../ui/avatar";
import Image from "next/image";
import { TableCommon } from "./TableCommon";
import { royaltiesTracks } from "@/app/data/data";
import { RoyaltiesColumn } from "./RoyaltiesColumn";
import ToasterDemo from "./ToasterDemo";

interface Props extends React.PropsWithChildren {
  currentStep?: number;
  updateStep: (step: number) => void;
}

const royaltiesCards = [
  {
    id: 1, title: 'At signature', activityCards: [
      { id: 1, avatar: '/jon.svg', name: 'Charly Jones', role: 'Singer', revenue: '€3000', label: "" },
      { id: 2, avatar: '/orlane.svg', name: 'Orlane Moog', role: 'Musician', revenue: '€0', label: "SHARES OF REVENUES" }
    ]
  },
  {
    id: 2, title: 'At Commercial release', activityCards: [
      { id: 1, avatar: '/jon.svg', name: 'Charly Jones', role: 'Singer', revenue: '€3000', label: "" },
      { id: 2, avatar: '/orlane.svg', name: 'Orlane Moog', role: 'Musician', revenue: '€0', label: "SHARES OF REVENUES" }
    ]
  },
  {
    id: 3, title: 'At Specific Date', activityCards: [
      { id: 1, avatar: '/jon.svg', name: 'Charly Jones', role: 'Singer', revenue: '€3000', label: "" },
      { id: 2, avatar: '/orlane.svg', name: 'Orlane Moog', role: 'Musician', revenue: '€0', label: "SHARES OF REVENUES" }
    ]
  }
]

export default function RoyaltyAdvances({
  currentStep = 6,
  updateStep,
}: Props) {
  const [enabled, setEnabled] = useState<number[]>([])

  const onCheckHandle = (id: number) => {
    const checkExist = enabled?.includes(id);

    if (checkExist) {
      setEnabled((prev) => prev?.filter((item) => item !== id));
    } else {
      setEnabled((prev) => [...prev, id]);
    }
  };


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
      <div className="w-full pb-7 pt-16 bg-modal rounded-s-3xl h-[645px] flex flex-col justify-between">
        <ScrollArea className="h-full">
          <div className="h-[calc(100%-40px)] px-10">
            <div className="w-full">
              <h1 className="text-3xl font-semibold tracking-tight mb-1">
                Royalties Advances
              </h1>
              <p className="text-sm text-muted-foreground mb-12">Enter the royalties advances for each artist</p>
            </div>
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="space-y-6 p-0">
                <div className="pl-2.5">
                  {royaltiesCards.map((card, index) =>
                    <Card key={index} className="border-none bg-modal-foreground mb-8 rounded-3xl	">
                      <CardHeader className="py-5 pb-0">
                        <CardTitle className="text-[17px] font-normal flex justify-between">
                          <div>
                            <h6>{card.title}</h6>
                            <Badge className="bg-[#0F233D] hover:bg-[#0F233D] text-[11px] py-0 px-1 text-[#4FABFE] rounded-3xl">Advance</Badge>
                          </div>
                          <Switch className="mt-2.5" checked={enabled.includes(card.id)} onCheckedChange={() => onCheckHandle(card.id)} />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-8">
                        <p className="text-sm	mt-2.5 text-muted-foreground">An advance will be paid a signature</p>
                        {enabled.includes(card.id) && <div className="space-y-8 mt-10">
                          <div className="pl-4 gap-10">
                            {card?.activityCards.map((activityCard) => (
                              <div className="flex items-start gap-4 pl-2.5 pt-1.5 rounded-md mb-5 w-fit bg-black3">
                                <Avatar className="bg-[#A3D3FF] mt-2 h-11 w-11">
                                  <Image
                                    src={activityCard.avatar}
                                    width={100}
                                    height={100}
                                    alt="avatar"
                                  />
                                </Avatar>
                                <div className="pt-3">
                                  <p className="text-sm font-normal leading-none mb-1">
                                    {activityCard.name}
                                  </p>
                                  <p className="text-sm">{activityCard.role}</p>
                                </div>
                                <div className="">
                                  <CardsActivityGoal
                                    label={activityCard.label}
                                    initialValue={activityCard.revenue || 30}
                                    unit=""
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
                        </div>}
                      </CardContent>
                    </Card>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
        <div className="flex justify-between w-full mt-10 px-10">
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
            {/* <Button
              className="bg-mblue"
              variant="outline"
              onClick={handleClickNext}
            >
              Next
            </Button> */}
            <ToasterDemo toastTitle="Royalties Advances updated successfully!" />
          </div>
        </div>
      </div>
      <div className="relative flex items-end flex-col pb-7 pt-16 bg-modal-foreground rounded-r-3xl h-[645px]">
        <ScrollArea className="h-full w-full px-4 scroll-content">
          <Card className="bg-modal border-muted mb-[76px]">
            <CardHeader>
              <CardTitle>Royalties Advances</CardTitle>
              <CardDescription>Edit the advance on each track for a specific allocation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-start mx-auto gap-4 pl-2.5 pt-1.5 rounded-md mb-1 w-fit bg-black3 right-card">
                <Avatar className="bg-[#A3D3FF] mt-2 h-11 w-11">
                  <Image
                    src='/jon.svg'
                    width={100}
                    height={100}
                    alt="avatar"
                  />
                </Avatar>
                <div className="pt-3">
                  <p className="text-sm font-normal leading-none mb-1">
                    Charly Jones
                  </p>
                  <p className="text-sm">Singer</p>
                </div>
                <div className="">
                  <CardsActivityGoal
                    label={''}
                    initialValue={'€8000 ' || 30}
                    unit=""
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
              <div className="flex items-center gap-6 px-20 mb-12">
                <div className="rounded-xl bg-modal-foreground px-[10px] py-2 min-w-[150px] min-h-[90px] space-y-4">
                  <p className="text-white text-[12px] font-normal">At Signature</p>
                  <p className="text-mblue text-[12px] font-normal">€ 3000</p>
                </div>
                <div className="rounded-xl bg-modal-foreground px-[10px] py-2 min-w-[150px] min-h-[90px] space-y-4">
                  <p className="text-white text-[12px] font-normal">
                    At release
                  </p>
                  <p className="text-mblue text-[12px] font-normal">€ 5000</p>
                </div>
              </div>
              <div className="flex items-start mx-auto gap-4 pl-2.5 pt-1.5 rounded-md mb-1 w-fit bg-black3 right-card">
                <Avatar className="bg-[#A3D3FF] mt-2 h-11 w-11">
                  <Image
                    src='/orlane.svg'
                    width={100}
                    height={100}
                    alt="avatar"
                  />
                </Avatar>
                <div className="pt-3">
                  <p className="text-sm font-normal leading-none mb-1">
                    Orlane Moog
                  </p>
                  <p className="text-sm">Musician</p>
                </div>
                <div className="">
                  <CardsActivityGoal
                    label={'base rate on sales'}
                    initialValue={'€3000 ' || 30}
                    unit=""
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
              <div className="flex items-center gap-6 px-20">
                <div className="rounded-xl bg-modal-foreground px-[10px] py-2 min-w-[150px] min-h-[90px] space-y-4">
                  <p className="text-white text-[12px] font-normal">At Specific Date</p>
                  <p className="text-mblue text-[12px] font-normal">€ 3000</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="rounded-2xl bg-modal border border-muted w-full p-4">
            <TableCommon data={royaltiesTracks} columns={RoyaltiesColumn} />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
