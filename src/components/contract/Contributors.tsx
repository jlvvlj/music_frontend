"use client";
import React, { useState, useEffect } from "react";
// ** Form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// ** Component
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn, fallbackAvatar } from "@/lib/utils";
import UploadButton from "@/components/upload-button";
import { StepProps, TeamMember } from "./types";
import { isOwner } from "./utils";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

type Tab = "team" | "solo";
const TABS: {
  label: string;
  value: Tab;
}[] = [
  {
    label: "Team",
    value: "team",
  },
  {
    label: "Solo",
    value: "solo",
  },
];

type PropsType = {
  data?: TeamMember[];
};

const contributorFormSchema = z.object({
  avatar: z.string().optional(),
  name: z.string(),
  surName: z.string(),
  email: z.string().email(),
  role: z.string(),
});

type ContributorFormValues = z.infer<typeof contributorFormSchema>;

const defaultValues: Partial<ContributorFormValues> = {};

const Contributors = ({ updateStep, children }: StepProps) => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [soloMembers, setSoloMembers] = useState<TeamMember[]>([]);
  const [files, setFiles] = useState<any[]>([]);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [tab, setTab] = useState(TABS[0].value);
  // ** form
  const form = useForm<ContributorFormValues>({
    resolver: zodResolver(contributorFormSchema),
    defaultValues,
    mode: "onChange",
  });
  //

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  useEffect(() => {
    if (currentTabIndex === TABS.length) {
      updateStep(1);
    } else {
      setTab(TABS[currentTabIndex].value);
    }
  }, [currentTabIndex]);

  const onSubmit = (data: ContributorFormValues) => {
    console.log(data);
    
    const _members = [...members];
    _members.push({...data, id: Date.now()});
    setMembers(_members);
    setTimeout(() => {
      form.reset({
        avatar: "",
        name: "",
        surName: "",
        email: "",
        role: "",
      });
    }, 1000);
  };

  // ** Actions

  const handleAvatarImageChange = (url: string, member: TeamMember) => {
    console.log(url);
    const _member = {
      ...member,
      avatar: url,
    };

    const _members = members.map((m) => {
      if (m.email === member.email) {
        console.log(member.email);
        return _member;
      }
      return m;
    });
    console.log(_members);
    setMembers(_members);
  };

  const handleClickNext = () => {
    setCurrentTabIndex(currentTabIndex + 1);
  };

  const handleClickBack = () => {
    updateStep(-1);
  };

  const handleClickSkip = () => {
    updateStep(1);
  };

  const onTabChange = (value: string) => {
    console.log(value);
    setTab(value as Tab);
  };

  return (
    <div className={cn("grid grid-cols-2 h-full shadow-lg border rounded-3xl")}>
      <div className="flex-grow bg-modal pt-8">
        <Tabs
          value={tab}
          onValueChange={onTabChange}
          className="w-full px-10 py-7 rounded-s-3xl h-full flex flex-col justify-between"
        >
          <div>
            <h1 className="text-3xl font-semibold tracking-tight mb-3">
              Let’s start with the team
            </h1>
            <p className="text-sm text-muted-foreground mb-14">
              Invite your team to join the project.
            </p>
            <TabsList className="grid w-full grid-cols-2 mx-auto max-w-[70%]">
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="solo">Solo</TabsTrigger>
            </TabsList>
            <TabsContent value="team" className="mt-10">
              <div className="grid gap-6 items-center justify-center">
                {members.map((member, index) => (
                  <div
                    className={cn(
                      "flex items-center space-x-4 px-4 py-3 rounded-md w-full",
                      isOwner(member) ? "bg-mblue" : "bg-modal-foreground"
                    )}
                    key={index}
                  >
                    {/* <Avatar className="bg-[#A3D3FF]">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback className="bg-transparent">
                    {fallbackAvatar(member.name)}
                  </AvatarFallback>
                </Avatar> */}
                    <UploadButton
                      title={fallbackAvatar(member.name)}
                      className="rounded-full"
                      files={files}
                      setFiles={setFiles}
                      imageUrl={member.avatar || null}
                      onImageChange={(url) =>
                        handleAvatarImageChange(url, member)
                      }
                    />
                    <div
                      className={cn(
                        isOwner(member) ? "text-white" : "text-mblue"
                      )}
                    >
                      <p className={cn("text-sm font-medium leading-none")}>
                        {member.name}
                      </p>
                      <p className="text-sm">{member.role}</p>
                    </div>
                  </div>
                ))}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    {/* <FormField
              control={form.control}
              name="avatar"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <UploadButton
                      title="OM"
                      className="rounded-full"
                      files={files}
                      setFiles={setFiles}
                      imageUrl={field.value || null}
                      onImageChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            /> */}
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Name"
                                className="max-w-[180px] bg-modal-foreground"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="surName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Surname"
                                className="max-w-[180px] bg-modal-foreground"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Email"
                                className="max-w-[180px] bg-modal-foreground"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl className="bg-modal-foreground">
                                <SelectTrigger className="text-[#6d7d93] font-semibold">
                                  <SelectValue
                                    className=""
                                    placeholder="Role"
                                  />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="">
                                <SelectItem value="Owner">Owner</SelectItem>
                                <SelectItem value="Manager">Manager</SelectItem>
                                <SelectItem value="Musician">
                                  Musician
                                </SelectItem>
                                <SelectItem value="Singer">Singer</SelectItem>
                                <SelectItem value="Marketer">
                                  Marketer
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                      <div className="col-span-2 mt-4">
                        <Button
                          type="submit"
                          className="w-full hover:bg-[#5D9DF1] bg-mblue text-foreground"
                          variant="default"
                        >
                          Add contributor
                        </Button>
                      </div>
                    </div>
                  </form>
                </Form>
              </div>
            </TabsContent>
            <TabsContent value="solo" className="mt-10">
              <div className="grid gap-6 items-center justify-center">
                <div className="flex items-center space-x-4 px-4 bg-mblue py-3 rounded-md w-full mb-5 pr-14 min-w-[300px]">
                  <Avatar className="bg-[#A3D3FF] h-12 w-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-transparent">
                      {fallbackAvatar("Julie Depree")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="text-sm font-medium leading-none text-white">
                      Julie Depree
                    </p>
                    <p className="text-sm text-white">Master Owner</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
          <div className="flex justify-between w-full mt-8">
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
        </Tabs>
      </div>
      <div className="relative flex items-end px-4 flex-col py-7 bg-modal-foreground rounded-r-3xl">
        <div className="p-8 rounded-2xl bg-modal border border-muted w-full">
          <h6 className="text-2xl	mb-3">Team & Shares</h6>
          <p className="text-[#94A3B8] mb-7 text-sm">
            Artists participating in this contract.
          </p>
          <div className="pl-10">
            <h6 className="text-lg mb-3">Team members</h6>
            <p className="text-[#94A3B8] mb-7 text-sm">
              Artists participating in this contract.
            </p>
            <div className="pl-4 flex gap-10">
              <div className="flex flex-col items-center">
                <p className="text-[#94A3B8] text-sm mb-3.5">Master Owner</p>
                <Avatar className="h-11 w-11 border border-white">
                  <Image
                    src="/julie.svg"
                    width={100}
                    height={100}
                    alt="avatar"
                  />
                </Avatar>
              </div>
              <div className="flex flex-col">
                <p className="text-[#94A3B8] text-sm mb-3.5">Artists</p>
                <div className="flex">
                  <Avatar className="h-11 w-11 border border-white">
                    <Image
                      src="/amandine.svg"
                      width={100}
                      height={100}
                      alt="avatar"
                    />
                  </Avatar>
                  <Avatar className="h-11 w-11 -ml-2 border border-white">
                    <Image
                      src="/orlane.svg"
                      width={100}
                      height={100}
                      alt="avatar"
                    />
                  </Avatar>
                  <Avatar className="h-11 w-11 -ml-2 border border-white">
                    <Image
                      src="/jon.svg"
                      width={100}
                      height={100}
                      alt="avatar"
                    />
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
