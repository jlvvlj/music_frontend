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
import { ProgramType, ProgramTypes, Recording } from "./types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DatePicker from "@/components/ui/date-picker";
import UploadButton from "@/components/ui/upload-button";
import { MultiSelect } from "@/components/ui/multi-select";
import { cn } from "@/lib/utils";
import { CardsActivityGoal } from "@/components/ui/activity-goal";

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

const Recordings = () => {
  const [recordings, setRecordings] = useState<Recording[]>([
    {
      image:
        "https://www.billboard.com/wp-content/uploads/2022/06/beyonce-Lemonade-album-art-billboard-1240.jpg?w=1024",
      title: "Fire Emblem",
      number: "12",
      recordingType: "Optional",
      programType: ["Firm"],
      completedAt: new Date("01/22/2023"),
      releasedAt: new Date("01/22/2023"),
      optionRightsLimit: new Date("01/22/2023"),
    },
  ]);

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
    _recordings.push(_data);
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
    const index = programTypes.findIndex((p) => p.label === programType.label);
    _programTypes.splice(index, 1, { ...programType, checked: selected });
    setProgramTypes(_programTypes);
  };

  return (
    <>
      <Card className="border-none">
        <CardContent className="space-y-6">
          <Tabs defaultValue="firm" className={cn("w-full px-10 flex-1")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="firm">Firm</TabsTrigger>
              <TabsTrigger value="optional">Optional</TabsTrigger>
            </TabsList>
            <TabsContent value="firm" className="mt-10">
              <RadioGroup
                defaultValue="album"
                className="grid grid-cols-3 gap-4"
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
                <Label
                  htmlFor="mini-album"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem
                    value="mini-album"
                    id="mini-album"
                    className="sr-only"
                  />
                  <Icons.card className="mb-3 h-6 w-6" />
                  Mini-Albums
                </Label>
                <Label
                  htmlFor="maxi-single"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem
                    value="maxi-single"
                    id="maxi-single"
                    className="sr-only"
                  />
                  <Icons.card className="mb-3 h-6 w-6" />
                  Maxi-Single
                </Label>
                <Label
                  htmlFor="other"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem
                    value="other"
                    id="other"
                    className="sr-only"
                  />
                  <Icons.card className="mb-3 h-6 w-6" />
                  Other
                </Label>
              </RadioGroup>
            </TabsContent>
            <TabsContent value="optional" className="mt-10">
              <RadioGroup
                defaultValue="album"
                className="grid grid-cols-3 gap-4"
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
                <Label
                  htmlFor="mini-album"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem
                    value="mini-album"
                    id="mini-album"
                    className="sr-only"
                  />
                  <Icons.card className="mb-3 h-6 w-6" />
                  Mini-Albums
                </Label>
                <Label
                  htmlFor="maxi-single"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem
                    value="maxi-single"
                    id="maxi-single"
                    className="sr-only"
                  />
                  <Icons.card className="mb-3 h-6 w-6" />
                  Maxi-Single
                </Label>
                <Label
                  htmlFor="other"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem
                    value="other"
                    id="other"
                    className="sr-only"
                  />
                  <Icons.card className="mb-3 h-6 w-6" />
                  Other
                </Label>
              </RadioGroup>
            </TabsContent>
          </Tabs>
          <Form {...form}>
            <form className="" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-4 items-end w-fit mx-auto">
                {/* <FormField
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
                /> */}

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
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {/* <FormField
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
                /> */}
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
    </>
  );
};

export default Recordings;
