import { useState } from "react";
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
import { TeamMember } from "./types";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import DatePicker from "../ui/date-picker";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArtistMultiSelect } from "./ArtistMultiSelect";

export default function RoyaltyAdvances({
  handleNextStep,
  handleBackStep,
  contractCreation,
  setContractCreation,
  watch,
  setValue
}: any) {

  const onCheckHandle = (value: string, e: any) => {
    setContractCreation((prev: any) => {
      const updateSubOptions = prev?.royaltyAdvances?.subOptions?.map(
        (subOption: any) => {
          if (subOption.value === value) {
            return { ...subOption, isOpen: e };
          }
          return subOption
        });
      setValue("royaltyAdvances.subOptions", updateSubOptions)
      return { ...prev, royaltyAdvances: { ...prev?.royaltyAdvances, subOptions: updateSubOptions } };
    });
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

  const handleUpdateGoal = (
    category: any,
    member: TeamMember,
    value: number
  ) => {
    setContractCreation((prev: any) => {
      const updatedRoyaltyAdvances = prev?.royaltyAdvances?.options?.map(
        (artist: any) => {
          if (artist.id === member?.id) {
            const updatedCategories = (artist?.categories || []).map((cat: any) => {
              if (cat.id === category?.id) {
                return { ...cat, revenue: value };
              }
              return cat;
            });

            if (updatedCategories.some((cat: any) => cat.id === category?.id)) {
              return { ...artist, categories: updatedCategories };
            } else {
              return { ...artist, categories: [...updatedCategories, { ...category, revenue: value }] };
            }
          }
          return artist;
        }
      );
      setValue("royaltyAdvances.options", updatedRoyaltyAdvances)
      return { ...prev, royaltyAdvances: { ...prev?.royaltyAdvances, options: updatedRoyaltyAdvances } };
    });
  };

  const calculateTotalRevenue = (categories: any) => {
    return categories?.reduce((totalRevenue: any, category: any) => {
      return totalRevenue + (category.revenue || 0);
    }, 0);
  };

  const royaltyFormSchema = z.object({
    number: z.number().default(10),
    programType: z.enum(["album", "single"], {
      required_error: "Select program type",
    }),
    completedAt: z.date().default(new Date()),
    releasedAt: z.date().default(new Date()),
    optionRightsLimit: z.date().default(new Date()),
  });
  type RoyaltyFormValues = z.infer<typeof royaltyFormSchema>;

  const defaultValues: Partial<RoyaltyFormValues> = {};
  const form = useForm<RoyaltyFormValues>({
    resolver: zodResolver(royaltyFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const [selectedArtists, setSelectedArtists] = useState<any>([]);
  const handleSelectedArtist = (artists: any) => {
    setSelectedArtists(artists)
  }

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
                  {contractCreation?.royaltyAdvances?.subOptions?.map((card: any, index: number) => (
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
                            checked={card?.isOpen}
                            onCheckedChange={(e) => onCheckHandle(card.value, e)}
                          />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-8">
                        <p className="text-sm	mt-2.5 text-muted-foreground">
                          An advance will be paid a signature
                        </p>
                        {card?.isOpen && (
                          <div>
                            {card.value === "at_signature" ?
                              <div className="mt-3 space-y-3 flex flex-col justify-center items-center">
                                <Form {...form}>
                                  <FormField
                                    control={form.control}
                                    name="optionRightsLimit"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <DatePicker
                                            className="max-w-[230px]"
                                            buttonClassName="w-[230px] text-sm text-white3 bg-card3"
                                            placeholder="Jan 20, 2023"
                                            date={field.value}
                                            onDateChange={(d) =>
                                              field.onChange(d || new Date())
                                            }
                                          />
                                        </FormControl>
                                      </FormItem>
                                    )}
                                  />
                                </Form>
                                <ArtistMultiSelect width="max-w-[230px]" artistRate={false} handleArtist={handleSelectedArtist} />
                              </div> : <></>}
                            <div className="space-y-8 mt-10">
                              <div className="pl-4 gap-10 w-[82%]">
                                {contractCreation?.royaltyAdvances?.options?.map(
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
                                      step={1000}
                                      minValue={0}
                                      maxValue={50000}
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
          <Card className="bg-modal border-muted mb-[76px]">
            <CardHeader>
              <CardTitle>Royalties Advances</CardTitle>
              <CardDescription>
                Edit the advance on each track for a specific allocation
              </CardDescription>
            </CardHeader>
            <CardContent>
              {contractCreation?.royaltyAdvances?.options?.map((card: any) => {
                return (
                  <>
                    <div className="flex items-start justify-between mx-auto gap-4 pl-2.5 pt-1.5 rounded-md mb-1 w-[58%] bg-black3 right-card">
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
                          initialValue={calculateTotalRevenue(card?.categories) || 0}
                          unit="€"
                          step={1000}
                          minValue={0}
                          maxValue={50000}
                          buttonHidden
                          onClickButton={() => { }}
                          setGoal={() => { }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-6 mb-12 flex-wrap w-[78%] ml-auto">
                      {card?.categories?.map((category: any, index: number) => {
                        return (
                          <>
                            {card.categories[index].revenue ? (
                              <div className="rounded-xl bg-modal-foreground px-[10px] py-2 min-w-[150px] min-h-[90px] space-y-4">
                                <p className="text-[12px] font-normal">
                                  {category?.title}
                                </p>
                                <p className="text-mblue text-[12px] font-normal">
                                  €{category?.revenue}
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
