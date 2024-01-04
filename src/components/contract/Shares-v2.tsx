// ** Components
import { Button } from "../ui/button";
import ShareCard from "./ShareCard";
import ShareCardRight from "./ShareCardRight";
import { StepProps, TeamMember } from "./types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import useContractBuilder from "@/hooks/useContractBuilder";
import { Steps } from "@/contexts/ContractBuilderContext";
import { Sheet, SheetTrigger } from "@/registry/new-york/ui/sheet";
import { AlertCircle } from "lucide-react";
import ContractDrawer from "@/app/dashboard/components/contract-drawer";

const Shares = ({ updateStep }: StepProps) => {
  const { members, dispatch } = useContractBuilder();
  const handleClickNext = () => {
    updateStep(1);
  };

  const handleClickBack = () => {
    updateStep(-1);
  };

  const handleUpdateGoal = (member: TeamMember, value: number) => {
    const _members = [...members];
    const newMember = {
      ...member,
      revenue: value,
    };
    const index = _members.findIndex((m) => m.id === member.id);
    const m = _members.splice(index, 1, newMember);

    dispatch({
      type: Steps.SHARES,
      payload: {
        members: _members,
      },
    });
  };

  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="w-full pb-7 pt-16 bg-modal rounded-s-3xl h-[645px] flex flex-col justify-between">
        <div className="scrollbox overflow-auto w-full h-full">
          <div className="h-[calc(100%-40px)] px-10">
            <div className="flex items-center gap-2 mb-3">
              <h1 className="text-3xl font-semibold tracking-tight">
                Now time to allocate shares
              </h1>
              <Sheet>
                <SheetTrigger asChild>
                  <AlertCircle className="cursor-pointer" />
                </SheetTrigger>
                <ContractDrawer title="Now time to allocate shares" />
              </Sheet>
            </div>
            <p className="text-muted-foreground mb-12 text-sm">
              Enter the appropriate amount of shares to everyone on the team
            </p>
            {members.map((member, index) => (
              <ShareCard
                key={index}
                member={member}
                updateGoal={(v) => handleUpdateGoal(member, v)}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between w-full mt-8 px-10">
          <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleClickBack}
          >
            <ArrowLeftIcon className="mr-1" />
            Back
          </Button>
          <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleClickNext}
          >
            Next
            <ArrowRightIcon className="ml-1" />
          </Button>
        </div>
      </div>
      <div className="relative flex items-end flex-col pb-7 pt-16 bg-modal-foreground rounded-r-3xl h-[645px]">
        <div className="scrollbox overflow-auto px-4 w-full h-full">
          <div className="p-8 rounded-2xl bg-modal border border-muted w-full">
            <h6 className="text-2xl	mb-3">Team & Shares</h6>
            <p className="text-muted-foreground mb-7 text-sm">
              Artists participating in this contract.
            </p>
            <div className="pl-10">
              <h6 className="text-lg mb-3">Team Shares</h6>
              <p className="text-muted-foreground mb-7 text-sm">
                Artists participating in this contract.
              </p>
              <div className="pl-4 gap-10">
                {members.map((member, index) => (
                  <ShareCardRight
                    key={index}
                    member={member}
                    updateGoal={(v) => handleUpdateGoal(member, v)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shares;
