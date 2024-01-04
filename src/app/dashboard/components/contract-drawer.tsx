"use client"

import {
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/registry/new-york/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CardsActivityGoal } from "@/registry/new-york/example/cards/activity-goal"

export default function ContractDrawer({ title }: { title: string }) {
    return (
        <SheetContent className="mt-0 p-0 w-full" side="bottom">
            <div className="w-1/4 mx-auto py-4">
                <CardsActivityGoal style="border-none" />
            </div>
        </SheetContent>
    )
}
