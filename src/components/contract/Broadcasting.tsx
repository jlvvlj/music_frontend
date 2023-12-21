import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CardsActivityGoal } from "@/components/activity-goal";
import { useEffect, useState } from "react";
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
    label: "Broadcasting right",
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
    setCurrentTabIndex(currentTabIndex + 1);
  };

  const handleClickBack = () => {
    updateStep(-1);
  };

  const handleClickSkip = () => {
    updateStep(1);
  };

  const onTabChange = (value: string) => {
    setTab(value as TabName);
  };

  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="flex flex-col gap-10 bg-modal p-8 rounded-l-3xl pt-16">
        <div className="w-full flex justify-between">
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold tracking-tight">
              Broadcasting right &<br /> Secondary Use
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter the broadcasting budget
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
                <TabsContent key={index} value={t.value} className="mt-7">
                  <div>
                    <p className="text-[#FAFAFA] text-base font-normal">
                      {t.label}
                    </p>
                    <p className="text-[#A1A1AA] text-sm font-normal">
                      {t.description}
                    </p>
                  </div>
                  <div className="flex gap-6 items-center space-y-4 mt-8">
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
            <CardTitle>Broadcasting right & Secondary Use</CardTitle>
            <CardDescription>
              Broadcasting right & Secondary Use
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <Card className="bg-modal border-none">
              <CardHeader>
                <CardTitle>Broadcasting</CardTitle>
                <CardDescription>
                  Concession Royalties to be paid
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-start items-center gap-6">
                <div className="rounded-xl bg-modal-foreground px-[10px] py-2 min-w-[150px] min-h-[90px] space-y-4">
                  <p className="text-[12px] font-normal">Royalty rate</p>
                  <p className="text-mblue text-[12px] font-normal">20%</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-modal border-none">
              <CardHeader>
                <CardTitle>Secondary Use</CardTitle>
                <CardDescription>
                  Royalties to be paid for secondary use
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-start items-center gap-6">
                <div className="rounded-xl bg-modal-foreground px-[10px] py-2 min-w-[150px] min-h-[90px] space-y-4">
                  <p className="text-[12px] font-normal">Royalty rate</p>
                  <p className="text-mblue text-[12px] font-normal">20%</p>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Broadcasting;
