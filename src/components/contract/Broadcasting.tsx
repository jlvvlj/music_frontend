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
    id: 1, value: "broadcasting",
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

  const [enabled, setEnabled] = useState<number | null>(
    contractCreation.BroadCasting
  );
  const [selectedBroadCasting, setSelectedBroadCasting] = useState([]);
  const getDataById = (ids: any) =>
    Array.isArray(ids)
      ? cards.filter((item) => ids.includes(item.value))
      : [cards.find((item) => item.id === ids)] || [];

  useEffect(() => {
    setSelectedBroadCasting(
      getDataById(contractCreation.AdditionalConditionsChecks) as any
    );
  }, [contractCreation.AdditionalConditionsChecks]);

  const onCheckHandle = (id: number) => {
    if (enabled === id) {
      setEnabled(null);
    } else {
      setEnabled(id);
    }
  };

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

  useEffect(() => {
    if (enabled) {
      setContractCreation((prevData: any) => ({
        ...prevData,
        broadCasting: cards,
      }));
    }
  }, [enabled]);

  const handleUpdateGoal = (cardId: any, member: any, value: number) => {
    const _members = [...contractCreation.broadCasting];
    const newMember = {
      ...member,
      cost: value.toString(),
    };

    const cardIndex = _members.findIndex((card) => card.id === cardId);

    const index = _members[cardIndex]?.activityCards?.findIndex((m: any) => m.id === member.id);
    _members[cardIndex].activityCards.splice(index, 1, newMember);

    setContractCreation((prevData: any) => ({
      ...prevData,
      cost: { enabled: enabled, budgetCards: _members },
    }));
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
                  {selectedBroadCasting.map((card: any) => (
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
                            checked={enabled === card.id}
                            onCheckedChange={() => onCheckHandle(card.id)}
                          />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-8">
                        <p className="text-sm	mt-2.5 text-muted-foreground">
                          Paid concession of television broadcasting rights
                        </p>
                        {enabled === card.id && (
                          <div className="space-y-8 mt-10">
                            <div className="pl-4">
                              {card?.activityCards.map((member: any, index: any) => (
                                <div className="flex items-start gap-4 pl-2.5 pt-1.5 rounded-md w-fit bg-modal pb-1.5 mb-8" key={index}>
                                  <div className="pt-3">
                                    <p className="text-sm font-normal leading-none mb-1">
                                      {member.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground">Lorem ipsum</p>
                                  </div>
                                  <div className="">
                                    <CardsActivityGoal
                                      label="Abatement rate"
                                      initialValue={member.cost || 30}
                                      unit="%"
                                      step={10}
                                      buttonTitle="Set Rate"
                                      minValue={5}
                                      maxValue={100}
                                      buttonHidden
                                      onClickButton={() => { }}
                                      setGoal={(v) => handleUpdateGoal(card.id, member, v)}
                                    />
                                  </div>
                                </div>
                              ))}
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
      <div className="relative flex items-end flex-col pb-7 pt-6 bg-modal-foreground rounded-r-3xl h-[782px]">
        <div className="scrollbox overflow-auto px-4 w-full h-full">
          <Card className="bg-modal border-muted">
            <CardHeader>
              <CardTitle>Broadcasting right & Secondary Use</CardTitle>
              <CardDescription>
                Broadcasting right & Secondary Use
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedBroadCasting.map((card: any) => (
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
                  <CardContent className="flex justify-start items-center gap-6">
                    {card.activityCards?.map((activity: any, index: number) => (
                      <div className="rounded-xl bg-modal-foreground px-[10px] py-2 min-w-[150px] min-h-[90px] space-y-4" key={index}>
                        <p className="text-[12px] font-normal">{activity?.title}</p>
                        <p className="text-mblue text-[12px] font-normal">{activity?.cost}%</p>
                      </div>
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
