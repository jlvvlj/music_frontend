"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "@/app/dashboard/components/data-table-column-header";
import Image from "next/image";
import { Task } from "@/app/dashboard/data/schema";

import { Avatar } from "../ui/avatar";

export const RecordingsColumn: ColumnDef<Task>[] = [
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
    accessorKey: "profile",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Artist" />
    ),
    cell: ({ row }) =>
      <Avatar className="bg-[#A3D3FF] h-9 w-9" >
        <Image
          src={row.getValue("profile")}
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
    accessorKey: "artists",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Artist" />
    ),
    cell: ({ row }) =>
      <div className="flex">
        {(row.getValue("artists") as { id: string, profile: string }[])?.map((member: { id: string, profile: string }) =>
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
]
