"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "../../components/ui/button";
import UploadFile from "@/components/ui/upload-file";
import { Slider } from "@/components/ui/slider";
import { Icons } from "@/components/icons";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "../../components/ui/textarea";
import { toast } from "../../components/ui/use-toast";
import UploadComponent from "@/components/drag/UploadDragDrop";

const profileFormSchema = z.object({
  companyName: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  postalCode: z.string(),
  corporateForm: z.string(),
  nrcs: z.string(),
  city: z.string(),
  shareOfCapital: z.string(),
  headOfficeAddress: z.string(),
  rib: z.string(),
  kbis: z.string(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {};

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
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
        <div>
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your company" {...field} />
                </FormControl>
                <FormDescription>
                  Please enter the same name as in your company incorporation
                  documents.
                </FormDescription>
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
          <div className="w-full grid grid-cols-4 gap-6">
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
              name="shareOfCapital"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Share of capital</FormLabel>
                  <FormControl>
                    <div className="mt-4 flex flex-col items-center">
                      <Input placeholder="%" className="mb-2" {...field} />
                      <Slider />
                    </div>
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
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Post Code</FormLabel>
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
          <Card className="mt-5">
            <CardHeader className="flex flex-row items-center p-3 pl-5 gap-5 border-b">
              <div>
                <Icons.upload />
              </div>
              <div>
                <CardTitle className="text-base">
                  Upload your documents
                </CardTitle>
                <CardDescription>
                  Drag and drop your RIB and Kbis or Sirene.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-2 pt-5">
              <FormField
                control={form.control}
                name="rib"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <UploadComponent inputTitle="Select RIB" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="kbis"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <UploadComponent inputTitle="Select KBIS" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <div className="w-full grid-cols-2 gap-10 hidden">
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
        </div>
        <div className="w-full flex justify-end">
          <Button type="submit">Save Settings</Button>
        </div>
      </form>
    </Form>
  );
}
