"use client";

import Link from "next/link";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/registry/new-york/ui/badge";
import { Checkbox } from "@/registry/new-york/ui/checkbox";

import { albums, priorities, statuses, titles } from "../data/data";
import { Task } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Contract" />
    ),
    cell: ({ row }) => (
      <Link href={`contracts_settings/${row.getValue("id")}`}>
        <div className="max-w-[160px]">{row.getValue("id")}</div>
      </Link>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Track" />
    ),
    cell: ({ row }) => {
      const title = titles.find(
        (title) => title.value === row.getValue("title")
      );

      return (
        <div className="flex space-x-2 justify-center">
          {title && <Badge variant="outline">{title.label}</Badge>}
          <span className="max-w-[400px] truncate font-medium">
            {row.getValue("title")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    accessorKey: "album",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Album" />
    ),
    cell: ({ row }) => {
      const album = albums.find(
        (album) => album.value === row.getValue("album")
      );

      return (
        <div className="w-[160px] mx-auto text-center">
          {row.getValue("album")}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },

  {
    accessorKey: "platforms",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Platforms" />
    ),
    cell: ({ row }) => {
      return (
        <Badge
          variant="outline"
          className="bg-[#0072F5] justify-center px-2.5 rounded-full"
        >
          Youtube
        </Badge>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-25 items-center gap-2 justify-center">
          {status.color && (
            <span className={`w-2.5 h-2.5 rounded-full ${status.color}`} />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },

  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Revenues" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
      );

      if (!priority) {
        return null;
      }

      return (
        <div className="flex items-center">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>&quot;{priority.label}&quot;</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    id: "Your Share",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Your Share" />
    ),
    cell: ({ row }) => {
      return <p>50%</p>;
    },
  },
  {
    id: "Your Revenues",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Your Revenues" />
    ),
    cell: ({ row }) => {
      return <p>€17000.0</p>;
    },
  },
];
