// UploadTrackPopover.tsx

import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';
import { Button } from '@/registry/new-york/ui/button';
import { Input } from '@/registry/new-york/ui/input';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { PopoverContent } from '@/registry/new-york/ui/popover';
import { ArtistMultiSelect } from './ArtistMultiSelect';

type Props = {
    popoverType?:string;
    width?: string;
    artists?: boolean;
    name?: string;
    track?: any; 
    onUpdateTrack: (trackId: string, newAudio: string, title: string) => void;
    onClosePopover: () => void;
};

export default function UploadTrackPopover({
    popoverType,
    width,
    artists,
    name,
    track,
    onUpdateTrack,
    onClosePopover,
}: Props) {
    const [audioURL, setAudioURL] = useState('');
    const [selectedAudio, setSelectedAudio] = useState<any>(null);
    const [selectedArtists, setSelectedArtists] = useState<any>([]);
    const [newTrackName, setNewTrackName] = useState<any>(name);

    const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const audio = event.target.files?.[0];
        if (audio) {
            const audioUrl = URL.createObjectURL(audio);
            setSelectedAudio(audio);
            setAudioURL(audioUrl)
            setNewTrackName(audio?.name.replace(".mp3", ""))
        }
    };

    const handleRemoveAudio = () => {
        setSelectedAudio(null);
        setAudioURL("")
        setNewTrackName("")
    };

    const handleUpdateTrack = () => {
        switch (popoverType) {
            case "track":
                if (selectedAudio) {
                    onUpdateTrack(track.id, "/" + selectedAudio?.name, newTrackName);
                }
                break;
            case "share":
                onUpdateTrack(track.id, selectedArtists, newTrackName);
                break;
            case "recording":
                    onUpdateTrack(track.id, selectedArtists, newTrackName);
                    break;
            default:
        }
        onClosePopover();

    };

    const handleSelectedArtist = (artists: any) => {
        setSelectedArtists(artists)
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
                    <div className={`grid items-end gap-3`}>
                        <div>
                            <Input
                                className=" h-[38px] bg-modal border-input3 mt-2 capitalize"
                                value={newTrackName}
                                onChange={(e) => setNewTrackName(e.target.value)}
                            />
                        </div>
                        <div className="text-center">
                            {
                                artists ?
                                    <ArtistMultiSelect artistRate={true} width={width} handleArtist={handleSelectedArtist} /> :
                                    <div className="relative">
                                        <Button
                                            variant={'outline'}
                                            className={`text-[11px] bg-modal py-1 px-2 h-[38px] w-full ${audioURL ? 'invisible' : 'visible'}`}
                                        >
                                            <label className="flex items-center  cursor-pointer">
                                                <UploadCloud className="h-5 w-5 mr-1" />
                                                Select Audio
                                                <input
                                                    type="file"
                                                    hidden
                                                    onChange={handleAudioUpload}
                                                    value={""}
                                                />
                                            </label>
                                        </Button>
                                        {audioURL && (
                                            <div>
                                                <div className="bg-modal rounded-xl selected-image-container z-20 absolute h-full w-full inset-0 flex items-center justify-between">
                                                    <audio
                                                        controls
                                                        className="w-[calc(100%-30px)] h-[38px] border border-border3 rounded-[30px]"
                                                    >
                                                        <source src={audioURL} type="audio/mp3" />
                                                    </audio>
                                                    <Button
                                                        onClick={handleRemoveAudio}
                                                        className="absolute top-1 right-1 h-4 w-4 flex items-center justify-center shadow-sm rounded-full p-0 mt-1.5"
                                                    >
                                                        <XMarkIcon className="text-black3" />
                                                    </Button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                <Button
                    className="hover:bg-[#5D9DF1] bg-mblue text-foreground w-fit mx-auto px-16 mt-4"
                    onClick={handleUpdateTrack}
                >
                    Save Track
                </Button>
            </div>
        </PopoverContent>
    );
}