import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
