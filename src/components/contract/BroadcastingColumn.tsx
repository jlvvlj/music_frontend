"use client"

import { ColumnDef } from "@tanstack/react-table"

import { DataTableColumnHeader } from "@/app/dashboard/components/data-table-column-header";
import { Task } from "@/app/dashboard/data/schema";
import { Pencil2Icon } from "@radix-ui/react-icons";

export const BroadcastingColumn: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="" />
    ),
    cell: ({ row }) =>
      <div className="text-[#6B7280]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Track" />
    ),
    cell: ({ row }) =>
      <div>{row.getValue("title")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "broadcasting",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Broadcasting right" className="text-center" />
    ),
    cell: ({ row }) =>
      <div className="text-center">{row.getValue("broadcasting")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "secondary",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Secondary uses" className="text-center" />
    ),
    cell: ({ row }) =>
      <div className="text-center">{row.getValue("secondary")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "album",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} className="text-[#4FABFF] text-center" title="Edit" />
    ),
    cell: ({ row }) =>
      <div className="text-[#4FABFE] text-xs text-center cursor-pointer"><Pencil2Icon className="w-4 h-4 mr-1 text-[#4FABFE] text-center cursor-pointer" /></div>,
    enableSorting: false,
    enableHiding: false,
  },
]