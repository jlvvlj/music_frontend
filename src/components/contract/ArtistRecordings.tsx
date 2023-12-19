import React, { useState, useEffect } from "react";
// ** Next
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArtistRecording } from "./types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DatePicker from "@/components/ui/date-picker";
import UploadButton from "@/components/upload-button";
import { Separator } from "@/components/ui/separator";
import UploadFile from "@/components/ui/upload-file";

const recordingFormSchema = z.object({
  image: z.string(),
  trackName: z.string().default(""),
  audio: z.string(),
  recordingType: z.string(),
});

type RecordingFormValues = z.infer<typeof recordingFormSchema>;

const defaultValues: Partial<RecordingFormValues> = {};

const ArtistRecordings = () => {
  const [recordings, setRecordings] = useState<ArtistRecording[]>([
    {
      image:
        "https://www.billboard.com/wp-content/uploads/2022/06/beyonce-Lemonade-album-art-billboard-1240.jpg?w=1024",
      trackName: "Fire Emblem",
      audio: "user/music/elevation.mp3",
      recordingType: "Optional",
    },
  ]);

  const [files, setFiles] = useState<any[]>([]);

  // ** form
  const form = useForm<RecordingFormValues>({
    resolver: zodResolver(recordingFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // **

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const onSubmit = (data: RecordingFormValues) => {
    console.log(data);
    const _recordings = [...recordings];
    _recordings.push(data);
    setRecordings(_recordings);
    setTimeout(() => {
      form.reset();
    }, 1000);
  };

  return (
    <>
      <Card className="mx-auto max-w-[766px]">
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-9">
            <Button variant="outline">Firm</Button>
            <Button variant="outline">Optional</Button>
          </div>
          <div className="flex items-center">
            <Separator className="flex-auto" />
            <p className="text-sm flex-none">RECORDINGS INFORMATION</p>
            <Separator className="flex-auto" />
          </div>
          {recordings.map((recording, index) => (
            <div key={index} className="grid grid-cols-8 gap-3">
              <Image
                src={recording.image}
                className="col-span-1"
                width={50}
                height={50}
                alt="track"
              />
              <div className="col-span-4 space-y-3">
                <p className="text-[#F8FAFC] text-sm font-normal">
                  {recording.trackName}
                </p>
                <p className="text-[#94A3B8] text-sm font-normal">
                  {recording.audio}
                </p>
              </div>
            </div>
          ))}
          {/* Add section */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="trackName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Track Name</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload Track</FormLabel>
                    <FormControl>
                      <UploadFile input="" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload Cover</FormLabel>
                    <FormControl>
                      <UploadFile input="" buttonLabel="" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button type="submit" className="px-8">
                  ADD +
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default ArtistRecordings;
