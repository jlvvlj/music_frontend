import "../globals.css";
import SheetSide from "./sheet-side";
import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import MainNav from "@/components/dashboard/main-nav";
import Search from "@/components/dashboard/search";
import TeamSwitcher from "@/components/dashboard/team-switcher";
import UserNav from "@/components/dashboard/user-nav";
import ModeToggle from "@/components/ui/mode-toggle";
import CreateTrackTabs from "@/components/track/createTrackTabs";
import TracksTable from "./tracks_table";
import Graph from "./graph";
import NewContract from "@/components/contract/NewContractModal";
import { Menu } from "lucide-react";
import Header from "../Header";

const cards = [
  {
    title: "Total Revenue",
    amount: "$4236.0",
    content: "+34% from last month",
  },
  {
    title: "Monthly Streams Revenue",
    amount: "$436.0",
    content: "+10% from last month",
  },
  {
    title: "Monthly Sales Revenue",
    amount: "$236.0",
    content: "+38% from last month",
  },
  {
    title: "Balance",
    amount: "$52 236.0",
    content: "+201 since last hour",
  },
];


export default function DashboardPage() {
  return (
    <>
      <div>{/* <Nav /> */}</div>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="md:hidden"></div>
        <div className="hidden flex-col md:flex">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Your Dashboard
              </h2>
              <div className="flex items-center space-x-2">
                {/* <Link href="/contracts">
                  <Button variant="outline">Add a new contract</Button>
                </Link> */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Add a new contract</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[1070px] h-[645px] overflow-y-scroll no-scrollbar p-0 !rounded-3xl border-none">
                    <NewContract />
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Add a new track</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[1200px]">
                    <DialogHeader>
                      <DialogTitle>New Contract</DialogTitle>
                      <DialogDescription>
                        Add your contract information here. Click submit when
                        you&apos;re done.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="grid grid-cols-5">
                      <div className="col-span-3">
                        <CreateTrackTabs />
                      </div>
                      <div className="col-span-2">
                        <Image
                          src="https://www.billboard.com/wp-content/uploads/2022/06/beyonce-Lemonade-album-art-billboard-1240.jpg?w=1024"
                          width={600}
                          height={330}
                          alt="track"
                        />
                      </div>
                    </div>

                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <Graph />
          </div>
        </div>
        <TracksTable />
        {/* <SheetSide /> */}
      </ThemeProvider>
    </>
  );
}
