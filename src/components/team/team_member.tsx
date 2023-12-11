"use client";
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
// ** Components
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
import UploadButton from "../ui/upload-button";

type TeamMember = {
  name: string;
  email: string;
  avatar?: string;
  role: string;
};

type PropsType = {
  data?: TeamMember[];
};

const contributorFormSchema = z.object({
  avatar: z.string().optional(),
  name: z.string(),
  email: z.string().email(),
  role: z.string(),
});

type ContributorFormValues = z.infer<typeof contributorFormSchema>;

const defaultValues: Partial<ContributorFormValues> = {};

export default function TeamMember({ data }: PropsType) {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [inputs, setInputs] = useState<TeamMember | null>(null);

  //
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

  const onSubmit = (data: ContributorFormValues) => {
    console.log(data);
    const _members = [...members];
    _members.push(data);
    setMembers(_members);
    setTimeout(() => {
      form.reset({
        avatar: "",
        name: "",
        email: "",
        role: "",
      });
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-6">
        {members.map((member, index) => (
          <div className="flex items-center space-x-4" key={index}>
            <Avatar>
              <AvatarImage src={member.avatar} />
              <AvatarFallback>{fallbackAvatar(member.name)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{member.name}</p>
              <p className="text-sm text-muted-foreground">{member.email}</p>
            </div>
            <div className="!ml-10">
              <p className="text-sm font-medium leading-none">{member.role}</p>
            </div>
          </div>
        ))}
        {/* Add section */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex items-center space-x-4">
              <FormField
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
              />
              <div className="grid grid-cols-4 gap-4">
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
                          <SelectTrigger className="ml-auto w-[110px]">
                            <SelectValue placeholder="Role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="ml-auto w-[250px]">
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
                <div>
                  <Button type="submit">Add +</Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
