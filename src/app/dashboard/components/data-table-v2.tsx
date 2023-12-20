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

import { DashboardDataTablePagination } from "./dashboard-data-table-pagination"
import { DataTableToolbar } from "./data-table-toolbar"
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons"
import { statuses } from "../data/data"

interface SubRow {
  album: string;
  title: string;
  platforms: string[];
  status: string;
  revenues: number;
  YourShare: number;
  YourRevenues: number;
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
      <div className="pt-4">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} style={{border: 'none'}} className="bg-muted/50">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="first:rounded-s-[20px] last:rounded-r-[20px] text-center border-b-[3px] border-[#020817]">
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
          <TableBody className="dashboard-tablebody">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="collapse-tableRow hover:bg-transparent"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id} className="justify-center text-center">
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
                        >                            <TableCell className="px-2 py-3.5 text-center" />
                          <TableCell className="px-2 py-3.5 text-center">
                            {subrow?.album}
                          </TableCell>
                          <TableCell className="px-2 py-3.5 text-center">
                            {subrow?.title}
                          </TableCell>
                          <TableCell className="px-2 py-3.5 flex gap-2 justify-center">
                            {subrow?.platforms?.map((platform: string) =>
                              <Badge variant="outline" className="bg-[#0072F5] justify-center px-2.5 rounded-full">{platform}</Badge>
                            )}
                          </TableCell>
                          <TableCell className="px-2 py-3.5 text-center">
                            <div className="flex w-25 items-center gap-2 justify-center">
                              {status.color && (
                                <span className={`w-2.5 h-2.5 rounded-full ${status.color}`} />
                              )}
                              <span>{status.label}</span>
                            </div>
                          </TableCell>
                          <TableCell className="px-2 py-3.5 text-center">
                            {subrow?.revenues}
                          </TableCell>
                          <TableCell className="px-2 py-3.5 text-center">
                            {subrow?.YourShare}
                          </TableCell>
                          <TableCell className="px-2 py-3.5 text-center">
                            {subrow?.YourRevenues}
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
      <DashboardDataTablePagination table={table} />
    </div>
  );
}
