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
        <DialogContent className="p-0 max-w-[660px]">
          <div className="flex flex-col items-center bg-modal rounded-3xl py-10 px-10 text-center">
              <Image
                src="/Trophy.png"
                alt="track"
                width={200}
                height={200}
              />
            <h1 className="text-2xl font-semibold mt-10">
              Congratulations!
            </h1>
            <p className="text-base text-gray-400 mt-2 mb-10 mx-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <AnimatedLink href="/summary">
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
