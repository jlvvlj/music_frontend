import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TeamMember } from "./types";
import { cn, fallbackAvatar } from "@/lib/utils";
import Image from "next/image";
import { isOwner } from "./utils";
import { CardsActivityGoal } from "@/components/activity-goal";

const BudgetShareCard = ({
  card,
  step,
  updateGoal,
  buttonHidden,
  avatar,
  bgcolor,
}: {
  card: any;
  step?:number,
  updateGoal: (v: number) => void;
  buttonHidden: boolean;
  avatar?: boolean;
  bgcolor?: string;
}) => {
  const handleChangeGoal = (v: number) => {
    updateGoal(v);
  };
  return (
    <div
      className={cn(
        "flex items-start gap-4 px-4 py-3 rounded-md mb-5 w-fit mx-auto",
        "bg-mblue"
      )}
    >
      <div className="pt-3">
        <p className="text-sm font-medium leading-none">{card.title}</p>
      </div>
      <div className="">
        <CardsActivityGoal
          label="SHARES OF REVENUES"
          initialValue={card.cost || 30}
          unit=""
          step={step || 10}
          buttonTitle="Set Share"
          minValue={0}
          maxValue={10000000000}
          buttonHidden={buttonHidden}
          onClickButton={() => {}}
          isOwner={true}
          setGoal={handleChangeGoal}
        />
      </div>
    </div>
  );
};

export default BudgetShareCard;
