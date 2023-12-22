"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/new-york/ui/card"
import Image from "next/image"

export default function TopTracksCard() {
    return (
        <Card className="mb-4 bg-black3">
            <CardHeader className="p-4 pt-6">
                <CardTitle className="text-2xl">Project Top Tracks</CardTitle>
                <CardDescription>
                    Tracks with the highest revenue.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-2 pb-14 flex gap-3 flex-wrap">
                <Image src="/project1.png" alt="project1" height={100} width={100} />
                <Image src="/project2.png" alt="project2" height={100} width={100} />
                <Image src="/project3.png" alt="project3" height={100} width={100} />
                <Image src="/project4.png" alt="project4" height={100} width={100} />
            </CardContent>
        </Card>
    )
}
