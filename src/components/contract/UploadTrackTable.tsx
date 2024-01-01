"use client"

import { modalTracks } from "@/app/data/data"
import { TableCommon } from "./TableCommon"
import { trackColumn } from "./TrackColumn"

export default function UploadTrackTable() {
    return (
        <div className="relative flex items-end px-4 flex-col py-7 bg-modal-foreground rounded-r-3xl h-[645px] no-scrollbar overflow-y-scroll">
            <div className="p-8 rounded-2xl bg-modal border border-muted w-full">
                <img src="https://www.theaudiodb.com/images/media/album/thumb/hot-fuss-limited-edition-7-inch-box-set-4ddc38e3e1d71.jpg" alt="project" className="mx-auto rounded-md w-[90%] mb-[71px]" />
                <TableCommon data={modalTracks} columns={trackColumn} />
            </div>
        </div>
    )
}
