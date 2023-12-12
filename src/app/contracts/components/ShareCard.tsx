import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TeamMember } from "./types";
import { fallbackAvatar } from "@/lib/utils";
import Image from "next/image";

const ShareCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex items-center space-x-4 px-4 bg-accent py-3 rounded-md w-full mb-5">
      <Avatar className="bg-[#A3D3FF]">
        <AvatarImage src={member.avatar} />
        <AvatarFallback className="bg-transparent">
          {fallbackAvatar(member.name)}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium leading-none">{member.name}</p>
        <p className="text-sm text-muted-foreground">{member.role}</p>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="border border-solid border-[#8AC4FB] rounded-full w-2 h-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
            >
              <g clip-path="url(#clip0_376_15720)">
                <path
                  d="M1.70422 3.04199H4.50741"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_376_15720">
                  <rect
                    width="4.80546"
                    height="4.80546"
                    fill="white"
                    transform="translate(0.703125 0.63916)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div></div>
          <div></div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ShareCard;
