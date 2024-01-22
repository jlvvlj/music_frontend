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
import CategoryCard from "./CategoryCard";
import { ES, FR, GB } from "country-flag-icons/react/3x2";

const COUNTRIES = [
  {
    label: "France",
    value: "france",
    code: <FR title="France" className="w-3 h-4" />
  },
  {
    label: "Spain",
    value: "spain",
    code: <ES title="Spain" className="w-3 h-4" />
  },
  {
    label: "England",
    value: "england",
    code: <GB title="England" className="w-3 h-4" />
  },
];

const Abatements = ({
  handleNextStep,
  handleBackStep,
  contractCreation,
  setContractCreation,
}: any) => {

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

  const handleUpdateGoal = (card:any,member: TeamMember, value: number) => {
    setContractCreation((prev: any) => {
      const updatedAbatements = prev?.abatements?.map(  
        (abatement: any) => {
          if(abatement?.id === card?.id){
            const updatedSubOptions = (abatement?.categories)?.map((cat: any) => {
              if (cat?.id === member?.id) {
                return { ...cat, revenue: value };
              }
              return cat;
            });
            return { ...abatement, categories: updatedSubOptions }
          }
          return abatement;
        }
      );
      console.log("updatedAbatementsupdatedAbatementsupdatedAbatements",updatedAbatements)
      return { ...prev, abatements: updatedAbatements };
    });
  };

  const onCheckHandle = (value: string, e: any) => {
    setContractCreation((prev: any) => {
      const updateSubOptions = prev?.abatements?.map(
        (subOption: any) => {
          if (subOption.value === value) {
            return { ...subOption, isOpen: e };
          }
          return subOption
        });
      return { ...prev, abatements: updateSubOptions };
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
                  {contractCreation?.abatements?.map((card: any, index:number) => (
                    <Card
                      key={index}
                      className="border-none bg-modal-foreground mb-8 rounded-3xl	"
                    >
                      <CardHeader className="py-5 pb-0">
                        <CardTitle className="text-[17px] font-normal flex justify-between">
                          <div>
                            <h6>{card?.title}</h6>
                            <Badge className="bg-[#0F233D] hover:bg-[#0F233D] text-[11px] py-0 px-1 text-[#4FABFE] rounded-3xl">
                              Abatements
                            </Badge>
                          </div>
                          <Switch
                            className="mt-2.5"
                            checked={card?.isOpen}
                            onCheckedChange={(e) => onCheckHandle(card.value,e)}
                          />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-8">
                        <p className="text-sm	mt-2.5 text-muted-foreground">
                          An abatement for foreign sales will be applied
                        </p>
                        {card?.isOpen && (
                          <div className="mt-10 flex gap-4 items-start">
                          <div className="pl-4 w-[68%]">
                            {card?.categories?.map((activity: any, index: number) => (
                              <CategoryCard
                                key={index}
                                card={activity}
                                step={0}
                                buttonTitle={activity?.rate ? "Set Rate" : ""}
                                unit={"%"}
                                updateGoal={(v) => handleUpdateGoal(card, activity, v)}
                                avatar={false}
                                bgcolor="bg-modal"
                              />
                            ))}
                          </div>
                          <div
                            className={cn(card.id === 1 ? "" : "hidden")}
                          >
                            <CountryMultiSelect
                              frameworks={COUNTRIES}
                              placeholder="Countries"
                            />
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
              {contractCreation?.abatements?.map((card:any) => (
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
                    {card?.categories?.map((category:any, index:number) => (
                      <div className="rounded-md bg-modal-foreground px-[10px] py-2 w-[150px] min-h-[90px] space-y-1" key={index}>
                        <p className="text-[12px] font-normal">
                          {category?.title}
                        </p>
                        <p className="text-[#94A3B8] text-[9px] font-normal">
                          Lorem Ipsum
                        </p>
                        <p className="text-mblue text-[12px] font-normal">
                          {category?.revenue || 0}%
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
