import React, { useState, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Badge } from "@/registry/new-york/ui/badge";
import { Switch } from "@/registry/default/ui/switch";
import Image from "next/image";

import { CardsActivityGoal } from "../activity-goal";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { TableCommon } from "./TableCommon";
import { royaltiesTracks } from "@/app/data/data";
import { RoyaltiesColumn } from "./RoyaltiesColumn";
import MemberCard from "./MemberCard";
import useContractBuilder from "@/hooks/useContractBuilder";
import { TeamMember } from "./types";
import { Steps } from "@/contexts/ContractBuilderContext";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import DatePicker from "../ui/date-picker";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArtistMultiSelect } from "./ArtistMultiSelect";

interface Props extends React.PropsWithChildren {
  currentStep?: number;
  updateStep: (step: number) => void;
}

const cards = [
  {
    id: 1,
    title: "At signature",
    value: "at_signature",
    showDatePicker: false,
  },
  {
    id: 2,
    title: "At Commercial release",
    value: "at_commercial_release",
    showDatePicker: false,
  },
  {
    id: 3,
    title: "At Specific Date",
    value: "at_specific_date",
    showDatePicker: true,
  },
];

export default function RoyaltyAdvances({
  handleNextStep,
  handleBackStep,
  contractCreation,
  setContractCreation,
}: any) {
  const [enabled, setEnabled] = useState<string | any>(
    contractCreation.royaltyAdvances
  );
  const [selectedRoyaltiesCards, setSelectedRoyaltiesCards] = useState([]);
  const getDataById = (ids: any) =>
    Array.isArray(ids)
      ? cards.filter((item) => ids.includes(item.value))
      : [cards.find((item) => item.id === ids)] || [];

  useEffect(() => {
    setSelectedRoyaltiesCards(
      getDataById(contractCreation.additionalConditions) as any
    );
  }, [contractCreation.additionalConditions]);

  const onCheckHandle = (id: number) => {
    if ((enabled as any) === id) {
      setEnabled(null);
    } else {
      setEnabled(id);
    }
  };

  const handleClickNext = () => {
    toast("Royalties Advances updated successfully!", {
      description: "Royalties Advances",
      action: {
        label: "X",
        onClick: () => { },
      },
      position: "top-right",
    });
    handleNextStep();
  };

  useEffect(() => {
      setContractCreation((prevData: any) => ({
        ...prevData,
        royaltyAdvances: contractCreation?.members?.artists?.map(
          (artist: any) => {
            return { ...artist, categories: selectedRoyaltiesCards };
          }
        ),
      }));
  }, [selectedRoyaltiesCards]);


  const { dispatch } = useContractBuilder();

  const handleUpdateGoal = (
    category: any,
    member: TeamMember,
    value: number
  ) => {
    setContractCreation((prevData: any) => {
      const updatedRoyaltyAdvances = prevData.royaltyAdvances.map(
        (card: any) => {
          if (card.id === member?.id && card.categories) {
            const updatedCategories = card.categories.map((cat: any) => {
              if (cat.id === category?.id) {
                return { ...cat, revenue: value };
              }
              return cat;
            });
            return { ...card, categories: updatedCategories };
          }
          return card;
        }
      );
      return { ...prevData, royaltyAdvances: updatedRoyaltyAdvances };
    });

    dispatch({
      type: Steps.SHARES,
      payload: {
        members: [...contractCreation?.royaltyAdvances],
      },
    });
  };

  const recordingFormSchema = z.object({
    number: z.number().default(10),
    programType: z.enum(["album", "single"], {
      required_error: "Select program type",
    }),
    completedAt: z.date().default(new Date()),
    releasedAt: z.date().default(new Date()),
    optionRightsLimit: z.date().default(new Date()),
  });
  type RecordingFormValues = z.infer<typeof recordingFormSchema>;

  const defaultValues: Partial<RecordingFormValues> = {};
  const form = useForm<RecordingFormValues>({
    resolver: zodResolver(recordingFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const calculateTotalRevenue = (categories: any) => {
    return categories.reduce((totalRevenue: any, category: any) => {
      return totalRevenue + (category.revenue || 0);
    }, 0);
  };

  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="w-full pb-7 pt-[92px] bg-modal rounded-s-3xl h-[782px] flex flex-col justify-between">
        <div className="scrollbox overflow-auto w-full h-full">
          <div className="h-[calc(100%-40px)] px-10">
            <div className="w-full">
              <h1 className="text-3xl font-semibold tracking-tight mb-1">
                Royalties Advances
              </h1>
              <p className="text-sm text-muted-foreground mb-12">
                Enter the royalties advances for each artist
              </p>
            </div>
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="space-y-6 p-0">
                <div className="pl-2.5">
                  {selectedRoyaltiesCards.map((card: any, index) => (
                    <Card
                      key={index}
                      className="border-none bg-modal-foreground mb-8 rounded-3xl	"
                    >
                      <CardHeader className="py-5 pb-0">
                        <CardTitle className="text-[17px] font-normal flex justify-between">
                          <div>
                            <h6>{card.title}</h6>
                            <Badge className="bg-[#0F233D] hover:bg-[#0F233D] text-[11px] py-0 px-1 text-[#4FABFE] rounded-3xl">
                              Advance
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
                          An advance will be paid a signature
                        </p>
                        {enabled === card.id && (
                          <div className="space-y-8 mt-10">
                            <div className="pl-4 gap-10">
                              {contractCreation?.royaltyAdvances?.map(
                                (member: any, index: number) => (
                                  <MemberCard
                                    key={index}
                                    member={{
                                      ...member,
                                      revenue: member?.categories?.find(
                                        (category: any) =>
                                          category.id === card.id
                                      )?.revenue,
                                    }}
                                    updateGoal={(v) =>
                                      handleUpdateGoal(card, member, v)
                                    }
                                    unit="€"
                                    avatar={true}
                                    bgcolor="bg-modal"
                                  />
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
      <div className="relative flex items-end flex-col pb-7 pt-6 bg-modal-foreground rounded-r-3xl h-[782px]">
        <div className="scrollbox overflow-auto px-4 w-full h-full">
          <Card className="bg-modal border-muted mb-[76px]">
            <CardHeader>
              <CardTitle>Royalties Advances</CardTitle>
              <CardDescription>
                Edit the advance on each track for a specific allocation
              </CardDescription>
            </CardHeader>
            <CardContent>
              {contractCreation?.royaltyAdvances?.map((card: any) => {
                return (
                  <>
                    <div className="flex items-start mx-auto gap-4 pl-2.5 pt-1.5 rounded-md mb-1 w-fit bg-black3 right-card">
                      <Avatar className="bg-[#A3D3FF] mt-2 h-11 w-11">
                        <Image
                          src={card.avatar}
                          width={100}
                          height={100}
                          alt="avatar"
                        />
                      </Avatar>
                      <div className="pt-3">
                        <p className="text-sm font-normal leading-none mb-1">
                          {card.name}
                        </p>
                        <p className="text-sm">
                          {card.role.charAt(0).toUpperCase() +
                            card.role.slice(1)}
                        </p>
                      </div>
                      <div className="">
                        <CardsActivityGoal
                          label={"base rate on sales"}
                          initialValue={calculateTotalRevenue(card.categories)}
                          unit="€"
                          step={10}
                          minValue={0}
                          maxValue={1000}
                          buttonHidden
                          onClickButton={() => { }}
                          setGoal={() => { }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-6 px-20 mb-12">
                      {card.categories.map((categ: any, index: number) => {
                        return (
                          <>
                            {card.categories[index].revenue ? (
                              <div className="rounded-xl bg-modal-foreground px-[10px] py-2 min-w-[150px] min-h-[90px] space-y-4">
                                <p className="text-[12px] font-normal">
                                  {card.categories[index].title}
                                </p>
                                <p className="text-mblue text-[12px] font-normal">
                                  €{card.categories[index].revenue}
                                </p>
                              </div>
                            ) : (
                              <></>
                            )}
                          </>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </CardContent>
          </Card>
          <div className="rounded-2xl bg-modal border border-muted w-full p-4">
            <TableCommon data={royaltiesTracks} columns={RoyaltiesColumn} />
          </div>
        </div>
      </div>
    </div>
  );
}
