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

const ArtistFormSchema = z.object({
  birthDepartment: z.string(),
  birthCity: z.string(),
  nationality: z.string(),
  corporateForm: z.string(),
  ssn: z.string(), // social security number
  streetAddress: z.string(), // number and street name
  addressCity: z.string(),
  addressDepartment: z.string(),
  postalCode: z.string(),
  rib: z.string(),
  idCard: z.string(),
});

type ArtistFormValues = z.infer<typeof ArtistFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ArtistFormValues> = {};

const ArtistForm = () => {
  const form = useForm<ArtistFormValues>({
    resolver: zodResolver(ArtistFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ArtistFormValues) {
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
        <p>Place of birth</p>
        <div className="w-full grid grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="birthCity"
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
            name="birthDepartment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="nationality"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nationality</FormLabel>
              <FormControl>
                <div className="mt-4 flex flex-col items-center max-w-[160px]">
                  <Input placeholder="" className="mb-2" {...field} />
                </div>
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ssn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Social security number</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <p>Postal address</p>
        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number and Street Name</FormLabel>
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
            name="addressCity"
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
            name="addressDepartment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department</FormLabel>
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
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <div className="mt-4 flex flex-col items-center">
                    <Input placeholder="" className="mb-2" {...field} />
                  </div>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
            name="idCard"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload your ID</FormLabel>
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

export default ArtistForm;
