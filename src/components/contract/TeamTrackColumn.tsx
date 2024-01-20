"use client"

import { ColumnDef } from "@tanstack/react-table"

import { DataTableColumnHeader } from "@/app/dashboard/components/data-table-column-header";
import { Task } from "@/app/dashboard/data/schema";
import Link from "next/link";

export const TeamTrackColumn: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="" />
    ),
    cell: ({ row }) =>
      <div className="text-[#6B7280]">{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Track" />
    ),
    cell: ({ row }) =>
      <div className="capitalize w-[120px] truncate">{row.getValue("title")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "audio",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Audio" className="pl-4" />
    ),
    cell: ({ row }) =>
      <Link href="#" className="text-[#6B7280] w-[120px] truncate block">{row.getValue("audio")}</Link>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Code" className="pl-6" />
    ),
    cell: ({ row }) =>
      <div className="text-[#6B7280] w-[100px] truncate">{row.getValue("code")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
]






