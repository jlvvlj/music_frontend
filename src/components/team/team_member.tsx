"use client";
import React, { useState, useEffect } from "react";
import { fallbackAvatar } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Separator } from "../ui/separator";

type TeamMember = {
  name: string;
  email: string;
  avatar: string;
};

type PropsType = {
  data?: TeamMember[];
};

const mockData: TeamMember[] = [
  {
    name: "Olivia Martin",
    email: "m@example.com",
    avatar: "/avatars/03.png",
  },
  {
    name: "Jane Lee",
    email: "j@example.com",
    avatar: "/avatars/04.png",
  },
];

export default function TeamMember({ data = mockData }: PropsType) {
  const [members, setMembers] = useState<TeamMember[]>(mockData);
  const [inputs, setInputs] = useState<TeamMember | null>(null);

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values: any) => ({ ...values, [name]: value }));
  };

  const handleClickAddMember = () => {
    const _members = [...members];
    if (inputs) {
      _members.push(inputs);
      setMembers(_members);
    }
    setInputs(null);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-6">
        {members.map((member, index) => (
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={member.avatar} />
              <AvatarFallback>{fallbackAvatar(member.name)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{member.name}</p>
              <p className="text-sm text-muted-foreground">{member.email}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/avatars/05.png" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <Input
                placeholder="Name"
                name="name"
                value={inputs?.name || ""}
                onChange={handleChangeInputs}
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={inputs?.email || ""}
                onChange={handleChangeInputs}
              />
            </div>
            <div>
              <Select defaultValue="Owner">
                <SelectTrigger className="ml-auto w-[110px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="ml-auto w-[250px]">
                  <SelectItem value="Owner">Owner</SelectItem>
                  <SelectItem value="Manager">Manager</SelectItem>
                  <SelectItem value="Musician">Musician</SelectItem>
                  <SelectItem value="Singer">Singer</SelectItem>
                  <SelectItem value="Marketer">Marketer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button type="button" onClick={handleClickAddMember}>
                Add +
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
