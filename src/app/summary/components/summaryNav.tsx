"use client"
import NewContract from "@/components/contract/NewContractModal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Pencil2Icon } from "@radix-ui/react-icons";
import * as DialogPrimitive from "@radix-ui/react-dialog"
import Link from "next/link";
import { X } from "lucide-react";

export default function SummaryNav() {
    return (
        <div className="flex items-center px-14 py-11">
            <div>
                <h6 className="text-muted-foreground">Contract</h6>
                <p className="text-white">ACM, SAS</p>
            </div>
            <div className="ml-auto flex items-center space-x-4">
                <nav
                    className="xl:flex hidden items-center space-x-4 lg:space-x-6"
                >
                    <Link
                        href=""
                        className="transition-colors text-white hover:text-white"
                    >
                        Copy URL
                    </Link>
                    <Link
                        href=""
                        className="text-muted-foreground transition-colors hover:text-white"
                    >
                        Share
                    </Link>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="hover:bg-[#4EABFE] bg-[#4EABFE] text-white" variant="default">
                                <Pencil2Icon className="w-4 h-4 mr-1" />
                                Edit options
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="top-0 left-0 max-w-[100vw] h-screen translate-x-0 translate-y-0 bg-background3/[0.03] backdrop-blur-sm flex justify-center items-center data-[state=closed]:slide-out-to-left-[initial] data-[state=closed]:slide-out-to-top-[initial] data-[state=open]:slide-in-from-left-[initial] data-[state=open]:slide-in-from-top-[initial] rounded-none border-none new-contract-modal">
                            <div className="max-w-[1241px] p-0 !rounded-3xl border-none relative">
                                <NewContract />
                                <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                                    <X className="h-4 w-4" />
                                    <span className="sr-only">Close</span>
                                </DialogPrimitive.Close>
                            </div>
                        </DialogContent>
                    </Dialog>
                </nav>
            </div>
        </div>
    );
}
