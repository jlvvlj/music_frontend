import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CardsActivityGoal } from "@/components/activity-goal";
import { Budget, StepProps } from "./types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Badge } from "@/registry/new-york/ui/badge";
import { Switch } from "@/registry/default/ui/switch";
import { budgetTracks } from "@/app/data/data"
import { TableCommon } from "./TableCommon"
import { BudgetTrackColumn } from "./BudgetTrackColumn"
import ToasterDemo from "./ToasterDemo";

const budgetCards = [
  {
    id: 1, title: 'Registration', activityCards: [
      { id: 1, title: 'Minimum Budget', budget: 3000, subTitle: false },
      { id: 2, title: 'Maximum Budget', budget: 4000, subTitle: false },
      { id: 3, title: 'External Royalties', budget: 2000, subTitle: false }
    ]
  },
  {
    id: 2, title: 'Multimedia', activityCards: [
      { id: 1, title: 'Salary', budget: 3000, subTitle: true }
    ]
  },
  {
    id: 3, title: 'Promotion', activityCards: [
      { id: 1, title: 'Budget', budget: 3000, subTitle: true }
    ]
  }
]

const budgetCard = [
  { title: "Minimum Budget", cost: "EUR 5000" },
  { title: "Maximum Budget", cost: "EUR 9000" },
  { title: "External Royalties", cost: "50%" },
  { title: "Multimedia", cost: "EUR 3000" },
  { title: "Promotion", cost: "EUR 7000" }
];

const Budget = ({ updateStep }: StepProps) => {
  const [enabled, setEnabled] = useState<number[]>([])
  const handleClickNext = () => {
    updateStep(1);
  };

  const handleClickBack = () => {
    updateStep(-1);
  };
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
      salary: 3000,
    },
  });

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
      <div className="w-full pb-7 pt-16 bg-modal rounded-s-3xl h-[645px] flex flex-col justify-between relative">
        <div className="scrollbox overflow-auto w-full h-full">
          <div className="h-[calc(100%-40px)] px-10">
            <h1 className="text-3xl font-semibold tracking-tight mb-3 mt-2.5">
              Initial Budget
            </h1>
            <p className="text-sm text-muted-foreground mb-12">
              Enter the budget details
            </p>
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="space-y-6 p-0">
                <div className="pl-2.5">
                  {budgetCards.map((card) =>
                    <Card key={card.id} className="border-none bg-modal-foreground mb-8 rounded-3xl	">
                      <CardHeader className="py-5 pb-0">
                        <CardTitle className="text-[17px] font-normal flex justify-between">
                          <div>
                            <h6>{card.title}</h6>
                            <Badge className="bg-[#0F233D] hover:bg-[#0F233D] text-[11px] py-0 px-1 text-[#4FABFE] rounded-3xl">Budget</Badge>
                          </div>
                          <Switch className="mt-2.5" checked={enabled.includes(card.id)} onCheckedChange={() => onCheckHandle(card.id)} />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-8">
                        <p className="text-sm	mt-2.5 text-muted-foreground">A budget for  registration will be committed</p>
                        {enabled.includes(card.id) && <div className="space-y-8 mt-10">
                          <div className="grid grid-cols-12 gap-6">
                            {card?.activityCards.map((activityCard) =>
                              <div key={activityCard.id}
                                className={cn(
                                  "flex items-center justify-between pl-4 rounded-md bg-mblue col-span-12 xl:col-span-10 2xl:col-span-8 w-full"
                                )}
                              >
                                <div>
                                  <p
                                    className={cn(
                                      "text-sm font-medium leading-none text-[#FAFAFA]"
                                    )}
                                  >
                                    {activityCard.title}
                                  </p>
                                  {activityCard.subTitle &&
                                    <p className="text-[10px] text-[#B9B9BA] mt-1">
                                      Lorem ipsum
                                    </p>
                                  }
                                </div>
                                <CardsActivityGoal
                                  label="EUR"
                                  initialValue={activityCard.budget}
                                  unit=""
                                  step={10}
                                  buttonTitle="Set Share"
                                  minValue={3000}
                                  maxValue={5000}
                                  buttonHidden
                                  onClickButton={() => { }}
                                  isOwner={true}
                                  setGoal={() => { }}
                                />
                              </div>
                            )}
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
            <ArrowLeftIcon className="mr-1" />
            Back
          </Button>
          <div className="flex gap-4">
            <Button
              className="bg-transparent"
              variant="outline"
              onClick={handleClickNext}
            >
              Skip
            </Button>
            <ToasterDemo toastTitle="Budget selected successfully!" updateStep={updateStep}/>
          </div>
        </div>
      </div>
      <div className="relative flex items-end flex-col pb-7 pt-16 bg-modal-foreground rounded-r-3xl h-[645px]">
        <div className="scrollbox overflow-auto px-4 w-full h-full">
          <div className="p-8 rounded-2xl bg-modal border border-muted w-full mb-[76px]">
            <h6 className="text-2xl	mb-3">Initial Budget</h6>
            <p className="mb-7 text-sm text-muted-foreground">
              Budget details
            </p>
            <div className="flex flex-wrap gap-[18px]">
              {budgetCard.map((card, index) => (
                <Card
                  key={index}
                  className="bg-modal-foreground border-[#1D1D1F] pt-2 px-2.5 pb-6 w-[132px] h-[102px]"
                >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
                    <CardTitle className="text-xs font-normal pb-5">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="text-xs font-normal text-[#4EABFE]">
                      {card.cost}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-modal border border-muted w-full p-4">
            <TableCommon data={budgetTracks} columns={BudgetTrackColumn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;