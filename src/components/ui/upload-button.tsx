"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { useDropzone, FileWithPath } from "react-dropzone";
import { Input } from "@/components/ui/input";
import { Button } from "./button";

interface ButtonProps {
  imageUrl: string | null;
  files: any[];
  setFiles: Dispatch<SetStateAction<any[]>>;
  onImageChange: (url: any) => void;
}

export default function UploadButton({
  imageUrl,
  files,
  setFiles,
  onImageChange,
}: ButtonProps) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      console.log("file dropped");
      onImageChange(URL.createObjectURL(acceptedFiles[0]));
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  return (
    <>
      {imageUrl ? (
        <div
          {...getRootProps({
            className: "dropzone w-[50px] h-[50px] overflow-hidden",
          })}
        >
          <Image src={imageUrl} width={50} height={50} alt="track" />
          <Input id="input" type="file" {...getInputProps()} />
        </div>
      ) : (
        <Button
          {...getRootProps({
            className: "dropzone !bg-[#1E293B] text-white",
          })}
        >
          <Input id="input" type="file" {...getInputProps()} />
          <span>+</span>
        </Button>
      )}
    </>
  );
}
