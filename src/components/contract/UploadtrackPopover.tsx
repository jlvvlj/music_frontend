import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import {
    PopoverContent,
} from "@/registry/new-york/ui/popover"
import { UploadCloud } from "lucide-react"
import { ArtistMultiSelect } from "./ArtistMultiSelect"

type Props = {
    artists?: boolean;
    placeholder?: string;
};

export default function UploadtrackPopover({ artists, placeholder }: Props) {
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
                                className=" h-[38px] bg-modal border-input3 text-[#666666] mt-2"
                            />
                        </div>
                        <div className="text-center col-span-2">
                            {artists ?
                                <Button variant={"outline"} className="text-[11px] bg-modal py-1 px-2 h-[38px]"><UploadCloud className="h-5 w-5 mr-1" />Select Audio</Button> :
                                <ArtistMultiSelect
                                    placeholder={placeholder} />
                            }
                        </div>
                    </div>
                </div>
                <Button className="hover:bg-[#5D9DF1] bg-mblue text-foreground w-fit mx-auto px-16 mt-4">Save Track</Button>
            </div>
        </PopoverContent>
    )
}
