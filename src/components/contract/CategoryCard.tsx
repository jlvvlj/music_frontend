import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TeamMember } from "./types";
import { cn, fallbackAvatar } from "@/lib/utils";
import Image from "next/image";
import { isOwner } from "./utils";
import { CardsActivityGoal } from "@/components/activity-goal";

const CategoryCard = ({
  card,
  step,
  updateGoal,
  buttonHidden,
  buttonTitle,
  unit
}: {
  card: any;
  step?:number,
  updateGoal: (v: number) => void;
  buttonHidden?: boolean;
  avatar?: boolean;
  bgcolor?: string;
  buttonTitle?: string;
  unit?: string;
}) => {
  const handleChangeGoal = (v: number) => {
    updateGoal(v);
  };
  return (
    <div className="flex items-start gap-4 pl-2.5 pt-1.5 rounded-md w-fit bg-modal pb-1.5 mb-8">
      <div className="pt-3">
        <p className="text-sm font-medium leading-none">{card.title}</p>
      </div>
      <div className="">
        <CardsActivityGoal
          label="SHARES OF REVENUES"
          initialValue={card.cost || 30}
          unit={unit || "€"}
          step={step || 10}
          buttonTitle={buttonTitle || ""}
          minValue={0}
          maxValue={10000000000}
          buttonHidden={buttonHidden}
          onClickButton={() => {}}
          isOwner={false}
          setGoal={handleChangeGoal}
        />
      </div>
    </div>
  );
};

export default CategoryCard;
