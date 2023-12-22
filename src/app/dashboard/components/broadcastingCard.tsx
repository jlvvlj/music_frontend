"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york/ui/card"

const broadcastingCard = [
    { title: "Broadcasting", desc: "Concession Royalties to be paid" },
    { title: "Secondary Use", desc: "Royalties to be paid for secondary use" }
];

export default function BroadcastingCard() {
    return (
        <div>
            <h6 className="text-2xl	mb-3">Broadcasting right & Secondary Use</h6>
            <p className="mb-7 text-sm text-muted-foreground">
                Broadcasting right & Secondary Use
            </p>
            <div className="pl-10">
                {broadcastingCard.map((card, index) =>
                    <div key={index} className="mb-14">
                        <h6 className="text-lg mb-2.5">{card.title}</h6>
                        <p className="mb-5 text-sm text-muted-foreground">
                            {card.desc}
                        </p>
                        <div className="flex flex-wrap gap-[18px]">
                            <Card className="bg-modal-foreground border-[#1D1D1F] pt-2 px-2.5 pb-4 w-[132px] h-[102px]">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
                                    <CardTitle className="text-xs font-normal pb-5">
                                        Royalty rate
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="text-xs font-normal text-[#4EABFE]">20%</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
