"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
// ** Form
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

// ** Component
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { STEPS, StepIndex } from "./types";

const baseFormSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  name: z.string(),
  month: z.string(),
  year: z.string(),
});

type BaseFormValues = z.infer<typeof baseFormSchema>;
const defaultValues: Partial<BaseFormValues> = {};

const ContractBaseForm = ({
  step = 0,
  updateStep,
  children,
}: {
  step: number;
  updateStep: VoidFunction;
  children: React.ReactNode;
}) => {
  // ** form
  const form = useForm<BaseFormValues>({
    resolver: zodResolver(baseFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = (data: BaseFormValues) => {
    console.log(data);
  };

  const isLeftside = () => {
    return true;
    // switch (step) {
    //   case StepIndex.CONTRIBUTORS:
    //     return true;
    //   case StepIndex.SHARES:
    //     return true;
    //   case StepIndex.ROYALTIES:
    //     return true;
    //   case StepIndex.RECORDINGS:
    //     return true;
    //   case StepIndex.BUDGET:
    //     return true;
    //   default:
    //     return false;
    // }
  };

  return (
    <div className={cn("grid grid-cols-2 mt-20 h-full")}>
      <div
        className={cn(
          "col-span-1 px-12 2xl:px-24 pt-4 pb-12 flex flex-col h-full",
          !isLeftside() ? "order-last" : ""
        )}
      >
        <div
          className={cn(
            "flex flex-col space-y-6 w-full mb-14",
            isLeftside() ? "" : "hidden"
          )}
        >
          <h1 className="text-3xl font-semibold tracking-tight">
            {STEPS[step - 1].title}
          </h1>
          <p className="text-sm text-muted-foreground">
            {STEPS[step - 1].description}
          </p>
        </div>
        <div className={cn("flex-1", !isLeftside() ? "pt-20" : "")}>
          {children}
        </div>
        <div className="w-full flex justify-center">
          <Button
            className="bg-[#3B82F6] px-24 text-white !mb-5"
            onClick={updateStep}
          >
            Next
          </Button>
        </div>
      </div>
      <div className="col-span-1 px-12 2xl:px-24 pt-4 pb-12 space-y-4 relative flex flex-col h-full">
        <div
          className={cn(
            "flex flex-col space-y-6 w-full mb-14",
            !isLeftside() ? "" : "hidden"
          )}
        >
          <h1 className="text-3xl font-semibold tracking-tight">
            {STEPS[step - 1].title}
          </h1>
          <p className="text-sm text-muted-foreground">
            {STEPS[step - 1].description}
          </p>
        </div>

        {/* <Tabs
          defaultValue="option1"
          className={cn("w-full px-10 flex-1", isLeftside() ? "pt-20" : "")}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="option1">Option1</TabsTrigger>
            <TabsTrigger value="option2">Option2</TabsTrigger>
          </TabsList>
          <TabsContent value="option1" className="mt-10">
            <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
              <Label
                htmlFor="card"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem value="card" id="card" className="sr-only" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="mb-3 h-6 w-6"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
                Card
              </Label>
              <Label
                htmlFor="paypal"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem
                  value="paypal"
                  id="paypal"
                  className="sr-only"
                />
                <Icons.paypal className="mb-3 h-6 w-6" />
                Paypal
              </Label>
              <Label
                htmlFor="apple"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem value="apple" id="apple" className="sr-only" />
                <Icons.apple className="mb-3 h-6 w-6" />
                Apple
              </Label>
            </RadioGroup>
          </TabsContent>
          <TabsContent value="option2" className="mt-10">
            <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
              <Label
                htmlFor="card"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem value="card" id="card" className="sr-only" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="mb-3 h-6 w-6"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
                Card
              </Label>
              <Label
                htmlFor="paypal"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem
                  value="paypal"
                  id="paypal"
                  className="sr-only"
                />
                <Icons.paypal className="mb-3 h-6 w-6" />
                Paypal
              </Label>
              <Label
                htmlFor="apple"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem value="apple" id="apple" className="sr-only" />
                <Icons.apple className="mb-3 h-6 w-6" />
                Apple
              </Label>
            </RadioGroup>
          </TabsContent>
        </Tabs> */}
        <div className="w-full flex justify-center !mb-5">
          <Button className="bg-[#3B82F6] px-24 text-white hidden">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default ContractBaseForm;
