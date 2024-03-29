"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { SelectSingleEventHandler } from "react-day-picker";
import { button } from "@nextui-org/react";

interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  date: Date;
  buttonClassName?: string;
  onDateChange: SelectSingleEventHandler;
}
export default function DatePicker({
  className,
  buttonClassName,
  placeholder,
  date,
  onDateChange,
}: DatePickerProps) {
  return (
    <div className={cn("grid gap-2 bg-moda", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[170px] justify-start text-left font-normal text-sm",
              !date && "text-muted-foreground", buttonClassName
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? (
              <span>{format(date, "LLL dd, y")}</span>
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="single"
            defaultMonth={date}
            selected={date}
            onSelect={onDateChange}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
