"use client"

import { ColumnDef } from "@tanstack/react-table"

import { DataTableColumnHeader } from "@/app/dashboard/components/data-table-column-header";
import { Task } from "@/app/dashboard/data/schema";
import {
  Popover,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"
import Image from "next/image";
import { Avatar } from "../ui/avatar";

export const RoyaltiesColumn: ColumnDef<Task>[] = [
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
    accessorKey: "artist",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Artist" />
    ),
    cell: ({ row }) =>
      < Avatar className="bg-[#A3D3FF] mt-2 h-11 w-11" >
        <Image
          src={row.getValue("artist")}
          width={100}
          height={100}
          alt="avatar"
        />
      </Avatar >,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "share",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Share" />
    ),
    cell: ({ row }) =>
      <div className="text-center">{row.getValue("share")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "artist1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Artist" />
    ),
    cell: ({ row }) =>
      < Avatar className="bg-[#A3D3FF] mt-2 h-11 w-11" >
        <Image
          src={row.getValue("artist1")}
          width={100}
          height={100}
          alt="avatar"
        />
      </Avatar >,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "share1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Share" />
    ),
    cell: ({ row }) =>
      <div className="text-center">{row.getValue("share1")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "album",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} className="text-[#4FABFF] text-center" title="Edit" />
    ),
    cell: ({ row }) =>
      <Popover>
        <PopoverTrigger asChild>
          <div className="text-[#4FABFE] text-center cursor-pointer text-xs">{row.getValue("album")}</div>
        </PopoverTrigger>
      </Popover>,
    enableSorting: false,
    enableHiding: false,
  },
]
