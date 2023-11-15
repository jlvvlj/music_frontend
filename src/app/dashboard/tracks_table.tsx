import { taskSchema } from "./data/schema"
import { z } from "zod"
import Image from "next/image"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"


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
        "album": "First Album",
    },
    {
        "id": "TRACK-787",
        "title": "Overbearing",
        "status": "live",
        "album": "First Album",
    },
    {
        "id": "TRACK-783",
        "title": "We need you",
        "status": "processing",
        "album": "Second Album",
    },
    {
        "id": "TASK-7839",
        "title": "Bypass",
        "status": "todo",
        "album": "Second Album",
    },
    {
        "id": "TASK-5562",
        "title": "The source",
        "status": "backlog",
        "album": "Second Album",
    },
    {
        "id": "TASK-8686",
        "title": "I'll be there",
        "status": "canceled",
        "album": "Second Album",
    },
    {
        "id": "TASK-1280",
        "title": "Used",
        "status": "done",
        "album": "Second Album",
    },
    {
        "id": "TASK-7262",
        "title": "In the end",
        "status": "done",
        "album": "First Album",
    },
    {
        "id": "TASK-1138",
        "title": "Generations",
        "status": "in progress",
        "album": "First Album",
    },
    {
        "id": "TASK-7184",
        "title": "We need each other",
        "status": "todo",
        "album": "First Album",
    },
    {
        "id": "TASK-5160",
        "title": "Calculating the love",
        "status": "in progress",
        "album": "First Album",
    },
    {
        "id": "TASK-5618",
        "title": "Generating Pillows",
        "status": "done",
        "album": "First Album",
    },
    {
        "id": "TASK-6699",
        "title": "Wireless Relationships",
        "status": "backlog",
        "album": "Second Album",
    }
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
