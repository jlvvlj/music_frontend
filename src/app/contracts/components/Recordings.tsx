import { useState } from "react";
// ** Next
import Image from "next/image";

import { format } from "date-fns";
// ** Components
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
import { Recording } from "./types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DatePicker from "@/components/ui/date-picker";

const Recordings = () => {
  const [recordings, setRecordings] = useState<Recording[]>([
    {
      image: "",
      title: "Fire Emblem",
      number: 12,
      type: {
        name: "Optional",
        description: "",
      },
      programType: {
        name: "Firm",
        description: "",
      },
      completedAt: "01/22/2022",
      releasedAt: "01/20/2022",
      optionRightsLimit: "01/23/2022",
    },
    {
      image: "",
      title: "Elevation",
      number: 2,
      type: {
        name: "Optional",
        description: "",
      },
      programType: {
        name: "Firm",
        description: "",
      },
      completedAt: "01/20/2022",
      releasedAt: "01/20/2022",
      optionRightsLimit: "01/20/2022",
    },
  ]);

  return (
    <>
      <Card className="border-none mx-20">
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription>
            Enter the name and details of recording programs below.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {recordings.map((recording, index) => (
            <div className="grid grid-cols-10">
              <Image
                src="https://www.billboard.com/wp-content/uploads/2022/06/beyonce-Lemonade-album-art-billboard-1240.jpg?w=1024"
                className="col-span-1"
                width={50}
                height={50}
                alt="track"
              />
              <div className="col-span-3 space-y-3">
                <p className="text-[#F8FAFC] text-sm font-normal">
                  {recording.title}
                </p>
                <p className="text-[#94A3B8] text-sm font-normal">
                  {`${recording.number} Singles (SPs) ${recording.type.name}`}
                </p>
              </div>
              <div className="col-span-2 space-y-3">
                <p className="text-[#F8FAFC] text-sm font-normal">
                  Completion Date
                </p>
                <p className="text-[#94A3B8] text-sm font-normal">
                  {format(new Date(recording.completedAt), "LLL dd, y")}
                </p>
              </div>
              <div className="col-span-2 space-y-3">
                <p className="text-[#F8FAFC] text-sm font-normal">
                  Commercial release
                </p>
                <p className="text-[#94A3B8] text-sm font-normal">
                  {format(new Date(recording.releasedAt), "LLL dd, y")}
                </p>
              </div>
              <div className="col-span-2 space-y-3">
                <p className="text-[#F8FAFC] text-sm font-normal">
                  Option rights limit
                </p>
                <p className="text-[#94A3B8] text-sm font-normal">
                  {format(new Date(recording.optionRightsLimit), "LLL dd, y")}
                </p>
              </div>
            </div>
          ))}
          {/* Add section */}
          <div className="flex gap-4">
            <Button className="!bg-[#1E293B] text-white">+</Button>
            <Input
              type="text"
              className="max-w-[180px]"
              value=""
              placeholder="Title"
            />
            <Input
              type="text"
              className="max-w-[180px]"
              value=""
              placeholder="Rcording Number"
            />
            <div>
              <Select>
                <SelectTrigger className="ml-auto w-[180px]">
                  <SelectValue placeholder="Recording type" />
                </SelectTrigger>
                <SelectContent className="ml-auto w-[250px]">
                  <SelectItem value="firm">Firm</SelectItem>
                  <SelectItem value="optional">Optional</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select defaultValue="firm">
                <SelectTrigger className="ml-auto w-[110px]">
                  <SelectValue placeholder="Program type" />
                </SelectTrigger>
                <SelectContent className="ml-auto w-[250px]">
                  <SelectItem value="firm">Firm</SelectItem>
                  <SelectItem value="optional">Optional</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <DatePicker className="max-w-[170px]" />
            </div>
            <div>
              <DatePicker />
            </div>
            <div>
              <DatePicker />
            </div>
            <Button className="px-8"> ADD </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Recordings;
