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
import UploadButton from "@/components/ui/upload-button";
import { Separator } from "@/components/ui/separator";

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
      <Card className="border-none mx-20">
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-9">
            <Button variant="outline">Firm</Button>
            <Button variant="outline">Optional</Button>
          </div>
          <div className="grid grid-cols-3 item-center">
            <Separator />
            <span className="w-fit">RECORDINGS INFORMATION</span>
            <Separator />
          </div>
          {recordings.map((recording, index) => (
            <div key={index} className="grid grid-cols-10">
              <Image
                src={recording.image}
                className="col-span-1"
                width={50}
                height={50}
                alt="track"
              />
              <div className="col-span-3 space-y-3">
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
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="trackName"
                  render={({ field }) => (
                    <FormItem>
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
                      <FormControl>
                        <UploadButton
                          files={files}
                          setFiles={setFiles}
                          imageUrl={field.value}
                          onImageChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="px-8">
                  ADD
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
