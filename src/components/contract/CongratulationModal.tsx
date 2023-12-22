"use client";

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
import Link from "next/link";
import AnimatedLink from "../animatedLink";

interface Props extends React.HTMLAttributes<HTMLElement> {
  open: boolean;
  setOpen: (b: boolean) => void;
}
export default function CongratulationModal({ open, setOpen }: Props) {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 max-w-[800px]">
          <div className="flex flex-col items-center bg-modal rounded-3xl space-y-10 py-10 px-10 text-center">
            <Image
              src="https://www.billboard.com/wp-content/uploads/2022/06/beyonce-Lemonade-album-art-billboard-1240.jpg?w=1024"
              alt="track"
              width={200}
              height={200}
            />
            <h1 className="text-2xl font-semibold">
              Congratulations, your contract is ready!
            </h1>
            <p className="text-base text-gray-400">Lorem Ipsum ipsum ipsum</p>
            <AnimatedLink href="/contracts_settings/CR-1">
              <Button type="button" className="bg-mblue" variant="outline">
                Go to contract
              </Button>
            </AnimatedLink>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
