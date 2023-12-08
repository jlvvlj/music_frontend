"use client";
import { useDropzone, FileWithPath } from "react-dropzone";
import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

export default function UploadFile(props: {
  input: string;
  buttonLabel?: string;
}) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <>
      <div
        {...getRootProps({
          className: "dropzone grid w-full max-w-sm items-center gap-1.5",
        })}
      >
        <Label htmlFor="input">{props.input}</Label>
        <Input id="input" type="file" {...getInputProps()} />

        <p className="border border-solid border-white p-2 rounded-md mt-1 flex items-center gap-5">
          <ArrowUpTrayIcon className="h-5 w-5 text-white" aria-hidden="true" />
          {props.buttonLabel ? props.buttonLabel : "Drop or Select file"}
        </p>
      </div>
      <div>
        <ul>{files}</ul>
      </div>
    </>
  );
}
