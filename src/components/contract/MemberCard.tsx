import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TeamMember } from "./types";
import { cn, fallbackAvatar } from "@/lib/utils";
import Image from "next/image";
import { isOwner } from "./utils";
import { CardsActivityGoal } from "@/components/activity-goal";

const ShareCard = ({
  step,
  member,
  updateGoal,
  buttonHidden,
  buttonTitle,
  avatar,
  bgcolor,
  unit,
  minValue,
  maxValue
}: {
  step?: number;
  member: TeamMember;
  updateGoal: (v: number) => void;
  buttonHidden?: boolean;
  buttonTitle?: string;
  avatar?: boolean;
  bgcolor?: string;
  unit?: string;
  minValue?:number;
  maxValue?:number;

}) => {
  const handleChangeGoal = (v: number) => {
    updateGoal(v);
  };
  return (
    <div
      className={cn(
        "flex items-start justify-between gap-4 px-4 py-3 rounded-md mb-5 mx-auto",
        isOwner(member) ? "bg-mblue" : `bg-modal-foreground ${bgcolor}`
      )}
    >
      {avatar && (
        <Avatar className="bg-[#A3D3FF] mt-2">
          <Image
            src={member?.avatar || "https://ui.shadcn.com/avatars/01.png"}
            width={100}
            height={100}
            alt="avatar"
          />
        </Avatar>
      )}
      <div className="pt-3">
        <p className="text-sm font-medium leading-none">{member.name}</p>
        <p className="text-sm capitalize">{member.role}</p>
      </div>
      <div className="">
        <CardsActivityGoal
          label="SHARES OF REVENUES"
          initialValue={Number(member?.revenue) | 0}
          unit={unit || "€"}
          step={step || 10}
          buttonTitle={buttonTitle || ""}
          minValue={minValue || 0}
          maxValue={maxValue || 100}
          buttonHidden={buttonHidden}
          onClickButton={() => { }}
          isOwner={isOwner(member)}
          setGoal={handleChangeGoal}
        />
      </div>
    </div>
  );
};

export default ShareCard;