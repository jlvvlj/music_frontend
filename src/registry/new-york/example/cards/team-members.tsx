"use client";

import { Avatar } from "@/registry/new-york/ui/avatar";
import { Button } from "@/registry/new-york/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card";
import Image from "next/image";

export function CardsTeamMembers({ userFriends }: any) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>Artists</CardTitle>
        <CardDescription>Invite your team to join the project.</CardDescription>
      </CardHeader>
      <CardContent className="">
        {userFriends?.map(
          (
            member: { avatar: string; role: string; name: string },
            index: number
          ) => (
            <div
              key={index}
              className="flex items-start gap-4 px-4 py-3 rounded-md mb-5 w-[224px] mx-auto bg-black3"
            >
              <Avatar className="bg-[#A3D3FF]">
                <Image
                  src={member.avatar}
                  width={100}
                  height={100}
                  alt="avatar"
                />
              </Avatar>
              <div className="">
                <p className="text-sm font-medium leading-none text-[#4EABFE]">
                  {member.name}
                </p>
                <p className="text-sm text-[#6DB5F9]">{member.role}</p>
              </div>
            </div>
          )
        )}
      </CardContent>
      <CardFooter className="">
        <Button
          type="submit"
          className="w-full hover:bg-[#4EABFE] bg-[#4EABFE] text-white"
          variant="default"
        >
          Add an artist
        </Button>
      </CardFooter>
    </Card>
  );
}
