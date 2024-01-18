import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Switch } from "@/registry/default/ui/switch";
import { Badge } from "@/registry/new-york/ui/badge";

import { cn } from "@/lib/utils";
import { TeamMember } from "./types";
import { CountryMultiSelect } from "../country-multi-select";
import { abatementTracks } from "@/app/data/data";
import { TableCommon } from "./TableCommon";
import { AbatementColumn } from "./AbatementColumn";
import useContractBuilder from "@/hooks/useContractBuilder";
import { Steps } from "@/contexts/ContractBuilderContext";
import CategoryCard from "./CategoryCard";

const COUNTRIES = [
  {
    label: "France",
    value: "france",
    code: "FR",
  },
  {
    label: "Spain",
    value: "spain",
    code: "ES",
  },
  {
    label: "England",
    value: "england",
    code: "GB",
  },
];

const cards = [
  {
    id: 1,
    title: "Foreign sales",
    value: "foreign_sales",
    desc: "Abatements taken for foreign markets",
    subCards: [
      {
        id: 1,
        title: "Abatement rate",
        cost: 10,
        rate: true,
        country: []
      },
    ],
  },
  {
    id: 2,
    title: "Compilations",
    value: "compilations",
    desc: "Abatements taken for compilations",
    subCards: [{ id: 1, title: "Share of Base", cost: 40, rate: false }],
  },
  {
    id: 3,
    title: "Promotions",
    value: "promotions",
    rate: false,
    desc: "An abatement for promotions will be applied",
    subCards: [{ id: 1, title: "Share of Base", cost: 50, rate: false }],
  },
  {
    id: 4,
    title: "Discounted Sales",
    value: "discounted_sales",
    rate: false,
    desc: "An abatement for discount sales will be applied",
    subCards: [{ id: 1, title: "Abatement rate", cost: 80, rate: false }],
  },
  {
    id: 5,
    title: "Off-Circuits Sales",
    value: "off_traditional_circuits_sales",
    desc: "An abatement for off-circuit sales will be applied",
    subCards: [{ id: 1, title: "Abatement rate", cost: 10, rate: false }],
  },
];

const Abatements = ({
  handleNextStep,
  handleBackStep,
  contractCreation,
  setContractCreation,
}: any) => {
  const [enabled, setEnabled] = useState<string>();
  const [selectedAbatements, setSelectedAbatements] = useState([]);
  const { members, dispatch } = useContractBuilder();

  const getDataById = (ids: any) =>
    Array.isArray(ids)
      ? cards.filter((item) => ids.includes(item.value))
      : [cards.find((item) => item.id === ids)] || [];

  useEffect(() => {
    setSelectedAbatements(
      getDataById(contractCreation.AdditionalConditionsChecks) as any
    );
  }, [contractCreation.AdditionalConditionsChecks]);

  const handleClickNext = () => {
    toast("Abatements added successfully!", {
      description: "Abatements",
      action: {
        label: "X",
        onClick: () => { },
      },
      position: "top-right",
    });
    handleNextStep();
  };

  useEffect(() => {
    if (enabled) {
      setContractCreation((prevData: any) => ({
        ...prevData,
        abatements: cards,
      }));
    }
  }, [enabled]);

  const handleUpdateGoal = (cardId: number, member: TeamMember, value: number) => {
    const _members = [...contractCreation.abatements];
    const newMember = {
      ...member,
      cost: value,
    };

    const cardIndex = _members.findIndex((card) => card.id === cardId);

    const index = _members[cardIndex]?.subCards?.findIndex((m: any) => m.id === member.id);
    _members[cardIndex].subCards.splice(index, 1, newMember);

    setContractCreation((prevData: any) => ({
      ...prevData,
      abatements: _members,
    }));

    dispatch({
      type: Steps.SHARES,
      payload: {
        members: _members,
      },
    });
  };

  const handleUpdateCountry = () => {

  }

  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="w-full pb-7 pt-[92px] bg-modal rounded-s-3xl h-[782px] flex flex-col justify-between">
        <div className="scrollbox overflow-auto w-full h-full">
          <div className="h-[calc(100%-40px)] px-10">
            <div className="w-full flex justify-between mb-12">
              <div className="space-y-1">
                <h1 className="text-3xl font-semibold tracking-tight">
                  Abatements
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter the contract Abatements details
                </p>
              </div>
            </div>
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="space-y-6 p-0">
                <div className="pl-2.5">
                  {selectedAbatements?.map((card: any, index:number) => (
                    <Card
                      key={index}
                      className="border-none bg-modal-foreground mb-8 rounded-3xl	"
                    >
                      <CardHeader className="py-5 pb-0">
                        <CardTitle className="text-[17px] font-normal flex justify-between">
                          <div>
                            <h6>{card.title}</h6>
                            <Badge className="bg-[#0F233D] hover:bg-[#0F233D] text-[11px] py-0 px-1 text-[#4FABFE] rounded-3xl">
                              Abatements
                            </Badge>
                          </div>
                          <Switch
                            className="mt-2.5"
                            checked={enabled === card.value}
                            onCheckedChange={() => setEnabled(card.value)}
                          />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-8">
                        <p className="text-sm	mt-2.5 text-muted-foreground">
                          An abatement for foreign sales will be applied
                        </p>
                        {enabled === card.value && (
                          <div className="space-y-8 mt-10">
                            <div className="pl-4 gap-7 flex flex-col justify-center items-center">
                              {card?.subCards?.map((activity: any, index: number) => (
                                <CategoryCard  
                                  key={index}
                                  card={activity}
                                  step={0}
                                  buttonTitle={activity?.rate ? "Set Rate" :""}
                                  unit={"%"}
                                  updateGoal={(v) => handleUpdateGoal(card.id, activity, v)}
                                  avatar={false}
                                  bgcolor="bg-modal"
                                />
                              ))}
                              <div
                                className={cn(card.id === 1 ? "" : "hidden")}
                              >
                                <CountryMultiSelect
                                  frameworks={COUNTRIES}
                                  placeholder="Countries"
                                />
                              </div>
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
              <CardTitle>Abatements</CardTitle>
              <CardDescription>
                Abatements rates for foreign markets, compilation and Promotion
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              {cards.map((card) => (
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
                    {card?.subCards.map((innercard, index) => (
                      <div className="rounded-md bg-modal-foreground px-[10px] py-2 w-[150px] min-h-[90px] space-y-1" key={index}>
                        <p className="text-[12px] font-normal">
                          {innercard.title}
                        </p>
                        <p className="text-[#94A3B8] text-[9px] font-normal">
                          Lorem Ipsum
                        </p>
                        <p className="text-mblue text-[12px] font-normal">
                          {innercard.cost}%
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
          <div className="rounded-2xl bg-modal border border-muted w-full p-4 mt-[76px] abatements-table">
            <TableCommon data={abatementTracks} columns={AbatementColumn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abatements;
