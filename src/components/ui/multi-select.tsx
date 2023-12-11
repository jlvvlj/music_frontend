"use client";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/registry/new-york/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/registry/new-york/ui/dropdown-menu";
type Props = {
  title: string;
  dataArr: any[];
  handleCheckChanged: (selected: boolean, obj: any) => void;
};
export function MultiSelect({ title, dataArr, handleCheckChanged }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="ml-auto lg:flex h-10 w-full px-3 py-2 text-sm"
        >
          {title}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>{title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {dataArr.map((column, index) => {
          return (
            <DropdownMenuCheckboxItem
              key={index}
              className=""
              checked={column.checked}
              onCheckedChange={(value) => handleCheckChanged(value, column)}
            >
              {column.label}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
