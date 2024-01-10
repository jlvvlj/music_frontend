"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/registry/new-york/ui/badge";
import { Switch } from "@/registry/default/ui/switch";
import { useState } from "react";
import { Checkbox } from "@/registry/new-york/ui/checkbox";

const additionalCards = [
    {
        id: 1,
        title: 'Initial Budget',
        badgeTitle: 'Budget', desc: 'budget',
        checkboxCards: [
            { id: 1, title: 'Registration', subTitle: 'Free for two weeks' },
            { id: 2, title: 'Multimedia', subTitle: 'Budget' },
            { id: 3, title: 'Promotion', subTitle: 'Budget' }
        ]
    },
    {
        id: 2,
        title: 'Royalties',
        badgeTitle: 'Royalties',
        desc: 'royalties',
        checkboxCards: [
            { id: 4, title: 'Single Rate', subTitle: 'Royalty rate' },
            { id: 5, title: 'Tiered', subTitle: 'Royalty rate' }
        ]
    },
    {
        id: 3,
        title: 'Royalties Advances',
        badgeTitle: 'Royalties',
        desc: 'advances',
        checkboxCards: [
            { id: 6, title: ' At Signature', subTitle: 'Advance' },
            { id: 7, title: 'At Commercial Release', subTitle: 'Advance' }
        ]
    },
    {
        id: 4,
        title: 'Abatements',
        badgeTitle: 'Abatements',
        desc: 'abatements',
        checkboxCards: [
            { id: 8, title: 'Foreign Sales', subTitle: 'Abatement rate' },
            { id: 9, title: 'Compilations', subTitle: 'Abatement rate' },
            { id: 10, title: 'Promotions', subTitle: 'Abatement rate' },
            { id: 11, title: 'Discounted Sales', subTitle: 'Abatement rate' },
            { id: 12, title: 'Off Traditional Circuits Sales', subTitle: 'Abatement rate' }
        ]
    },
    {
        id: 5,
        title: 'Broadcasting right & Secondary Use',
        badgeTitle: 'Budget',
        desc: 'secondary use case',
        checkboxCards: [
            { id: 13, title: 'Broadcasting', subTitle: 'Royalty rate' },
            { id: 14, title: 'Secondary Use', subTitle: 'Royalty rate' }
        ]
    },
    {
        id: 6,
        title: 'Derivative use',
        badgeTitle: 'Derivative use',
        desc: 'derivative use',
        checkboxCards: [
            { id: 15, title: 'Direct Merchandising', subTitle: 'Commission rate' },
            { id: 16, title: 'Direct Merchandising', subTitle: 'Commission rate' },
            { id: 17, title: 'Partnerships and Live events', subTitle: 'Commission rate' }
        ]
    }
]

export default function AdditionalConditions() {
    const [enabled, setEnabled] = useState<number[]>([])
    const [check, setCheck] = useState<number[]>([])

    const onCheckHandle = (id: number) => {
        const checkExist = enabled?.includes(id);

        if (checkExist) {
            setEnabled((prev) => prev?.filter((item) => item !== id));
        } else {
            setEnabled((prev) => [...prev, id]);
        }
    };

    const onCheck = (id: number) => {
        const checkExist = check?.includes(id);

        if (checkExist) {
            setCheck((prev) => prev?.filter((item) => item !== id));
        } else {
            setCheck((prev) => [...prev, id]);
        }
    };
    return (
        <div className="md:mx-[76px] md:my-[85px] mx-6 my-8">
            <h1 className="text-3xl font-semibold tracking-tight mb-3">
                Let’s add additional conditions
            </h1>
            <p className="text-sm text-muted-foreground md:mb-28 mb-10">
                These contract conditions are optional, select the ones you would like to include
            </p>
            <Card className="bg-transparent border-none shadow-none">
                <CardContent className="space-y-9 p-0">
                    {additionalCards.map((card, index) =>
                        <Card key={index} className="bg-modal rounded-3xl border-[#2E2E2E]">
                            <CardHeader className="py-5 pb-0">
                                <CardTitle className="text-[17px] font-normal flex justify-between">
                                    <div>
                                        <h6 className="text-[#4EABFE] text-2xl">{card.title}</h6>
                                        <Badge className="bg-[#0F233D] hover:bg-[#0F233D] text-[11px] py-0 px-1 text-[#4FABFE] rounded-3xl">{card.badgeTitle}</Badge>
                                        <p className="text-[#A1A1AA] text-sm mt-2">Select the {card.desc} categories you want to add</p>
                                    </div>
                                    <Switch className="mt-2.5" checked={enabled.includes(card.id)} onCheckedChange={() => onCheckHandle(card.id)} />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pb-8">
                                {enabled.includes(card.id) && <div>
                                    <div className="md:pt-16 pt-8 grid xl:grid-cols-3 xl:gap-[60px] sm:grid-cols-2 grid-cols-1 gap-5">
                                        {card?.checkboxCards.map((checkboxCard, index) =>
                                            <Card
                                                key={index}
                                                className={`${check.includes(checkboxCard.id) ? 'bg-blueForeground border-[#0072F4]' : 'bg-modal border-[#2E2E2E]'} pt-3.5 px-4 pb-6 flex justify-between items-center`}
                                            >
                                                <div>
                                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
                                                        <CardTitle className="text-sm font-medium pb-5">
                                                            {checkboxCard.title}
                                                        </CardTitle>
                                                    </CardHeader>
                                                    <CardContent className="p-0">
                                                        <div className="text-[15px] font-normal text-muted-foreground">
                                                            {checkboxCard.subTitle}
                                                        </div>
                                                    </CardContent>
                                                </div>
                                                <Checkbox
                                                    checked={check.includes(checkboxCard.id)} 
                                                    onCheckedChange={() => onCheck(checkboxCard.id)}
                                                    aria-label="Select all"
                                                    className="translate-y-[2px]"
                                                />
                                            </Card>
                                        )}
                                    </div>
                                </div>}
                            </CardContent>
                        </Card>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
