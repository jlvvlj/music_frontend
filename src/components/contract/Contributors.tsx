"use client";
import React, { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { StepProps } from "./types";
import UploadTracks from "./UploadTracks";
import UploadTrackTable from "./UploadTrackTable";
import { Button } from "../ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const Contributors = ({
  handleNextStep,
  contractCreation,
  setContractCreation,
}: any) => {
  const [selectedFile, setSelectedFile] = useState(
    contractCreation.album.cover || ""
  );
  const [updateValue, setUpdateValue] = useState(
    contractCreation.album.title || ""
  );
  const [updatedTracks, setUpdatedTracks] = useState(
    contractCreation.album.audios
  );

  useEffect(() => {
    if (selectedFile || updateValue || updatedTracks) {
      setContractCreation((prevData: any) => ({
        ...prevData,
        album: {
          title: updateValue,
          cover: selectedFile,
          audios: updatedTracks,
        },
      }));
    }
  }, [selectedFile, updateValue, updatedTracks]);

  return (
    <div className={cn("grid grid-cols-2 h-full shadow-lg border rounded-3xl")}>
      <div className="flex-grow bg-modal pt-16 h-[782px] rounded-s-3xl">
        <UploadTracks
          handleNextStep={handleNextStep}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          updateValue={updateValue}
          setUpdateValue={setUpdateValue}
          setUpdatedTracks={setUpdatedTracks}
          updatedTracks={updatedTracks}
        />
      </div>
      <UploadTrackTable
        selectedFile={selectedFile}
        updateValue={updateValue}
        setUpdateValue={setUpdateValue}
        setUpdatedTracks={setUpdatedTracks}
        updatedTracks={updatedTracks}
      />
    </div>
  );
};

export default Contributors;
