"use client"

import { ColumnDef } from "@tanstack/react-table"

import { DataTableColumnHeader } from "@/app/dashboard/components/data-table-column-header";
import { Task } from "@/app/dashboard/data/schema";
import {
  Popover,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"
import Image from "next/image";

import UploadTrackPopover from "./UploadTrackPopover";
import { Avatar } from "../ui/avatar";

const initialMembers = [
  { id: 1, member: '/amandine.svg' },
  { id: 2, member: '/orlane.svg' },
  { id: 3, member: '/jon.svg' },
  { id: 4, member: '/julie.svg' },
]

export const ShareTrackColumn: ColumnDef<Task>[] = [
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
    accessorKey: "producer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Producer" />
    ),
    cell: ({ row }) =>
      <Avatar className="bg-[#A3D3FF] h-9 w-9 ml-3" >
        <Image
          src='/julie.svg'
          width={100}
          height={100}
          alt="avatar"
        />
      </Avatar >,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "artists",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Artists" className="text-center" />
    ),
    cell: ({ row }) =>
      <div className="flex">
        {initialMembers.map((member) =>
          <Avatar key={member.id} className="h-9 w-9 -ml-2 first:ml-0 border border-white">
            <Image
              src={member.member}
              width={100}
              height={100}
              alt="avatar"
            />
          </Avatar>
        )}
      </div>,
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
          <div className="text-[#4FABFE] text-center cursor-pointer">{row.getValue("album")}</div>
        </PopoverTrigger>
        <UploadTrackPopover artists={true} placeholder="Artists" name={row.getValue("title")} />
      </Popover>,
    enableSorting: false,
    enableHiding: false,
  },
]






