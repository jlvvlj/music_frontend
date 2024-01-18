import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { TableCommon } from "./TableCommon";
import { recordingTracks } from "@/app/data/data";
import { RecordingsColumn } from "./RecordingsColumn";
import useContractBuilder from "@/hooks/useContractBuilder";
import { Steps } from "@/contexts/ContractBuilderContext";
import MemberCard from "./MemberCard";

const Shares = ({
  handleNextStep,
  handleBackStep,
  setContractCreation,
  contractCreation,
}: any) => {
  const handleClickNext = () => {
    toast("Shares added successfully!", {
      description: "Shares",
      action: {
        label: "X",
        onClick: () => {},
      },
      position: "top-right",
    });
    handleNextStep();
  };

  useEffect(() => {
    setContractCreation((prevData: any) => ({
      ...prevData,
      shares: [...contractCreation?.members?.masterOwners],
    }));
  }, []);

  const { dispatch } = useContractBuilder();
  const handleUpdateGoal = (member: any, value: number) => {
    const _members = [...contractCreation?.shares];
    const newMember = {
      ...member,
      revenue: value,
    };

    const index = _members.findIndex((m) => m.id === member.id);
    _members.splice(index, 1, newMember);

    setContractCreation((prevData: any) => ({
      ...prevData,
      shares: _members,
    }));

    dispatch({
      type: Steps.SHARES,
      payload: {
        members: _members,
      },
    });
  };

  return (
    <div className="grid grid-cols-2 h-full shadow-lg border rounded-3xl">
      <div className="w-full pb-7 pt-[92px] bg-modal rounded-s-3xl h-[782px] flex flex-col justify-between">
        <div className="scrollbox overflow-auto w-full h-full">
          <div className="h-[calc(100%-40px)] px-10">
            <h1 className="text-3xl font-semibold tracking-tight mb-3">
              And producers shares
            </h1>
            <p className="text-sm text-muted-foreground mb-[98px]">
              Enter the appropriate amount of shares to each producer on the
              team
            </p>
            {contractCreation?.shares.map((member: any, index: number) => (
              <MemberCard
                key={index}
                member={member}
                unit={"%"}
                updateGoal={(v) => handleUpdateGoal(member, v)}
                avatar={true}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between w-full mt-8 px-10">
          <Button
            className="bg-mblue"
            variant="outline"
            onClick={handleBackStep}
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
      <div className="relative flex items-end flex-col pb-7 pt-6 bg-modal-foreground rounded-r-3xl h-[782px]">
        <div className="scrollbox overflow-auto px-4 w-full h-full">
          <div className="p-8 rounded-2xl bg-modal border border-muted w-full">
            <h6 className="text-2xl	mb-3">Team & Shares</h6>
            <p className="text-muted-foreground mb-7 text-sm">
              Shares fo artists participating in this contract.
            </p>
            <div className="pl-10">
              <h6 className="text-lg mb-3">Album level shares</h6>
              <p className="text-muted-foreground mb-7 text-sm">
                Edit the shares on each track for a specific allocation
              </p>
              <div className="pl-4 gap-10">
                {contractCreation?.shares.map((member: any, index: number) => (
                  <MemberCard
                    key={index}
                    unit={"%"}
                    member={member}
                    updateGoal={(v) => handleUpdateGoal(member, v)}
                    buttonHidden={true}
                    avatar={true}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-modal border border-muted w-full p-4 mt-8">
            <TableCommon data={recordingTracks} columns={RecordingsColumn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shares;
