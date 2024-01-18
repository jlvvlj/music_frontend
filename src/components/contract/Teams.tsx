// ** Components
import { toast } from "sonner";
import { StepProps, TeamMember } from "./types";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import useContractBuilder from "@/hooks/useContractBuilder";
import { Steps } from "@/contexts/ContractBuilderContext";
import { Sheet, SheetTrigger } from "@/registry/new-york/ui/sheet";
import { AlertCircle } from "lucide-react";
import ContractDrawer from "@/app/dashboard/components/contract-drawer";
import { shareTracks } from "@/app/data/data";
import { Popover, PopoverTrigger } from "@/registry/new-york/ui/popover";
import InvitationPopover from "./InvitationPopover";
import { ArtistMultiSelect } from "./ArtistMultiSelect";
import TeamShare from "./TeamShare";
import { TableCommon } from "./TableCommon";
import { ShareTrackColumn } from "./ShareTrackColumn";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/new-york/ui/table";
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import UploadTrackPopover from "./UploadTrackPopover";
import { useState, useEffect } from "react";

const Teams = ({
  handleNextStep,
  handleBackStep,
  contractCreation,
  setContractCreation,
  handleSwitchChange
}: any) => {
  const [updatedTracks, setUpdatedTracks] = useState(
    contractCreation?.TeamMembers?.updatedTracks || (shareTracks as any)
  );
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);
  const [selectedArtists, setSelectedArtists] = useState<any>(
    [...contractCreation?.members?.artists, ...contractCreation?.members?.masterOwners]
  );

  useEffect(() => {
    if (selectedArtists)
      setContractCreation((prevData: any) => ({
        ...prevData,
        members: {
          masterOwners: selectedArtists?.filter((artist: any) => artist.role === "master owner"),
          artists: selectedArtists?.filter((artist: any) => artist.role !== "master owner")
        },
      }));
  }, [selectedArtists]);

  const table = useReactTable<any>({
    data: updatedTracks,
    columns: ShareTrackColumn,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  const handleClickNext = () => {
    toast("Artists added successfully!", {
      description: "Artists",
      action: {
        label: "X",
        onClick: () => { },
      },
      position: "top-right",
    });
    handleNextStep();
  };

  const handleUpdateTrack = (
    trackId: string,
    artists: string,
    title: string
  ) => {
    const updatedData = updatedTracks.map((share: any) =>
      share.id == trackId ? { ...share, title: title, artists: artists } : share
    );
    setUpdatedTracks(updatedData);
  };

  const handleSelectedArtist = (artists: any) => {
    setSelectedArtists(artists);
    const masterOwners = artists?.filter(
      (artist: any) => artist.role === "master owner"
    );
    if (masterOwners?.length > 1)
      handleSwitchChange({ id: 4 }, true)
    else
      handleSwitchChange({ id: 4 }, false)
  };

  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="w-full pb-7 pt-[92px] bg-modal rounded-s-3xl h-[782px] flex flex-col justify-between">
        <div className="scrollbox overflow-auto w-full h-full">
          <div className="h-[calc(100%-40px)] px-10">
            <div className="flex items-center gap-2 mb-3">
              <h1 className="text-3xl font-semibold tracking-tight">
                Who’s in the team?
              </h1>
              <Sheet>
                <SheetTrigger asChild>
                  <AlertCircle className="cursor-pointer" />
                </SheetTrigger>
                <ContractDrawer title="Who’s in the team?" />
              </Sheet>
            </div>
            <p className="text-muted-foreground mb-[68px] text-sm">
              Invite your team to join the project.
            </p>
            <div className="flex justify-center flex-col items-center space-y-12">
              <ArtistMultiSelect
                width="max-w-[230px]"
                artistRate={false}
                handleArtist={handleSelectedArtist}
                selectedArtist={[...contractCreation?.members?.masterOwners, ...contractCreation?.members?.artists]}
              />
              <InvitationPopover />
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full mt-8 px-10">
          <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleBackStep}
          >
            <ArrowLeftIcon className="mr-1" />
            Back
          </Button>
          <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleClickNext}
          >
            Next
            <ArrowRightIcon className="ml-1" />
          </Button>
        </div>
      </div>
      <div className="relative flex items-end flex-col pb-7 pt-6 bg-modal-foreground rounded-r-3xl h-[782px]">
        <div className="scrollbox overflow-auto px-4 w-full h-full">
          <TeamShare members={contractCreation?.members} />
          <div className="rounded-2xl bg-modal border border-muted w-full p-4 mt-8">
            {/* <TableCommon data={shareTracks} columns={ShareTrackColumn} /> */}
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow
                    key={headerGroup.id}
                    style={{ border: "none" }}
                    className="bg-table3-foreground"
                  >
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead
                          key={header.id}
                          className="h-12 first:rounded-s-[20px] text-white3 last:rounded-r-[20px] font-normal"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        </TableHead>
                      );
                    })}
                    <TableHead className="h-12 first:rounded-s-[20px] text-white3 last:rounded-r-[20px] font-normal">
                      Edit
                    </TableHead>
                  </TableRow>
                ))}
              </TableHeader>
              <TableHeader className="w-full h-[11px] bg-table3" />
              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="hover:bg-transparent border-none"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                    <TableCell>
                      <Popover
                        open={openPopoverId === row.id}
                        onOpenChange={(isOpen) =>
                          isOpen
                            ? setOpenPopoverId(row.id)
                            : setOpenPopoverId(null)
                        }
                      >
                        <PopoverTrigger asChild>
                          <Pencil2Icon className="w-4 h-4 mr-1 text-[#4FABFE] text-center cursor-pointer" />
                        </PopoverTrigger>
                        <UploadTrackPopover
                          popoverType={"share"}
                          width="mx-auto"
                          artists={true}
                          name={row?.original?.title}
                          track={row.original}
                          onUpdateTrack={handleUpdateTrack}
                          onClosePopover={() => setOpenPopoverId(null)}
                        />
                      </Popover>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
