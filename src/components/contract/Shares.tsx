// ** Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import ShareCard from "./ShareCard";
import { StepProps, TeamMember } from "./types";
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
      <div>
        {members.map((member, index) => (
          <ShareCard key={index} member={member} />
        ))}
        <div className="flex justify-between w-full">
          <Button className="" variant="outline" onClick={handleClickBack}>
            Back
          </Button>
          <Button className="" variant="outline" onClick={handleClickNext}>
            Next
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Shares;
