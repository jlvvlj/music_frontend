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
import { Collapsible } from "@/components/ui/collapsible"
import { ChevronDownIcon, StopwatchIcon } from "@radix-ui/react-icons"


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

  const table = useReactTable({
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
                      {cell.column.id === "id" && <ChevronDownIcon className="h-4 w-4 mt-0.5 cursor-pointer ml-2" onClick={() => toggleRowCollapse(row.id)}/>}
                    </TableCell>
                  ))}
                </TableRow>
                {collapsedRows[row.id] && (
                  <>
                    <TableRow>
                      <TableCell className="px-2 py-3.5" colSpan={2} />
                      <TableCell className="px-2 py-3.5">
                        Night Live
                      </TableCell>
                      <TableCell className="px-2 py-3.5">
                        First Album
                      </TableCell>
                      <TableCell className="px-2 py-3.5">
                        <Badge variant="outline" className="bg-[#537297] text-[#97bce7] w-24 justify-center px-1">Live</Badge>
                      </TableCell>
                      <TableCell className="px-2 py-3.5">
                        €379.00
                      </TableCell>
                      <TableCell className="px-2 py-3.5" />
                    </TableRow>
                    <TableRow>
                      <TableCell className="px-2 py-3.5" colSpan={2} />
                      <TableCell className="px-2 py-3.5">
                        Overbearing
                      </TableCell>
                      <TableCell className="px-2 py-3.5">
                        First Album
                      </TableCell>
                      <TableCell className="px-2 py-3.5">
                        <Badge variant="outline" className="bg-[#537297] text-[#97bce7] w-24 justify-center px-1"><StopwatchIcon className="mr-0.5" />Processing</Badge>
                      </TableCell>
                      <TableCell className="px-2 py-3.5">
                        €892.00
                      </TableCell>
                      <TableCell className="px-2 py-3.5" />
                    </TableRow>
                </>
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



// onClick={ ()=> {
//   if (cell.id === isActive) {setIsActive("")}
//   else {setIsActive(cell.id); console.log(cell.id)}}}