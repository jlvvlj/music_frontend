import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { CardsActivityGoal } from "@/components/activity-goal";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { DerivativeUse, StepProps } from "./types";

type Tab = {
  label: string;
  value: TabName;
  title: string;
  description: string;
  cardTitle: string;
};

type TabName = "merchandising" | "partnerships";

const TABS: Tab[] = [
  {
    label: "Merchandising",
    value: "merchandising",
    title: "Direct merchandising",
    description: "Lorem ipsum",
    cardTitle: "Concession",
  },
  {
    label: "Partnerships",
    value: "partnerships",
    title: "Partnerships and Live events comission",
    description: "Lorem ipsum",
    cardTitle: "Share",
  },
];

const baseDerivativeUse = {
  merchandising: {
    percentage: 0,
  },
  partnerships: {
    percentage: 0,
  },
};

const DerivativeUse = ({ updateStep }: StepProps) => {
  const [derivativeUse, setDerivativeUse] =
    useState<DerivativeUse>(baseDerivativeUse);

  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [tab, setTab] = useState(TABS[0].value);

  useEffect(() => {
    if (currentTabIndex >= TABS.length) {
      // updateStep(1);
    } else {
      setTab(TABS[currentTabIndex].value);
    }
  }, [currentTabIndex]);

  const handleChangeRadioGroup = (v: string) => {};

  const handleChangeGoalValues = (
    parent: TabName,
    subField: "percentage",
    value: number
  ) => {
    setDerivativeUse((prev) => ({
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
    // updateStep(1);
  };

  const onTabChange = (value: string) => {
    setTab(value as TabName);
  };

  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="flex flex-col gap-10 bg-modal p-8 rounded-l-3xl">
        <div className="w-full flex justify-between">
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold tracking-tight">
              Derivative use
            </h1>
            <p className="text-sm text-muted-foreground">Lorem Ipsum</p>
          </div>
          <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleClickSkip}
          >
            Skip
          </Button>
        </div>

        <Card className="border-none bg-transparent flex-1 p-0">
          <CardContent className="space-y-6 p-0">
            <Tabs
              value={tab}
              onValueChange={onTabChange}
              className="w-full px-8"
            >
              <TabsList className="grid w-full grid-cols-2">
                {TABS.map((t, index) => (
                  <TabsTrigger key={index} value={t.value}>
                    {t.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {TABS.map((t, index) => (
                <TabsContent
                  key={index}
                  value={t.value}
                  className="mt-7  space-y-6"
                >
                  {index === 0 ? (
                    <RadioGroup
                      defaultValue="direct"
                      onValueChange={handleChangeRadioGroup}
                      className="flex justify-center items-center gap-4 mt-5"
                    >
                      <Label
                        htmlFor="direct"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                      >
                        <RadioGroupItem
                          value="direct"
                          id="direct"
                          className="sr-only"
                        />
                        <Icons.card className="mb-3 h-6 w-6" />
                        Direct
                      </Label>
                      <Label
                        htmlFor="licence"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                      >
                        <RadioGroupItem
                          value="licence"
                          id="licence"
                          className="sr-only"
                        />
                        <Icons.card className="mb-3 h-6 w-6" />
                        License
                      </Label>
                    </RadioGroup>
                  ) : null}
                  <div>
                    <p className="text-[#FAFAFA] text-base font-normal">
                      {t.title}
                    </p>
                    <p className="text-[#A1A1AA] text-sm font-normal">
                      {t.description}
                    </p>
                  </div>
                  <div className="flex gap-6 items-center space-y-4 mt-6">
                    <div
                      className={cn(
                        "flex items-center pl-4 rounded-md bg-mblue col-span-12 xl:col-span-10 2xl:col-span-6"
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
                        initialValue={derivativeUse[t.value].percentage}
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
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-modal-foreground px-4 py-4 rounded-r-3xl">
        <Card className="bg-modal border-muted">
          <CardHeader>
            <CardTitle>Derivative use</CardTitle>
            <CardDescription>
              Abatements rates for foreign markets, compilation and Promotion
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <Card className="bg-modal border-none">
              <CardHeader>
                <CardTitle>Merchandising</CardTitle>
                <CardDescription>
                  Royalties taken on merchandising comissions
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-start items-center gap-6">
                <div className="rounded-md bg-modal-foreground px-[10px] py-2 min-w-[150px] min-h-[90px] space-y-2">
                  <p className="text-[12px] font-normal">Commission rate</p>
                  <p className="text-muted-foreground text-[10px] font-normal">
                    DIRECT
                  </p>
                  <p className="text-mblue text-[12px] font-normal">30%</p>
                </div>
                <div className="rounded-md bg-modal-foreground px-[10px] py-2 min-w-[150px] min-h-[90px] space-y-2">
                  <p className="text-[12px] font-normal">Commission rate</p>
                  <p className="text-muted-foreground text-[10px] font-normal">
                    DIRECT
                  </p>
                  <p className="text-mblue text-[12px] font-normal">10%</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-modal border-none">
              <CardHeader>
                <CardTitle>Partnerships and Live events</CardTitle>
                <CardDescription>
                  Royalties taken on merchandising comissions
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-start items-center gap-6">
                <div className="rounded-md bg-modal-foreground px-[10px] py-2 min-w-[150px] min-h-[90px] space-y-2">
                  <p className="text-[12px] font-normal">Commission rate</p>
                  <p className="text-muted-foreground text-[10px] font-normal">
                    DIRECT
                  </p>
                  <p className="text-mblue text-[12px] font-normal">30%</p>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DerivativeUse;
