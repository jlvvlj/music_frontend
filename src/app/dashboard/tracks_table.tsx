import fs from "fs";
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"
import { taskSchema } from "./data/schema"

export const metadata: Metadata = {
    title: "Tracks",
    description: "A track tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
// async function getTasks() {
//     const data = await fs.promises.readFile(
//         path.join(process.cwd(), "app/examples/tasks/data/tasks.json")
//     )

//     const tasks = JSON.parse(data.toString())

//     return z.array(taskSchema).parse(tasks)
// }

export default async function TaskPage() {
    const tasks = [{
        "id": "TRACK-878",
        "title": "Night Live",
        "status": "upload",
        "label": "First Album",
        "priority": "medium"
    },
    {
        "id": "TRACK-787",
        "title": "Overbearing",
        "status": "live",
        "label": "First Album",
        "priority": "medium"
    },
    {
        "id": "TRACK-783",
        "title": "We need you",
        "status": "processing",
        "label": "Second Album",
        "priority": "high"
    },
    {
        "id": "TASK-7839",
        "title": "Bypass",
        "status": "todo",
        "label": "Second Album",
        "priority": "high"
    },
    {
        "id": "TASK-5562",
        "title": "The source",
        "status": "backlog",
        "label": "Second Album",
        "priority": "medium"
    },
    {
        "id": "TASK-8686",
        "title": "I'll be there",
        "status": "canceled",
        "label": "Second Album",
        "priority": "medium"
    },
    {
        "id": "TASK-1280",
        "title": "Used",
        "status": "done",
        "label": "Second Album",
        "priority": "high"
    },
    {
        "id": "TASK-7262",
        "title": "In the end",
        "status": "done",
        "label": "First Album",
        "priority": "high"
    },
    {
        "id": "TASK-1138",
        "title": "Generations",
        "status": "in progress",
        "label": "First Album",
        "priority": "medium"
    },
    {
        "id": "TASK-7184",
        "title": "We need each other",
        "status": "todo",
        "label": "First Album",
        "priority": "low"
    },
    {
        "id": "TASK-5160",
        "title": "Calculating the love",
        "status": "in progress",
        "label": "First Album",
        "priority": "high"
    },
    {
        "id": "TASK-5618",
        "title": "Generating Pillows",
        "status": "done",
        "label": "First Album",
        "priority": "medium"
    },
    {
        "id": "TASK-6699",
        "title": "Wireless Relationships",
        "status": "backlog",
        "label": "Second Album",
        "priority": "medium"
    },
    // {
    //     "id": "TASK-2858",
    //     "title": "We need to override the online UDP bus!",
    //     "status": "backlog",
    //     "label": "Second Album",
    //     "priority": "medium"
    // },
    // {
    //     "id": "TASK-9864",
    //     "title": "I'll reboot the 1080p FTP panel, that should matrix the HEX hard drive!",
    //     "status": "done",
    //     "label": "Second Album",
    //     "priority": "high"
    // },
    // {
    //     "id": "TASK-8404",
    //     "title": "We need to generate the virtual HEX alarm!",
    //     "status": "in progress",
    //     "label": "Second Album",
    //     "priority": "low"
    // },
    // {
    //     "id": "TASK-5365",
    //     "title": "Backing up the pixel won't do anything, we need to transmit the primary IB array!",
    //     "status": "in progress",
    //     "label": "Second Album",
    //     "priority": "low"
    // },
    // {
    //     "id": "TASK-1780",
    //     "title": "The CSS feed is down, index the bluetooth transmitter so we can compress the CLI protocol!",
    //     "status": "todo",
    //     "label": "Second Album",
    //     "priority": "high"
    // },
    // {
    //     "id": "TASK-6938",
    //     "title": "Use the redundant SCSI application, then you can hack the optical alarm!",
    //     "status": "todo",
    //     "label": "Second Album",
    //     "priority": "high"
    // },
    // {
    //     "id": "TASK-9885",
    //     "title": "We need to compress the auxiliary VGA driver!",
    //     "status": "backlog",
    //     "label": "Second Album",
    //     "priority": "high"
    // },
    // {
    //     "id": "TASK-3216",
    //     "title": "Transmitting the transmitter won't do anything, we need to compress the virtual HDD sensor!",
    //     "status": "backlog",
    //     "label": "Second Album",
    //     "priority": "medium"
    // },
    // {
    //     "id": "TASK-9285",
    //     "title": "The IP monitor is down, copy the haptic alarm so we can generate the HTTP transmitter!",
    //     "status": "todo",
    //     "label": "Second Album",
    //     "priority": "high"
    // },
    // {
    //     "id": "TASK-1024",
    //     "title": "Overriding the microchip won't do anything, we need to transmit the digital OCR transmitter!",
    //     "status": "in progress",
    //     "label": "Second Album",
    //     "priority": "low"
    // },
    ]
    return (
        <>
            <div className="md:hidden">
                <Image
                    src="/examples/tasks-light.png"
                    width={1280}
                    height={998}
                    alt="Playground"
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/tasks-dark.png"
                    width={1280}
                    height={998}
                    alt="Playground"
                    className="hidden dark:block"
                />
            </div>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Tracks Details</h2>
                        <p className="text-muted-foreground">
                            Here&apos;s a list of your current live tracks!
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <UserNav />
                    </div>
                </div>
                <DataTable data={tasks} columns={columns} />
            </div>
        </>
    )
}
