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
const Shares = () => {
  return (
    <>
      <Card className="w-full mx-auto border-none p-0">
        <CardContent className="space-y-2">
          <div>
            <ShareCard member={member} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Shares;
