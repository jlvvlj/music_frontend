import "../app/globals.css"
import Simpleform from "@/pages/simpleform"
import TrackCreationTabs from "../components/track/createTrackTabs"
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
import UploadFile from "@/components/ui/upload-file"
import CreateTrackTabs from "../components/track/createTrackTabs"
import createTrackModal from "@/pages/createTrackModal"

export default function CreateTrackModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Track Info</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px]">
                <DialogHeader>
                    <DialogTitle>Add a track</DialogTitle>
                    <DialogDescription>
                        Add your track information here. Click submit when you're done.
                    </DialogDescription>
                </DialogHeader>
                {/* <UploadFile input="Track File" />
                <UploadFile input="Track Image" /> */}
                <createTrackModal/>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
