"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york/ui/card"

const recordingCard = [
    { title: "Quantity", cost: "2" },
    { title: "Completion date", cost: "30%" },
    { title: "Commercial release", cost: "EUR 3000" },
    { title: "Option rights limit", cost: "EUR 3000" },
];

export default function RecordingsCard({ style }: { style: string }) {
    return (
        <div>
            <h6 className="text-2xl	mb-3">Recordings</h6>
            <p className="text-muted-foreground mb-7 text-sm">
                Artists participating in this contract.
            </p>
            <div className="pl-10">
                <div className="mb-14">
                    <h6 className="text-lg mb-2.5">Albums ( LPs ) - Firm</h6>
                    <p className="text-muted-foreground mb-5 text-sm">
                        Artists participating in this contract.
                    </p>
                    <div className="pl-4 flex flex-wrap gap-[18px] max-w-[1000px]">
                        {recordingCard.map((card, index) => (
                            <Card
                                key={index}
                                className={`${style} border-[#1D1D1F] pt-2 pl-2.5 pr-6 pb-4`}
                            >
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
                                    <CardTitle className="text-xs font-normal pb-5">
                                        {card.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="text-xs font-normal text-[#4EABFE]">
                                        {card.cost}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="mb-14">
                    <h6 className="text-lg mb-2.5">Singles ( LPs ) - Firm</h6>
                    <p className="text-muted-foreground mb-5 text-sm">
                        Artists participating in this contract.
                    </p>
                    <div className="pl-4 flex flex-wrap gap-[18px] max-w-[1000px]">
                        {recordingCard.map((card, index) => (
                            <Card
                                key={index}
                                className={`${style} border-[#1D1D1F] pt-2 pl-2.5 pr-6 pb-4`}
                            >
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
                                    <CardTitle className="text-xs font-normal pb-5">
                                        {card.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="text-xs font-normal text-[#4EABFE]">
                                        {card.cost}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="mb-14">
                    <h6 className="text-lg mb-2.5">Albums ( LPs ) - Optional</h6>
                    <p className="text-muted-foreground mb-5 text-sm">
                        Artists participating in this contract.
                    </p>
                    <div className="pl-4 flex flex-wrap gap-[18px] max-w-[1000px]">
                        {recordingCard.map((card, index) => (
                            <Card
                                key={index}
                                className={`${style} border-[#1D1D1F] pt-2 pl-2.5 pr-6 pb-4`}
                            >
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
                                    <CardTitle className="text-xs font-normal pb-5">
                                        {card.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="text-xs font-normal text-[#4EABFE]">
                                        {card.cost}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
