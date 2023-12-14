import "../globals.css";
import SheetSide from "./sheet-side";
import Nav from "../navtest/page";
import { ThemeProvider } from "@/components/theme-provider";
// import { Metadata } from "next"
import Layout from "@/app/contracts/creation_modal/page";
import ModalLayout from "@/app/archive/modallayout";
import CreationModal from "../../../archive_others/creation_modal_oldpage";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SidebarNav } from "@/app/settings/components/sidebar-nav";

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/contracts/creation_modal",
  },
  {
    title: "Account",
    href: "/contracts/creation_modal/account",
  },
  {
    title: "Appearance",
    href: "/contracts/creation_modal/appearance",
  },
  {
    title: "Notifications",
    href: "/contracts/creation_modal/notifications",
  },
  {
    title: "Display",
    href: "/contracts/creation_modal/display",
  },
];

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import CalendarDateRangePicker from "@/components/dashboard/date-range-picker";
import MainNav from "@/components/dashboard/main-nav";
import Overview from "../../components/dashboard/overview";
import RecentSales from "@/components/dashboard/recent-sales";
import Search from "@/components/dashboard/search";
import TeamSwitcher from "@/components/dashboard/team-switcher";
import UserNav from "@/components/dashboard/user-nav";
import nav from "@/components/dashboard/nav";
import ModeToggle from "@/components/ui/mode-toggle";
import CreateTrackTabs from "@/components/track/createTrackTabs";
import ProgressDemo from "@/registry/default/example/progress-demo";
import TracksTable from "./tracks_table";
import Link from "next/link";
import NewContract from "../contracts/page";

export default function DashboardPage() {
  return (
    <>
      <div>{/* <Nav /> */}</div>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="md:hidden"></div>
        <div className="hidden flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <TeamSwitcher />
              <MainNav className="mx-6" />
              <div className="ml-auto flex items-center space-x-4">
                <Search />
                <ModeToggle />
                <UserNav />
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
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
                  <DialogContent className="max-w-[95%] h-[90%] overflow-y-scroll no-scrollbar">
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
                        you're done.
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
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics"> Streams</TabsTrigger>
                <TabsTrigger value="reports">Revenue</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Revenue
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-cyan-300 text-2xl font-bold">
                        $4236.0
                      </div>
                      <p className="text-xs text-muted-foreground">
                        +34% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Monthly Streams Revenue
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-cyan-300 text-2xl font-bold">
                        $436.0
                      </div>
                      <p className="text-xs text-muted-foreground">
                        +10% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Monthly Sales Revenue
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <path d="M2 10h20" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-cyan-300 text-2xl font-bold">
                        $236.0
                      </div>
                      <p className="text-xs text-muted-foreground">
                        +38% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Balance
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-cyan-300 text-2xl font-bold">
                        $52 236.0
                      </div>
                      <p className="text-xs text-muted-foreground">
                        +201 since last hour
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Your Tracks</CardTitle>
                      <CardDescription>
                        You participated in 26 tracks.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentSales />
                    </CardContent>
                  </Card>
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <Overview />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <TracksTable />
        <SheetSide />
      </ThemeProvider>
    </>
  );
}
