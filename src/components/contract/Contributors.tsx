"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { StepProps } from "./types";
import UploadTracks from "./UploadTracks";
import UploadTrackTable from "./UploadTrackTable";

const Contributors = ({ updateStep, }: StepProps) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [updateValue, setUpdateValue] = useState("");

  return (
    <div className={cn("grid grid-cols-2 h-full shadow-lg border rounded-3xl")}>
      <div className="flex-grow bg-modal pt-8 h-[645px] rounded-s-3xl">
        <UploadTracks updateStep={updateStep} selectedFile={selectedFile} setSelectedFile={setSelectedFile} updateValue={updateValue} setUpdateValue={setUpdateValue}/>
      </div>
      <UploadTrackTable selectedFile={selectedFile} updateValue={updateValue} setUpdateValue={setUpdateValue}/>
    </div>
  );
};

export default Contributors;
