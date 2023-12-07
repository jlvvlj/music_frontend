import React, { useState, useEffect } from "react";
// ** Next
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
// ** Components
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
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Recording } from "./types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DatePicker from "@/components/ui/date-picker";
import UploadButton from "@/components/ui/upload-button";

const recordingFormSchema = z.object({
  image: z.string(),
  title: z.string().default(""),
  number: z.string(),
  recordingType: z.string(),
  programType: z.string(),
  completedAt: z.date(),
  releasedAt: z.date(),
  optionRightsLimit: z.date(),
});

type RecordingFormValues = z.infer<typeof recordingFormSchema>;

const defaultValues: Partial<RecordingFormValues> = {};

const ProducerRecordings = () => {
  const [recordings, setRecordings] = useState<Recording[]>([
    {
      image:
        "https://www.billboard.com/wp-content/uploads/2022/06/beyonce-Lemonade-album-art-billboard-1240.jpg?w=1024",
      title: "Fire Emblem",
      number: "12",
      recordingType: "Optional",
      programType: "Firm",
      completedAt: new Date("01/22/2022"),
      releasedAt: new Date("01/22/2022"),
      optionRightsLimit: new Date("01/22/2022"),
    },
  ]);

  const [files, setFiles] = useState<any[]>([]);

  // ** form
  const form = useForm<RecordingFormValues>({
    resolver: zodResolver(recordingFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // **

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const onSubmit = (data: RecordingFormValues) => {
    console.log(data);
    const _recordings = [...recordings];
    _recordings.push(data);
    setRecordings(_recordings);
    setTimeout(() => {
      form.reset({
        image: "",
        title: "",
        number: "",
        recordingType: "",
        programType: "",
      });
    }, 1000);
  };

  return (
    <>
      <Card className="border-none mx-20">
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription>
            Enter the name and details of recording programs below.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {recordings.map((recording, index) => (
            <div key={index} className="grid grid-cols-10">
              <Image
                src={recording.image}
                className="col-span-1"
                width={50}
                height={50}
                alt="track"
              />
              <div className="col-span-3 space-y-3">
                <p className="text-[#F8FAFC] text-sm font-normal">
                  {recording.title}
                </p>
                <p className="text-[#94A3B8] text-sm font-normal">
                  {`${recording.number} Singles (SPs) ${recording.recordingType}`}
                </p>
              </div>
              <div className="col-span-2 space-y-3">
                <p className="text-[#F8FAFC] text-sm font-normal">
                  Completion Date
                </p>
                <p className="text-[#94A3B8] text-sm font-normal">
                  {format(recording.completedAt, "LLL dd, y")}
                </p>
              </div>
              <div className="col-span-2 space-y-3">
                <p className="text-[#F8FAFC] text-sm font-normal">
                  Commercial release
                </p>
                <p className="text-[#94A3B8] text-sm font-normal">
                  {format(recording.releasedAt, "LLL dd, y")}
                </p>
              </div>
              <div className="col-span-2 space-y-3">
                <p className="text-[#F8FAFC] text-sm font-normal">
                  Option rights limit
                </p>
                <p className="text-[#94A3B8] text-sm font-normal">
                  {format(recording.optionRightsLimit, "LLL dd, y")}
                </p>
              </div>
            </div>
          ))}
          {/* Add section */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <UploadButton
                          files={files}
                          setFiles={setFiles}
                          imageUrl={field.value}
                          onImageChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Title"
                          className="max-w-[180px]"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="number"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Rcording Number"
                          className="max-w-[180px]"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="recordingType"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="ml-auto w-[180px]">
                            <SelectValue placeholder="Recording type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="ml-auto w-[250px]">
                          <SelectItem value="firm">Firm</SelectItem>
                          <SelectItem value="optional">Optional</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="programType"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="ml-auto w-[180px]">
                            <SelectValue placeholder="Program type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="ml-auto w-[250px]">
                          <SelectItem value="firm">Firm</SelectItem>
                          <SelectItem value="optional">Optional</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="completedAt"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <DatePicker
                          className="max-w-[170px]"
                          date={field.value}
                          placeholder="Jan 20, 2022"
                          onDateChange={(d) => field.onChange(d || new Date())}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="releasedAt"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <DatePicker
                          className="max-w-[170px]"
                          placeholder="Jan 20, 2022"
                          date={field.value}
                          onDateChange={(d) => field.onChange(d || new Date())}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="optionRightsLimit"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <DatePicker
                          className="max-w-[170px]"
                          placeholder="Jan 20, 2022"
                          date={field.value}
                          onDateChange={(d) => field.onChange(d || new Date())}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="px-8">
                  ADD
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default ProducerRecordings;
