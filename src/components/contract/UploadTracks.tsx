"use client";

import { UploadCloud } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { StepProps } from "./types";
import { Sheet, SheetTrigger } from "@/registry/new-york/ui/sheet";
import { AlertCircle } from "lucide-react";
import ContractDrawer from "@/app/dashboard/components/contract-drawer";
import { toast } from "sonner";
import { InfoIcon } from "lucide-react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

interface Props {
  contractCreation: any;
  handleNextStep: any;
  selectedFile: any;
  setSelectedFile: any;
  updateValue: any;
  setUpdateValue: any;
  setUpdatedTracks: any;
  updatedTracks: any;
  register: any
  setValue: any
  watch: any
  schema: any
  errors: any
}

export default function UploadTracks({
  contractCreation,
  handleNextStep,
  selectedFile,
  setSelectedFile,
  updateValue,
  setUpdateValue,
  setUpdatedTracks,
  updatedTracks,
  register,
  setValue,
  watch,
  schema,
  errors,
}: Props) {
  const [selectedAudios, setSelectedAudios] = useState<
    { id: string; title: string; audio: string; url?: string }[]
  >([]);
  const [selectedAudio, setSelectedAudio] = useState<{
    id: string;
    title: string;
    audio: string;
    url?: string;
    code?: string;
  } | null>(null);
  const [selectedAudioCode, setSelectedAudioCode] = useState("");

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
  };

  const handleRemoveFile = () => {
    setSelectedFile("");
  };

  const handleAudio = (event: any) => {
    const audio = event.target.files[0];
    setSelectedAudio({
      id: generateUniqueId(),
      title: audio?.name.replace(".mp3", ""),
      audio: "/" + audio?.name,
      url: URL.createObjectURL(audio),
      code: selectedAudioCode,
    });
  };

  const handleAudioUpload = () => {
    if (selectedAudio) {
      const updatedAudio = {
        ...selectedAudio,
        code: selectedAudioCode,
      };
      setSelectedAudios((prev) => [...prev, updatedAudio]);
      setSelectedAudio(null);
      setSelectedAudioCode("");
    }
  };

  const handleAudioRemove = (audioId: string) => {
    setSelectedAudios((prev) => prev.filter((audio) => audio.id !== audioId));
  };

  function generateUniqueId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }

  const handleUpdateTracks = () => {
    setUpdatedTracks([...updatedTracks, ...selectedAudios]);
    setSelectedAudios([]);
  };

  const handleClickNext = () => {
    const validationResult = schema?.safeParse({
      album: {
        title: watch("album.title"),
        cover: watch("album.cover"),
        audios: watch("album.audios")
      }
    })
    if (!validationResult.success) {
      return;
    }
    toast("Tracks updated successfully!", {
      description: "Tracks",
      action: {
        label: "X",
        onClick: () => { },
      },
      position: "top-right",
    });
    handleNextStep();
  };

  return (
    <div className="w-full py-7 rounded-s-3xl h-full flex flex-col justify-between">
      <div className="scrollbox overflow-auto w-full h-full">
        <div className="h-[calc(100%-40px)] px-10">
          <div className="mb-7 mt-3">
            <svg className="mx-auto" fill="hsl(var(--white3))" width="50px" height="40px" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145.04 116.32"><defs></defs><path className="cls-1" d="M79,58.91a7.18,7.18,0,1,1,14.35,0V66a8.59,8.59,0,0,0,8.62,8.62h4.31A8.57,8.57,0,0,0,114.84,66V60.35a8.59,8.59,0,0,0-8.61-8.62h-4.31a8.59,8.59,0,0,1-8.62-8.61V38.81a8.57,8.57,0,0,0-8.61-8.61H80.38a8.57,8.57,0,0,0-8.61,8.61v5.75a7.18,7.18,0,1,1-14.36,0V38.81a8.57,8.57,0,0,0-8.62-8.61H30.13a8.57,8.57,0,0,0-8.62,8.61V86.19a8.57,8.57,0,0,0,8.62,8.62h4.3a8.57,8.57,0,0,0,8.62-8.62V58.91a7.18,7.18,0,0,1,12.26-5.08,6.91,6.91,0,0,1,2.1,5.08V86.19A8.57,8.57,0,0,0,66,94.81h4.31A8.59,8.59,0,0,0,79,86.19Z"
            />
              <path className="cls-1" d="M110.6,43.05A8.57,8.57,0,0,1,102,34.44V30.13a8.57,8.57,0,0,1,8.61-8.62h4.31a8.59,8.59,0,0,1,8.62,8.62v4.31a8.59,8.59,0,0,1-8.62,8.61Z" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-2 mb-3">
            <h1 className="text-3xl font-semibold tracking-tight">
              Let’s upload your tracks
            </h1>
            <Sheet>
              <SheetTrigger asChild>
                <InfoIcon className="cursor-pointer mt-1" />
              </SheetTrigger>
              <ContractDrawer title="Let’s upload your tracks" />
            </Sheet>
          </div>
          <p className="text-sm mb-[41px] text-muted-foreground text-center">
            Enter the album title and your tracks audio folder.
          </p>
          <h6 className="mb-2.5">Album title</h6>
          <div className="mb-[55px]">
            <Input
              className="bg-modal"
              value={updateValue}
              onChange={(e) => setUpdateValue(e.target.value)}
            />

            <p className="mt-2 text-[red]">{(updateValue === "" && !contractCreation?.album?.title) && errors?.album?.title?.message}</p>
          </div>
          <Card className="bg-modal mb-8">
            <CardHeader className="flex-row gap-3 space-y-0 items-center py-2.5">
              <UploadCloud className="h-5 w-5" />
              <div>
                <h6 className="text-base">Upload your files</h6>
                <p className="text-xs">
                  Drag and drop your Cover and Tracks Folder.
                </p>
              </div>
            </CardHeader>
            <Separator />
            <CardContent className="py-5 gap-4">
              <div className="bg-modal border border-3 rounded-xl relative">
                <label className="cursor-pointer block py-20 px-2.5">
                  <UploadCloud className="h-5 w-5 mb-4 mx-auto" />
                  <h6 className="text-[13px] text-center">
                    Choose a file or drag & drop it here
                  </h6>
                  <p className="text-[#737373] text-[13px] mx-4 text-center">
                    Only jpg or png. Up to 50 MB.
                  </p>
                  <div className="text-center mt-2">
                    <label className="text-[11px] bg-modal p-1 h-[34px] border border-border3 rounded-xl py-2 cursor-pointer">
                      Select Cover
                      <input
                        type="file"
                        hidden
                        onChange={handleFileUpload}
                      />
                    </label>
                    <p className="mt-2 text-[red]"> {(selectedFile === "" && !contractCreation?.album?.cover) && errors?.album?.cover?.message}</p>
                  </div>
                </label>
                {watch("album.cover") && (
                  <div>
                    <div className="bg-modal rounded-xl selected-image-container z-20 absolute h-full w-full inset-0 flex items-center justify-center">
                      <img
                        src={watch("album.cover")}
                        alt="Selected Image"
                        className="h-full w-full object-cover rounded-xl"
                      />
                      <Button
                        onClick={() => setValue("album.cover", "")}
                        className="absolute top-1 right-1 h-5 w-5 flex items-center justify-center shadow-sm rounded-full p-0"
                      >
                        <XMarkIcon className="text-black3" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-modal">
            <CardHeader className="flex-row gap-3 space-y-0 items-center py-2.5">
              <UploadCloud className="h-5 w-5" />
              <div>
                <h6 className="text-base">Upload your audio</h6>
                <p className="text-xs">Drag and drop your Audios.</p>
              </div>
            </CardHeader>
            <Separator />
            <CardContent className="py-5 gap-4">
              <div className="bg-modal border border-3 rounded-xl relative">
                <label className="cursor-pointer block px-2.5 pt-3 pb-4">
                  <UploadCloud className="h-5 w-5 mb-4 mx-auto" />
                  <h6 className="text-[13px] text-center">
                    Choose a file or drag & drop it here
                  </h6>
                  <p className="text-[#737373] text-[13px] mx-4 text-center">
                    Only jpg or png. Up to 50 MB.
                  </p>
                  <div className="text-center mt-2">
                    <label className="text-[11px] bg-modal p-1 h-[34px] border border-border3 rounded-xl py-2 cursor-pointer">
                      Select Audio
                      <input
                        type="file"
                        hidden
                        onChange={handleAudio}
                        value={""}
                      />
                    </label>
                    <p className="mt-2 text-[red]">{(contractCreation?.album?.audios?.length === 0 && errors?.album?.audios?.message) && errors?.album?.audios?.message}</p>
                  </div>
                </label>
                {selectedAudio && (
                  <div className="inset-0 absolute px-2 py-[11px] w-full bg-modal rounded-xl flex flex-col justify-between">
                    <div className="w-full flex justify-between items-center gap-4">
                      <div className="bg-modal rounded-xl selected-image-container z-20 w-full flex items-center justify-between gap-4">
                        <audio
                          controls
                          className="w-[50%] border border-border3 rounded-[30px]"
                        >
                          <source src={selectedAudio?.url} type="audio/mp3" />
                        </audio>
                        <Input
                          type="text"
                          placeholder="Code"
                          className="bg-modal w-[40%]"
                          onChange={(e) => setSelectedAudioCode(e.target.value)}
                        />
                        <Button
                          className="h-4 w-4 flex items-center justify-center shadow-sm rounded-full p-0 mt-1.5"
                          onClick={() => setSelectedAudio(null)}
                        >
                          <XMarkIcon className="text-black3" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      className="w-fit ml-auto"
                      onClick={handleAudioUpload}
                      disabled={!selectedAudio}
                    >
                      Upload
                    </Button>
                  </div>
                )}
              </div>
              {selectedAudios?.length > 0 && (
                <div className="mt-6">
                  <div className="space-y-6 mt-6 bg-modal p-4 rounded-xl border  max-h-[322px] scrollbox overflow-auto">
                    {selectedAudios?.map((audio) => {
                      return (
                        <div
                          key={audio.id}
                          className="bg-modal rounded-xl selected-image-container z-20 w-full flex items-center justify-between"
                        >
                          <audio
                            controls
                            className="w-[calc(100%-30px)] border border-border3 rounded-[30px]"
                          >
                            <source src={audio.url} type="audio/mp3" />
                          </audio>
                          <Button
                            onClick={() => handleAudioRemove(audio.id)}
                            className="h-4 w-4 flex items-center justify-center shadow-sm rounded-full p-0 mt-1.5"
                          >
                            <XMarkIcon className="text-black3" />
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </CardContent>
            {selectedAudios.length ? (
              <Button
                className="mb-5 mr-6 ml-auto flex"
                onClick={handleUpdateTracks}
                disabled={!selectedAudios.length}
              >
                Save
              </Button>
            ) : (
              ""
            )}
          </Card>
        </div>
      </div>
      <div className="flex justify-between w-full mt-8 px-8">
        <Button className="bg-mblue" variant="outline">
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
  );
}
