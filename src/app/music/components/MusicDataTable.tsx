"use client"

import * as React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/new-york/ui/table"
import { Avatar } from "@/components/ui/avatar"
import Image from "next/image"
import { statuses } from "@/app/dashboard/data/data"

const tableHeader = [
    { title: "", textColor: 'white3' },
    { title: "Track", textColor: 'white3' },
    { title: "Status", textColor: 'white3 text-left w-28' },
    { title: "Producer", textColor: '[#4FABFF]' },
    { title: "Share", textColor: 'white3' },
    { title: "Artists", textColor: 'white3' },
    { title: "Share", textColor: 'white3' },
    { title: "Completion date", textColor: '[#4FABFF]' },
    { title: "Edit", textColor: '[#4FABFF]' },
]

const profiles = [
    { img: '/amandine.svg' },
    { img: '/orlane.svg' },
    { img: '/jon.svg' },
    { img: '/julie.svg' }
]
export function MusicDataTable({ album }: any) {

    return (
        <div className="space-y-4">
            <div className="py-4">
                <Table className="min-w-[1000px]">
                    <TableHeader>
                        <TableRow style={{ border: 'none' }} className="bg-table3-foreground">
                            {tableHeader?.map((cell, index) =>
                                <TableHead key={index} className={`h-[50px] first:rounded-s-[20px] last:rounded-r-[20px] text-center font-normal text-${cell?.textColor}`}>
                                    {cell?.title}
                                </TableHead>
                            )}
                        </TableRow>
                    </TableHeader>
                    <TableHeader className="w-full h-[11px] bg-table3" />
                    <TableBody>
                        {album.tracks.map((track: any) => {
                            const status: any = statuses.find(
                                (status) => status.value === track?.status)
                                
                            return (
                                <TableRow key={track.id} className="collapse-tableRow hover:bg-transparent">
                                    <TableCell className="text-muted-foreground">{track.position}</TableCell>
                                    <TableCell className="text-white">{track.title}</TableCell>
                                    <TableCell>
                                        <div className="flex w-[106px] items-center gap-2 justify-start">
                                            {status && status.color && (
                                                <span className={`w-2.5 h-2.5 rounded-full ${status && status.color}`} />
                                            )}
                                            <span className="text-white">{status && status.label}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Avatar className="h-[34px] w-[34px] border border-white mx-auto">
                                            <Image
                                                src="/julie.svg"
                                                width={100}
                                                height={100}
                                                alt="avatar"
                                            />
                                        </Avatar>
                                    </TableCell>
                                    <TableCell className="text-center text-white">40%</TableCell>
                                    <TableCell>
                                        <div className="flex justify-center">
                                            {profiles.map((profile, index) =>
                                                <Avatar key={index} className="h-[34px] w-[34px] border border-white -ml-2 first:ml-0">
                                                    <Image
                                                        src={profile.img}
                                                        width={100}
                                                        height={100}
                                                        alt="avatar"
                                                    />
                                                </Avatar>
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center text-white">60%</TableCell>
                                    <TableCell className="text-muted-foreground text-center">01/01/2024</TableCell>
                                    <TableCell className="text-[#4FABFE] text-center text-xs">Edit track</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
