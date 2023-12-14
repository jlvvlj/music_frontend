// ** Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import ShareCard from "./ShareCard";
import { TeamMember } from "./types";
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
const Shares = () => {
  return (
    <>
      {members.map((member, index) => (
        <ShareCard key={index} member={member} />
      ))}
    </>
  );
};

export default Shares;
