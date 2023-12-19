import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CardsActivityGoal } from "@/components/activity-goal";
import { useState } from "react";
import { BroadCasting, StepProps } from "./types";

type Tab = {
  label: string;
  value: TabName;
  description: string;
  cardTitle: string;
};

type TabName = "foreignSales" | "secondaryUses";

const TABS: Tab[] = [
  {
    label: "Foreign sales",
    value: "foreignSales",
    description:
      "Paid concession of television broadcasting rights as a percentage of net pre-tax operating revenues received by the producer",
    cardTitle: "Concession",
  },
  {
    label: "Secondary uses",
    value: "secondaryUses",
    description: "Share of amounts received by the producer excluding taxes",
    cardTitle: "Share",
  },
];



const baseBroadCasting = {
  foreignSales: {
    percentage: 0,
  },
  secondaryUses: {
    percentage: 0,
  },
};

const Broadcasting = ({ updateStep }: StepProps) => {
  const [broadCasting, setBroadCasting] =
    useState<BroadCasting>(baseBroadCasting);
  const handleChangeGoalValues = (
    parent: TabName,
    subField: "percentage",
    value: number
  ) => {
    setBroadCasting((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [subField]: value,
      },
    }));
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
    <div className="grid grid-cols-2 h-full">
      <div className="flex flex-col">
        <Card className="border-none flex-1">
          <CardContent className="space-y-6">
            <Tabs defaultValue="foreignSales" className="w-full px-10">
              <TabsList className="grid w-full grid-cols-2">
                {TABS.map((t, index) => (
                  <TabsTrigger key={index} value={t.value}>
                    {t.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {TABS.map((t, index) => (
                <TabsContent key={index} value={t.value} className="mt-10">
                  <div>
                    <p className="text-[#FAFAFA] text-base font-normal">
                      {t.label}
                    </p>
                    <p className="text-[#A1A1AA] text-sm font-normal">
                      {t.description}
                    </p>
                  </div>
                  <div className="flex gap-6 items-center space-y-4 mt-6">
                    <div
                      className={cn(
                        "flex items-center pl-4 rounded-md bg-[#5D9DF1] col-span-12 xl:col-span-10 2xl:col-span-6"
                      )}
                    >
                      <div>
                        <p
                          className={cn(
                            "text-sm font-medium leading-none text-[#FAFAFA]"
                          )}
                        >
                          {t.cardTitle}
                        </p>
                        <p className="text-sm text-[#B9B9BA]">Lorem ipsum</p>
                      </div>
                      <CardsActivityGoal
                        label="SHARES OF REVENUES"
                        initialValue={broadCasting[t.value].percentage}
                        unit="%"
                        step={10}
                        buttonTitle="Set Share"
                        minValue={0}
                        maxValue={100}
                        buttonHidden
                        onClickButton={() => {}}
                        isOwner={true}
                        setGoal={(value) =>
                          handleChangeGoalValues(t.value, "percentage", value)
                        }
                      />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
        <div className="flex justify-between w-full mt-10">
          <Button className="" variant="outline" onClick={handleClickBack}>
            Back
          </Button>
          <div className="flex gap-4">
            <Button className="" variant="outline" onClick={handleClickNext}>
              Skip
            </Button>
            <Button className="" variant="outline" onClick={handleClickNext}>
              Next
            </Button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Broadcasting;
