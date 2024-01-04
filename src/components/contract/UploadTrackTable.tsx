"use client"

import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/registry/new-york/ui/table"
import { flexRender, getCoreRowModel, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import {
    Popover,
    PopoverTrigger,
} from "@/registry/new-york/ui/popover";
import { Pencil2Icon } from "@radix-ui/react-icons";

import { teamTracks } from "@/app/data/data"
import { TeamTrackColumn } from "./TeamTrackColumn";
import UploadTrackPopover from "./UploadTrackPopover";

export default function UploadTrackTable() {

    const [updatedTracks, setUpdatedTracks] = useState(teamTracks);
    const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);

    const table = useReactTable<any>({
        data: updatedTracks,
        columns: TeamTrackColumn,
        enableRowSelection: true,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    })

    const handleUpdateTrack = (trackId: string, newAudio: string, title: string) => {
        const updatedData = updatedTracks.map((track) =>
            track.id == trackId ? { ...track, status: newAudio, title: title } : track
        );
        setUpdatedTracks(updatedData);
    };

    return (
        <div className="relative flex items-end flex-col pb-7 pt-16 bg-modal-foreground rounded-r-3xl h-[645px]">
            <div className="scrollbox overflow-auto px-4 w-full h-full">
                <div className="p-8 rounded-2xl bg-modal border border-muted w-full">
                    <img src="https://www.theaudiodb.com/images/media/album/thumb/hot-fuss-limited-edition-7-inch-box-set-4ddc38e3e1d71.jpg" alt="project" className="mx-auto rounded-md w-[90%] mb-[71px]" />
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id} style={{ border: 'none' }} className="bg-table3-foreground">
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id} className="h-12 first:rounded-s-[20px] text-white3 last:rounded-r-[20px] font-normal">
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        );
                                    })}
                                    <TableHead className="h-12 first:rounded-s-[20px] text-white3 last:rounded-r-[20px] font-normal">
                                        Edit
                                    </TableHead>
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableHeader className="w-full h-[11px] bg-table3" />
                        <TableBody>
                            {table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    className="hover:bg-transparent border-none"
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell
                                            key={cell.id} className="">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                    <TableCell>
                                        <Popover open={openPopoverId === row.id} onOpenChange={(isOpen) => isOpen ? setOpenPopoverId(row.id) : setOpenPopoverId(null)}>
                                            <PopoverTrigger asChild>
                                                <Pencil2Icon className="w-4 h-4 mr-1 text-[#4FABFE] text-center cursor-pointer" />
                                            </PopoverTrigger>
                                            <UploadTrackPopover
                                            popoverType={"track"}
                                                artists={false}
                                                name={row?.original?.title}
                                                track={row.original}
                                                onUpdateTrack={handleUpdateTrack}
                                                onClosePopover={() => setOpenPopoverId(null)}
                                            />
                                        </Popover>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
