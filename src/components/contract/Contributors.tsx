"use client";
import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
// ** Form
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

// ** Component
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
import { TeamMember } from "./types";
import { isOwner } from "./utils";

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

const Contributors = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [soloMembers, setSoloMembers] = useState<TeamMember[]>([]);
  const [files, setFiles] = useState<any[]>([]);

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

  const onSubmit = (data: ContributorFormValues) => {
    console.log(data);
    const _members = [...members];
    _members.push(data);
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

  return (
    <div className="">
      <Tabs defaultValue="team" className="w-full px-10">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="solo">Solo</TabsTrigger>
        </TabsList>
        <TabsContent value="team" className="mt-10">
          <div className="grid gap-6 items-center justify-center">
            {members.map((member, index) => (
              <div
                className={cn(
                  "flex items-center space-x-4 px-4 bg-accent py-3 rounded-md w-full",
                  isOwner(member) ? "bg-[#2997FF]" : "bg-accent"
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
                  onImageChange={(url) => handleAvatarImageChange(url, member)}
                />
                <div
                  className={cn(
                    isOwner(member) ? "text-white" : "text-[#3B82F6]"
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
                            className="max-w-[180px]"
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
                            className="max-w-[180px]"
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
                            className="max-w-[180px]"
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
                          <FormControl>
                            <SelectTrigger className="">
                              <SelectValue placeholder="Role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="">
                            <SelectItem value="Owner">Owner</SelectItem>
                            <SelectItem value="Manager">Manager</SelectItem>
                            <SelectItem value="Musician">Musician</SelectItem>
                            <SelectItem value="Singer">Singer</SelectItem>
                            <SelectItem value="Marketer">Marketer</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <div className="col-span-2 mt-4">
                    <Button type="submit" className="w-full" variant="outline">
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
            <div className="flex items-center space-x-4 px-4 bg-accent py-3 rounded-md w-full mb-5 pr-14">
              <Avatar className="bg-[#A3D3FF]">
                <AvatarImage src="" />
                <AvatarFallback className="bg-transparent">
                  {fallbackAvatar("Julie Depree")}
                </AvatarFallback>
              </Avatar>

              <div>
                <p className="text-sm font-medium leading-none">Julie Depree</p>
                <p className="text-sm text-muted-foreground">Master Owner</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Contributors;
