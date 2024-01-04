import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import MainNav from "@/components/dashboard/main-nav";
import Search from "@/components/dashboard/search";
import TeamSwitcher from "@/components/dashboard/team-switcher";
import UserNav from "@/components/dashboard/user-nav";
import ModeToggle from "@/components/ui/mode-toggle";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/registry/new-york/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york/ui/card";
import Image from "next/image";
import SummaryNav from "./components/summaryNav";
import SummaryMail from "./components/summaryMail";
import TeamShareCard from "../dashboard/components/team-share-card";
import RoyaltiesCard from "../dashboard/components/royaltiesCard";
import AbatementsCard from "../dashboard/components/abatementsCard";
import AdvanceRoyaltiesCard from "../dashboard/components/advanceRoyaltiesCard";
import BroadcastingCard from "../dashboard/components/broadcastingCard";
import DerivativeCard from "../dashboard/components/derivativeCard";
import BudgetCard from "../dashboard/components/budgetCard";
import RecordingsCard from "../dashboard/components/recordingsCard";

const birdCard = [
    { title: "Into Deep" },
    { title: "Return" },
    { title: "The Shore" },
    { title: "Unfate" }
]

export default function SummaryPage() {
    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <div className="hidden flex-col md:flex">
                    <SummaryNav />
                    <Separator />
                    <SummaryMail />
                    <div className="p-[42px] pt-0">
                        <div className="grid lg:grid-cols-10 grid-cols-1 gap-8 pb-8">
                            <Card className="lg:col-span-6 bg-card3 p-8 rounded-[20px]">
                                <CardHeader className="text-[#5D9DF1] p-0"><CardTitle className="text-normal text-2xl pl-2.5 pb-9">Blue Bird</CardTitle></CardHeader>
                                <CardContent className="p-0">
                                    <h6 className="text-2xl mb-1">Project Tracks</h6>
                                    <p className="mb-[50px] text-sm text-muted-foreground">
                                        The recorded and upload tracks for the project
                                    </p>
                                    <Image src="/project1.png" alt="project" width={350} height={350} className="mx-auto mb-16" />
                                    <div className="w-1/2 mx-auto">
                                        {birdCard.map((card, index) =>
                                            <div key={index} className="flex gap-[22px] items-center bg-black3 rounded-md p-2 mb-4">
                                                <Avatar className="bg-[#A3D3FF] h-11 w-11">
                                                    <Image
                                                        src="/project1.png"
                                                        width={46}
                                                        height={46}
                                                        alt="avatar"
                                                        className="rounded-full"
                                                    />
                                                </Avatar>
                                                <p className="text-sm font-normal leading-none text-[#4EABFE] w-24">
                                                    {card.title}
                                                </p>
                                                <p className="text-sm text-[#6DB5F9]">Blue Bird</p>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                            <div className="lg:col-span-4">
                                <Card className="bg-card3 rounded-[20px] p-8 lg:mb-4 mb-8">
                                    <TeamShareCard color="bg-black3" />
                                </Card>
                                <Card className="bg-card3 rounded-[20px] p-8">
                                    <BudgetCard color="bg-black3" />
                                </Card>
                            </div>
                        </div>
                        <Card className="bg-card3 rounded-[20px] p-8 pb-0 mb-8">
                            <RecordingsCard style="bg-black3 w-[322px] h-[90px]" />
                        </Card>
                        <div className="grid lg:grid-cols-11 grid-cols-1 gap-8 pb-8">
                            <div className="lg:col-span-5">
                                <Card className="bg-card3 rounded-[20px] p-8 pb-0 lg:mb-4 mb-8">
                                    <RoyaltiesCard color="bg-black3" />
                                </Card>
                                <Card className="bg-card3 rounded-[20px] p-8 pb-0 lg:mb-4 mb-8">
                                    <AdvanceRoyaltiesCard color="bg-black3" />
                                </Card>
                                <Card className="bg-card3 rounded-[20px] p-8 pb-0 lg:mb-4 mb-8">
                                    <BroadcastingCard color="bg-black3" />
                                </Card>
                                <Card className="bg-card3 rounded-[20px] p-8 pb-0">
                                    <DerivativeCard color="bg-black3" />
                                </Card>
                            </div>
                            <div className="lg:col-span-6 bg-card3 rounded-[20px] p-8 pb-0 border h-fit">
                                <AbatementsCard color="bg-black3" />
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
}
