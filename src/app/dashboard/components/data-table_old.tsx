"use client"

import * as React from "react"
import { useState } from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/new-york/ui/table"
import { Badge } from "@/registry/new-york/ui/badge"

import { DataTablePagination } from "./data-table-pagination"
import { DataTableToolbar } from "./data-table-toolbar"
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons"
import { statuses } from "../data/data"

interface SubRow {
  album: string;
  title: string;
  platforms: string[];
  status: string;
  revenues: number;
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [collapsedRows, setCollapsedRows] = useState<{ [key: string]: boolean }>({});

  const table = useReactTable<any>({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  const toggleRowCollapse = (rowId: string) => {
    setCollapsedRows((prevCollapsedRows) => ({
      ...prevCollapsedRows,
      [rowId]: !prevCollapsedRows[rowId],
    }));
  };

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="collapse-tableRow"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        {cell.column.id === "id" && collapsedRows[row.id] && <ChevronUpIcon className="h-4 w-4 mt-0.5 cursor-pointer ml-2" onClick={() => toggleRowCollapse(row.id)} />}
                        {cell.column.id === "id" && !collapsedRows[row.id] && row?.original?.subRows?.length && <ChevronDownIcon className="h-4 w-4 mt-0.5 cursor-pointer ml-2" onClick={() => toggleRowCollapse(row.id)} />}
                      </TableCell>
                    ))}
                  </TableRow>
                  {collapsedRows[row.id] && (
                    row?.original?.subRows?.map((subrow:SubRow) => {
                      const status: any = statuses.find(
                        (status) => status.value === subrow?.status)

                      return (
                        <TableRow
                          key={row.id}
                          data-state={row.getIsSelected() && "selected"}
                          className="collapse-tableRow"
                        >                            <TableCell className="px-2 py-3.5" colSpan={2} />
                          <TableCell className="px-2 py-3.5">
                            {subrow?.album}
                          </TableCell>
                          <TableCell className="px-2 py-3.5">
                            {subrow?.title}
                          </TableCell>
                          <TableCell className="px-2 py-3.5 flex gap-2">
                            {subrow?.platforms?.map((platform: string) =>
                              <Badge variant="outline" className="bg-[#0072F5] justify-center px-2.5 rounded-full">{platform}</Badge>
                            )}
                          </TableCell>
                          <TableCell className="px-2 py-3.5">
                            <div className="flex w-25 items-center gap-2">
                              {status.color && (
                                <span className={`w-2.5 h-2.5 rounded-full ${status.color}`} />
                              )}
                              <span>{status.label}</span>
                            </div>
                          </TableCell>
                          <TableCell className="px-2 py-3.5">
                            {subrow?.revenues}
                          </TableCell>
                        </TableRow>
                      )
                    })
                  )}
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
