import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardsActivityGoal } from "@/components/activity-goal";
import { cn } from "@/lib/utils";
import { FancyMultiSelect } from "@/components/fancy-multi-select";
import { Abatement, StepProps } from "./types";
import { CountryMultiSelect } from "../country-multi-select";
import { ArrowRightIcon } from "lucide-react";

const TABS: {
  label: string;
  value: Tab;
}[] = [
    {
      label: "Foreign sales",
      value: "foreignSales",
    },
    {
      label: "Compilation",
      value: "compilation",
    },
    {
      label: "Promotion",
      value: "promotion",
    },
    {
      label: "Discouts",
      value: "discouts",
    },
    {
      label: "Off-Circuits",
      value: "offCircuits",
    },
  ];

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

const baseAbatement = {
  foreignSales: {
    percentage: 0,
    countries: [],
  },
  compilation: {
    percentage: 0,
  },
  promotion: {
    percentage: 0,
  },
  discouts: {
    percentage: 0,
  },
  offCircuits: {
    percentage: 0,
  },
};

type Tab =
  | "foreignSales"
  | "compilation"
  | "promotion"
  | "discouts"
  | "offCircuits";

const Abatements = ({ updateStep }: StepProps) => {
  const [abatement, setAbatement] = useState<Abatement>(baseAbatement);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [tab, setTab] = useState(TABS[0].value);

  useEffect(() => {
    if (currentTabIndex === TABS.length) {
      updateStep(1);
    } else {
      setTab(TABS[currentTabIndex].value);
    }
  }, [currentTabIndex]);

  const handleChangeGoalValues = (
    parent: Tab,
    subField: "percentage" | "countries",
    value: number
  ) => {
    setAbatement((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [subField]: value,
      },
    }));
  };

  const handleClickNext = () => {
    setCurrentTabIndex(currentTabIndex + 1);
  };

  const handleClickBack = () => {
    updateStep(-1);
  };

  const handleClickSkip = () => {
    updateStep(1);
  };

  const onTabChange = (value: string) => {
    console.log(value);
    setTab(value as Tab);
  };

  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="w-full pb-7 pt-[92px] bg-modal rounded-s-3xl h-[782px] flex flex-col justify-between">
        <div className="scrollbox overflow-auto w-full h-full">
          <div className="h-[calc(100%-40px)] px-10">
            <div className="w-full flex justify-between">
              <div className="space-y-6">
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
            <Card className="border-none flex-1 bg-transparent shadow-none">
              <CardContent className="space-y-6 p-0">
                <Tabs value={tab} onValueChange={onTabChange} className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    {TABS.map((t, index) => (
                      <TabsTrigger
                        key={index}
                        value={t.value}
                        className="text-[11px]"
                      >
                        {t.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {TABS.map((t, index) => (
                    <TabsContent key={index} value={t.value} className="mt-10">
                      <div>
                        <p className="text-base font-normal">
                          Share of base rate
                        </p>
                        <p className="text-[#A1A1AA] text-sm font-normal">
                          Lorem ipsum
                        </p>
                      </div>
                      <div className="flex gap-6 items-center space-y-4 mt-6">
                        <div
                          className={cn(
                            "flex items-center bg-mblue pl-4 rounded-md col-span-12 xl:col-span-10 2xl:col-span-6"
                          )}
                        >
                          <div>
                            <p
                              className={cn(
                                "text-sm font-medium leading-none text-[#FAFAFA]"
                              )}
                            >
                              Share of base
                            </p>
                            <p className="text-sm text-[#B9B9BA]">Lorem ipsum</p>
                          </div>
                          <CardsActivityGoal
                            label="SHARES OF REVENUES"
                            initialValue={abatement[t.value].percentage}
                            unit="%"
                            step={10}
                            buttonTitle="Set Share"
                            minValue={0}
                            maxValue={100}
                            buttonHidden
                            onClickButton={() => { }}
                            isOwner={true}
                            setGoal={(value) =>
                              handleChangeGoalValues(t.value, "percentage", value)
                            }
                          />
                        </div>
                        <div className={cn(index === 0 ? "" : "hidden")}>
                          <CountryMultiSelect
                            frameworks={COUNTRIES}
                            placeholder="Select countries"
                          />
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
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
      </div>
      <div className="relative flex items-end flex-col py-7 bg-modal-foreground rounded-r-3xl h-[782px]">
        <div className="scrollbox overflow-auto px-4 w-full h-full">
          <Card className="bg-modal border-muted">
            <CardHeader>
              <CardTitle>Abatements</CardTitle>
              <CardDescription>
                Abatements rates for foreign markets, compilation and Promotion
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <Card className="bg-transparent border-none shadow-none">
                <CardHeader>
                  <CardTitle>Foreign sales</CardTitle>
                  <CardDescription>
                    Abatements taken for foreign markets
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-start items-center gap-6">
                  <div className="rounded-md bg-modal-foreground px-[10px] py-2 w-[150px] min-h-[90px] space-y-1">
                    <p className="text-[12px] font-normal">Abatement rate</p>
                    <p className="text-[#94A3B8] text-[9px] font-normal">
                      In Canada and USA
                    </p>
                    <p className="text-mblue text-[12px] font-normal">20%</p>
                  </div>
                  <div className="rounded-xl bg-modal-foreground px-[10px] py-2 w-[150px] min-h-[90px] space-y-1">
                    <p className="text-[12px] font-normal">Abatement rate</p>
                    <p className="text-[#94A3B8] text-[9px] font-normal">
                      In Italy, Spain and Portugal
                    </p>
                    <p className="text-mblue text-[12px] font-normal">10%</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-transparent border-none shadow-none">
                <CardHeader>
                  <CardTitle>Compilations</CardTitle>
                  <CardDescription>
                    Abatements taken for compilations
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-start items-center gap-6">
                  <div className="rounded-md bg-modal-foreground px-[10px] py-2 w-[150px] min-h-[90px] space-y-1">
                    <p className="text-[12px] font-normal">Abatement rate</p>
                    <p className="text-[#94A3B8] text-[9px] font-normal">
                      In Canada and USA
                    </p>
                    <p className="text-mblue text-[12px] font-normal">20%</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-transparent border-none shadow-none">
                <CardHeader>
                  <CardTitle>Promotions</CardTitle>
                  <CardDescription>
                    Abatements taken for promotions
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-start items-center gap-6">
                  <div className="rounded-md bg-modal-foreground px-[10px] py-2 w-[150px] min-h-[90px] space-y-1">
                    <p className="text-[12px] font-normal">Abatement rate</p>
                    <p className="text-[#94A3B8] text-[9px] font-normal">
                      In Canada and USA
                    </p>
                    <p className="text-mblue text-[12px] font-normal">20%</p>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Abatements;
