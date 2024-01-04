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
import CongratulationModal from "./CongratulationModal";
import ToasterDemo from "./ToasterDemo";
import { Badge } from "@/registry/new-york/ui/badge";
import { Switch } from "@/registry/default/ui/switch";
import { TableCommon } from "./TableCommon";
import { derivativeTracks } from "@/app/data/data";
import { DerivativeColumn } from "./DerivativeColumn";

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

  const [enabled, setEnabled] = useState<number[]>([])

  const onCheckHandle = (id: number) => {
    const checkExist = enabled?.includes(id);

    if (checkExist) {
      setEnabled((prev) => prev?.filter((item) => item !== id));
    } else {
      setEnabled((prev) => [...prev, id]);
    }
  };

  useEffect(() => {
    if (currentTabIndex >= TABS.length) {
      // updateStep(1);
      setModalOpen(true);
    } else {
      setTab(TABS[currentTabIndex].value);
    }
  }, [currentTabIndex]);

  const handleChangeRadioGroup = (v: string) => { };

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
    <>
      <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
        <div className="w-full pb-7 pt-16 bg-modal rounded-s-3xl h-[645px] flex flex-col justify-between">
          <div className="scrollbox overflow-auto w-full h-full">
            <div className="h-[calc(100%-40px)] px-10">
              <div className="w-full flex justify-between mb-12">
                <div className="space-y-1">
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
                            <Switch className="mt-2.5" checked={enabled.includes(card.id)} onCheckedChange={() => onCheckHandle(card.id)} />
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pb-8">
                          <p className="text-sm	mt-2.5 text-muted-foreground">Lorem</p>
                          {enabled.includes(card.id) && <div className="space-y-8 mt-10">
                            <div className="pl-4">
                              {card?.activityCards.map((activityCard) => (
                                <div className="flex items-start gap-4 pl-2.5 pt-1.5 rounded-md w-fit bg-modal pb-1.5 mb-8">
                                  <div className="pt-3">
                                    <p className="text-sm font-normal leading-none mb-1">
                                      {activityCard.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground">Lorem ipsum</p>
                                  </div>
                                  <div className="">
                                    <CardsActivityGoal
                                      label="Abatement rate"
                                      initialValue={activityCard.revenue || 30}
                                      unit="%"
                                      step={10}
                                      buttonTitle="Set Rate"
                                      minValue={0}
                                      maxValue={100}
                                      buttonHidden
                                      onClickButton={() => { }}
                                      setGoal={() => { }}
                                    />
                                  </div>
                                </div>
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
              Back
            </Button>
            <div className="flex gap-4">
              <Button className="" variant="outline" onClick={handleClickNext}>
                Skip
              </Button>
              {/* <Button
                className="bg-mblue"
                variant="outline"
                onClick={handleClickNext}
              >
                {currentTabIndex === TABS.length - 1 ? "Finish" : "Next"}
              </Button> */}
              <ToasterDemo toastTitle="Derivative used successfully!" updateStep={updateStep}/>
            </div>
          </div>
        </div>
        <div className="relative flex items-end flex-col pb-7 pt-16 bg-modal-foreground rounded-r-3xl h-[645px]">
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
