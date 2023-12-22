"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york/ui/card"

const royaltiesCard = [
    { title: "At Signature", cost: "EUR 3000" },
    { title: "At Release", cost: "EUR 5000" },
];

export default function AdvanceRoyaltiesCard() {
    return (
        <div>
            <h6 className="text-2xl	mb-3">Royalties Advances</h6>
            <p className="mb-7 text-sm text-muted-foreground">
                Royalties Advances for Artists
            </p>
            <div className="pl-10">
                <div className="flex flex-wrap gap-[18px] mb-14">
                    {royaltiesCard.map((card, index) => (
                        <Card
                            key={index}
                            className="bg-modal-foreground border-[#1D1D1F] pt-2 px-2.5 pb-4 w-[132px] h-[102px]"
                        >
                            <CardHeader className="flex flex-col space-y-0 p-0">
                                <CardTitle className="text-xs font-normal pb-1">
                                    {card.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 pt-5">
                                <div className="text-xs font-normal text-[#4EABFE]">
                                    {card.cost}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
