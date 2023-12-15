"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    title: string;
    currency?: string;
  }

const CurrencyInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, title, currency = "EUR", ...props }, ref) => {
    return (
      <>
        <p className={cn("text-sm font-normal", className)}>{title}</p>
        <div className="max-w-[128px] pl-2 pr-3 py-1 mt-3 flex items-center gap-2 rounded-md border border-solid border-[#27272A] ">
          <input
            type="text"
            className={cn(
              "h-8 w-full text-sm  focus:outline-none bg-transparent",
              className
            )}
            ref={ref}
            {...props}
          />
          <p className="text-sm font-normal text-[#94A3B8]">{currency}</p>
        </div>
      </>
    );
  }
);
CurrencyInput.displayName = "CurrencyInput";

export { CurrencyInput };
