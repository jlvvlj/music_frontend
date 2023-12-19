import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CardsActivityGoal } from "@/components/activity-goal";
import { Separator } from "@/components/ui/separator";
import { SingleRate, StepProps, TieredRate } from "./types";


type Tab = "single" | "tiered";

type InputType = Omit<TieredRate, "enabled" | "type">;

const rateFormSchema = z.object({
  from: z.number().default(0),
  to: z.number().default(0),
  percentage: z.number().default(0),
});

type RateFormValues = z.infer<typeof rateFormSchema>;
const defaultValues: Partial<RateFormValues> = {};

const baseRate = {
  from: 0,
  to: 0,
  percentage: 0,
};

const Royalties = ({ updateStep }: StepProps) => {
  const [selectedTab, setSelectedTab] = useState<Tab>("single");
  const [singleRate, setSingleRate] = useState<SingleRate>({
    percentage: 0,
  });
  const [tieredRateInput, setTieredRateInput] = useState<TieredRate>(baseRate);
  const [tieredRates, setTieredRates] = useState<TieredRate[]>([]);

  // ** form
  const form = useForm<RateFormValues>({
    resolver: zodResolver(rateFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // **

  const handleChangeSingleRatePercentage = (value: number) => {
    setSingleRate({
      percentage: value,
    });
  };

  const handleChangeTab = (v: string) => {
    setSelectedTab(v as Tab);
  };

  const onSubmit = (data: RateFormValues) => {
    console.log(data);
    const _tieredRates = [...tieredRates];
    _tieredRates.push(data);
    setTieredRates(_tieredRates);

    setTimeout(() => {
      form.reset(baseRate);
    }, 500);
  };

  const handleClickNext = () => {
    updateStep(1);
  };

  const handleClickBack = () => {
    updateStep(-1);
  };

  const handleClickSkip = () => {
    updateStep(1);
  };

  return (
    <div className="grid grid-cols-2 h-full">
      <div className="flex flex-col gap-4">
        <Card className="border-none flex-1">
          <CardContent className="space-y-6">
            <Tabs
              value={selectedTab}
              className="w-full px-10"
              onValueChange={handleChangeTab}
            >
              <TabsList className="grid w-full grid-cols-2 mb-10">
                <TabsTrigger value="single">Single Rate</TabsTrigger>
                <TabsTrigger value="tiered">Tiered Rate</TabsTrigger>
              </TabsList>
              <TabsContent value="single">
                <div className="grid grid-cols-12 gap-6 mt-10">
                  <div
                    className={cn(
                      "flex items-center pl-4 rounded-md bg-[#131313] col-span-12 xl:col-span-10 2xl:col-span-6 w-full"
                    )}
                  >
                    <div>
                      <p
                        className={cn(
                          "text-sm font-medium leading-none text-[#FAFAFA]"
                        )}
                      >
                        Royalties
                      </p>
                      <p className="text-sm text-[#B9B9BA]">Lorem ipsum</p>
                    </div>
                    <CardsActivityGoal
                      label="SHARES OF REVENUES"
                      initialValue={singleRate.percentage}
                      unit="%"
                      step={10}
                      buttonTitle="Set Share"
                      minValue={0}
                      maxValue={100}
                      buttonHidden
                      onClickButton={() => {}}
                      isOwner={true}
                      setGoal={handleChangeSingleRatePercentage}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="tiered" className="w-fit">
                <div className="col-span-9 space-y-4 mb-5">
                  {tieredRates &&
                    !!tieredRates.length &&
                    tieredRates.map((rate, index) => (
                      <div
                        key={index}
                        className="flex rounded-md bg-[#131313] w-full"
                      >
                        <CardsActivityGoal
                          cardTitle="From"
                          label="copies"
                          initialValue={rate.from}
                          unit="%"
                          step={10}
                          buttonTitle="Set Share"
                          minValue={0}
                          maxValue={100}
                          buttonHidden
                          onClickButton={() => {}}
                          isOwner={true}
                          setGoal={(v) => {}}
                        />
                        <CardsActivityGoal
                          cardTitle="To"
                          label="copies"
                          initialValue={rate.to}
                          unit="%"
                          step={10}
                          buttonTitle="Set Share"
                          minValue={0}
                          maxValue={100}
                          buttonHidden
                          onClickButton={() => {}}
                          isOwner={true}
                          setGoal={(v) => {}}
                        />
                        <CardsActivityGoal
                          cardTitle="&nbsp;"
                          label="SHARES OF REVENUES"
                          initialValue={rate.percentage}
                          unit="%"
                          step={10}
                          buttonTitle="Set Share"
                          minValue={0}
                          maxValue={100}
                          buttonHidden
                          onClickButton={() => {}}
                          isOwner={true}
                          setGoal={(v) => {}}
                        />
                      </div>
                    ))}
                </div>
                <Separator />
                <Form {...form}>
                  <form className="mt-4" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex justify-around rounded-md bg-[#131313]">
                      <FormField
                        control={form.control}
                        name="from"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <CardsActivityGoal
                                label="COPIES"
                                initialValue={field.value}
                                unit=""
                                step={1}
                                buttonTitle="Set Share"
                                minValue={0}
                                maxValue={5000}
                                buttonHidden
                                onClickButton={() => {}}
                                cardTitle="From"
                                isOwner={true}
                                setGoal={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="to"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <CardsActivityGoal
                                label="COPIES"
                                initialValue={field.value}
                                unit=""
                                step={1}
                                buttonTitle="Set Share"
                                minValue={0}
                                maxValue={5000}
                                buttonHidden
                                onClickButton={() => {}}
                                cardTitle="To"
                                isOwner={true}
                                setGoal={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="percentage"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <CardsActivityGoal
                                label="SHARES OF REVENUES"
                                initialValue={field.value}
                                unit="%"
                                step={10}
                                buttonTitle="Set Share"
                                minValue={0}
                                maxValue={100}
                                buttonHidden
                                cardTitle="&nbsp;"
                                onClickButton={() => {}}
                                isOwner={true}
                                setGoal={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex justify-end items-center h-full !mt-7">
                      <button type="submit" className="text-[#2997FF]">
                        + Add a tier
                      </button>
                    </div>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
            {/* <Button className="w-full !mt-20">Next</Button> */}
          </CardContent>
        </Card>
        <div className="flex justify-between w-full">
          <Button className="" variant="outline" onClick={handleClickBack}>
            Back
          </Button>
          <Button className="" variant="outline" onClick={handleClickNext}>
            Next
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Royalties;
