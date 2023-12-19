"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { toast } from "@/components/ui/use-toast";
import UploadFile from "@/components/ui/upload-file";
import { Slider } from "@/components/ui/slider";

const producerFormSchema = z.object({
  companyName: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),

  corporateForm: z.string(),
  nrcs: z.string(),
  city: z.string(),
  shareOfCapital: z.string(),
  headOfficeAddress: z.string(),
  rib: z.string(),
  kbis: z.string(),
});

type ProducerFormValues = z.infer<typeof producerFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProducerFormValues> = {};

const ProducerForm = () => {
  const form = useForm<ProducerFormValues>({
    resolver: zodResolver(producerFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ProducerFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="corporateForm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Corporate form (e.g. SAS, SARL, association)
              </FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full grid grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="nrcs"
            render={({ field }) => (
              <FormItem>
                <FormLabel>N°RCS</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shareOfCapital"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Share of capital</FormLabel>
                <FormControl>
                  <div className="mt-4 flex flex-col items-center">
                    <Input
                      placeholder="%"
                      className="mb-2"
                      {...field}
                    />
                    <Slider />
                  </div>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="headOfficeAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Head office address</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full grid grid-cols-2 gap-10">
          <FormField
            control={form.control}
            name="rib"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload your RIB</FormLabel>
                <FormControl>
                  <UploadFile input="" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kbis"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload your Kbis or SIRENE </FormLabel>
                <FormControl>
                  <UploadFile input="" />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default ProducerForm;
