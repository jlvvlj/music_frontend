'use client'

import { usePathname } from "next/navigation";
import { tracks } from "@/app/data/data";

export default function ContractSettings() {
    return (
        tracks.map(((track) => {
            const pathname = usePathname()
            console.log(pathname)
            if (pathname === `/contracts_settings/${track.id}`) {
                return (
                    <div>
                        <h1>{track.title}</h1>
                        <h1>{track.id}</h1>
                        <h1>{track.album}</h1>
                    </div>
                )
            }
        }
        ))
    )
}