"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { StepProps } from "./types";
import UploadTracks from "./UploadTracks";
import UploadTrackTable from "./UploadTrackTable";
import { teamTracks } from "@/app/data/data";

const Contributors = ({ updateStep, }: StepProps) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [updateValue, setUpdateValue] = useState("");
  const [updatedTracks, setUpdatedTracks] = useState(teamTracks);
  

  return (
    <div className={cn("grid grid-cols-2 h-full shadow-lg border rounded-3xl")}>
      <div className="flex-grow bg-modal pt-8 h-[645px] rounded-s-3xl">
        <UploadTracks updateStep={updateStep} selectedFile={selectedFile} setSelectedFile={setSelectedFile} updateValue={updateValue} setUpdateValue={setUpdateValue} setUpdatedTracks={setUpdatedTracks} updatedTracks={updatedTracks}/>
      </div>
      <UploadTrackTable selectedFile={selectedFile} updateValue={updateValue} setUpdateValue={setUpdateValue} setUpdatedTracks={setUpdatedTracks} updatedTracks={updatedTracks}/>
    </div>
  );
};

export default Contributors;
