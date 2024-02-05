import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/new-york/ui/accordion";
import { Home, Menu } from "lucide-react";
import { Music, Settings, PersonStanding, Bell, Monitor } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/registry/new-york/ui/tooltip";

const Sidebar = ({ isCollapsed }: { isCollapsed: number }) => {
    const pathname = usePathname();
    return (
        <div data-collapsed={isCollapsed} className="bg-foreground3 h-full shadow-2xl">
            {isCollapsed > 4 ?
                <div>
                    <div className="md:flex hidden justify-between items-center border-b p-3">
                        <Link href="/dashboard" className="flex items-center text-lg font-medium text-white3">
                            <svg fill="hsl(var(--white3))" width="50px" height="40px" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145.04 116.32"><defs></defs><path className="cls-1" d="M79,58.91a7.18,7.18,0,1,1,14.35,0V66a8.59,8.59,0,0,0,8.62,8.62h4.31A8.57,8.57,0,0,0,114.84,66V60.35a8.59,8.59,0,0,0-8.61-8.62h-4.31a8.59,8.59,0,0,1-8.62-8.61V38.81a8.57,8.57,0,0,0-8.61-8.61H80.38a8.57,8.57,0,0,0-8.61,8.61v5.75a7.18,7.18,0,1,1-14.36,0V38.81a8.57,8.57,0,0,0-8.62-8.61H30.13a8.57,8.57,0,0,0-8.62,8.61V86.19a8.57,8.57,0,0,0,8.62,8.62h4.3a8.57,8.57,0,0,0,8.62-8.62V58.91a7.18,7.18,0,0,1,12.26-5.08,6.91,6.91,0,0,1,2.1,5.08V86.19A8.57,8.57,0,0,0,66,94.81h4.31A8.59,8.59,0,0,0,79,86.19Z"
                            />
                                <path className="cls-1" d="M110.6,43.05A8.57,8.57,0,0,1,102,34.44V30.13a8.57,8.57,0,0,1,8.61-8.62h4.31a8.59,8.59,0,0,1,8.62,8.62v4.31a8.59,8.59,0,0,1-8.62,8.61Z" />
                            </svg>
                            Miuu
                        </Link>
                    </div>
                    <div className="p-3">
                        <Link href="/dashboard">
                            <Button variant="ghost" className={`${pathname === '/dashboard' ? 'bg-accent text-accent-foreground' : ''} w-full justify-start items-center mb-1`}>
                                <Home className="h-5 w-5 mr-3" />
                                <span>Dashboard</span>
                            </Button>
                        </Link>
                        <Link href="/contracts">
                            <Button variant="ghost" className={`${pathname === '/contracts' ? 'bg-accent text-accent-foreground' : ''} w-full justify-start items-center mb-1`}>
                                <Music className="h-5 w-5 mr-3" />
                                <span>Contracts</span>
                            </Button>
                        </Link>
                        <Link href="/music">
                            <Button variant="ghost" className={`${pathname === '/music' ? 'bg-accent text-accent-foreground' : ''} w-full justify-start items-center mb-1`}>
                                <Music className="h-5 w-5 mr-3" />
                                <span>Music</span>
                            </Button>
                        </Link>
                        <Link href="/archive">
                            <Button variant="ghost" className={`${pathname === '/archive' ? 'bg-accent text-accent-foreground' : ''} w-full justify-start items-center mb-1`}>
                                <Music className="h-5 w-5 mr-3" />
                                <span>Archive</span>
                            </Button>
                        </Link>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1" className="border-0">
                                <AccordionTrigger className="p-0 w-full justify-between items-center mb-1 rounded-md hover:no-underline hover:bg-accent hover:text-accent-foreground">
                                    <div className="w-full flex items-center px-4 py-2.5">
                                        <Settings className="h-5 w-5 mr-3" />
                                        <span className="cursor-pointer">Settings</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <Link href="/settings/account">
                                        <Button variant="ghost" className={`${pathname === '/settings/account' ? 'bg-accent text-accent-foreground' : ''} pl-10 w-full justify-start items-center mb-1`}>
                                            <PersonStanding className="h-5 w-5 mr-3" />
                                            Profile
                                        </Button>
                                    </Link>
                                    <Link href="/settings/notifications">
                                        <Button variant="ghost" className={`${pathname === '/settings/notifications' ? 'bg-accent text-accent-foreground' : ''} pl-10 w-full justify-start items-center mb-1`}>
                                            <Bell className="h-5 w-5 mr-3" />
                                            Notification
                                        </Button>
                                    </Link>
                                    <Link href="/settings/display">
                                        <Button variant="ghost" className={`${pathname === '/settings/display' ? 'bg-accent text-accent-foreground' : ''} pl-10 w-full justify-start items-center mb-1`}>
                                            <Monitor className="h-5 w-5 mr-3" />
                                            Display
                                        </Button>
                                    </Link>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div> : <div>
                    <div className="flex justify-between items-center border-b p-3">
                        <Link href="/dashboard" className="flex items-center text-lg font-medium text-white3">
                            <svg fill="hsl(var(--white3))" width="50px" height="40px" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145.04 116.32"><defs></defs><path className="cls-1" d="M79,58.91a7.18,7.18,0,1,1,14.35,0V66a8.59,8.59,0,0,0,8.62,8.62h4.31A8.57,8.57,0,0,0,114.84,66V60.35a8.59,8.59,0,0,0-8.61-8.62h-4.31a8.59,8.59,0,0,1-8.62-8.61V38.81a8.57,8.57,0,0,0-8.61-8.61H80.38a8.57,8.57,0,0,0-8.61,8.61v5.75a7.18,7.18,0,1,1-14.36,0V38.81a8.57,8.57,0,0,0-8.62-8.61H30.13a8.57,8.57,0,0,0-8.62,8.61V86.19a8.57,8.57,0,0,0,8.62,8.62h4.3a8.57,8.57,0,0,0,8.62-8.62V58.91a7.18,7.18,0,0,1,12.26-5.08,6.91,6.91,0,0,1,2.1,5.08V86.19A8.57,8.57,0,0,0,66,94.81h4.31A8.59,8.59,0,0,0,79,86.19Z"
                            />
                                <path className="cls-1" d="M110.6,43.05A8.57,8.57,0,0,1,102,34.44V30.13a8.57,8.57,0,0,1,8.61-8.62h4.31a8.59,8.59,0,0,1,8.62,8.62v4.31a8.59,8.59,0,0,1-8.62,8.61Z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="p-3">
                        <Link href="/dashboard">
                            <TooltipProvider>
                                <Tooltip delayDuration={0}>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" className={`${pathname === '/dashboard' ? 'bg-accent text-accent-foreground' : ''} w-full justify-center items-center mb-1`}>
                                            <Home className="h-5 w-5" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="right" className="flex items-center gap-4">
                                        <span>Dashboard</span>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                        <Link href="/contracts">
                            <TooltipProvider>
                                <Tooltip delayDuration={0}>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" className={`${pathname === '/contracts' ? 'bg-accent text-accent-foreground' : ''} w-full justify-center items-center mb-1`}>
                                            <Music className="h-5 w-5" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="right" className="flex items-center gap-4">
                                        <span>Contracts</span>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                        <Link href="/music">
                            <TooltipProvider>
                                <Tooltip delayDuration={0}>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" className={`${pathname === '/music' ? 'bg-accent text-accent-foreground' : ''} w-full justify-center items-center mb-1`}>
                                            <Music className="h-5 w-5" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="right" className="flex items-center gap-4">
                                        <span>Music</span>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                        <Link href="/archive">
                            <TooltipProvider>
                                <Tooltip delayDuration={0}>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" className={`${pathname === '/archive' ? 'bg-accent text-accent-foreground' : ''} w-full justify-center items-center mb-1`}>
                                            <Music className="h-5 w-5" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="right" className="flex items-center gap-4">
                                        <span>Archive</span>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1" className="border-0">
                                <AccordionTrigger className="p-0 w-full justify-center items-center mb-1 rounded-md hover:no-underline hover:bg-accent hover:text-accent-foreground sidebar-accordion">
                                    <TooltipProvider>
                                        <Tooltip delayDuration={0}>
                                            <TooltipTrigger asChild>
                                                <div className="w-full flex justify-center items-center px-4 py-2.5">
                                                    <Settings className="h-5 w-5" />
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent side="right" className="flex items-center gap-4">
                                                <span>Settings</span>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <Link href="/settings/account">
                                        <TooltipProvider>
                                            <Tooltip delayDuration={0}>
                                                <TooltipTrigger asChild>
                                                    <Button variant="ghost" className={`${pathname === '/settings/account' ? 'bg-accent text-accent-foreground' : ''} w-full justify-center items-center mb-1`}>
                                                        <PersonStanding className="h-5 w-5" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent side="right" className="flex items-center gap-4">
                                                    <span>Profile</span>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                    <Link href="/settings/notifications">
                                        <TooltipProvider>
                                            <Tooltip delayDuration={0}>
                                                <TooltipTrigger asChild>
                                                    <Button variant="ghost" className={`${pathname === '/settings/notifications' ? 'bg-accent text-accent-foreground' : ''} w-full justify-center items-center mb-1`}>
                                                        <Bell className="h-5 w-5" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent side="right" className="flex items-center gap-4">
                                                    <span>Notification</span>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                    <Link href="/settings/display">
                                        <TooltipProvider>
                                            <Tooltip delayDuration={0}>
                                                <TooltipTrigger asChild>
                                                    <Button variant="ghost" className={`${pathname === '/settings/display' ? 'bg-accent text-accent-foreground' : ''} w-full justify-center items-center mb-1`}>
                                                        <Monitor className="h-5 w-5" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent side="right" className="flex items-center gap-4">
                                                    <span>Display</span>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>}
        </div>
    )
}

export default Sidebar