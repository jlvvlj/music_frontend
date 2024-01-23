"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "@/registry/new-york/ui/badge";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type Framework = Record<"value" | "label" | "code", string | any>;

type Props = {
  frameworks: Framework[];
  placeholder: string;
  handleCountry: any;
};

export function CountryMultiSelect({ frameworks, placeholder, handleCountry }: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Framework[]>([]);
  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = React.useCallback((framework: Framework) => {
    setSelected((prev) => prev.filter((s) => s.value !== framework.value));
  }, []);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelected((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    []
  );

  const selectables = frameworks.filter(
    (framework) => !selected.includes(framework)
  );

  React.useEffect(() => {
    handleCountry(selected);
  },[selected])

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent"
    >
      <div className="group border bg-modal border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 max-w-[138px]">
        <div className="flex gap-1 flex-wrap">
          {selected.map((framework) => {
            return (
              <Badge key={framework.value} variant="secondary" className="bg-mblue w-full justify-between">
                {framework.code}
                <span className="ml-2">{framework.label}</span>
                <button
                  className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(framework);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => {
                    handleUnselect(framework)
                  }}
                >
                  <X className="h-3 w-3 text-white" />
                </button>
              </Badge>
            );
          })}
          <div className="flex justify-between w-full items-center relative">
            <CommandPrimitive.Input
              ref={inputRef}
              value={inputValue}
              onValueChange={setInputValue}
              onBlur={() => setOpen(false)}
              onFocus={() => setOpen(true)}
              placeholder={placeholder}
              className="bg-transparent outline-none placeholder:text-muted-foreground flex-1 w-full"
            />
            <ChevronDownIcon className="absolute right-0 top-0.5" />
          </div>
        </div>
      </div>
      <div className="relative mt-2">
        {open && selectables?.length > 0 ? (
          <div className="absolute w-full z-10 top-0 rounded-md border bg-modal text-popover-foreground shadow-md outline-none animate-in">
            <CommandGroup className="h-full overflow-auto">
              {selectables?.map((framework) => {
                return (
                  <CommandItem
                    key={framework.value}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={() => {
                      setInputValue("");
                      setSelected((prev) => [...prev, framework]);
                      handleCountry(selected)
                    }}
                    className={"cursor-pointer"}
                  >
                    {framework.code}
                    <span className="ml-2">{framework.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  );
}
