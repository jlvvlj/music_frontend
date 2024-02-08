"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import "../globals.css";
import SheetSide from "./sheet-side";
import { ThemeProvider } from "@/components/theme-provider";
import * as DialogPrimitive from "@radix-ui/react-dialog";
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

import CreateTrackTabs from "@/components/track/createTrackTabs";
import TracksTable from "./tracks_table";
import Graph from "./graph";
import NewContractModal from "@/components/contract/NewContractModal";
import {
  getUserContracts,
  getUserFriends,
  getUserTracks,
} from "@/store/actions/users.action";
import {
  getAllTrackTotalRevenue,
  getOneTrack,
  getTrackTotalStreams,
} from "@/store/actions/tracks.action";

export default function DashboardPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTrackTotalRevenue() as any);
    dispatch(getTrackTotalStreams() as any);
    dispatch(getUserFriends() as any);
    dispatch(getUserTracks() as any);
    dispatch(getOneTrack() as any);

    dispatch(getUserContracts() as any);
  }, [dispatch]);
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="hidden flex-col md:flex">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                Your Dashboard
              </h2>
              <div className="flex items-center space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="hover:bg-[#4EABFE] bg-[#4EABFE] text-white"
                      variant="default"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      New Contract
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="top-0 left-0 max-w-[100vw] h-screen translate-x-0 translate-y-0 bg-background3/[0.03] backdrop-blur-sm flex justify-center items-center data-[state=closed]:slide-out-to-left-[initial] data-[state=closed]:slide-out-to-top-[initial] data-[state=open]:slide-in-from-left-[initial] data-[state=open]:slide-in-from-top-[initial] rounded-none border-none new-contract-modal">
                    <div className="max-w-[1241px] p-0 !rounded-3xl border-none relative w-full">
                      <NewContractModal />
                      <DialogPrimitive.Close className="absolute right-3 top-3 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                      </DialogPrimitive.Close>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button
                  disabled
                  className="hover:bg-[#4EABFE] bg-[#4EABFE] text-white"
                  variant="default"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  License Contract
                </Button>
              </div>
            </div>
            <Graph />
          </div>
        </div>
        <TracksTable />
      </ThemeProvider>
    </>
  );
}
