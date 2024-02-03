"use client";
import React, { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { StepProps } from "./types";
import UploadTracks from "./UploadTracks";
import UploadTrackTable from "./UploadTrackTable";
import { Button } from "../ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { URL } from "url";

const Contributors = ({
  handleNextStep,
  contractCreation,
  setContractCreation,
  register,
  watch,
  setValue,
  schema,
  errors
}: any) => {
  const [selectedFile, setSelectedFile] = useState(
    watch("album.cover") || ""
  );
  const [updateValue, setUpdateValue] = useState(
    watch("album.title") || ""
  );
  const [updatedTracks, setUpdatedTracks] = useState(
    watch("album.audios") || []
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
      setValue("album.title", updateValue)
      setValue("album.cover", selectedFile)
      setValue("album.audios", updatedTracks)
    }
  }, [selectedFile, updateValue, updatedTracks]);

  return (
    <div className={cn("grid grid-cols-2 h-full shadow-lg border rounded-3xl")}>
      <div className="flex-grow bg-modal pt-16 h-[782px] rounded-s-3xl">
        <UploadTracks
          contractCreation={contractCreation}
          handleNextStep={handleNextStep}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          updateValue={updateValue}
          setUpdateValue={setUpdateValue}
          setUpdatedTracks={setUpdatedTracks}
          updatedTracks={updatedTracks}
          register={register}
          setValue={setValue}
          watch={watch}
          schema={schema}
          errors={errors}
        />
      </div>
      <UploadTrackTable
        watch={watch}
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
