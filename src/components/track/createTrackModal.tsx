// import "../app/globals.css"
// import Simpleform from "@/pages/simpleform"
// import TrackCreationTabs from "../ui/createTrackTabs"
// import CreateTrackTabs from "./createTrackTabs"
// import UploadFile from "@/components/ui/upload-file"

import { Button } from "@/components/ui/button"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function CreateTrackModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button >Add a new track</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1000px]">
                <DialogHeader>
                    <DialogTitle>Add a track</DialogTitle>
                    <DialogDescription>
                        Add your edtrase information here. Click submit when you're done.
                    </DialogDescription>
                </DialogHeader>
                {/* <UploadFile input="Track File" />
                <UploadFile input="Track Image" /> */}
                {/* <CreateTrackTabs/> */}
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
