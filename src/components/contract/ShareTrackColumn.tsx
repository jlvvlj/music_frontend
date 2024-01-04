"use client"

import { ColumnDef } from "@tanstack/react-table"

import { DataTableColumnHeader } from "@/app/dashboard/components/data-table-column-header";
import { Task } from "@/app/dashboard/data/schema";
import Image from "next/image";

import { Avatar } from "../ui/avatar";

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
        {(row.getValue("artists") as { id: string, profile: string }[]).map((member: { id: string, profile: string }) =>
          <Avatar key={member.id} className="h-9 w-9 -ml-2 first:ml-0 border border-white">
            <Image
              src={member.profile}
              width={100}
              height={100}
              alt="avatar"
            />
          </Avatar>
        )}
      </div>,
    enableSorting: false,
    enableHiding: false,
  }
]






