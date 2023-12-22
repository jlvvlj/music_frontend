import React, { useState, useEffect } from "react";
// ** Next
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
// ** Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ProgramTypes,
  Recording,
  StepProps,
} from "./types";
import { Button } from "@/components/ui/button";
import DatePicker from "@/components/ui/date-picker";
import { CardsActivityGoal } from "@/components/activity-goal";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/registry/new-york/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover";

const recordingCard = [
  { title: "Quantity", cost: "2" },
  { title: "Completion date", cost: "30%" },
  { title: "Commercial release", cost: "EUR 3000" },
  { title: "Option rights limit", cost: "EUR 3000" },
];

const recordingFormSchema = z.object({
  number: z.number().default(10),
  programType: z.enum(["album", "single"], {
    required_error: "Select program type",
  }),
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

type Tab = "firm" | "optional";
const TABS: {
  label: string;
  value: Tab;
}[] = [
    {
      label: "Firm",
      value: "firm",
    },
    {
      label: "Optional",
      value: "optional",
    },
  ];

const Recordings = ({ updateStep }: StepProps) => {
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [files, setFiles] = useState<any[]>([]);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [tab, setTab] = useState(TABS[0].value);

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

  useEffect(() => {
    if (currentTabIndex === TABS.length) {
      updateStep(1);
    } else {
      setTab(TABS[currentTabIndex].value);
    }
  }, [currentTabIndex]);

  const onSubmit = (data: RecordingFormValues) => {
    console.log(data);

    const recording = {
      ...data,
      recordingType: tab,
    };

    const _recordings = [...recordings];
    _recordings.push(recording);
    setRecordings(_recordings);
    setTimeout(() => {
      form.reset({
        number: 0,
      });
    }, 1000);
  };
  const onTabChange = (value: string) => {
    setTab(value as Tab);
  };

  const handleClickNext = () => {
    setCurrentTabIndex(currentTabIndex + 1);
  };

  const handleClickBack = () => {
    updateStep(-1);
  };

  const handleClickSkip = () => {
    updateStep(1);
  };

  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="w-full px-10 pb-7 pt-16 bg-modal rounded-s-3xl h-full flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-3">
            Now some recordings
          </h1>
          <p className="text-sm text-muted-foreground mb-14">
            Enter firm and optional recordings details.
          </p>
          <Card className="border-none bg-transparent shadow-none">
            <Tabs className="w-full" value={tab} onValueChange={onTabChange}>
              <TabsList className="grid w-full grid-cols-2 mb-11 mx-auto max-w-[70%]">
                <TabsTrigger value="firm">Firm</TabsTrigger>
                <TabsTrigger value="optional">Optional</TabsTrigger>
              </TabsList>

              <TabsContent value={tab} className="mt-10">
                <CardContent className="space-y-10 p-0">
                  <Form {...form}>
                    <form
                      className="space-y-10"
                      onSubmit={form.handleSubmit(onSubmit)}
                    >
                      <div className="grid grid-cols-2 gap-4 items-end w-fit mx-auto mt-4">
                        <FormField
                          control={form.control}
                          name="number"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <CardsActivityGoal
                                  label="ReCordings"
                                  initialValue={field.value}
                                  unit=""
                                  step={1}
                                  buttonTitle="Set Share"
                                  minValue={0}
                                  maxValue={100}
                                  buttonHidden
                                  chartHidden
                                  onClickButton={() => {}}
                                  isOwner={false}
                                  setGoal={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="programType"
                          render={({ field }) => (
                            <FormItem>
                              <Select
                                onValueChange={(v) =>
                                  field.onChange(v as ProgramType)
                                }
                                value={field.value}
                              >
                                <FormControl className="bg-modal-foreground">
                                  <SelectTrigger className="text-[#6d7d93] font-semibold">
                                    <SelectValue
                                      className=""
                                      placeholder="Type"
                                    />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-modal-foreground">
                                  <SelectItem
                                    value="album"
                                    className="focus:bg-mblue"
                                  >
                                    <p>Albums ( LPs )</p>
                                  </SelectItem>
                                  <SelectItem
                                    value="single"
                                    className="focus:bg-mblue"
                                  >
                                    <p>Singles ( SPs )</p>
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-2 items-end mt-4">
                        <FormField
                          control={form.control}
                          name="completedAt"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[11px]">
                                Completion date
                              </FormLabel>
                              <FormControl>
                                <DatePicker
                                  className="max-w-[170px]"
                                  buttonClassName="w-[140px] text-[11px] bg-modal-foreground"
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
                              <FormLabel className="text-[11px]">
                                Commercial release
                              </FormLabel>
                              <FormControl>
                                <DatePicker
                                  className="max-w-[170px]"
                                  buttonClassName="w-[140px] text-[11px] bg-modal-foreground"
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
                              <FormLabel className="text-[11px]">
                                Option rights limit
                              </FormLabel>
                              <FormControl>
                                <DatePicker
                                  className="max-w-[170px]"
                                  buttonClassName="w-[140px] text-[11px] bg-modal-foreground"
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
                        <Button
                          type="submit"
                          variant="outline"
                          className="px-8 bg-modal-foreground"
                        >
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
          <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleClickBack}
          >
            <ArrowLeftIcon className="mr-1" />
            Back
          </Button>
          <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleClickNext}
          >
            Next
            <ArrowRightIcon className="ml-1" />
          </Button>
        </div>
      </div>
      <div className="relative flex items-end px-4 flex-col py-7 bg-modal-foreground rounded-r-3xl">
        <div className="p-8 rounded-2xl bg-modal border border-muted w-full">
          <h6 className="text-2xl	mb-3">Recordings</h6>
          <p className="text-muted-foreground mb-7 text-sm">
            Artists participating in this contract.
          </p>
          <div className="pl-10">
            <div className="mb-14">
              <h6 className="text-lg mb-2.5">Albums ( LPs ) - Firm</h6>
              <p className="text-muted-foreground mb-5 text-sm">
                Artists participating in this contract.
              </p>
              <div className="pl-4 flex flex-wrap gap-[18px]">
                {recordingCard.map((card, index) => (
                  <Card
                    key={index}
                    className="bg-modal-foreground border-[#1D1D1F] pt-2 pl-2.5 pr-6 pb-4 w-[132px]"
                  >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
                      <CardTitle className="text-xs font-normal pb-5">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="text-xs font-normal text-[#4EABFE]">
                        {card.cost}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="mb-14">
              <h6 className="text-lg mb-2.5">Singles ( LPs ) - Firm</h6>
              <p className="text-muted-foreground mb-5 text-sm">
                Artists participating in this contract.
              </p>
              <div className="pl-4 flex flex-wrap gap-[18px]">
                {recordingCard.map((card, index) => (
                  <Card
                    key={index}
                    className="bg-modal-foreground border-[#1D1D1F] pt-2 pl-2.5 pr-6 pb-4 w-[132px]"
                  >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
                      <CardTitle className="text-xs font-normal pb-5">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="text-xs font-normal text-[#4EABFE]">
                        {card.cost}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recordings;
