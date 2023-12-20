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
import { cn } from "@/lib/utils";
import { CardsActivityGoal } from "@/components/activity-goal";
import { Budget, StepProps } from "./types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

type Tab = {
  label: string;
  value: string;
};

const TABS: Tab[] = [
  {
    label: "Registration",
    value: "registration",
  },
  {
    label: "Multimedia",
    value: "multimedia",
  },
  {
    label: "Promotion",
    value: "promotion",
  },
];

const budgetCard = [
  { title: 'Minimum Budget', cost: 'EUR 5000' },
  { title: 'Maximum Budget', cost: 'EUR 9000' },
  { title: 'External Royalties', cost: '50%' }
]

const Budget = ({ updateStep }: StepProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [tab, setTab] = useState(TABS[0].value);
  const [budget, setBudget] = useState<Budget>({
    registration: {
      minimum: 3000,
      maximum: 5000,
      royalties: 30,
    },
    multimedia: {
      salary: 3000,
    },
    promotion: {
      salary: 7000,
    },
  });

  const handleChangeGoalValues = (
    parent: "registration" | "multimedia" | "promotion",
    subField: "minimum" | "maximum" | "royalties" | "salary",
    value: number
  ) => {
    setBudget((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [subField]: value,
      },
    }));
  };

  useEffect(() => {
    if (currentTabIndex >= TABS.length) {
      // updateStep(1);
    } else {
      setTab(TABS[currentTabIndex].value);
    }
  }, [currentTabIndex]);

  const handleClickNext = () => {
    updateStep(1);
  };

  const handleClickNextTab = () => {
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
      <div className="w-full px-10 py-7 bg-modal rounded-s-3xl h-full flex flex-col justify-between relative">
        <div>
          <div className="absolute top-6 right-6">
            <Button className="bg-[#5D9DF1]" variant="outline" onClick={handleClickNext}>
              Skip
            </Button>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight mb-3 mt-2.5">
            Initial Budget
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Enter the budget  details
          </p>
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="space-y-6 p-0">
            <Tabs
                value={tab}
                className="w-full px-10" onValueChange={onTabChange}>
                <TabsList className="grid w-full grid-cols-3 mb-11">
                  {TABS.map((t, index) => (
                    <TabsTrigger key={index} value={t.value}>{t.label}</TabsTrigger>
                  ))}
                </TabsList>
                {TABS.map((t, index) => {
                  return (
                    <TabsContent key={index}
                      value={t.value} className="mt-10">
                      {index === 0 &&
                        <>
                          <div>
                            <p className="text-base font-normal mb-2">
                              Registration budget
                            </p>
                            <p className="text-[#A1A1AA] text-sm font-normal">
                              Select if a production budget has been contracted
                            </p>
                          </div>
                          <div className="space-y-8 mt-10">
                            <div className="grid grid-cols-12 gap-6">
                              <div
                                className={cn(
                                  "flex items-center justify-between pl-4 rounded-md bg-[#5D9DF1] col-span-12 lg:col-span-10 2xl:col-span-6 w-full"
                                )}
                              >
                                <div>
                                  <p
                                    className={cn(
                                      "text-sm font-medium leading-none text-[#FAFAFA]"
                                    )}
                                  >
                                    Minimum
                                  </p>
                                  <p className="text-sm text-[#B9B9BA]">Lorem ipsum</p>
                                </div>
                                <CardsActivityGoal
                                  label="EUR"
                                  initialValue={budget.registration.minimum}
                                  unit=""
                                  step={10}
                                  buttonTitle="Set Share"
                                  minValue={3000}
                                  maxValue={5000}
                                  buttonHidden
                                  onClickButton={() => { }}
                                  isOwner={true}
                                  setGoal={(value) =>
                                    handleChangeGoalValues(
                                      "registration",
                                      "minimum",
                                      value
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-12 gap-6">
                              <div
                                className={cn(
                                  "flex items-center justify-between pl-4 rounded-md bg-[#5D9DF1] col-span-12 lg:col-span-10 2xl:col-span-6 w-full"
                                )}
                              >
                                <div>
                                  <p
                                    className={cn(
                                      "text-sm font-medium leading-none text-[#FAFAFA]"
                                    )}
                                  >
                                    Maximum
                                  </p>
                                  <p className="text-sm text-[#B9B9BA]">Lorem ipsum</p>
                                </div>
                                <CardsActivityGoal
                                  label="EUR"
                                  initialValue={budget.registration.maximum}
                                  unit=""
                                  step={10}
                                  buttonTitle="Set Share"
                                  minValue={3000}
                                  maxValue={5000}
                                  buttonHidden
                                  onClickButton={() => { }}
                                  isOwner={true}
                                  setGoal={(value) =>
                                    handleChangeGoalValues(
                                      "registration",
                                      "maximum",
                                      value
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-12 gap-6">
                              <div
                                className={cn(
                                  "flex items-center justify-between pl-4 rounded-md bg-[#5D9DF1] col-span-12 lg:col-span-10 2xl:col-span-6 w-full"
                                )}
                              >
                                <div>
                                  <p
                                    className={cn(
                                      "text-sm font-medium leading-none text-[#FAFAFA]"
                                    )}
                                  >
                                    Royalties
                                  </p>
                                  <p className="text-sm text-[#B9B9BA]">Lorem ipsum</p>
                                </div>
                                <CardsActivityGoal
                                  label="SHARES OF REVENUES"
                                  initialValue={budget.registration.royalties}
                                  unit="%"
                                  step={10}
                                  buttonTitle="Set Share"
                                  minValue={0}
                                  maxValue={100}
                                  buttonHidden
                                  onClickButton={() => { }}
                                  isOwner={true}
                                  setGoal={(value) =>
                                    handleChangeGoalValues(
                                      "registration",
                                      "royalties",
                                      value
                                    )
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      }
                      {index === 1 &&
                        <>
                          <div>
                            <p className="text-[#FAFAFA] text-base font-normal">
                              Multimedia Recordings
                            </p>
                            <p className="text-[#A1A1AA] text-sm font-normal">
                              Select if a salary for video recording is specifically provided for in the collective agreement
                            </p>
                          </div>
                          <div className="space-y-8 mt-10">
                            <div className="grid grid-cols-12 gap-6">
                              <div
                                className={cn(
                                  "flex items-center justify-between pl-4 rounded-md bg-[#5D9DF1] col-span-12 xl:col-span-10 2xl:col-span-6 w-full"
                                )}
                              >
                                <div>
                                  <p
                                    className={cn(
                                      "text-sm font-medium leading-none text-[#FAFAFA]"
                                    )}
                                  >
                                    Salary
                                  </p>
                                  <p className="text-sm text-[#B9B9BA]">Lorem ipsum</p>
                                </div>
                                <CardsActivityGoal
                                  label="EUR"
                                  initialValue={budget.multimedia.salary}
                                  unit=""
                                  step={10}
                                  buttonTitle="Set Share"
                                  minValue={3000}
                                  maxValue={5000}
                                  buttonHidden
                                  onClickButton={() => { }}
                                  isOwner={true}
                                  setGoal={(value) =>
                                    handleChangeGoalValues("multimedia", "salary", value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      }
                      {index === 2 &&
                        <>
                          <div>
                            <p className="text-[#FAFAFA] text-base font-normal">
                              Promotion
                            </p>
                            <p className="text-[#A1A1AA] text-sm font-normal">
                              Select if a budget for image / promotion / marketing will be
                              commited
                            </p>
                          </div>
                          <div className="space-y-8 mt-10">
                            <div className="grid grid-cols-12 gap-6">
                              <div
                                className={cn(
                                  "flex items-center justify-between pl-4 rounded-md bg-[#5D9DF1] col-span-12 xl:col-span-10 2xl:col-span-6 w-full"
                                )}
                              >
                                <div>
                                  <p
                                    className={cn(
                                      "text-sm font-medium leading-none text-[#FAFAFA]"
                                    )}
                                  >
                                    Budget
                                  </p>
                                  <p className="text-sm text-[#B9B9BA]">Lorem ipsum</p>
                                </div>
                                <CardsActivityGoal
                                  label="EUR"
                                  initialValue={budget.promotion.salary}
                                  unit=""
                                  step={10}
                                  buttonTitle="Set Share"
                                  minValue={3000}
                                  maxValue={5000}
                                  buttonHidden
                                  onClickButton={() => { }}
                                  isOwner={true}
                                  setGoal={(value) =>
                                    handleChangeGoalValues("promotion", "salary", value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      }
                    </TabsContent>
                  )
                })}

              </Tabs>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-between w-full mt-10">
          <Button className="bg-[#5D9DF1]" variant="outline" onClick={handleClickBack}>
            <ArrowLeftIcon className="mr-1" />
            Back
          </Button>
          <div className="flex gap-4">
            <Button className="bg-transparent" variant="outline" onClick={handleClickNextTab}>
              Skip
            </Button>
            <Button className="bg-[#5D9DF1]" variant="outline" onClick={handleClickNext}>
              Next
              <ArrowRightIcon className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
      <div className="relative flex items-end px-4 flex-col py-7 bg-modal-foreground rounded-r-3xl">
        <div className="p-8 rounded-2xl bg-modal border border-muted w-full">
          <h6 className="text-2xl	mb-3">Initial Budget</h6>
          <p className="text-[#94A3B8] mb-7 text-sm">Artists participating in this contract.</p>
          <div className="flex gap-10 flex flex-wrap gap-[18px]">
            {budgetCard.map((card, index) =>
              <Card key={index} className="bg-modal-foreground border-[#1D1D1F] pt-2 pl-2.5 pr-6 pb-4 w-[132px]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
                  <CardTitle className="text-xs font-medium pb-5">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="text-xs font-bold text-[#4EABFE]">{card.cost}</div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
