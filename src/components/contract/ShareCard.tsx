import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TeamMember } from "./types";
import { cn, fallbackAvatar } from "@/lib/utils";
import Image from "next/image";
import MinusIcon from "@/components/contract/MinusIcon";
import PlusIcon from "@/components/contract/PlusIcon";
import ChartBarIcon from "@/components/contract/ChartBarIcon";
import { isOwner } from "./utils";
import { CardsActivityGoal } from "@/components/activity-goal";

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
          setGoal={(v) => {}}
        />
      </div>
    </div>
  );
};

export default ShareCard;
