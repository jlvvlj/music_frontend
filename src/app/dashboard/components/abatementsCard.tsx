"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york/ui/card"

const foreignCard = [
    { title: "In Canada and USA", cost: "20%" },
    { title: "In Italy, Spain and Portugal", cost: "10%" },
];

const abatementsCard = [
    { title: "Compilations", desc: "Abatements taken for compilations" },
    { title: "Promotions", desc: "Abatements taken for promotions" },
    { title: "Discounted Sales", desc: "Abatements taken for discounted sales" },
    { title: "Off Traditional Circuits Sales", desc: "Abatements for sales outside the traditional circuit" }
];

export default function AbatementsCard({ color }: { color: string }) {
    return (
        <div>
            <h6 className="text-2xl	mb-3">Abatements</h6>
            <p className="mb-7 text-sm text-muted-foreground">
                Abatements rates for foreign markets, compilation  and Promotion
            </p>
            <div className="pl-10">
                <div className="mb-14">
                    <h6 className="text-lg mb-2.5">Foreign sales</h6>
                    <p className="mb-5 text-sm text-muted-foreground">Abatements taken for foreign markets</p>
                    <div className="flex flex-wrap gap-[18px]">
                        {foreignCard.map((card, index) => (
                            <Card
                                key={index}
                                className={`${color} border-[#1D1D1F] pt-2 px-2.5 pb-4 w-[132px] h-[102px]`}
                            >
                                <CardHeader className="flex flex-col space-y-0 p-0">
                                    <CardTitle className="text-xs font-normal pb-1">
                                        Abatement rate
                                    </CardTitle>
                                    <p className="text-[8px] text-muted-foreground">{card.title}</p>
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
                {abatementsCard.map((card, index) =>
                    <div key={index} className="mb-14">
                        <h6 className="text-lg mb-2.5">{card.title}</h6>
                        <p className="mb-5 text-sm text-muted-foreground">
                            {card.desc}
                        </p>
                        <div className="flex flex-wrap gap-[18px]">
                            <Card className={`${color} border-[#1D1D1F] pt-2 px-2.5 pb-4 w-[132px] h-[102px]`}>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
                                    <CardTitle className="text-xs font-normal pb-5">
                                        Share of Base
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="text-xs font-normal text-[#4EABFE]">50%</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
