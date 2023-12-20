// ** Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { cn, fallbackAvatar } from "@/lib/utils";
import { isOwner } from "./utils";
import { CardsActivityGoal } from "@/components/activity-goal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import ShareCard from "./ShareCard";
import ShareCardRight from "./ShareCardRight";
import { StepProps, TeamMember } from "./types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
const member: TeamMember = {
  name: "Julie Depree",
  surName: "",
  email: "",
  role: "Master Owner",
};

const members: TeamMember[] = [
  {
    name: "Julie Depree",
    surName: "",
    email: "",
    role: "Master Owner",
  },
  {
    name: "Charly Jones",
    surName: "",
    email: "",
    role: "Singer",
  },
  {
    name: "Orlane Moog",
    surName: "",
    email: "",
    role: "Musician",
  },
];

const Shares = ({ updateStep }: StepProps) => {

  const handleClickNext = () => {
    updateStep(1);
  };

  const handleClickBack = () => {
    updateStep(-1);
  };

  const handleClickSkip = () => {
    updateStep(1);
  };
  return (
    <div className="grid grid-cols-2 h-full">
      <div className="w-full px-10 py-7 bg-modal rounded-s-3xl h-full flex flex-col justify-between">
        <div>
          <h6 className="text-2xl	mb-3">Now time to allocate shares</h6>
          <p className="text-[#94A3B8] mb-12 text-sm">Enter the appropriate amount of shares to everyone on the team</p>
          {members.map((member, index) => (
            <ShareCard key={index} member={member} />
          ))}
        </div>
        <div className="flex justify-between w-full mt-8">
          <Button className="bg-[#5D9DF1]" variant="outline" onClick={handleClickBack}>
            <ArrowLeftIcon className="mr-1" />
            Back
          </Button>
          <Button className="bg-[#5D9DF1]" variant="outline" onClick={handleClickNext}>
            Next
            <ArrowRightIcon className="ml-1" />
          </Button>
        </div>
      </div>
      <div className="relative flex items-end px-4 flex-col py-7 bg-modal-foreground rounded-r-3xl">
        <div className="p-8 rounded-2xl bg-modal border border-muted w-full">
          <h6 className="text-2xl	mb-3">Team & Shares</h6>
          <p className="text-[#94A3B8] mb-7 text-sm">Artists participating in this contract.</p>
          <div className="pl-10">
            <h6 className="text-lg mb-3">Team Shares</h6>
            <p className="text-[#94A3B8] mb-7 text-sm">Artists participating in this contract.</p>
            <div className="pl-4 gap-10">
              {members.map((member, index) => (
                <ShareCardRight key={index} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shares;
