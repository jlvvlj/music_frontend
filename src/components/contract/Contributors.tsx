"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { StepProps } from "./types";
import UploadTracks from "./UploadTracks";
import UploadTrackTable from "./UploadTrackTable";

const Contributors = ({ updateStep, }: StepProps) => {

  return (
    <div className={cn("grid grid-cols-2 h-full shadow-lg border rounded-3xl")}>
      <div className="flex-grow bg-modal pt-8 h-[645px] rounded-s-3xl">
        <UploadTracks updateStep={updateStep} />
      </div>
      <UploadTrackTable />
    </div>
  );
};

export default Contributors;
