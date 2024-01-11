"use client"

import * as React from "react"
import { ArrowUpIcon, LayoutGrid, MoreHorizontal } from "lucide-react"
import { useTheme } from "next-themes"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

import { useConfig } from "@/hooks/use-config"
import { Button } from "@/registry/default/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/registry/default/ui/card"
import { themes } from "@/registry/themes"
import Link from "next/link"
import { PaperPlaneIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/registry/default/ui/select"

const data = [
    {
        average: 400,
        today: 240,
    },
    {
        average: 300,
        today: 139,
    },
    {
        average: 200,
        today: 980,
    },
    {
        average: 278,
        today: 390,
    },
    {
        average: 189,
        today: 480,
    },
    {
        average: 239,
        today: 380,
    },
    {
        average: 349,
        today: 430,
    },
]

const monthly_earnings = [
    {
        month: "Jan",
        value: 3412,
    },
    {
        month: "Feb",
        value: 300,
    },
    {
        month: "Mar",
        value: 200,
    },
    {
        month: "Apr",
        value: 278,
    },
    {
        month: "May",
        value: 189,
    },
    {
        month: "Jun",
        value: 239,
    },
    {
        month: "Jul",
        value: 349,
    },
    {
        month: "Aug",
        value: 400,
    },
    {
        month: "Sep",
        value: 300,
    },
    {
        month: "Oct",
        value: 3745,
    },
    {
        month: "Nov",
        value: 278,
    },
    {
        month: "Dec",
        value: 189,
    },
]

const current_month = new Date().getMonth()
const current_month_earnings = monthly_earnings[current_month].value

const yearly_earnings_array = monthly_earnings.slice(current_month - 11, current_month + 1)

let yearly_earnings = 0

for (let i = 0; i < yearly_earnings_array.length; i++) {
    yearly_earnings += yearly_earnings_array[i].value
}

console.log(yearly_earnings)






export function Wallet() {
    const { theme: mode } = useTheme()
    const [config] = useConfig()

    const theme = themes.find((theme) => theme.name === config.theme)
    const [goal, setGoal] = React.useState(1320.19)

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }

    return (
        <Card className="w-[330px] bg-card3 border-none rounded-[38px]">
            <CardHeader className="pt-5 pl-[18px] pb-4">
                <div className="flex justify-between">
                    <Link href="/dashboard" className="flex items-center text-lg font-medium text-white3">
                        <svg fill="hsl(var(--white3))" width="50px" height="40px" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145.04 116.32"><defs></defs><path className="cls-1" d="M79,58.91a7.18,7.18,0,1,1,14.35,0V66a8.59,8.59,0,0,0,8.62,8.62h4.31A8.57,8.57,0,0,0,114.84,66V60.35a8.59,8.59,0,0,0-8.61-8.62h-4.31a8.59,8.59,0,0,1-8.62-8.61V38.81a8.57,8.57,0,0,0-8.61-8.61H80.38a8.57,8.57,0,0,0-8.61,8.61v5.75a7.18,7.18,0,1,1-14.36,0V38.81a8.57,8.57,0,0,0-8.62-8.61H30.13a8.57,8.57,0,0,0-8.62,8.61V86.19a8.57,8.57,0,0,0,8.62,8.62h4.3a8.57,8.57,0,0,0,8.62-8.62V58.91a7.18,7.18,0,0,1,12.26-5.08,6.91,6.91,0,0,1,2.1,5.08V86.19A8.57,8.57,0,0,0,66,94.81h4.31A8.59,8.59,0,0,0,79,86.19Z"
                        />
                            <path className="cls-1" d="M110.6,43.05A8.57,8.57,0,0,1,102,34.44V30.13a8.57,8.57,0,0,1,8.61-8.62h4.31a8.59,8.59,0,0,1,8.62,8.62v4.31a8.59,8.59,0,0,1-8.62,8.61Z" />
                        </svg>
                        Miuu
                    </Link>
                </div>
            </CardHeader>
            <CardContent className="pb-2 p-0">
                <div className="px-[18px]">
                    <p className="text-muted-foreground text-sm leading-6 mb-1.5">Total</p>
                    <div className="flex justify-between items-center">
                        <h1 className="text-[32px] font-semibold leading-6">${goal}</h1>
                        <Select defaultValue="30.8%">
                            <SelectTrigger className="w-fit bg-modal bg-primary text-primary-foreground rounded-[14px] h-7 gap-1 px-2 font-medium">
                                <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent className="bg-card3 w-fit">
                                <SelectGroup>
                                    <SelectItem value="30.8%">30.8%</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="mb-6 mt-9 h-[60px] px-[18px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={data}
                            margin={{
                                top: 6,
                                right: 10,
                                left: 10,
                                bottom: 0,
                            }}
                        >
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="rounded-lg border bg-card3 p-2 shadow-sm">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div className="flex flex-col">
                                                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                            Average
                                                        </span>
                                                        <span className="font-bold text-muted-foreground">
                                                            {payload[0].value}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                            Today
                                                        </span>
                                                        <span className="font-bold">
                                                            {payload[1].value}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                    return null
                                }}
                            />
                            <Line
                                type="monotone"
                                strokeWidth={2}
                                dataKey="average"
                                activeDot={{
                                    r: 4,
                                    style: { fill: "var(--theme-primary)", opacity: 0.25 },
                                }}
                                style={
                                    {
                                        stroke: "#6DB5F9",
                                        opacity: 0.25,
                                        "--theme-primary": `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
                                            })`,
                                    } as React.CSSProperties
                                }
                            />
                            <Line
                                type="monotone"
                                dataKey="today"
                                strokeWidth={2}
                                activeDot={{
                                    r: 6,
                                    style: { fill: "var(--theme-primary)" },
                                }}
                                style={
                                    {
                                        stroke: "#6DB5F9",
                                        "--theme-primary": `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
                                            })`,
                                    } as React.CSSProperties
                                }
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex gap-2 justify-center mb-8">
                    <Button onClick={() => setGoal(current_month_earnings)} className="bg-[#4EABFE] hover:bg-[#4EABFE] text-white h-6 px-2">Balance</Button>
                    <Button onClick={() => setGoal(yearly_earnings)} className="h-6 px-2">Month</Button>
                    <Button onClick={() => setGoal(goal * 12)} className="h-6 px-2">Year</Button>
                </div>
                <div className="bg-[#ECECEC] p-6 pb-8 mx-3 rounded-[14px]">
                    <div className="flex items-center justify-between mb-1">
                        <p className="text-[#131313]">Orlane</p>
                        <div className="bg-white w-8 h-7 rounded-[117px] flex justify-center items-center text-black"><MoreHorizontal className="h-5 w-5" /></div>
                    </div>
                    <div className="relative">
                        <div className="mx-auto relative h-[150px] w-[150px] rounded-full border-[5px] border-[#C8CCD0] bg-transparent flex justify-center items-center">
                            <Image src="/orlane.svg" alt="orlane" height={110} width={110} className="rounded-full" />
                            <div className="absolute top-10 -left-10 bg-white/[0.29] rounded-2xl py-1 px-3.5 flex gap-3">
                                <h1 className="text-[#060606] text-sm">5%</h1>
                                <div className="h-5 w-5 rounded-full bg-[#FF8B77] flex justify-center items-center"><ArrowUpIcon className="text-[#060606] h-2 w-2" /></div>
                            </div>
                        </div>
                        <div className="flex gap-3 -mt-[30px] relative z-10 w-full">
                            <Card className="bg-white/[0.29] border-none w-1/2 flex justify-between flex-col">
                                <CardHeader className="px-2.5 pt-3 pb-[15px]">
                                    <CardTitle className="text-base font-normal leading-[14px] text-[#060606]">
                                        Monthly earnings
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="px-2.5 pb-3">
                                    <div className="text-xl font-normal text-[#060606] tracking-tighter	">$1,320.19</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/[0.29] border-none w-1/2 flex justify-between flex-col">
                                <CardHeader className="px-2.5 pt-3 pb-[15px]">
                                    <CardTitle className="text-base font-normal leading-[14px] text-[#060606]">
                                        Trend
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="px-2.5 pb-3 flex justify-between items-center">
                                    <div className="text-xl font-normal text-[#060606] tracking-tighter">45%</div>
                                    <div className="h-[27px] w-[27px] rounded-full border border-[#B9B9BA] flex justify-center items-center"><ArrowUpIcon className="text-[#060606] h-2 w-2" /></div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="gap-2 px-5 pb-[18px] pt-6">
                <Button className="rounded-full w-1/2 bg-black3 hover:bg-black3 text-white3">Send<PaperPlaneIcon className="ml-1" /></Button>
                <Button className="rounded-full w-1/2 bg-black3 hover:bg-black3 text-white3">Receive<LayoutGrid className="ml-1 h-4 w-4" /></Button>
            </CardFooter>
        </Card>
    )
}
