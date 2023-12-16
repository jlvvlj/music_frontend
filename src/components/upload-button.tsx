"use client";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { useDropzone, FileWithPath } from "react-dropzone";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  imageUrl: string | null;
  files: any[];
  setFiles: Dispatch<SetStateAction<any[]>>;
  onImageChange: (url: any) => void;
}

export default function UploadButton({
  title,
  className,
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
            className: cn(
              "dropzone w-[50px] h-[50px] overflow-hidden",
              className
            ),
          })}
        >
          <Image src={imageUrl} width={50} height={50} alt="track" />
          <Input id="input" type="file" {...getInputProps()} />
        </div>
      ) : (
        <button
          {...getRootProps({
            className: cn(
              "dropzone w-[50px] h-[50px] !bg-[#A3D3FF] text-white",
              className
            ),
          })}
        >
          <Input id="input" type="file" {...getInputProps()} />
          <span>{title}</span>
        </button>
      )}
    </>
  );
}
