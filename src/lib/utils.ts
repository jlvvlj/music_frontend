import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { isClerkAPIResponseError } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/server";
import { toast } from "sonner";
import * as z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBytes(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function fallbackAvatar(name: string) {
  const blocks = name.split(" ");
  let fallbackName = "";
  switch (blocks.length) {
    case 1:
      fallbackName = blocks[0].charAt(0).toUpperCase();
      break;

    default:
      fallbackName =
        blocks[0].charAt(0).toUpperCase() + blocks[1].charAt(0).toUpperCase();
      break;
  }

  return fallbackName;
}

export function catchClerkError(err: unknown) {
  const unknownErr = "Something went wrong, please try again later.";

  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message;
    });
    return toast(errors.join("\n"));
  } else if (isClerkAPIResponseError(err)) {
    return toast.error(err.errors[0]?.longMessage ?? unknownErr);
  } else {
    return toast.error(unknownErr);
  }
}
