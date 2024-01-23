"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "@/registry/new-york/ui/badge";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Avatar } from "../ui/avatar";
import Image from "next/image";
import { CardsActivityGoal } from "../activity-goal";

type Framework = Record<
  | "name"
  | "surName"
  | "value"
  | "email"
  | "avatar"
  | "code"
  | "revenue"
  | "role",
  any
> & { id: number };

type Props = {
  handleArtist?: any; // (artist: []) => void;
  artists?: Framework[];
  placeholder?: string;
  artistRate?: boolean;
  width?: string;
  selectedArtist?: any;
};

export function ArtistMultiSelect({
  placeholder,
  width,
  artistRate,
  handleArtist,
  selectedArtist,
  artists = [
    {
      id: 1,
      name: "Julie Depree",
      surName: "",
      value: "julieDepree",
      email: "",
      avatar: "/julie.svg",
      code: "JD",
      revenue: 0,
      role: "master owner",
    },
    {
      id: 2,
      name: "Jeff Scott",
      surName: "",
      value: "jeffScott",
      email: "",
      avatar: "/amandine.svg",
      code: "JS",
      revenue: 0,
      role: "master owner",
    },
    {
      id: 3,
      name: "Orlane Song",
      surName: "",
      value: "orlaneSong",
      email: "",
      avatar: "/orlane.svg",
      code: "OS",
      revenue: 0,
      role: "singer",
    },
    {
      id: 4,
      name: "Jon Doe",
      surName: "",
      value: "Jon",
      email: "",
      avatar: "/jon.svg",
      code: "OS",
      revenue: 0,
      role: "musician",
    },
  ],
}: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selectedArtists, setSelectedArtists] = React.useState<Framework[]>(
    selectedArtist || []
  );
  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = React.useCallback((framework: Framework) => {
    setSelectedArtists((prev) =>
      prev.filter((s) => s.value !== framework.value)
    );
  }, []);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelectedArtists((prev) => {
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

  return (
    <Command
      onKeyDown={handleKeyDown}
      className={`overflow-visible bg-transparent h-auto ${width} group`}
    >
      <div className="relative border border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 bg-card3">
        {!selectedArtists.length && <p className="absolute">Select Artist</p>}
        <div className="flex gap-1 flex-wrap">
          {selectedArtists.map((artist) => {
            return (
              <Badge
                key={artist.value}
                variant="secondary"
                className="bg-mblue flex items-center justify-between w-full text-white hover:bg-mblue"
              >
                <div className="flex">
                  <Avatar className="h-11 w-11 border border-white">
                    <Image
                      src={artist.avatar}
                      width={100}
                      height={100}
                      alt="avatar"
                    />
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="ml-4 text-sm">{artist.name}</span>
                    <span className="ml-4 text-[11px] capitalize">
                      {artist.role}
                    </span>
                  </div>
                </div>
                {artistRate && (
                  <CardsActivityGoal
                    label=""
                    initialValue={artist?.revenue}
                    unit="%"
                    step={10}
                    minValue={0}
                    maxValue={100}
                    buttonHidden
                    onClickButton={() => {}}
                    setGoal={() => {}}
                    chartHidden
                    padding="pr-0"
                  />
                )}
                <button
                  className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => {
                    handleUnselect(artist);
                    handleArtist(artist,"remove");
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
              className="ml-2 bg-transparent outline-none placeholder:text-white3 w-full"
            />
            <ChevronDownIcon className="absolute right-0 top-0.5" />
          </div>
        </div>
      </div>
      <div className="relative flex justify-center group-hover:visible invisible group-hover:opacity-100 opacity-0">
        {/* {open ? ( */}
        <div className="absolute w-full z-10 rounded-md border bg-modal text-popover-foreground shadow-md outline-none animate-in">
          <CommandGroup className="h-full overflow-auto">
            {!artists?.filter(
              (item) =>
                !selectedArtists.some(
                  (itemToBeRemoved) => itemToBeRemoved.id === item.id
                )
                )?.length && <h3 className="text-sm text-center p-2">No Artist</h3>}
                {artists
              ?.filter(
                (item) =>
                  !selectedArtists.some(
                    (itemToBeRemoved) => itemToBeRemoved.id === item.id
                  )
              )
              .map((artist) => {
                return (
                  <CommandItem
                    key={artist.value}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={(value) => {
                      setInputValue("");
                      setSelectedArtists((prev) => [...prev, artist]);
                      handleArtist(artist,"");
                    }}
                    className={
                      "cursor-pointer justify-between aria-selected:bg-mblue aria-selected:text-white text-[#4EABFE]"
                    }
                  >
                    <div className="flex items-center">
                      <Avatar className="h-11 w-11 border border-white">
                        <Image
                          src={artist.avatar}
                          width={100}
                          height={100}
                          alt="avatar"
                        />
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="ml-4 text-sm">{artist.name}</span>
                        <span className="ml-4 text-[11px] capitalize">
                          {artist.role}
                        </span>
                      </div>
                    </div>
                    {artistRate && (
                      <CardsActivityGoal
                        label=""
                        initialValue={parseInt(artist.revenue)}
                        unit={"%"}
                        step={10}
                        buttonTitle="Set Share"
                        minValue={0}
                        maxValue={100}
                        buttonHidden
                        onClickButton={() => {}}
                        setGoal={() => {}}
                        chartHidden
                        padding="pr-0"
                      />
                    )}
                  </CommandItem>
                );
              })}
          </CommandGroup>
        </div>
        {/* ) : null} */}
      </div>
    </Command>
  );
}
