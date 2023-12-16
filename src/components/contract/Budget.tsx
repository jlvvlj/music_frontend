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

// ** type

interface Budget {
  registration: {
    minimum: number;
    maximum: number;
    royalties: number;
  };
  multimedia: {
    salary: number;
  };
  promotion: {
    salary: number;
  };
}

const Budget = () => {
  const [budget, setBudget] = useState<Budget>({
    registration: {
      minimum: 200,
      maximum: 1000,
      royalties: 300,
    },
    multimedia: {
      salary: 3000,
    },
    promotion: {
      salary: 3000,
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

  return (
    <>
      <Card className="bg-transparent border-none">
        <CardContent className="space-y-6 p-0">
          <Tabs defaultValue="registration" className="w-full px-10">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="registration">Registration</TabsTrigger>
              <TabsTrigger value="multimedia">Multimedia</TabsTrigger>
              <TabsTrigger value="promotion">Promotion</TabsTrigger>
            </TabsList>
            <TabsContent value="registration" className="mt-10">
              <div>
                <p className="text-[#FAFAFA] text-base font-normal">
                  Registration budget
                </p>
                <p className="text-[#A1A1AA] text-sm font-normal">
                  Select if a production budget has been contracted
                </p>
              </div>
              <div className="space-y-4 mt-6">
                <div className="grid grid-cols-12 gap-6">
                  <div
                    className={cn(
                      "flex items-center pl-4 rounded-md bg-[#5D9DF1] col-span-12 lg:col-span-10 2xl:col-span-6 w-full"
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
                      onClickButton={() => {}}
                      isOwner={true}
                      setGoal={(value) =>
                        handleChangeGoalValues("registration", "minimum", value)
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                  <div
                    className={cn(
                      "flex items-center pl-4 rounded-md bg-[#5D9DF1] col-span-12 lg:col-span-10 2xl:col-span-6 w-full"
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
                      onClickButton={() => {}}
                      isOwner={true}
                      setGoal={(value) =>
                        handleChangeGoalValues("registration", "maximum", value)
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                  <div
                    className={cn(
                      "flex items-center pl-4 rounded-md bg-[#5D9DF1] col-span-12 lg:col-span-10 2xl:col-span-6 w-full"
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
                      onClickButton={() => {}}
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
            </TabsContent>
            <TabsContent value="multimedia" className="mt-10">
              <div>
                <p className="text-[#FAFAFA] text-base font-normal">
                  Multimedia Recordings
                </p>
                <p className="text-[#A1A1AA] text-sm font-normal">
                  Select if a salary for video recording is specifically
                  provided for in the collective agreement
                </p>
              </div>
              <div className="space-y-4 mt-6">
                <div className="grid grid-cols-12 gap-6">
                  <div
                    className={cn(
                      "flex items-center pl-4 rounded-md bg-[#5D9DF1] col-span-12 xl:col-span-10 2xl:col-span-6 w-full"
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
                      onClickButton={() => {}}
                      isOwner={true}
                      setGoal={(value) =>
                        handleChangeGoalValues("multimedia", "salary", value)
                      }
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="promotion" className="mt-10">
              <div>
                <p className="text-[#FAFAFA] text-base font-normal">
                  Promotion
                </p>
                <p className="text-[#A1A1AA] text-sm font-normal">
                  Select if a budget for image / promotion / marketing will be
                  commited
                </p>
              </div>
              <div className="space-y-4 mt-6">
                <div className="grid grid-cols-12 gap-6">
                  <div
                    className={cn(
                      "flex items-center pl-4 rounded-md bg-[#5D9DF1] col-span-12 xl:col-span-10 2xl:col-span-6 w-full"
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
                      onClickButton={() => {}}
                      isOwner={true}
                      setGoal={(value) =>
                        handleChangeGoalValues("promotion", "salary", value)
                      }
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default Budget;
