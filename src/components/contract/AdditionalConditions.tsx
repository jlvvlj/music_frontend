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
import { StepIndex, StepProps } from "./types";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const additionalCards = [
    {
        id: 5,
        label: "Budgets",
        step: StepIndex.BUDGET,
        title: "Initial Budget",
        subTitle: "",
        saveBtnHidden: false,
        description: "Enter the budget  details",
        checkboxCards: [
            { id: 1, title: 'Registration', subTitle: 'Free for two weeks' },
            { id: 2, title: 'Multimedia', subTitle: 'Budget' },
            { id: 3, title: 'Promotion', subTitle: 'Budget' }
        ]
    },
    {
        id: 6,
        label: "Royalties Advances",
        step: StepIndex.ROYALTIES_ADVANCES,
        title: "Royalties Advances",
        subTitle:
            "Would you like to include a Royalty advance for some of your Recordings?",
        saveBtnHidden: false,
        description: "Enter the contract royalties details",
        checkboxCards: [
            { id: 6, title: ' At Signature', subTitle: 'Advance' },
            { id: 7, title: 'At Commercial Release', subTitle: 'Advance' }
        ]
    },
    {
        id: 7,
        label: "Abatements",
        step: StepIndex.ABATEMENTS,
        title: "Abatements",
        subTitle: "Would you like to include Abatements to the contract?",
        saveBtnHidden: false,
        description: "Enter the contract royalties details",
        checkboxCards: [
            { id: 8, title: 'Foreign Sales', subTitle: 'Abatement rate' },
            { id: 9, title: 'Compilations', subTitle: 'Abatement rate' },
            { id: 10, title: 'Promotions', subTitle: 'Abatement rate' },
            { id: 11, title: 'Discounted Sales', subTitle: 'Abatement rate' },
            { id: 12, title: 'Off Traditional Circuits Sales', subTitle: 'Abatement rate' }
        ]
    },
    {
        id: 8,
        label: "BroadCasting",
        step: StepIndex.BROADCASTING,
        title: "Broadcasting right & Secondary Use",
        subTitle: "Would you like to include Broadcasting right & Secondary Use rules?",
        saveBtnHidden: false,
        description: "Enter the contract secondary use details",
        checkboxCards: [
            { id: 13, title: 'Broadcasting', subTitle: 'Royalty rate' },
            { id: 14, title: 'Secondary Use', subTitle: 'Royalty rate' }
        ]
    },
    {
        id: 9,
        label: "Derivative use",
        step: StepIndex.DERIVATIVE_USE,
        title: "Derivative use",
        subTitle: "Would you like to include Derivative use rules?",
        saveBtnHidden: false,
        description: "Enter the contract secondary use details",
        checkboxCards: [
            { id: 15, title: 'Direct Merchandising', subTitle: 'Commission rate' },
            { id: 16, title: 'Direct Merchandising', subTitle: 'Commission rate' },
            { id: 17, title: 'Partnerships and Live events', subTitle: 'Commission rate' }
        ]
    }
]

export default function AdditionalConditions({ handleNextStep, handleBackStep, handleSwitchChange }: any) {
    const [enabled, setEnabled] = useState<number[]>([])
    const [check, setCheck] = useState<number[]>([])

    const onCheck = (id: number) => {
        const checkExist = check?.includes(id);

        if (checkExist) {
            setCheck((prev) => prev?.filter((item) => item !== id));
        } else {
            setCheck((prev) => [...prev, id]);
        }
    };

    const handleClickNext = () => {
        toast("Additional Conditions used successfully", {
            description: "Additional Conditions",
            action: {
                label: "X",
                onClick: () => { },
            },
            position: "top-right"
        });
        handleNextStep();
    };

    return (
        <div className="grid grid-cols-1 h-full shadow-lg border rounded-3xl">
            <div className="w-full pb-7 pt-[92px] bg-modal rounded-3xl h-[782px] flex flex-col justify-between">
                <div className="scrollbox overflow-auto w-full h-full">
                    <div className="h-[calc(100%-40px)] px-10">
                        <div className="mb-7 mt-3">
                            <h1 className="text-3xl font-semibold tracking-tight mb-3">
                                Let’s add additional conditions
                            </h1>
                            <p className="text-sm text-muted-foreground mb-10">
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
                                                        <Badge className="bg-[#0F233D] hover:bg-[#0F233D] text-[11px] py-0 px-1 text-[#4FABFE] rounded-3xl">{card.label}</Badge>
                                                        <p className="text-[#A1A1AA] text-sm mt-2">Select the {card.label} categories you want to add</p>
                                                    </div>
                                                    <Switch className="mt-2.5" onCheckedChange={(e) => handleSwitchChange(card, e)} />
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
                    </div>
                </div>
                <div className="flex justify-between w-full mt-8 px-8">
                    <Button
                        className="bg-mblue"
                        variant="outline"
                        onClick={handleBackStep}
                    >
                        <ArrowLeftIcon className="mr-1" />
                        Back
                    </Button>
                    <Button
                        className="bg-mblue"
                        variant="outline"
                        onClick={handleClickNext}
                    >
                        Next
                        <ArrowRightIcon className="ml-1" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
