import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { TeamMember } from "./types";
import { cn, fallbackAvatar } from "@/lib/utils";
import { CardsActivityGoal } from "@/components/activity-goal";

const ShareCardRight = ({
  member,
  updateGoal,
}: {
  member: TeamMember;
  updateGoal: (v: number) => void;
}) => {
  const handleChangeGoal = (v: number) => {
    updateGoal(v);
  };

  return (
    <div className="flex items-start gap-4 px-4 pt-1.5 rounded-md mb-5 w-fit bg-modal-foreground right-card">
      <Avatar className="bg-[#A3D3FF] mt-2 h-11 w-11">
        <Image
          src={member.avatar || "https://ui.shadcn.com/avatars/01.png"}
          width={100}
          height={100}
          alt="avatar"
        />
      </Avatar>
      <div className="pt-3">
        <p className="text-sm font-medium leading-none text-[#4EABFE]">
          {member.name}
        </p>
        <p className="text-sm text-[#6DB5F9]">{member.role}</p>
      </div>
      <div className="">
        <CardsActivityGoal
          label="SHARES OF REVENUES"
          initialValue={member.revenue || 30}
          unit="%"
          step={10}
          buttonTitle="Set Share"
          minValue={0}
          maxValue={100}
          buttonHidden
          onClickButton={() => {}}
          setGoal={handleChangeGoal}
        />
      </div>
    </div>
  );
};

export default ShareCardRight;
