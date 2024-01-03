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
  ProgramType,
  Program,
  ProgramTypes,
  Recording,
  StepProps,
} from "./types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { ScrollArea } from "@/registry/new-york/ui/scroll-area";
import ToasterDemo from "./ToasterDemo";
import { cn } from "../drag/utils";
import { Avatar } from "../ui/avatar";
import Image from "next/image";
import ShareCardRight from "./ShareCardRight";
import { TableCommon } from "./TableCommon";
import { recordingTracks, royaltiesTracks } from "@/app/data/data";
import { RecordingsColumn } from "./RecordingsColumn";

const recordingCard = [
  { title: "Quantity", cost: "2" },
  { title: "Completion date", cost: "30%" },
  { title: "Commercial release", cost: "EUR 3000" },
  { title: "Option rights limit", cost: "EUR 3000" },
];

const teamMembers = [
  { id: 1, avatar: '/amandine.svg', name: 'Charly Jones', role: 'Singer', revenue: 15, label: '' },
  { id: 2, avatar: '/orlane.svg', name: 'Orlane Moog', role: 'Musician', revenue: 8, label: 'base rate on sales' },
]

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
      <div className="w-full pb-7 pt-16 bg-modal rounded-s-3xl h-[645px] flex flex-col justify-between">
        <div className="scrollbox overflow-auto px-4 w-full h-full">
          <div className="h-[calc(100%-40px)] px-10">
            <h1 className="text-3xl font-semibold tracking-tight mb-3">
              Now time to allocate <span className="text-[#EE3758]">rates</span>
            </h1>
            <p className="text-sm text-muted-foreground mb-[98px]">
              Enter the appropriate base rate to everyone on the team
            </p>
            {teamMembers.map((member) =>
              <div className="flex items-start justify-between gap-4 pl-4 py-3 rounded-md mb-5 w-[81%] mx-auto bg-modal-foreground">
                <Avatar className="bg-[#A3D3FF] mt-2">
                  <Image
                    src={member.avatar || "https://ui.shadcn.com/avatars/01.png"}
                    width={100}
                    height={100}
                    alt="avatar"
                  />
                </Avatar>
                <div className="pt-3">
                  <p className="text-sm font-medium leading-none">{member.name}</p>
                  <p className="text-sm">{member.role}</p>
                </div>
                <div className="">
                  <CardsActivityGoal
                    label={member.label}
                    initialValue={member.revenue || 30}
                    unit="%"
                    step={10}
                    buttonTitle=""
                    minValue={0}
                    maxValue={100}
                    buttonHidden
                    onClickButton={() => { }}
                    setGoal={() => { }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between w-full mt-8 px-10">
          <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleClickBack}
          >
            <ArrowLeftIcon className="mr-1" />
            Back
          </Button>
          {/* <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleClickNext}
          >
            Next
            <ArrowRightIcon className="ml-1" />
          </Button> */}
          <ToasterDemo toastTitle="Recordings added successfully!" />
        </div>
      </div>
      <div className="relative flex items-end flex-col pb-7 pt-16 bg-modal-foreground rounded-r-3xl h-[645px]">
        <div className="scrollbox overflow-auto px-4 w-full h-full">
          <div className="p-8 rounded-2xl bg-modal border border-muted w-full">
            <h6 className="text-2xl	mb-3">Team & Shares</h6>
            <p className="text-muted-foreground mb-7 text-sm">
              Shares fo artists participating in this contract.
            </p>
            <div className="pl-10">
              <h6 className="text-lg mb-3">Album level base rates</h6>
              <p className="text-muted-foreground mb-7 text-sm">
                Edit the rates on each track for a specific allocation
              </p>
              <div className="pl-4 gap-10">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-start justify-between gap-4 pl-4 pt-1.5 rounded-md mb-5 w-[85%] bg-modal-foreground right-card">
                    <Avatar className="bg-[#A3D3FF] mt-2 h-11 w-11">
                      <Image
                        src={member.avatar || "https://ui.shadcn.com/avatars/01.png"}
                        width={100}
                        height={100}
                        alt="avatar"
                      />
                    </Avatar>
                    <div className="pt-3">
                      <p className="text-sm font-medium leading-none text-[#4EABFE]">
                        {member.name}
                      </p>
                      <p className="text-sm text-[#6DB5F9]">{member.role}</p>
                    </div>
                    <div className="">
                      <CardsActivityGoal
                        label="SHARES OF REVENUES"
                        initialValue={member.revenue || 30}
                        unit="%"
                        step={10}
                        buttonTitle="Set Share"
                        minValue={0}
                        maxValue={100}
                        buttonHidden
                        onClickButton={() => { }}
                        setGoal={() => {}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-modal border border-muted w-full p-4 mt-8">
            <TableCommon data={recordingTracks} columns={RecordingsColumn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recordings;
