"use client";

import React, { useState, useEffect} from "react";
import { Minus, Plus } from "lucide-react";
import { useTheme } from "next-themes";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import { themes } from "@/registry/themes";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

interface Props extends React.HTMLAttributes<HTMLElement> {
  unit?: string;
  initialValue: number;
  step: number;
  label: string;
  buttonTitle: string;
  cardTitle?: string;
  isOwner?: boolean;
  minValue: number;
  maxValue: number;
  buttonHidden?: boolean;
  chartHidden?: boolean;
  onClickButton: VoidFunction;
  padding?: string;
  setGoal: (value: number) => void;
}

export function CardsActivityGoal({
  unit,
  className,
  initialValue = 0,
  step = 1,
  label,
  cardTitle,
  buttonTitle,
  onClickButton,
  minValue = 0,
  maxValue = 100,
  buttonHidden = false,
  chartHidden = false,
  isOwner,
  padding,
  setGoal,
}: Props) {
  const { theme: mode } = useTheme();
  const [config] = useConfig();

  const theme = themes.find((theme) => theme.name === config.theme);

  useEffect(() => {

  }, [initialValue]);
  function onClick(adjustment: number) {
    setGoal(initialValue + adjustment);
  }

  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardTitle className="text-base"></CardTitle>
      <CardDescription className="flex justify-center">
        {cardTitle || ""}
      </CardDescription>
      <CardContent className={`pb-1 ${padding}`}>
        <div className="flex items-center justify-center space-x-2">
          <Button
            variant="default"
            type="button"
            size="icon"
            className={cn(
              "bg-transparent border border-solid rounded-full w-[14px] h-[14px] flex justify-center items-center minus-btn text-white hover:text-black",
              isOwner ? "border-[#8AC4FB]" : "border-[#0F172A]"
            )}
            onClick={() => onClick(-step)}
            disabled={initialValue <= minValue}
          >
            <Minus className="h-[10px] w-[10px] " />
            <span className="sr-only">Decrease</span>
          </Button>
          <div className="flex-1 text-center">
            <div className="text-[21px] font-bold tracking-tighter">
              {initialValue}
              {unit || ""}
            </div>
            <div className="text-[0.40rem] uppercase">{label}</div>
          </div>
          <Button
            variant="default"
            size="icon"
            type="button"
            className={cn(
              "bg-transparent border border-solid rounded-full w-[14px] h-[14px] flex justify-center items-center minus-btn  text-white hover:text-black",
              isOwner ? "border-[#8AC4FB]" : "border-[#0F172A]"
            )}
            onClick={() => onClick(step)}
            disabled={initialValue >= maxValue}
          >
            <Plus className="h-[10px] w-[10px]" />
            <span className="sr-only">Increase</span>
          </Button>
        </div>
        {chartHidden ? null : (
          <div className={cn("h-[30px]", chartHidden ? "hidden" : "")}>
            <ResponsiveContainer
              width="100%"
              height="100%"
              minWidth={0}
              minHeight={undefined}
            >
              <BarChart data={data}>
                <Bar
                  dataKey="goal"
                  style={
                    {
                      fill: isOwner ? "#fff" : "#6DB5F9",
                      opacity: 0.4,
                      "--theme-primary": `hsl(${
                        theme?.cssVars[mode === "dark" ? "dark" : "light"]
                          .primary
                      })`,
                    } as React.CSSProperties
                  }
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
      <CardFooter className={`${cn(buttonHidden ? "hidden" : "")} pb-0 mt-1`}>
        <button
          type="button"
          className={cn(
            " rounded-[20px] px-5 py-1 text-[12px] font-normal text-center",
            isOwner ? "bg-white text-[#3B82F6]" : "bg-[#5D9DF1] text-[#0F172A]"
          )}
        >
          {buttonTitle}
        </button>
      </CardFooter>
    </Card>
  );
}
