// ** Components
import { Button } from "../ui/button";
import { StepProps, TeamMember } from "./types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import useContractBuilder from "@/hooks/useContractBuilder";
import { Steps } from "@/contexts/ContractBuilderContext";
import { Sheet, SheetTrigger } from "@/registry/new-york/ui/sheet";
import { AlertCircle } from "lucide-react";
import ContractDrawer from "@/app/dashboard/components/contract-drawer";
import ToasterDemo from "./ToasterDemo";
import { ArtistMultiSelect } from "./ArtistMultiSelect";
import InvitationPopover from "./InvitationPopover";
import TeamShare from "./TeamShare";
import { TableCommon } from "./TableCommon";
import { shareTracks } from "@/app/data/data";
import { ShareTrackColumn } from "./ShareTrackColumn";

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
                Who’s in the team?
              </h1>
              <Sheet>
                <SheetTrigger asChild>
                  <AlertCircle className="cursor-pointer" />
                </SheetTrigger>
                <ContractDrawer title="Who’s in the team?" />
              </Sheet>
            </div>
            <p className="text-muted-foreground mb-[68px] text-sm">
              Invite your team to join the project.
            </p>
            <div className="flex justify-center flex-col items-center space-y-12">
              <ArtistMultiSelect width="max-w-[230px]" artistRate={false} placeholder="Participants" />
              <InvitationPopover />
            </div>
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
          <ToasterDemo toastTitle="Shares added successfully!" updateStep={updateStep}/>
        </div>
      </div>
      <div className="relative flex items-end flex-col pb-7 pt-16 bg-modal-foreground rounded-r-3xl h-[645px]">
        <div className="scrollbox overflow-auto px-4 w-full h-full">
          <TeamShare />
          <div className="rounded-2xl bg-modal border border-muted w-full p-4 mt-8">
            <TableCommon data={shareTracks} columns={ShareTrackColumn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shares;
