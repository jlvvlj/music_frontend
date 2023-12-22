"use client"

import { CardsActivityGoal } from "@/components/activity-goal";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image"

const members = [
    {
        name: "Julie Depree",
        avatar: "/julie.svg",
        value: 40
    },
    {
        name: "Jeff Scott",
        avatar: "/amandine.svg",
        value: 30
    },
    {
        name: "Orlane Song",
        avatar: "/orlane.svg",
        value: 30
    },
    {
        name: "Jon Savior",
        avatar: "/jon.svg",
        value: 20
    },
];

export default function TeamShareCard() {
    return (
        <div>
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
            <div className="pl-10 pt-12">
                <h6 className="text-lg mb-3">Team Shares</h6>
                <p className="mb-7 text-sm text-muted-foreground">
                    Artists participating in this contract.
                </p>
                <div className="pl-4 flex flex-col gap-3.5">
                    {members.map((member, index) =>
                        <div key={index} className="flex items-start justify-between pl-4 pt-1.5 rounded-md w-fit bg-background3 right-card">
                            <div className="flex gap-4">
                                <Avatar className="bg-[#A3D3FF] mt-2 h-11 w-11">
                                    <Image
                                        src={member.avatar}
                                        width={100}
                                        height={100}
                                        alt="avatar"
                                    />
                                </Avatar>
                                <div className="pt-3">
                                    <p className="text-sm font-medium leading-none text-[#4EABFE]">
                                        {member.name}
                                    </p>
                                    <p className="text-sm text-[#6DB5F9]">Master Owner</p>
                                </div>
                            </div>
                            <div className="">
                                <CardsActivityGoal
                                    label="SHARES OF REVENUES"
                                    initialValue={member.value}
                                    unit="%"
                                    step={10}
                                    buttonTitle="Set Share"
                                    minValue={0}
                                    maxValue={100}
                                    buttonHidden
                                    onClickButton={() => { }}
                                    setGoal={() => { }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
