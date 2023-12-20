import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TeamMember } from "./types";
import { cn, fallbackAvatar } from "@/lib/utils";
import { CardsActivityGoal } from "@/components/activity-goal";

const ShareCardRight = ({ member }: { member: TeamMember }) => {
    return (
        <div
            className=
            "flex items-start gap-4 px-4 pt-1.5 rounded-md mb-5 w-fit bg-modal-foreground right-card"
        >
            <Avatar className="bg-[#A3D3FF] mt-2 h-11 w-11">
                <AvatarImage src={member.avatar} />
                <AvatarFallback className="bg-transparent">
                    {fallbackAvatar(member.name)}
                </AvatarFallback>
            </Avatar>
            <div className="pt-3">
                <p className="text-sm font-medium leading-none text-[#4EABFE]">{member.name}</p>
                <p className="text-sm text-[#6DB5F9]">{member.role}</p>
            </div>
            <div className="">
                <CardsActivityGoal
                    label="SHARES OF REVENUES"
                    initialValue={40}
                    unit="%"
                    step={10}
                    buttonTitle="Set Share"
                    minValue={0}
                    maxValue={100}
                    buttonHidden
                    onClickButton={() => { }}
                    setGoal={(v) => { }}
                />
            </div>
        </div>
    );
};

export default ShareCardRight;
