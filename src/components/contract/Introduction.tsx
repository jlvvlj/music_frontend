import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { StepProps } from "./types";
import CongratulationModal from "./CongratulationModal";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/registry/default/ui/select";
import { Label } from "@/registry/new-york/ui/label";
import { Input } from "@/registry/new-york/ui/input";

const questions = [
    { id: 1, que: 'Which of these sounds most like you?', value1: 'option 1', value2: 'option 2' },
    { id: 2, que: 'What\'s your goal with Circle?', value1: 'option 1', value2: 'option 2' },
    { id: 3, que: 'What\'s your annual revenue?', value1: 'option 1', value2: 'option 2' }
]

const Introduction = ({ handleBackStep }: any) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleClickNext = () => {
        toast("Derivative used successfully", {
            description: "Derivative",
            action: {
                label: "X",
                onClick: () => { },
            },
            position: "top-right"
        });
        setModalOpen(true)
    };

    return (
        <>
            <div className="grid grid-cols-1 h-full shadow-lg border rounded-3xl">
                <div className="w-full pb-7 pt-[92px] bg-modal rounded-3xl h-[782px] flex flex-col justify-between">
                    <div className="scrollbox overflow-auto w-full h-full">
                        <div className="h-[calc(100%-40px)] px-10 max-w-xl mx-auto">
                            <div className="mb-7 mt-3">
                                <svg className="mx-auto" fill="hsl(var(--white3))" width="50px" height="40px" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145.04 116.32"><defs></defs><path className="cls-1" d="M79,58.91a7.18,7.18,0,1,1,14.35,0V66a8.59,8.59,0,0,0,8.62,8.62h4.31A8.57,8.57,0,0,0,114.84,66V60.35a8.59,8.59,0,0,0-8.61-8.62h-4.31a8.59,8.59,0,0,1-8.62-8.61V38.81a8.57,8.57,0,0,0-8.61-8.61H80.38a8.57,8.57,0,0,0-8.61,8.61v5.75a7.18,7.18,0,1,1-14.36,0V38.81a8.57,8.57,0,0,0-8.62-8.61H30.13a8.57,8.57,0,0,0-8.62,8.61V86.19a8.57,8.57,0,0,0,8.62,8.62h4.3a8.57,8.57,0,0,0,8.62-8.62V58.91a7.18,7.18,0,0,1,12.26-5.08,6.91,6.91,0,0,1,2.1,5.08V86.19A8.57,8.57,0,0,0,66,94.81h4.31A8.59,8.59,0,0,0,79,86.19Z"
                                />
                                    <path className="cls-1" d="M110.6,43.05A8.57,8.57,0,0,1,102,34.44V30.13a8.57,8.57,0,0,1,8.61-8.62h4.31a8.59,8.59,0,0,1,8.62,8.62v4.31a8.59,8.59,0,0,1-8.62,8.61Z" />
                                </svg>
                            </div>
                            <div className="w-full flex justify-center text-center mb-12">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-semibold tracking-tight">
                                        Tell us about yourself
                                    </h1>
                                    <p className="text-sm text-muted-foreground">We'll use this to give you the best onboarding experience</p>
                                </div>
                            </div>
                            <div className="space-y-7">
                                {questions.map((question) =>
                                    <div key={question.id} className="space-y-1">
                                        <Label>{question.que}</Label>
                                        <Select>
                                            <SelectTrigger className="w-full bg-modal">
                                                <SelectValue placeholder="Please select an option" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-modal">
                                                <SelectGroup>
                                                    <SelectItem className="capitalize" value={question.value1}>{question.value1}</SelectItem>
                                                    <SelectItem className="capitalize" value={question.value2}>{question.value2}</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                )}
                                <div className="space-y-1">
                                    <Label>How did you hear about Circle?</Label>
                                    <Input type="text" placeholder="" className="bg-modal"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between w-full mt-10 px-10">
                        <Button
                            className="bg-mblue"
                            variant="outline"
                            onClick={handleBackStep}
                        >
                            <ArrowLeftIcon className="mr-1" />
                            Back
                        </Button>
                        <div className="flex gap-4">
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
            </div>
            <CongratulationModal open={modalOpen} setOpen={setModalOpen} />
        </>
    );
};

export default Introduction;
