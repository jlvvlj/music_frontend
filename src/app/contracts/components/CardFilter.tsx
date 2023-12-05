"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { RadioGroup } from "@/components/ui/radio-group";
import { MiniCard } from "@/components/cards/minicard";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProfileForm } from "../creation_modal/profile-form";
import { Separator } from "@/components/ui/separator";
import { type } from "os";

type Props = {
  option1: string;
  option2: string;
  type: "role" | "contribution";
};
const CardFilter = ({ option1 = "Yes", option2 = "No", type }: Props) => {
  const handleClickCard = (type: number) => {
    console.log(type);
  };

  return (
    <>
      <div className=" grid grid-cols-2 gap-4">
        <Card
          className="h-[300px] flex justify-center items-center"
          onClick={() => handleClickCard(0)}
        >
          <CardContent className="flex flex-col items-center gap-10 h-full justify-evenly">
            <Image
              src="https://www.billboard.com/wp-content/uploads/2022/06/beyonce-Lemonade-album-art-billboard-1240.jpg?w=1024"
              width={100}
              height={100}
              alt="track"
            />
            <Button variant="link">{option1}</Button>
          </CardContent>
        </Card>
        <Card
          className="h-[300px] flex justify-center items-center"
          onClick={() => handleClickCard(0)}
        >
          <CardContent className="flex flex-col items-center gap-10 h-full justify-evenly">
            <Image
              src="https://www.billboard.com/wp-content/uploads/2022/06/beyonce-Lemonade-album-art-billboard-1240.jpg?w=1024"
              width={100}
              height={100}
              alt="track"
            />
            <Button variant="link">{option2}</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CardFilter;
