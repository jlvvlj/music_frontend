// ** Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import TeamMember from "@/components/team/team_member";

const TeamAllocation = () => {
  return (
    <>
      <Card className="h-[400px] w-full sm:w-[700px] mx-auto border-none">
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription>
            Enter the name and details of the contributors below.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <TeamMember />
        </CardContent>
      </Card>
    </>
  );
};

export default TeamAllocation;
