"use client"

import { UploadCloud } from "lucide-react"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import { XMarkIcon } from "@heroicons/react/20/solid"

const uploadCards = [
    { file: 'Only jpg or png. Up to 50 MB.', btn: 'Select Cover' },
    { file: 'Only mp3 or aac. Up to 50 MB.', btn: 'Select Audio' }
]

export default function UploadTracks() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileUpload = (event: any) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleRemoveFile = () => {
        setSelectedFile(null)
    }

    return (
        <div className="p-8 rounded-2xl bg-modal border border-muted w-full flex flex-col justify-between">
            <div>
                <h1 className="text-3xl font-semibold tracking-tight mb-[60px]">
                    Let’s upload your tracks
                </h1>
                <h6 className="text-lg">Album</h6>
                <p className="text-sm mb-[41px] text-muted-foreground">Enter the album title and your tracks audio folder.</p>
                <h6 className="mb-2.5">Album title</h6>
                <Input className="bg-modal mb-[55px]" />
                <Card className="bg-modal">
                    <CardHeader className="flex-row gap-3 space-y-0 items-center py-2.5">
                        <UploadCloud className="h-5 w-5" />
                        <div>
                            <h6 className="text-base">Upload your files</h6>
                            <p className="text-xs">Drag and drop your Cover and Tracks Folder.</p>
                        </div>
                    </CardHeader>
                    <Separator />
                    <CardContent className="py-5 grid grid-cols-2 gap-4">
                        {uploadCards.map((card, index) =>
                            <div key={index} className="bg-modal border border-3 py-5 px-2.5 rounded-xl relative">
                                <div>
                                    <UploadCloud className="h-5 w-5 mb-4 mx-auto" />
                                    <h6 className="text-[13px]">Choose a file or drag & drop it here</h6>
                                    <p className="text-[#737373] text-[13px] mx-3">{card.file}</p>
                                    <div className="text-center mt-2">
                                        <label className="text-[11px] bg-modal p-1 h-[34px] border border-border3 rounded py-2 cursor-pointer">
                                            {card.btn}
                                            <input type="file" hidden onChange={handleFileUpload} />
                                        </label>
                                    </div>
                                </div>
                                {selectedFile && (
                                    <div>
                                        <div className="bg-modal rounded-xl selected-image-container z-20 absolute h-full w-full inset-0 flex items-center justify-center">
                                            <img src={URL.createObjectURL(selectedFile)} alt="Selected Image" className="h-full w-full object-fit" />
                                            {/* <audio controls className="w-full mx-2.5 border border-border3 rounded-[30px]">
                                                <source src="" type="audio/mp3" />
                                            </audio> */}
                                            <Button onClick={handleRemoveFile} className="absolute top-1 right-1 h-5 w-5 flex items-center justify-center shadow-sm rounded-full p-0"><XMarkIcon className="text-black3" /></Button>
                                        </div>
                                    </div>
                                )}

                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
            <div className="flex justify-between w-full mt-8">
                <Button
                    className="bg-mblue"
                    variant="outline"
                >
                    <ArrowLeftIcon className="mr-1" />
                    Back
                </Button>
                <Button
                    className="bg-mblue"
                    variant="outline"
                >
                    Next
                    <ArrowRightIcon className="ml-1" />
                </Button>
            </div>
        </div>
    )
}
