"use client"

import { ColumnDef } from "@tanstack/react-table"

import { DataTableColumnHeader } from "@/app/dashboard/components/data-table-column-header";
import { Task } from "@/app/dashboard/data/schema";
import { Pencil2Icon } from "@radix-ui/react-icons";

export const AbatementColumn: ColumnDef<Task>[] = [
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
    accessorKey: "foreignsales",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Foreign sales" className="text-center" />
    ),
    cell: ({ row }) =>
      <div className="text-center">{row.getValue("foreignsales")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "compilation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Compilation" className="truncate w-14" />
    ),
    cell: ({ row }) =>
      <div className="text-center truncate">{row.getValue("compilation")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "promotion",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Promotion" className="truncate w-14" />
    ),
    cell: ({ row }) =>
      <div className="text-center">{row.getValue("promotion")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "discounted",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Discounted" className="truncate w-14" />
    ),
    cell: ({ row }) =>
      <div className="text-center">{row.getValue("discounted")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "offcircuit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Off-Circuit" className="text-center" />
    ),
    cell: ({ row }) =>
      <div className="text-center">{row.getValue("offcircuit")}</div>,
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