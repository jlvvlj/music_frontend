"use client"

import {
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/registry/new-york/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ContractDrawer({ title }: { title: string }) {
    return (
        <SheetContent className="mt-0 p-0 w-1/4" side="right">
            <ScrollArea className="h-full py-6 px-4">
                <SheetHeader className="flex-row space-y-0 justify-between pt-4 mb-8">
                    <SheetTitle className="text-2xl">{title}</SheetTitle>
                </SheetHeader>
            </ScrollArea>
        </SheetContent>
    )
}
