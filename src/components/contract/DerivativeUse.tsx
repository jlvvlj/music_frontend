import { useState, useEffect } from "react";
import { toast } from "sonner";
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
import { DerivativeUse, StepProps, TeamMember } from "./types";
import CongratulationModal from "./CongratulationModal";
import { Badge } from "@/registry/new-york/ui/badge";
import { Switch } from "@/registry/default/ui/switch";
import { TableCommon } from "./TableCommon";
import { derivativeTracks } from "@/app/data/data";
import { DerivativeColumn } from "./DerivativeColumn";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import useContractBuilder from "@/hooks/useContractBuilder";
import { Steps } from "@/contexts/ContractBuilderContext";
import ShareCard from "./ShareCard";

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

const derivativeCards = [
  {
    id: 1, title: 'Merchandising', activityCards: [
      { id: 1, title: 'Direct Commission', revenue: 30 },
      { id: 2, title: 'License Comission', revenue: 10 }
    ]
  },
  {
    id: 2, title: 'Partnerships', activityCards: [
      { id: 1, title: 'Commission rate', revenue: 30 }
    ]
  }
]

const cards = [
  {
    id: 1, title: 'Merchandising', desc: 'Royalties taken on merchandising comissions', subCards: [
      { id: 1, title: 'Commission rate', desc: 'DIRECT', rate: '30%' },
      { id: 2, title: 'Commission rate', desc: 'LICENSE', rate: '10%' },
    ]
  },
  {
    id: 2, title: 'Partnerships and Live events', desc: 'Royalties taken on merchandising comissions',
    subCards: [
      { id: 1, title: 'Commission rate', desc: '', rate: '30%' },
    ]
  }
]

const DerivativeUse = ({ updateStep }: StepProps) => {
  const [derivativeUse, setDerivativeUse] =
    useState<DerivativeUse>(baseDerivativeUse);
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleClickBack = () => {
    updateStep(-1);
  };

  const handleClickNext = () => {
    toast("Derivative used successfully", {
      description: "Derivative",
      action: {
        label: "X",
        onClick: () => { },
      },
      position: "top-right"
    });
    setModalOpen(true)
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
    <>
      <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
        <div className="w-full pb-7 pt-[92px] bg-modal rounded-s-3xl h-[782px] flex flex-col justify-between">
          <div className="scrollbox overflow-auto w-full h-full">
            <div className="h-[calc(100%-40px)] px-10">
              <div className="w-full flex justify-between mb-12">
                <div className="space-y-1">
                  <h1 className="text-3xl font-semibold tracking-tight">
                    Derivative use
                  </h1>
                  <p className="text-sm text-muted-foreground">Lorem Ipsum</p>
                </div>
              </div>
              <Card className="bg-transparent border-none shadow-none">
                <CardContent className="space-y-6 p-0">
                  <div className="pl-2.5">
                    {derivativeCards.map((card) =>
                      <Card key={card.id} className="border-none bg-modal-foreground mb-8 rounded-3xl	">
                        <CardHeader className="py-5 pb-0">
                          <CardTitle className="text-[17px] font-normal flex justify-between">
                            <div>
                              <h6>{card.title}</h6>
                              <Badge className="bg-[#0F233D] hover:bg-[#0F233D] text-[11px] py-0 px-1 text-[#4FABFE] rounded-3xl">Derivative</Badge>
                            </div>
                            <Switch className="mt-2.5" checked={enabled === card.id} onCheckedChange={() => onCheckHandle(card.id)} />
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pb-8">
                          <p className="text-sm	mt-2.5 text-muted-foreground">Lorem</p>
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
              onClick={handleClickBack}
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
                <CardTitle>Derivative use</CardTitle>
                <CardDescription>
                  Abatements rates for foreign markets, compilation and Promotion
                </CardDescription>
              </CardHeader>
              <CardContent className="">
                {cards.map((card) =>
                  <Card key={card.id} className="bg-transparent border-none shadow-none">
                    <CardHeader>
                      <CardTitle className="text-lg font-normal">{card.title}</CardTitle>
                      <CardDescription>
                        {card.desc}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-start items-center gap-6">
                      {card?.subCards.map((innercard) => (
                        <div className="rounded-md bg-modal-foreground px-[10px] py-2 w-[150px] min-h-[90px] space-y-1">
                          <p className="text-[12px] font-normal">{innercard.title}</p>
                          <p className="text-[#94A3B8] text-[9px] font-normal">
                            {innercard.desc}
                          </p>
                          <p className="text-mblue text-[12px] font-normal">{innercard.rate}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
            <div className="rounded-2xl bg-modal border border-muted w-full p-4 mt-[76px]">
              <TableCommon data={derivativeTracks} columns={DerivativeColumn} />
            </div>
          </div>
        </div>
      </div>
      <CongratulationModal open={modalOpen} setOpen={setModalOpen} />
    </>
  );
};

export default DerivativeUse;
