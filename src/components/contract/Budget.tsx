import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

import { CardsActivityGoal } from "@/components/activity-goal";
import { TeamMember } from "./types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Badge } from "@/registry/new-york/ui/badge";
import { Switch } from "@/registry/default/ui/switch";
import { budgetTracks } from "@/app/data/data";
import { TableCommon } from "./TableCommon";
import { BudgetTrackColumn } from "./BudgetTrackColumn";
import useContractBuilder from "@/hooks/useContractBuilder";
import { Steps } from "@/contexts/ContractBuilderContext";
import { Label } from "@/registry/new-york/ui/label";
import { Input } from "@/registry/new-york/ui/input";
import CategoryCard from "./CategoryCard";

const budgetCards = [
  {
    id: 1,
    title: "Registration",
    value: "registration",
    otherInput: false,
    activityCards: [
      { id: 1, title: "Minimum Budget", cost: 3000, subTitle: false },
      { id: 2, title: "Maximum Budget", cost: 4000, subTitle: false },
      { id: 3, title: "External Royalties", cost: 2000, subTitle: false },
    ],
  },
  {
    id: 2,
    title: "Image",
    value: "image",
    otherInput: false,
    activityCards: [{ id: 1, title: "Salary", cost: 3000, subTitle: true }],
  },
  {
    id: 3,
    title: "PR & Promotion",
    value: "promotion",
    otherInput: true,
    activityCards: [{ id: 1, title: "Budget", cost: 3000, subTitle: true }],
  },
];

const Budget = ({
  handleNextStep,
  handleBackStep,
  contractCreation,
  setContractCreation,
}: any) => {
  const [enabled, setEnabled] = useState<number | null>(
    contractCreation.initialBudget || null
  );
  const { dispatch } = useContractBuilder();

  const [selectedBudgets, setSelectedBudgets] = useState([]);
  const getDataById = (selectedOptions: string[]) =>
    Array.isArray(selectedOptions)
      ? budgetCards.filter((item) => selectedOptions.includes(item.value))
      : [budgetCards.find((item) => item.value === selectedOptions)] || [];

  useEffect(() => {
    setSelectedBudgets(
      getDataById(contractCreation.additionalConditions) as any
    );
  }, [contractCreation.additionalConditions]);

  useEffect(() => {
    if (enabled) {
      setContractCreation((prevData: any) => ({
        ...prevData,
        initialBudget: budgetCards,
      }));
    }
  }, [enabled]);

  const onCheckHandle = (id: number) => {
    if (enabled === id) {
      setEnabled(null);
    } else {
      setEnabled(id);
    }
  };

  const handleClickNext = () => {
    toast("Budget selected successfully!", {
      description: "Initial Budget",
      action: {
        label: "X",
        onClick: () => {},
      },
      position: "top-right",
    });
    handleNextStep();
  };

  const handleUpdateGoal = (cardId: any, member: TeamMember, value: number) => {
    const _members = [...contractCreation.initialBudget];
    const newMember = {
      ...member,
      cost: value.toString(),
    };

    const cardIndex = _members.findIndex((card) => card.id === cardId);

    const index = _members[cardIndex]?.activityCards?.findIndex(
      (m: any) => m.id === member.id
    );
    _members[cardIndex].activityCards.splice(index, 1, newMember);

    setContractCreation((prevData: any) => ({
      ...prevData,
      cost: { enabled: enabled, budgetCards: _members },
    }));

    dispatch({
      type: Steps.SHARES,
      payload: {
        members: _members,
      },
    });
  };

  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="w-full pb-7 pt-[92px] bg-modal rounded-s-3xl h-[782px] flex flex-col justify-between relative">
        <div className="scrollbox overflow-auto w-full h-full">
          <div className="h-[calc(100%-40px)] px-10">
            <h1 className="text-3xl font-semibold tracking-tight mb-3">
              Initial Budget
            </h1>
            <p className="text-sm text-muted-foreground mb-12">
              Enter the budget details
            </p>
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="space-y-6 p-0">
                <div className="pl-2.5">
                  {selectedBudgets.map((card: any) => (
                    <Card
                      key={card.value}
                      className="border-none bg-modal-foreground mb-8 rounded-3xl	"
                    >
                      <CardHeader className="py-5 pb-0">
                        <CardTitle className="text-[17px] font-normal flex justify-between">
                          <div>
                            <h6>{card.title}</h6>
                            <Badge className="bg-[#0F233D] hover:bg-[#0F233D] text-[11px] py-0 px-1 text-[#4FABFE] rounded-3xl">
                              Budget
                            </Badge>
                          </div>
                          <Switch
                            className="mt-2.5"
                            checked={enabled === card.id}
                            onCheckedChange={() => onCheckHandle(card.id)}
                          />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-8">
                        <p className="text-sm	mt-2.5 text-muted-foreground">
                          A budget for registration will be committed
                        </p>
                        {enabled === card.id && (
                          <div className="space-y-8 mt-10">
                            <div className="">
                              {card.activityCards.map(
                                (activity: any, index: any) => (
                                  <CategoryCard
                                    key={index}
                                    card={activity}
                                    step={1000}
                                    updateGoal={(v) =>
                                      handleUpdateGoal(card.id, activity, v)
                                    }
                                    avatar={false}
                                    bgcolor="bg-modal"
                                  />
                                )
                              )}
                            </div>
                            {card.otherInput && (
                              <div className="flex items-between gap-4">
                                <Label className="mt-2">Other</Label>
                                <Input type="text" placeholder="" />
                              </div>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex justify-between w-full mt-10 px-10">
          <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleBackStep}
          >
            <ArrowLeftIcon className="mr-1" />
            Back
          </Button>
          <div className="flex gap-4">
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
      <div className="relative flex items-end flex-col pb-7 pt-6 bg-modal-foreground rounded-r-3xl h-[782px]">
        <div className="scrollbox overflow-auto px-4 w-full h-full">
          <div className="p-8 rounded-2xl bg-modal border border-muted w-full mb-[76px]">
            <h6 className="text-2xl	mb-3">Initial Budget</h6>
            <p className="mb-7 text-sm text-muted-foreground">Budget details</p>
            <div className="flex flex-wrap gap-[18px]">
              {budgetCards.map((card, index) => (
                <>
                  {card.activityCards.map((activity: any, index: any) => (
                    <Card
                      key={index}
                      className="bg-modal-foreground border-[#1D1D1F] pt-2 px-2.5 pb-6 w-[132px] h-[102px]"
                    >
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
                        <CardTitle className="text-xs font-normal pb-5">
                          {activity.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="text-xs font-normal text-[#4EABFE]">
                          {activity.cost}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </>
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
