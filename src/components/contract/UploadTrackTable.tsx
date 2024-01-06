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

import { TeamTrackColumn } from "./TeamTrackColumn";
import UploadTrackPopover from "./UploadTrackPopover";
import { ImageOff } from "lucide-react";

export default function UploadTrackTable({ selectedFile, updateValue,setUpdatedTracks, updatedTracks }: any) {

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
        const updatedData = updatedTracks.map((track:any) =>
            track.id == trackId ? { ...track, status: newAudio, title: title } : track
        );
        setUpdatedTracks(updatedData);
    };

    return (
        <div className="relative flex items-end flex-col pb-7 pt-16 bg-modal-foreground rounded-r-3xl h-[645px]">
            <div className="scrollbox overflow-auto px-4 w-full h-full">
                <div className="p-8 rounded-2xl bg-modal border border-muted w-full">
                    {updateValue && (<h1 className="text-center mb-7 text-2xl">{updateValue}</h1>)}
                    <div className="relative bg-modal border border-3 rounded-xl relative mb-16 h-[350px] w-[350px] mx-auto flex justify-center items-center flex-col">
                        {selectedFile && (
                            <div className="absolute h-full w-full bg-modal rounded-xl"><img src={selectedFile} alt="Selected Image" className="object-fit rounded-xl h-full w-full" /></div>)}
                        <ImageOff className="text-[#737373] h-9 w-9" />
                        <h6 className="mt-3 text-lg text-[#737373] text-normal">No Image</h6>
                    </div>
                    <Table>
                        <TableHeader className="block">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id} style={{ border: 'none' }} className="bg-table3-foreground">
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id} className="w-[200px] first:w-[110px] h-12 first:rounded-s-[20px] text-white3 last:rounded-r-[20px] font-normal">
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        );
                                    })}
                                    <TableHead className="w-[200px] h-12 first:rounded-s-[20px] text-white3 last:rounded-r-[20px] font-normal">
                                        <div className="text-center">Edit</div>
                                    </TableHead>
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableHeader className="w-full h-[11px] bg-table3" />
                        <TableBody className="block overflow-y-auto max-h-[448px] scrollbox">
                            {table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    className="hover:bg-transparent border-none"
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell
                                            key={cell.id} className="w-[200px]">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                    <TableCell className="w-[200px]">
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
