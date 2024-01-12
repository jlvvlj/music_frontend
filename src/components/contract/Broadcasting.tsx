import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardsActivityGoal } from "@/components/activity-goal";
import { useEffect, useState } from "react";
import { BroadCasting, StepProps, TeamMember } from "./types";
import { Badge } from "@/registry/new-york/ui/badge";
import { Switch } from "@/registry/default/ui/switch";
import { TableCommon } from "./TableCommon";
import { broadcastingTracks } from "@/app/data/data";
import { BroadcastingColumn } from "./BroadcastingColumn";
import { toast } from "sonner";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import useContractBuilder from "@/hooks/useContractBuilder";
import { Steps } from "@/contexts/ContractBuilderContext";
import ShareCard from "./ShareCard";

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

const broadCastingCards = [
  {
    id: 1, title: 'Broadcasting right', activityCards: [
      { id: 1, title: 'Concession' }
    ]
  },
  {
    id: 2, title: 'Secondary uses', activityCards: [
      { id: 1, title: 'Share' }
    ]
  }
]

const cards = [
  { id: 1, title: 'Broadcasting', desc: 'Concession Royalties to be paid' },
  { id: 2, title: 'Secondary Use', desc: 'Royalties to be paid for secondary use' }
]

const Broadcasting = ({ handleNextStep, handleBackStep }: any) => {
  const [broadCasting, setBroadCasting] =
    useState<BroadCasting>(baseBroadCasting);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [tab, setTab] = useState(TABS[0].value);

  const [enabled, setEnabled] = useState<number | null>(null);
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
      position: "top-right"
    });
    handleNextStep(1);
  };

  const { members, dispatch } = useContractBuilder();
  const handleUpdateGoal = (member: TeamMember, value: number) => {
    const _members = [...members];
    const newMember = {
      ...member,
      revenue: value,
    };
    const index = _members.findIndex((m) => m.id === member.id);
    const m = _members.splice(index, 1, newMember);

    dispatch({
      type: Steps.SHARES,
      payload: {
        members: _members,
      },
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
                  {broadCastingCards.map((card) =>
                    <Card key={card.id} className="border-none bg-modal-foreground mb-8 rounded-3xl	">
                      <CardHeader className="py-5 pb-0">
                        <CardTitle className="text-[17px] font-normal flex justify-between">
                          <div>
                            <h6>{card.title}</h6>
                            <Badge className="bg-[#0F233D] hover:bg-[#0F233D] text-[11px] py-0 px-1 text-[#4FABFE] rounded-3xl">Secondary</Badge>
                          </div>
                          <Switch className="mt-2.5" checked={enabled === card.id} onCheckedChange={() => onCheckHandle(card.id)} />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-8">
                        <p className="text-sm	mt-2.5 text-muted-foreground">Paid concession of television broadcasting rights</p>
                        {enabled === card.id && <div className="space-y-8 mt-10">
                          <div className="pl-4">
                            {members.map((member, index) => (
                              <ShareCard
                                key={index}
                                member={member}
                                updateGoal={(v) => handleUpdateGoal(member, v)}
                                buttonHidden={true}
                                avatar={false}
                                bgcolor="bg-modal"
                              />
                            ))}
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
              {cards.map((card) =>
                <Card key={card.id} className="bg-transparent border-none shadow-none">
                  <CardHeader>
                    <CardTitle className="text-lg font-normal">{card.title}</CardTitle>
                    <CardDescription>
                      {card.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-start items-center gap-6">
                    <div className="rounded-xl bg-modal-foreground px-[10px] py-2 min-w-[150px] min-h-[90px] space-y-4">
                      <p className="text-[12px] font-normal">Royalty rate</p>
                      <p className="text-mblue text-[12px] font-normal">20%</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
          <div className="rounded-2xl bg-modal border border-muted w-full p-4 mt-[76px]">
            <TableCommon data={broadcastingTracks} columns={BroadcastingColumn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Broadcasting;
