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
import CongratulationModal from "./CongratulationModal";
import { Badge } from "@/registry/new-york/ui/badge";
import { Switch } from "@/registry/default/ui/switch";
import { TableCommon } from "./TableCommon";
import { derivativeTracks } from "@/app/data/data";
import { DerivativeColumn } from "./DerivativeColumn";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import useContractBuilder from "@/hooks/useContractBuilder";
import { CardsActivityGoal } from "../activity-goal";

const DerivativeUse = ({
  handleNextStep,
  handleBackStep,
  contractCreation,
  setContractCreation,
}: any) => {
  const [modalOpen, setModalOpen] = useState(false);

  const onCheckHandle = (value: string, e: any) => {
    setContractCreation((prev: any) => {
      const updateDerivativeUses = prev?.derivativeUses?.map(
        (derivativeUse: any) => {
          if (derivativeUse?.value === value) {
            return { ...derivativeUse, isOpen: e };
          }
          return derivativeUse
        });
      return { ...prev, derivativeUses: updateDerivativeUses };
    });
  };

  const handleClickNext = () => {
    toast("Derivative used successfully", {
      description: "Derivative",
      action: {
        label: "X",
        onClick: () => { },
      },
      position: "top-right",
    });
    handleNextStep(1);
  };

  const handleUpdateGoal = (card: any, member: any, value: number) => {
    setContractCreation((prev: any) => {
      const updatedDerivativeUses = prev?.derivativeUses?.map(
        (derivativeUse: any) => {
          if (derivativeUse?.id === card?.id) {
            const updatedCategories = (derivativeUse?.categories)?.map((cat: any) => {
              if (cat?.id === member?.id) {
                return { ...cat, revenue: value };
              }
              return cat;
            });
            return { ...derivativeUse, categories: updatedCategories }
          }
          return derivativeUse;
        }
      );
      return { ...prev, derivativeUses: updatedDerivativeUses };
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
                    {contractCreation?.derivativeUses?.map((card: any) => (
                      <Card
                        key={card.id}
                        className="border-none bg-modal-foreground mb-8 rounded-3xl	"
                      >
                        <CardHeader className="py-5 pb-0">
                          <CardTitle className="text-[17px] font-normal flex justify-between">
                            <div>
                              <h6>{card.title}</h6>
                              <Badge className="bg-[#0F233D] hover:bg-[#0F233D] text-[11px] py-0 px-1 text-[#4FABFE] rounded-3xl">
                                Derivative
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
                            Lorem
                          </p>
                          {card?.isOpen && (
                            <div className="space-y-8 mt-10">
                              <div className="pl-4 w-3/4">
                                {card?.categories?.map(
                                  (member: any, index: number) => (
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
                                          initialValue={member?.revenue}
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
                <CardTitle>Derivative use</CardTitle>
                <CardDescription>
                  Abatements rates for foreign markets, compilation and
                  Promotion
                </CardDescription>
              </CardHeader>
              <CardContent className="">
                {contractCreation?.derivativeUses?.map((card: any, index: number) => (
                  <Card
                    key={index}
                    className="bg-transparent border-none shadow-none"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-normal">
                        {card.title}
                      </CardTitle>
                      <CardDescription>{card.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-start items-center gap-6 flex-wrap">
                      {card?.categories?.map((category: any, index: number) => (
                        category?.revenue ?
                          <div className="rounded-md bg-modal-foreground px-[10px] py-2 w-[150px] min-h-[90px] space-y-1" key={index}>
                            <p className="text-[12px] font-normal">
                              {category?.title}
                            </p>
                            <p className="text-[#94A3B8] text-[9px] font-normal">
                              {category?.desc}
                            </p>
                            <p className="text-mblue text-[12px] font-normal">
                              {category?.revenue}%
                            </p>
                          </div> : ""
                      ))}
                    </CardContent>
                  </Card>
                ))}
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
