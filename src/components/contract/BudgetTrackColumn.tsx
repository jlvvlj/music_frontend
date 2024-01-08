"use client"

import { ColumnDef } from "@tanstack/react-table"

import { DataTableColumnHeader } from "@/app/dashboard/components/data-table-column-header";
import { Task } from "@/app/dashboard/data/schema";
import { Pencil2Icon } from "@radix-ui/react-icons";

export const BudgetTrackColumn: ColumnDef<Task>[] = [
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
    accessorKey: "min",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Min" />
    ),
    cell: ({ row }) =>
      <div>{row.getValue("min")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "max",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Max" />
    ),
    cell: ({ row }) =>
      <div>{row.getValue("max")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "multimedia",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Multimedia" />
    ),
    cell: ({ row }) =>
      <div className="text-center">{row.getValue("multimedia")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "external",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="External" />
    ),
    cell: ({ row }) =>
      <div className="text-center">{row.getValue("external")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "promotion",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Promotion" />
    ),
    cell: ({ row }) =>
      <div className="text-center">{row.getValue("promotion")}</div>,
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