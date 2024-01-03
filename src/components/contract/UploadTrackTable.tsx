"use client"

import { teamTracks } from "@/app/data/data"
import { TableCommon } from "./TableCommon"
import { TeamTrackColumn } from "./TeamTrackColumn"

export default function UploadTrackTable() {
    return (
        <div className="relative flex items-end flex-col pb-7 pt-16 bg-modal-foreground rounded-r-3xl h-[645px]">
            <div className="scrollbox overflow-auto px-4 w-full h-full">
                <div className="p-8 rounded-2xl bg-modal border border-muted w-full">
                    <img src="https://www.theaudiodb.com/images/media/album/thumb/hot-fuss-limited-edition-7-inch-box-set-4ddc38e3e1d71.jpg" alt="project" className="mx-auto rounded-md w-[90%] mb-[71px]" />
                    <TableCommon data={teamTracks} columns={TeamTrackColumn} />
                </div>
            </div>
        </div>
    )
}
