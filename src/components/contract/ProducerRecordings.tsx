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
import { ProgramType, ProgramTypes, Recording } from "./types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DatePicker from "@/components/ui/date-picker";
import UploadButton from "@/components/upload-button";
import { MultiSelect } from "@/components/ui/multi-select";

const recordingFormSchema = z.object({
  image: z.string(),
  title: z.string().default(""),
  number: z.string(),
  recordingType: z.string(),
  completedAt: z.date().default(new Date()),
  releasedAt: z.date().default(new Date()),
  optionRightsLimit: z.date().default(new Date()),
  programType: z.array(
    z.object({
      value: z.string(),
    })
  ),
});

type RecordingFormValues = z.infer<typeof recordingFormSchema>;

const defaultValues: Partial<RecordingFormValues> = {};

const ProducerRecordings = () => {
  const [recordings, setRecordings] = useState<Recording[]>([]);

  const [programTypes, setProgramTypes] = useState(ProgramTypes);

  const [files, setFiles] = useState<any[]>([]);

  // ** form
  const form = useForm<RecordingFormValues>({
    resolver: zodResolver(recordingFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const { fields, append } = useFieldArray({
    name: "programType",
    control: form.control,
  });
  // **

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const onSubmit = (data: RecordingFormValues) => {
    console.log(data);
    const _data = {
      ...data,
      programType: programTypes,
    };
    const _recordings = [...recordings];
    setRecordings(_recordings);
    setTimeout(() => {
      form.reset({
        image: "",
        title: "",
        number: "",
        recordingType: "",
      });
    }, 1000);
  };

  // ** Action
  const handleChangeProgramType = (
    selected: boolean,
    programType: ProgramType
  ) => {
    const _programTypes = [...programTypes];
    // const index = programTypes.findIndex((p) => p.label === programType.);
    // _programTypes.splice(index, 1, { ...programType, checked: selected });
    setProgramTypes(_programTypes);
  };

  return (
    <>
      <Card className="border-none">
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
                src={recording.image || ""}
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
              <div className="flex flex-wrap gap-4 items-end">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <UploadButton
                          title="+"
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
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="programType"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <MultiSelect
                          title="Program Type"
                          dataArr={programTypes}
                          handleCheckChanged={(selected, obj) =>
                            handleChangeProgramType(selected, obj)
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="completedAt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Completion date</FormLabel>
                      <FormControl>
                        <DatePicker
                          className="max-w-[170px]"
                          date={field.value}
                          placeholder="Jan 20, 2023"
                          onDateChange={(d) => field.onChange(d || new Date())}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="releasedAt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Completion date</FormLabel>
                      <FormControl>
                        <DatePicker
                          className="max-w-[170px]"
                          placeholder="Jan 20, 2023"
                          date={field.value}
                          onDateChange={(d) => field.onChange(d || new Date())}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="optionRightsLimit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Completion date</FormLabel>
                      <FormControl>
                        <DatePicker
                          className="max-w-[170px]"
                          placeholder="Jan 20, 2023"
                          date={field.value}
                          onDateChange={(d) => field.onChange(d || new Date())}
                        />
                      </FormControl>
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
