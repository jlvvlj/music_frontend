import React from "react";
import Image from "next/image";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { UserNav } from "./components/user-nav";

// Simulate a database read for tasks.
// async function getTasks() {
//     const data = await fs.promises.readFile(
//         path.join(process.cwd(), "app/examples/tasks/data/tasks.json")
//     )

//     const tasks = JSON.parse(data.toString())

//     return z.array(taskSchema).parse(tasks)
// }

export default async function TaskPage() {
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
            <h2 className="text-2xl font-bold tracking-tight">
              Tracks Details
            </h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your current live tracks!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable columns={columns} />
      </div>
    </>
  );
}
