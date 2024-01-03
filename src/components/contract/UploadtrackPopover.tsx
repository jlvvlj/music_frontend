import { useState } from "react"
import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import {
    PopoverContent,
} from "@/registry/new-york/ui/popover"
import { UploadCloud } from "lucide-react"
import { ArtistMultiSelect } from "./ArtistMultiSelect"
import { XMarkIcon } from "@heroicons/react/20/solid"

type Props = {
    artists?: boolean;
    placeholder?: string;
    name?: string;
    artistRate?: boolean;
};

export default function UploadtrackPopover({ artists, placeholder, name, artistRate }: Props) {
    const [selectedAudio, setSelectedAudio] = useState("");

    const handleAudioUpload = (event: any) => {
        const audio = event.target.files[0];
        setSelectedAudio(URL.createObjectURL(audio));
    };

    const handleRemoveAudio = () => {
        setSelectedAudio("")
    }

    return (
        <PopoverContent className="w-96 bg-modal py-6 px-5">
            <div className="grid gap-8">
                <div className="space-y-3">
                    <h4 className="font-medium leading-none text-2xl">Track list</h4>
                    <p className="text-sm text-muted-foreground">
                        Edit your track’s names or audio files
                    </p>
                </div>
                <div className="grid gap-3">
                    <div className="grid grid-cols-5 items-end gap-3">
                        <div className="col-span-3">
                            <Label className="text-sm">Track 1</Label>
                            <Input
                                className=" h-[38px] bg-modal border-input3 mt-2"
                                value={name}
                            />
                        </div>
                        <div className="text-center col-span-2">
                            {artists ?
                                <ArtistMultiSelect
                                    placeholder={placeholder} artistRate={artistRate}/> :
                                <div className="relative">
                                    <Button variant={"outline"} className="text-[11px] bg-modal py-1 px-2 h-[38px]">
                                        <label className="flex items-center">
                                            <UploadCloud className="h-5 w-5 mr-1" />
                                            Select Audio
                                            <input type="file" hidden onChange={handleAudioUpload} />
                                        </label>
                                    </Button>
                                    {selectedAudio && (
                                        <div>
                                            <div className="bg-modal rounded-xl selected-image-container z-20 absolute h-full w-full inset-0 flex items-center justify-between">
                                                <audio controls className="w-[calc(100%-25px)] h-[38px] border border-border3 rounded-[30px]">
                                                    <source src={selectedAudio} type="audio/mp3" />
                                                </audio>
                                                <Button onClick={handleRemoveAudio} className="absolute top-1 right-1 h-4 w-4 flex items-center justify-center shadow-sm rounded-full p-0 mt-1.5"><XMarkIcon className="text-black3" /></Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <Button className="hover:bg-[#5D9DF1] bg-mblue text-foreground w-fit mx-auto px-16 mt-4">Save Track</Button>
            </div>
        </PopoverContent>
    )
}
