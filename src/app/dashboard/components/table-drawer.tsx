"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@/registry/new-york/ui/button";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/registry/new-york/ui/sheet";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import TopTracksCard from "./top-tracks-card";
import TeamShareCard from "./team-share-card";
import BudgetCard from "./budgetCard";
import RecordingsCard from "./recordingsCard";
import RoyaltiesCard from "./royaltiesCard";
import AdvanceRoyaltiesCard from "./advanceRoyaltiesCard";
import AbatementsCard from "./abatementsCard";
import BroadcastingCard from "./broadcastingCard";
import DerivativeCard from "./derivativeCard";
import { getContractById } from "@/store/actions/contracts.action";
import Contracts from "@/hooks/contract";

export default function TableDrawer({ id }: { id: string }) {
  const dispatch = useDispatch();
  const { contractbyID } = Contracts();

  useEffect(() => {
    if (id) {
      dispatch(getContractById(id) as any);
    }
  }, [dispatch, id]);

  return (
    <SheetContent className="mt-0 p-0 sm:max-w-[503px]" side="right">
      <ScrollArea className="h-full py-6 px-4">
        <SheetHeader className="flex-row space-y-0 justify-between pt-4 mb-8">
          <SheetTitle className="text-2xl">{id}</SheetTitle>
          <Link href="/summary">
            <Button
              className="hover:bg-[#4EABFE] bg-[#4EABFE] rounded-lg"
              variant="default"
            >
              See contract
            </Button>
          </Link>
        </SheetHeader>
        <TopTracksCard />
        <Card className="px-4 pt-6 pb-14 mb-4 bg-black3">
          <TeamShareCard
            color="bg-background3"
            teamMembers={contractbyID?.teamMembers}
          />
        </Card>
        <Card className="px-4 pt-6 pb-8 mb-4 bg-black3">
          <BudgetCard
            color="bg-modal-foreground"
            budgetCard={contractbyID?.budgetCard}
          />
        </Card>
        <Card className="px-4 pt-6 mb-4 bg-black3 pb-0">
          <RecordingsCard
            style="bg-modal-foreground w-[132px]"
            recordingCard={contractbyID?.recordingCard}
          />
        </Card>
        <Card className="px-4 pt-6 mb-4 bg-black3 pb-0">
          <RoyaltiesCard
            color="bg-modal-foreground"
            royaltiesCard={contractbyID?.royaltiesCard}
          />
        </Card>
        <Card className="px-4 pt-6 mb-4 bg-black3 pb-0">
          <AdvanceRoyaltiesCard
            color="bg-modal-foreground"
            advanceRoyaltiesCard={contractbyID?.advanceRoyaltiesCard}
          />
        </Card>
        <Card className="px-4 pt-6 mb-4 bg-black3 pb-0">
          <AbatementsCard
            color="bg-modal-foreground"
            abatementsCard={contractbyID?.abatementsCard}
            foreignCard={contractbyID?.foreignCard}
          />
        </Card>
        <Card className="px-4 pt-6 mb-4 bg-black3 pb-0">
          <BroadcastingCard
            color="bg-modal-foreground"
            broadcastingCard={contractbyID?.broadcastingCard}
          />
        </Card>
        <Card className="px-4 pt-6 bg-black3 pb-0">
          <DerivativeCard
            color="bg-modal-foreground"
            derivativeCard={contractbyID?.derivativeCard}
          />
        </Card>
      </ScrollArea>
    </SheetContent>
  );
}
