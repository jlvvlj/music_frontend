import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { BroadCasting } from "./types";
import { Badge } from "@/registry/new-york/ui/badge";
import { Switch } from "@/registry/default/ui/switch";
import { TableCommon } from "./TableCommon";
import { broadcastingTracks } from "@/app/data/data";
import { BroadcastingColumn } from "./BroadcastingColumn";
import { toast } from "sonner";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { CardsActivityGoal } from "../activity-goal";

type TabName = "foreignSales" | "secondaryUses";

const baseBroadCasting = {
  foreignSales: {
    percentage: 0,
  },
  secondaryUses: {
    percentage: 0,
  },
};

const cards = [
  {
    id: 1,
    value: "broadcasting",
    title: "Broadcasting",
    desc: "Concession Royalties to be paid",
    activityCards: [{ id: 1, title: "Concession", cost: 40 }],
  },
  {
    id: 2,
    title: "Secondary Use",
    value: "secondary_use",
    desc: "Royalties to be paid for secondary use",
    activityCards: [{ id: 1, title: "Share", cost: 50 }],
  },
];

const Broadcasting = ({
  handleNextStep,
  handleBackStep,
  contractCreation,
  setContractCreation,
}: any) => {
  const [broadCasting, setBroadCasting] =
    useState<BroadCasting>(baseBroadCasting);

  const handleClickNext = () => {
    toast("Broadcasting created successfully!", {
      description: "Broadcasting",
      action: {
        label: "X",
        onClick: () => { },
      },
      position: "top-right",
    });
    handleNextStep(1);
  };

  const onCheckHandle = (value: string, e: any) => {
    setContractCreation((prev: any) => {
      const updateSubOptions = prev?.broadCastings?.map(
        (subOption: any) => {
          if (subOption?.value === value) {
            return { ...subOption, isOpen: e };
          }
          return subOption
        });
      return { ...prev, broadCastings: updateSubOptions };
    });
  };

  const handleUpdateGoal = (card: any, member: any, value: number) => {
    setContractCreation((prev: any) => {
      const updatedBroadCastings = prev?.broadCastings?.map(
        (broadCasting: any) => {
          if (broadCasting?.id === card?.id) {
            const updatedSubOptions = (broadCasting?.categories)?.map((cat: any) => {
              if (cat?.id === member?.id) {
                return { ...cat, revenue: value };
              }
              return cat;
            });
            return { ...broadCasting, categories: updatedSubOptions }
          }
          return broadCasting;
        }
      );
      return { ...prev, broadCastings: updatedBroadCastings };
    });
  };

  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="w-full pb-7 pt-[92px] bg-modal rounded-s-3xl h-[782px] flex flex-col justify-between">
        <div className="scrollbox overflow-auto w-full h-full">
          <div className="h-[calc(100%-40px)] px-10">
            <div className="w-full flex justify-between mb-12">
              <div className="space-y-1">
                <h1 className="text-3xl font-semibold tracking-tight">
                  Broadcasting right &<br /> Secondary Use
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter the broadcasting budget
                </p>
              </div>
            </div>
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="space-y-6 p-0">
                <div className="pl-2.5">
                  {contractCreation?.broadCastings?.map((card: any) => (
                    <Card
                      key={card.id}
                      className="border-none bg-modal-foreground mb-8 rounded-3xl	"
                    >
                      <CardHeader className="py-5 pb-0">
                        <CardTitle className="text-[17px] font-normal flex justify-between">
                          <div>
                            <h6>{card.title}</h6>
                            <Badge className="bg-[#0F233D] hover:bg-[#0F233D] text-[11px] py-0 px-1 text-[#4FABFE] rounded-3xl">
                              Secondary
                            </Badge>
                          </div>
                          <Switch
                            className="mt-2.5"
                            checked={card?.isOpen}
                            onCheckedChange={(e) => onCheckHandle(card.value, e)}
                          />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-8">
                        <p className="text-sm	mt-2.5 text-muted-foreground">
                          Paid concession of television broadcasting rights
                        </p>
                        {card?.isOpen && (
                          <div className="space-y-8 mt-10">
                            <div className="pl-4 w-3/4">
                              {card?.categories?.map(
                                (member: any, index: any) => (
                                  <div
                                    className="flex items-start justify-between gap-4 pl-2.5 pt-1.5 rounded-md bg-modal pb-1.5 mb-8"
                                    key={index}
                                  >
                                    <div className="pt-3">
                                      <p className="text-sm font-normal leading-none mb-1">
                                        {member.title}
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        Lorem ipsum
                                      </p>
                                    </div>
                                    <div className="">
                                      <CardsActivityGoal
                                        label="Abatement rate"
                                        initialValue={member?.revenue || 30}
                                        unit="%"
                                        step={10}
                                        minValue={5}
                                        maxValue={100}
                                        onClickButton={() => { }}
                                        setGoal={(v) =>
                                          handleUpdateGoal(card, member, v)
                                        }
                                      />
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
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
      <div className="relative flex items-end flex-col py-7 bg-modal-foreground rounded-r-3xl h-[782px]">
        <div className="scrollbox overflow-auto px-4 w-full h-full">
          <Card className="bg-modal border-muted">
            <CardHeader>
              <CardTitle>Broadcasting right & Secondary Use</CardTitle>
              <CardDescription>
                Broadcasting right & Secondary Use
              </CardDescription>
            </CardHeader>
            <CardContent>
              {contractCreation?.broadCastings?.map((card: any) => (
                <Card
                  key={card.id}
                  className="bg-transparent border-none shadow-none"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-normal">
                      {card.title}
                    </CardTitle>
                    <CardDescription>{card.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-start items-center gap-6 flex-wrap">
                    {card.categories?.map((activity: any, index: number) => (
                      activity?.revenue ?
                        <div
                          className="rounded-xl bg-modal-foreground px-[10px] py-2 min-w-[150px] min-h-[90px] space-y-4"
                          key={index}
                        >
                          <p className="text-[12px] font-normal">
                            {activity?.title}
                          </p>
                          <p className="text-mblue text-[12px] font-normal">
                            {activity?.revenue}%
                          </p>
                        </div> : ""
                    ))}
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
          <div className="rounded-2xl bg-modal border border-muted w-full p-4 mt-[76px]">
            <TableCommon
              data={broadcastingTracks}
              columns={BroadcastingColumn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Broadcasting;
