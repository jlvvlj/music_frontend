import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CardsActivityGoal } from "@/components/activity-goal";
import { cn } from "@/lib/utils";
import {  StepProps } from "./types";
import { CountryMultiSelect } from "../country-multi-select";
import ToasterDemo from "./ToasterDemo";
import { Badge } from "@/registry/new-york/ui/badge";
import { Switch } from "@/registry/default/ui/switch";
import { TableCommon } from "./TableCommon";
import { abatementTracks } from "@/app/data/data";
import { AbatementColumn } from "./AbatementColumn";

const COUNTRIES = [
  {
    label: "France",
    value: "france",
    code: "FR",
  },
  {
    label: "Spain",
    value: "spain",
    code: "ES",
  },
  {
    label: "England",
    value: "england",
    code: "GB",
  },
];

const abatementsCards = [
  {
    id: 1, title: 'Foreign sales', activityCards: [
      { id: 1, button: false }
    ]
  },
  {
    id: 2, title: 'Compilation', activityCards: [
      { id: 1, button: true }
    ]
  },
  {
    id: 3, title: 'Promotion', activityCards: [
      { id: 1, button: true }
    ]
  },
  {
    id: 4, title: 'Discount sales', activityCards: [
      { id: 1, button: true }
    ]
  },
  {
    id: 5, title: 'Off-Circuit sales', activityCards: [
      { id: 1, button: true }
    ]
  }
]

const cards = [
  {
    id: 1, title: 'Foreign sales', desc: 'Abatements taken for foreign markets', subCards: [
      { id: 1, title: ' Abatement rate', desc: 'In Canada and USA', rate: '20%' },
      { id: 2, title: 'Abatement rate ', desc: 'In Italy, Spain and Portugal', rate: '10%' },
    ]
  },
  {
    id: 2, title: 'Compilations', desc: 'Abatements taken for compilations', subCards: [
      { id: 1, title: 'Share of Base', desc: '', rate: '20%' }
    ]
  },
  {
    id: 3, title: 'Promotions', desc: 'Abatements taken for promotions', subCards: [
      { id: 1, title: 'Share of Base', desc: '', rate: '20%' }
    ]
  },
  {
    id: 4, title: 'Discounted Sales', desc: 'Abatements taken for discounted sales', subCards: [
      { id: 1, title: 'Share of Base', desc: '', rate: '20%' }
    ]
  },
  {
    id: 5, title: 'Off Traditional Circuits Sales', desc: 'Abatements for sales outside the traditional circuit', subCards: [
      { id: 1, title: 'Share of Base', desc: '', rate: '20%' }
    ]
  }
]

const Abatements = ({ updateStep }: StepProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentTabIndex(currentTabIndex + 1);
  };

  const handleClickBack = () => {
    updateStep(-1);
  };

  const handleClickSkip = () => {
    updateStep(1);
  };

  const [enabled, setEnabled] = useState<number[]>([])

  const onCheckHandle = (id: number) => {
    const checkExist = enabled?.includes(id);

    if (checkExist) {
      setEnabled((prev) => prev?.filter((item) => item !== id));
    } else {
      setEnabled((prev) => [...prev, id]);
    }
  };

  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="w-full pb-7 pt-16 bg-modal rounded-s-3xl h-[645px] flex flex-col justify-between">
        <div className="scrollbox overflow-auto w-full h-full">
          <div className="h-[calc(100%-40px)] px-10">
            <div className="w-full flex justify-between mb-12">
              <div className="space-y-1">
                <h1 className="text-3xl font-semibold tracking-tight">
                  Abatements
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter the contract royalties details
                </p>
              </div>
              <Button
                className="bg-mblue"
                variant="outline"
                onClick={handleClickSkip}
              >
                Skip
              </Button>
            </div>
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="space-y-6 p-0">
                <div className="pl-2.5">
                  {abatementsCards.map((card) =>
                    <Card key={card.id} className="border-none bg-modal-foreground mb-8 rounded-3xl	">
                      <CardHeader className="py-5 pb-0">
                        <CardTitle className="text-[17px] font-normal flex justify-between">
                          <div>
                            <h6>{card.title}</h6>
                            <Badge className="bg-[#0F233D] hover:bg-[#0F233D] text-[11px] py-0 px-1 text-[#4FABFE] rounded-3xl">Abatements</Badge>
                          </div>
                          <Switch className="mt-2.5" checked={enabled.includes(card.id)} onCheckedChange={() => onCheckHandle(card.id)} />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-8">
                        <p className="text-sm	mt-2.5 text-muted-foreground">An abatement for foreign sales will be applied</p>
                        {enabled.includes(card.id) && <div className="space-y-8 mt-10">
                          <div className="pl-4 gap-7 flex flex-col justify-center items-center">
                            {card?.activityCards.map((activityCard) => (
                              <div className="flex items-start gap-4 pl-2.5 pt-1.5 rounded-md w-fit bg-modal pb-1.5">
                                <div className="pt-3">
                                  <p className="text-sm font-normal leading-none mb-1">
                                    Abatement rate
                                  </p>
                                  <p className="text-sm">Lorem ipsum</p>
                                </div>
                                <div className="">
                                  <CardsActivityGoal
                                    label="SHARES OF REVENUES"
                                    initialValue={0}
                                    unit="%"
                                    step={10}
                                    buttonTitle="Set Rate"
                                    minValue={0}
                                    maxValue={100}
                                    buttonHidden={activityCard.button}
                                    onClickButton={() => { }}
                                    setGoal={() => { }}
                                  />
                                </div>
                              </div>
                            ))}
                            <div className={cn(card.id === 1 ? "" : "hidden")}>
                              <CountryMultiSelect
                                frameworks={COUNTRIES}
                                placeholder="Countries"
                              />
                            </div>
                          </div>
                        </div>}
                      </CardContent>
                    </Card>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex justify-between w-full mt-10 px-10">
          <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleClickBack}
          >
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
            <ToasterDemo toastTitle="Abatements added successfully!" />
          </div>
        </div>
      </div>
      <div className="relative flex items-end flex-col pb-7 pt-16 bg-modal-foreground rounded-r-3xl h-[645px]">
        <div className="scrollbox overflow-auto px-4 w-full h-full">
          <Card className="bg-modal border-muted">
            <CardHeader>
              <CardTitle>Abatements</CardTitle>
              <CardDescription>
                Abatements rates for foreign markets, compilation and Promotion
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              {cards.map((card) =>
                <Card key={card.id} className="bg-transparent border-none shadow-none">
                  <CardHeader>
                    <CardTitle className="text-lg font-normal">{card.title}</CardTitle>
                    <CardDescription>
                      {card.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-start items-center gap-6">
                    {card?.subCards.map((innercard) => (
                      <div className="rounded-md bg-modal-foreground px-[10px] py-2 w-[150px] min-h-[90px] space-y-1">
                        <p className="text-[12px] font-normal">{innercard.title}</p>
                        <p className="text-[#94A3B8] text-[9px] font-normal">
                          {innercard.desc}
                        </p>
                        <p className="text-mblue text-[12px] font-normal">{innercard.rate}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
          <div className="rounded-2xl bg-modal border border-muted w-full p-4 mt-[76px]">
            <TableCommon data={abatementTracks} columns={AbatementColumn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abatements;
