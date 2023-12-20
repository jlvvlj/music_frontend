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
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"

const recordingCard = [
  { title: 'Quantity', cost: '2' },
  { title: 'Completion date', cost: '30%' },
  { title: 'Commercial release', cost: 'EUR 3000' },
  { title: 'Option rights limit', cost: 'EUR 3000' },
]

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
      <div className="w-full px-10 py-7 bg-modal rounded-s-3xl h-full flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-3">
            Now some recordings
          </h1>
          <p className="text-sm text-muted-foreground mb-14">
            Enter firm and optional recordings details.
          </p>
          <Card className="border-none bg-transparent shadow-none">
            <Tabs defaultValue="Firm" className="w-full px-10">
              <TabsList className="grid w-full grid-cols-2 mb-11 mx-auto max-w-[70%]">
                <TabsTrigger value="Firm">Firm</TabsTrigger>
                <TabsTrigger value="Optional">Optional</TabsTrigger>
              </TabsList>
              <TabsContent value="Firm" className="mt-10">
                <CardContent className="space-y-10">
                  <Form {...form}>
                    <form
                      className="space-y-10"
                      onSubmit={form.handleSubmit(onSubmit)}
                    >
                      {/* <FormField
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
                      /> */}
                      {/* <FormField
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
                      /> */}

                      <div className="grid grid-cols-2 gap-4 items-end w-fit mx-auto mt-4">
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
                                  onClickButton={() => { }}
                                  isOwner={false}
                                  setGoal={(value) => { }}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="justify-between bg-modal-foreground w-full">
                              Type
                              <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="p-0 w-[180px]" align="end">
                            <Command>
                              <CommandList>
                                <CommandGroup className="p-1.5 bg-modal-foreground">
                                  <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2 aria-selected:bg-modal">
                                    <p>Albums ( LPs )</p>
                                    <p className="text-sm text-muted-foreground">
                                      Lorem ipsum
                                    </p>
                                  </CommandItem>
                                  <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2 aria-selected:bg-modal">
                                    <p>Singles ( SPs )</p>
                                    <p className="text-sm text-muted-foreground">
                                      Lorem ipsum
                                    </p>
                                  </CommandItem>
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="grid grid-cols-3 gap-4 items-end w-fit mx-auto mt-4">
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
                              <FormLabel>Commercial release</FormLabel>
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
                              <FormLabel>Option rights limit</FormLabel>
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
                      <div className="w-full flex justify-center items-center pt-2.5">
                        <Button type="submit" variant="outline" className="px-8 bg-modal-foreground">
                          Add recording
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
        <div className="flex justify-between w-full mt-8">
          <Button className="bg-[#5D9DF1]" variant="outline" onClick={handleClickBack}>
            <ArrowLeftIcon className="mr-1" />
            Back
          </Button>
          <Button className="bg-[#5D9DF1]" variant="outline" onClick={handleClickNext}>
            Next
            <ArrowRightIcon className="ml-1" />
          </Button>
        </div>
      </div>
      <div className="relative flex items-end px-4 flex-col py-7 bg-modal-foreground rounded-r-3xl">
        <div className="p-8 rounded-2xl bg-modal border border-muted w-full">
          <h6 className="text-2xl	mb-3">Recordings</h6>
          <p className="text-[#94A3B8] mb-7 text-sm">Artists participating in this contract.</p>
          <div className="pl-10">
            <div className="mb-14">
              <h6 className="text-lg mb-2.5">Albums ( LPs ) - Firm</h6>
              <p className="text-[#94A3B8] mb-5 text-sm">Artists participating in this contract.</p>
              <div className="pl-4 flex gap-10 flex flex-wrap gap-[18px]">
                {recordingCard.map((card, index) =>
                  <Card key={index} className="bg-modal-foreground border-[#1D1D1F] pt-2 pl-2.5 pr-6 pb-4 w-[132px]">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
                      <CardTitle className="text-xs font-medium pb-5">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="text-xs font-bold text-[#4EABFE]">{card.cost}</div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
            <div className="mb-14">
              <h6 className="text-lg mb-2.5">Singles ( LPs ) - Firm</h6>
              <p className="text-[#94A3B8] mb-5 text-sm">Artists participating in this contract.</p>
              <div className="pl-4 flex gap-10 flex flex-wrap gap-[18px]">
                {recordingCard.map((card, index) =>
                  <Card key={index} className="bg-modal-foreground border-[#1D1D1F] pt-2 pl-2.5 pr-6 pb-4 w-[132px]">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
                      <CardTitle className="text-xs font-medium pb-5">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="text-xs font-bold text-[#4EABFE]">{card.cost}</div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recordings;
