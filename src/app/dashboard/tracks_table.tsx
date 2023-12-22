
import Image from "next/image"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"

import { tracks } from "@/app/data/data";



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
        "id": "CTR-1",
        "title": "Night Live",
        "status": "upload",
        "album": "First Album",
    },
    {
        "id": "CTR-2",
        "title": "Overbearing",
        "status": "live",
        "album": "First Album",
    },
    {
        "id": "CTR-3",
        "title": "We need you",
        "status": "processing",
        "album": "Second Album",
    },
    {
        "id": "CTR-4",
        "title": "Bypass",
        "status": "todo",
        "album": "Second Album",
    },
    {
        "id": "CTR-5",
        "title": "The source",
        "status": "backlog",
        "album": "Second Album",
    },
    {
        "id": "CTR-6",
        "title": "I'll be there",
        "status": "canceled",
        "album": "Second Album",
    },
    {
        "id": "CTR-7",
        "title": "Used",
        "status": "done",
        "album": "Second Album",
    },
    {
        "id": "CTR-8",
        "title": "In the end",
        "status": "done",
        "album": "First Album",
    },
    {
        "id": "CTR-9",
        "title": "Generations",
        "status": "in progress",
        "album": "First Album",
    },
    {
        "id": "CTR-10",
        "title": "We need each other",
        "status": "todo",
        "album": "First Album",
    },
    {
        "id": "CTR-11",
        "title": "Calculating the love",
        "status": "in progress",
        "album": "First Album",
    },
    {
        "id": "CTR-12",
        "title": "Generating Pillows",
        "status": "done",
        "album": "First Album",
    },
    {
        "id": "CTR-13",
        "title": "Wireless Relationships",
        "status": "backlog",
        "album": "Second Album",
    }
    ]
    return (
        <>
            <div className="md:hidden">
                <Image
                    src="/tasks-light.png"
                    width={1280}
                    height={998}
                    alt="Playground"
                    className="block dark:hidden"
                />
                <Image
                    src="/tasks-dark.png"
                    width={1280}
                    height={998}
                    alt="Playground"
                    className="hidden dark:block"
                />
            </div>
            <div className="hidden h-full flex-1 flex-col space-y-8 m-8 mt-14 pt-7 px-10 pb-0 border-2 md:flex rounded-[20px] bg-table3">
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
                <DataTable data={tracks} columns={columns} />
            </div>
        </>
    )
}
