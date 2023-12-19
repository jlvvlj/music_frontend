import { useState } from "react";
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
    label: "Advances",
    value: "advances",
  },
];

const COUNTRIES = [
  {
    label: "France",
    value: "france",
  },
  {
    label: "Spain",
    value: "spain",
  },
  {
    label: "England",
    value: "england",
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
  advances: {
    percentage: 0,
  },
};

type Tab = "foreignSales" | "compilation" | "promotion" | "advances";

const Abatements = ({ updateStep }: StepProps) => {
  const [abatement, setAbatement] = useState<Abatement>(baseAbatement);

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
          <CardContent className="space-y-6 p-0">
            <Tabs defaultValue="foreignSales" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
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
                      Share of base rate
                    </p>
                    <p className="text-[#A1A1AA] text-sm font-normal">
                      Lorem ipsum
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
                        onClickButton={() => {}}
                        isOwner={true}
                        setGoal={(value) =>
                          handleChangeGoalValues(t.value, "percentage", value)
                        }
                      />
                    </div>
                    <div className={cn(index === 0 ? "" : "hidden")}>
                      <FancyMultiSelect
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

export default Abatements;
