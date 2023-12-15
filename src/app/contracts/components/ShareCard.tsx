import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TeamMember } from "./types";
import { cn, fallbackAvatar } from "@/lib/utils";
import Image from "next/image";
import MinusIcon from "@/components/contract/MinusIcon";
import PlusIcon from "@/components/contract/PlusIcon";
import ChartBarIcon from "@/components/contract/ChartBarIcon";
import { isOwner } from "./utils";
import { CardsActivityGoal } from "@/components/ui/activity-goal";

const ShareCard = ({ member }: { member: TeamMember }) => {
  return (
    <div
      className={cn(
        "flex items-start gap-8 px-4  py-3 rounded-md mb-5 w-fit mx-auto",
        isOwner(member) ? "bg-[#2997FF]" : "bg-accent"
      )}
    >
      <Avatar className="bg-[#A3D3FF] mt-2">
        <AvatarImage src={member.avatar} />
        <AvatarFallback className="bg-transparent">
          {fallbackAvatar(member.name)}
        </AvatarFallback>
      </Avatar>
      <div className="pt-3">
        <p className="text-sm font-medium leading-none">{member.name}</p>
        <p className="text-sm text-muted-foreground">{member.role}</p>
      </div>
      <div className="">
        <CardsActivityGoal
          label="SHARES OF REVENUES"
          initialValue={50}
          unit="%"
          step={10}
          buttonTitle="Set Share"
          minValue={0}
          maxValue={100}
          onClickButton={() => {}}
          isOwner={isOwner(member)}
        />
      </div>
      {/* <div className="space-y-1">
        <div className="flex items-center justify-around">
          <div
            className={cn(
              "border border-solid rounded-full w-[14px] h-[14px] flex justify-center items-center",
              isOwner(member) ? "border-[#8AC4FB]" : "border-[#0F172A]"
            )}
          >
            <MinusIcon />
          </div>
          <div className="text-[#F8FAFC] text-[21px] font-normal text-center">
            50%
          </div>
          <div
            className={cn(
              "border border-solid rounded-full w-[14px] h-[14px] flex justify-center items-center",
              isOwner(member) ? "border-[#8AC4FB]" : "border-[#0F172A]"
            )}
          >
            <PlusIcon />
          </div>
        </div>
        <div className="text-white text-center text-[8px] font-normal uppercase">
          SHARES OF REVENUES
        </div>
        <div className="w-full flex justify-center items-center">
          <ChartBarIcon />
        </div>
        <button
          className={cn(
            " rounded-[20px] px-5 py-1 text-[12px] font-normal text-center",
            isOwner(member)
              ? "bg-white text-[#3B82F6]"
              : "bg-[#3B82F6] text-[#0F172A]"
          )}
        >
          Set Share
        </button>
      </div> */}
    </div>
  );
};

export default ShareCard;
