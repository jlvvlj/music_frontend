import React, { useEffect, useState } from "react";
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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CardsActivityGoal } from "@/components/activity-goal";
import { SingleRate, StepProps, TieredRate } from "./types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import ToasterDemo from "./ToasterDemo";

type Tab = {
  label: string;
  value: string;
};

const TABS: Tab[] = [
  {
    label: "Single Rate",
    value: "single",
  },
  {
    label: "Tiered Rate",
    value: "tiered",
  },
];

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
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [tab, setTab] = useState(TABS[0].value);
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

  useEffect(() => {
    if (currentTabIndex >= TABS.length) {
      updateStep(1);
    } else {
      setTab(TABS[currentTabIndex].value);
    }
  }, [currentTabIndex]);

  const handleChangeSingleRatePercentage = (value: number) => {
    setSingleRate({
      percentage: value,
    });
  };

  const handleClickNextTab = () => {
    setCurrentTabIndex(currentTabIndex + 1);
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
    setCurrentTabIndex(currentTabIndex + 1);
  };

  const handleClickBack = () => {
    updateStep(-1);
  };

  const onTabChange = (value: string) => {
    setTab(value as string);
  };

  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="w-full pb-7 pt-16 bg-modal rounded-s-3xl h-[645px] flex flex-col justify-between">
        <div className="scrollbox overflow-auto w-full h-full">
          <div className="h-[calc(100%-40px)] px-10">
            <h1 className="text-3xl font-semibold tracking-tight mb-3">
              Royalties
            </h1>
            <p className="text-sm text-muted-foreground mb-14">
              Enter the contract royalties details
            </p>
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="space-y-6 p-0">
                <Tabs
                  value={tab}
                  className="w-full"
                  onValueChange={onTabChange}
                >
                  <TabsList className="grid w-full grid-cols-2 mb-10 mx-auto max-w-[70%]">
                    {TABS.map((t, index) => (
                      <TabsTrigger key={index} value={t.value}>
                        {t.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {TABS.map((t, index) => {
                    return (
                      <TabsContent key={index} value={t.value} className="mt-10">
                        {index === 0 && (
                          <div
                            className={cn(
                              "flex items-center justify-between pl-4 rounded-md bg-modal-foreground col-span-12 xl:col-span-10 2xl:col-span-6 w-full"
                            )}
                          >
                            <div>
                              <p
                                className={cn(
                                  "text-sm font-medium leading-none text-[#5D9DF1]"
                                )}
                              >
                                Royalties
                              </p>
                              <p className="text-sm text-[#5D9DF1]">
                                Lorem ipsum
                              </p>
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
                              onClickButton={() => { }}
                              isOwner={true}
                              setGoal={handleChangeSingleRatePercentage}
                            />
                          </div>
                        )}
                        {index === 1 && (
                          <div className="col-span-9 space-y-4 mb-5">
                            {tieredRates &&
                              !!tieredRates.length &&
                              tieredRates.map((rate, index) => (
                                <div
                                  key={index}
                                  className="flex justify-around rounded-md bg-modal-foreground w-full"
                                >
                                  <CardsActivityGoal
                                    cardTitle="From"
                                    label="copies"
                                    initialValue={rate.from}
                                    unit=""
                                    step={10}
                                    buttonTitle="Set Share"
                                    minValue={0}
                                    maxValue={100}
                                    buttonHidden
                                    onClickButton={() => { }}
                                    isOwner={true}
                                    setGoal={(v) => { }}
                                  />
                                  <CardsActivityGoal
                                    cardTitle="To"
                                    label="copies"
                                    initialValue={rate.to}
                                    unit=""
                                    step={10}
                                    buttonTitle="Set Share"
                                    minValue={0}
                                    maxValue={100}
                                    buttonHidden
                                    onClickButton={() => { }}
                                    isOwner={true}
                                    setGoal={(v) => { }}
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
                                    onClickButton={() => { }}
                                    isOwner={true}
                                    setGoal={(v) => { }}
                                  />
                                </div>
                              ))}
                            <Form {...form}>
                              <form
                                className="mt-4"
                                onSubmit={form.handleSubmit(onSubmit)}
                              >
                                <div className="flex justify-around rounded-md bg-modal-foreground">
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
                                            onClickButton={() => { }}
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
                                            onClickButton={() => { }}
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
                                            onClickButton={() => { }}
                                            isOwner={true}
                                            setGoal={field.onChange}
                                          />
                                        </FormControl>
                                      </FormItem>
                                    )}
                                  />
                                </div>
                                <div className="flex justify-end items-center h-full !mt-7">
                                  <button
                                    type="submit"
                                    className="text-[#2997FF]"
                                  >
                                    + Add a tier
                                  </button>
                                </div>
                              </form>
                            </Form>
                          </div>
                        )}
                      </TabsContent>
                    );
                  })}
                </Tabs>
                {/* <Button className="w-full !mt-20">Next</Button> */}
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
              className="bg-transparent"
              variant="outline"
              onClick={handleClickNextTab}
            >
              Skip
            </Button>
            <ToasterDemo toastTitle="Royalties selected successfully!" updateStep={updateStep}/>
          </div>
        </div>
      </div>
      <div className="relative flex items-end flex-col pb-7 pt-16 bg-modal-foreground rounded-r-3xl h-[645px]">
        <div className="scrollbox overflow-auto px-4 w-full h-full">
          <div className="p-8 rounded-2xl bg-modal border border-muted w-full">
            <h6 className="text-2xl	mb-3">Royalties</h6>
            <p className="text-muted-foreground mb-7 text-sm">Lorem Ipsum</p>
            <div className="pl-10">
              <div className="mb-14">
                <h6 className="text-lg mb-2.5">Single Rate Royalties</h6>
                <p className="text-muted-foreground mb-5 text-sm">Lorem ipsum</p>
                <div className="pl-4 flex flex-wrap gap-[18px]">
                  <Card className="bg-modal-foreground border-[#1D1D1F] pt-2 pl-2.5 pr-6 pb-4 w-[132px]">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
                      <CardTitle className="text-xs font-normal pb-5">
                        Royalties
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="text-xs font-normal text-[#4EABFE]">50%</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Royalties;
