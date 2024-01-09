import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { toast } from "sonner";
import * as z from "zod";
import {
  ArrowLeftIcon,
  ArrowRightIcon
} from "@radix-ui/react-icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/new-york/ui/table"
import { flexRender, getCoreRowModel, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";

import {
  Recording,
  StepProps,
  TeamMember,
} from "./types";
import { Button } from "@/components/ui/button";
import { CardsActivityGoal } from "@/components/activity-goal";
import { Avatar } from "../ui/avatar";
import { recordingTracks } from "@/app/data/data";
import { RecordingsColumn } from "./RecordingsColumn";
import {
  Popover,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover";
import { Pencil2Icon } from "@radix-ui/react-icons";
import UploadtrackPopover from "./UploadTrackPopover";
import useContractBuilder from "@/hooks/useContractBuilder";
import ShareCard from "./ShareCard";
import { Steps } from "@/contexts/ContractBuilderContext";
import ShareCardRight from "./ShareCardRight";

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
  const [updatedTracks, setUpdatedTracks] = useState(recordingTracks);
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [files, setFiles] = useState<any[]>([]);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [tab, setTab] = useState(TABS[0].value);

  const form = useForm<RecordingFormValues>({
    resolver: zodResolver(recordingFormSchema),
    defaultValues,
    mode: "onChange",
  });

  useEffect(() => {
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

  const handleClickBack = () => {
    updateStep(-1);
  };

  const table = useReactTable<any>({
    data: updatedTracks,
    columns: RecordingsColumn,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  const handleUpdateTrack = (trackId: string, artists: string, title: string) => {
    const updatedData = updatedTracks.map((share: any) =>
      share.id == trackId ? { ...share, title: title, artists: artists } : share
    );
    setUpdatedTracks(updatedData);
  };


  const handleClickNext = () => {
    toast("Rates updated successfully!", {
      description: "Rates",
      action: {
        label: "X",
        onClick: () => { },
      },
      position: "top-right"
    });
    updateStep(1);
  };

  const { members, dispatch } = useContractBuilder();
  const handleUpdateGoal = (member: TeamMember, value: number) => {
    const _members = [...members];
    const newMember = {
      ...member,
      revenue: value,
    };
    const index = _members.findIndex((m) => m.id === member.id);
    const m = _members.splice(index, 1, newMember);

    dispatch({
      type: Steps.SHARES,
      payload: {
        members: _members,
      },
    });
  };


  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="w-full pb-7 pt-[92px] bg-modal rounded-s-3xl h-[782px] flex flex-col justify-between">
        <div className="scrollbox overflow-auto w-full h-full">
          <div className="h-[calc(100%-40px)] px-10">
            <h1 className="text-3xl font-semibold tracking-tight mb-3">
              Now time to allocate rates
            </h1>
            <p className="text-sm text-muted-foreground mb-[98px]">
              Enter the appropriate base rate to everyone on the team
            </p>
            {members.map((member, index) => (
              <ShareCard
                key={index}
                member={member}
                updateGoal={(v) => handleUpdateGoal(member, v)}
                buttonHidden={true}
                avatar={true}
              />
            ))}
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
      <div className="relative flex items-end flex-col pb-7 pt-6 bg-modal-foreground rounded-r-3xl h-[782px]">
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
                {members.map((member, index) => (
                  <ShareCardRight
                    key={index}
                    member={member}
                    updateGoal={(v) => handleUpdateGoal(member, v)}
                    buttonHidden={true}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-modal border border-muted w-full p-4 mt-8">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id} style={{ border: 'none' }} className="bg-table3-foreground">
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id} className="h-12 first:rounded-s-[20px] text-white3 last:rounded-r-[20px] font-normal">
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        </TableHead>
                      );
                    })}
                    <TableHead className="h-12 first:rounded-s-[20px] text-white3 last:rounded-r-[20px] font-normal">
                      Edit
                    </TableHead>
                  </TableRow>
                ))}

              </TableHeader>
              <TableHeader className="w-full h-[11px] bg-table3" />
              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="hover:bg-transparent border-none"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id} className="">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                    <TableCell>
                      <Popover open={openPopoverId === row.id} onOpenChange={(isOpen) => isOpen ? setOpenPopoverId(row.id) : setOpenPopoverId(null)}>
                        <PopoverTrigger asChild>
                          <Pencil2Icon className="w-4 h-4 mr-1 text-[#4FABFE] text-center cursor-pointer" />
                        </PopoverTrigger>
                        <UploadtrackPopover
                          popoverType={"recording"}
                          artists={true}
                          name={row?.original?.title}
                          track={row.original}
                          onUpdateTrack={handleUpdateTrack}
                          onClosePopover={() => setOpenPopoverId(null)}
                        />
                      </Popover>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recordings;
