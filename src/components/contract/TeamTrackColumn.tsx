"use client"

import { ColumnDef } from "@tanstack/react-table"

import { DataTableColumnHeader } from "@/app/dashboard/components/data-table-column-header";
import { Task } from "@/app/dashboard/data/schema";
import {
  Popover,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"
import Link from "next/link";
import UploadtrackPopover from "./UploadTrackPopover";

export const TeamTrackColumn: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="" />
    ),
    cell: ({ row }) =>
    // console.log("rowrowrowrowrowrowrow",row)
      <div className="text-[#6B7280]">{row.index+1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Track" />
    ),
    cell: ({ row }) =>
      <div className="capitalize">{row.getValue("title")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "audio",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Audio" />
    ),
    cell: ({ row }) =>
      <Link href="#" className="text-[#6B7280]">{row.getValue("audio")}</Link>,
    enableSorting: false,
    enableHiding: false,
  },
]






