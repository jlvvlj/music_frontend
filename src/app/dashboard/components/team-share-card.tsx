"use client";

import Image from "next/image";
import { CardsActivityGoal } from "@/components/activity-goal";
import { Avatar } from "@/components/ui/avatar";

export default function TeamShareCard({
  color,
  teamMembers,
}: {
  color: string;
  teamMembers: {
    name: string;
    avatar: string;
    value: number;
    role: string;
  }[];
}) {
  return (
    <div>
      <h6 className="text-2xl	mb-3">Team & Shares</h6>
      <p className="mb-7 text-sm text-muted-foreground">
        Artists participating in this contract.
      </p>
      <div className="pl-10">
        <h6 className="text-lg mb-3">Team members</h6>
        <p className="mb-7 text-sm text-muted-foreground">
          Artists participating in this contract.
        </p>
        <div className="pl-4 flex gap-10">
          <>
            <div className="flex flex-col items-center">
              <p className="text-sm mb-3.5 text-muted-foreground">
                Master Owner
              </p>
              {teamMembers
                ?.filter((member) => member.role === "master owner")
                ?.map((member, index) => (
                  <div key={index}>
                    <Avatar className="h-11 w-11 border border-white">
                      <Image
                        src={member.avatar}
                        width={100}
                        height={100}
                        alt="avatar"
                      />
                    </Avatar>
                  </div>
                ))}
            </div>
            <div className="flex flex-col">
              <p className="text-sm mb-3.5 text-muted-foreground">Artists</p>
              <div className="flex">
                {teamMembers
                  ?.filter((member) => member.role !== "master owner")
                  ?.map((member, index) => (
                    <div key={index}>
                      <Avatar className="h-11 w-11 border border-white">
                        <Image
                          src={member.avatar}
                          width={100}
                          height={100}
                          alt="avatar"
                        />
                      </Avatar>
                    </div>
                  ))}
              </div>
            </div>
          </>
        </div>
      </div>
      <div className="pl-10 pt-12">
        <h6 className="text-lg mb-3">Team Shares</h6>
        <p className="mb-7 text-sm text-muted-foreground">
          Artists participating in this contract.
        </p>
        <div className="pl-4 flex flex-col gap-3.5">
          {teamMembers?.map((member, index) => (
            <div
              key={index}
              className={`${color} flex items-start justify-between pl-4 pt-1.5 rounded-md w-fit right-card`}
            >
              <div className="flex gap-4">
                <Avatar className="bg-[#A3D3FF] mt-2 h-11 w-11">
                  <Image
                    src={member.avatar}
                    width={100}
                    height={100}
                    alt="avatar"
                  />
                </Avatar>
                <div className="pt-3">
                  <p className="text-sm font-medium leading-none text-[#4EABFE]">
                    {member.name}
                  </p>
                  <p className="text-sm text-[#6DB5F9]">
                    {member.role.replace(/\b\w/g, function (match) {
                      return match.toUpperCase();
                    })}
                  </p>
                </div>
              </div>
              <div className="">
                <CardsActivityGoal
                  label="SHARES OF REVENUES"
                  initialValue={member.value}
                  unit="%"
                  step={10}
                  buttonTitle="Set Share"
                  minValue={0}
                  maxValue={100}
                  buttonHidden
                  onClickButton={() => {}}
                  setGoal={() => {}}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
