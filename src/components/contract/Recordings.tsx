import React, { useState, useEffect } from "react";
// ** Next
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
// ** Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
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
import { ProgramType, Program, ProgramTypes, Recording, StepProps } from "./types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DatePicker from "@/components/ui/date-picker";
import UploadButton from "@/components/upload-button";
import { MultiSelect } from "@/components/ui/multi-select";
import { cn } from "@/lib/utils";
import { CardsActivityGoal } from "@/components/activity-goal";
import RadioTab from "@/components/contract/RadioTab";

const recordingFormSchema = z.object({
  title: z.string().default(""),
  number: z.string().default("10"),
  recordingType: z.enum(["firm", "optional"], {
    required_error: "Select recording type",
  }),
  programType: z.enum([
    "album",
    "single",
    "mini-album",
    "maxi-single",
    "other",
  ]),
  completedAt: z.date().default(new Date()),
  releasedAt: z.date().default(new Date()),
  optionRightsLimit: z.date().default(new Date()),
  // programType: z.array(
  //   z.object({
  //     value: z.string(),
  //   })
  // ),
});

type RecordingFormValues = z.infer<typeof recordingFormSchema>;

const defaultValues: Partial<RecordingFormValues> = {};

const Recordings = ({ updateStep }: StepProps) => {
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [programTypes, setProgramTypes] = useState(ProgramTypes);
  const [files, setFiles] = useState<any[]>([]);

  // ** form
  const form = useForm<RecordingFormValues>({
    resolver: zodResolver(recordingFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // const { fields, append } = useFieldArray({
  //   name: "programType",
  //   control: form.control,
  // });
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
        title: "",
        number: "",
      });
    }, 1000);
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
      <div>
        <Card className="border-none">
          <CardContent className="space-y-10">
            <Form {...form}>
              <form
                className="space-y-10"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="recordingType"
                  render={({ field }) => (
                    <FormControl>
                      <RadioTab
                        defaultValue={field.value || "firm"}
                        handleValueChange={field.onChange}
                      />
                    </FormControl>
                  )}
                />
                <FormField
                  control={form.control}
                  name="programType"
                  render={({ field }) => (
                    <FormControl>
                      <RadioGroup
                        defaultValue={field.value || "album"}
                        onValueChange={(v) => field.onChange(v as ProgramType)}
                        className="flex justify-center items-center gap-4 mt-5"
                      >
                        <Label
                          htmlFor="album"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                        >
                          <RadioGroupItem
                            value="album"
                            id="album"
                            className="sr-only"
                          />
                          <Icons.card className="mb-3 h-6 w-6" />
                          Albums
                        </Label>
                        <Label
                          htmlFor="single"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                        >
                          <RadioGroupItem
                            value="single"
                            id="single"
                            className="sr-only"
                          />
                          <Icons.card className="mb-3 h-6 w-6" />
                          Singles
                        </Label>
                      </RadioGroup>
                    </FormControl>
                  )}
                />

                <div className="grid grid-cols-2 gap-4 items-end w-fit mx-auto mt-4">
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
                          <CardsActivityGoal
                            label="ReCordings"
                            initialValue={50}
                            unit=""
                            step={10}
                            buttonTitle="Set Share"
                            minValue={0}
                            maxValue={100}
                            buttonHidden
                            chartHidden
                            onClickButton={() => {}}
                            isOwner={false}
                            setGoal={(value) => {}}
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
                            onDateChange={(d) =>
                              field.onChange(d || new Date())
                            }
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
                            onDateChange={(d) =>
                              field.onChange(d || new Date())
                            }
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
                            onDateChange={(d) =>
                              field.onChange(d || new Date())
                            }
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full flex justify-center items-center pt-8">
                  <Button type="submit" variant="outline" className="px-8">
                    Add recording
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <div className="relative flex items-end px-4">
        <div className="flex justify-between w-full">
          <Button className="" variant="outline" onClick={handleClickBack}>
            Back
          </Button>
          <Button className="" variant="outline" onClick={handleClickNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Recordings;
