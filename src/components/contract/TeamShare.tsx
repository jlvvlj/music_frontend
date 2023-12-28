"use client"

import { Avatar } from "@/components/ui/avatar";
import Image from "next/image"

export default function TeamShare() {
    return (
        <div className="p-8 rounded-2xl bg-modal border border-muted w-full">
            <h6 className="text-2xl	mb-3">Team & Shares</h6>
            <p className="mb-7 text-sm text-muted-foreground">
                Artists participating in this contract.
            </p>
            <div className="pl-10">
                <h6 className="text-lg mb-3">Team members</h6>
                <p className="mb-7 text-sm text-muted-foreground">
                    Artists participating in this contract.
                </p>
                <div className="pl-4 flex gap-10">
                    <div className="flex flex-col items-center">
                        <p className="text-sm mb-3.5 text-muted-foreground">Master Owner</p>
                        <Avatar className="h-11 w-11 border border-white">
                            <Image
                                src="/julie.svg"
                                width={100}
                                height={100}
                                alt="avatar"
                            />
                        </Avatar>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm mb-3.5 text-muted-foreground">Artists</p>
                        <div className="flex">
                            <Avatar className="h-11 w-11 border border-white">
                                <Image
                                    src="/amandine.svg"
                                    width={100}
                                    height={100}
                                    alt="avatar"
                                />
                            </Avatar>
                            <Avatar className="h-11 w-11 -ml-2 border border-white">
                                <Image
                                    src="/orlane.svg"
                                    width={100}
                                    height={100}
                                    alt="avatar"
                                />
                            </Avatar>
                            <Avatar className="h-11 w-11 -ml-2 border border-white">
                                <Image
                                    src="/jon.svg"
                                    width={100}
                                    height={100}
                                    alt="avatar"
                                />
                            </Avatar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
