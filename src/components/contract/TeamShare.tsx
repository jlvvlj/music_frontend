"use client";

import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

const initialMembers = [
  { id: 1, member: "/amandine.svg" },
  { id: 2, member: "/orlane.svg" },
  { id: 3, member: "/jon.svg" },
];

export default function TeamShare({ selectedArtist }: any) {
  const masterOwnersArtists = selectedArtist?.filter(
    (artist: any) => artist.role === "master owner"
  );
  const otherRoleArtists = selectedArtist?.filter(
    (artist: any) => artist.role !== "master owner"
  );

  return (
    <div className="p-8 rounded-2xl bg-modal border border-muted w-full">
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
          <div className="flex flex-col items-center">
            <p className="text-sm mb-3.5 text-muted-foreground">Master Owner</p>
            <div className="flex">
              {masterOwnersArtists.map((member: any) => (
                <Avatar
                  key={member.id}
                  className="h-11 w-11 -ml-2 first:ml-0 border border-white"
                >
                  <Image
                    src={member.avatar}
                    width={100}
                    height={100}
                    alt="avatar"
                  />
                </Avatar>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-sm mb-3.5 text-muted-foreground">Artists</p>
            <div className="flex">
              {otherRoleArtists.map((member: any) => (
                <Avatar
                  key={member.id}
                  className="h-11 w-11 -ml-2 first:ml-0 border border-white"
                >
                  <Image
                    src={member.avatar}
                    width={100}
                    height={100}
                    alt="avatar"
                  />
                </Avatar>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
