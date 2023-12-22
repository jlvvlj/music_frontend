"use client"

import { Button } from "@/registry/new-york/ui/button"
import {
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/registry/new-york/ui/sheet"
import {
    Card
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area"
import TopTracksCard from "./top-tracks-card"
import TeamShareCard from "./team-share-card"
import BudgetCard from "./budgetCard";
import RecordingsCard from "./recordingsCard";
import RoyaltiesCard from "./royaltiesCard";
import AdvanceRoyaltiesCard from "./advanceRoyaltiesCard";
import AbatementsCard from "./abatementsCard";
import BroadcastingCard from "./broadcastingCard";
import DerivativeCard from "./derivativeCard";

export default function TableDrawer({ name }: { name: string }) {
    return (
        <SheetContent className="mt-0 p-0" side="right">
            <ScrollArea className="h-full py-6 px-4">
                <SheetHeader className="flex-row space-y-0 justify-between pt-4 mb-8">
                    <SheetTitle className="text-2xl">{ name }</SheetTitle>
                    <Button className="hover:bg-[#4EABFE] bg-[#4EABFE] rounded-lg" variant="default">
                        See contract
                    </Button>
                </SheetHeader>
                <TopTracksCard />
                <Card className="px-4 pt-6 pb-14 mb-4 bg-black3">
                    <TeamShareCard />
                </Card>
                <Card className="px-4 pt-6 pb-8 mb-4 bg-black3">
                    <BudgetCard />
                </Card>
                <Card className="px-4 pt-6 mb-4 bg-black3 pb-0">
                    <RecordingsCard />
                </Card>
                <Card className="px-4 pt-6 mb-4 bg-black3 pb-0">
                    <RoyaltiesCard />
                </Card>
                <Card className="px-4 pt-6 mb-4 bg-black3 pb-0">
                    <AdvanceRoyaltiesCard />
                </Card>
                <Card className="px-4 pt-6 mb-4 bg-black3 pb-0">
                    <AbatementsCard />
                </Card>
                <Card className="px-4 pt-6 mb-4 bg-black3 pb-0">
                    <BroadcastingCard />
                </Card>
                <Card className="px-4 pt-6 bg-black3 pb-0">
                    <DerivativeCard />
                </Card>
            </ScrollArea>
        </SheetContent>
    )
}
