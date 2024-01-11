"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { useTheme } from "next-themes"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

import { useConfig } from "@/hooks/use-config"
import { Button } from "@/registry/default/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/registry/default/ui/card"
import { themes } from "@/registry/themes"

const data1 = [
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
]

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

//get the monthly earnings value for the current month
const current_month = new Date().getMonth()
const current_month_earnings = monthly_earnings[current_month].value

//get an array including the earnings of the last 12 months
const yearly_earnings_array = monthly_earnings.slice(current_month - 11, current_month + 1)

//get the total earnings of the last 12 months based on the array above without using reduce
let yearly_earnings = 0

for (let i = 0; i < yearly_earnings_array.length; i++) {
    yearly_earnings += yearly_earnings_array[i].value
}

console.log(yearly_earnings)






export function Wallet() {
    const { theme: mode } = useTheme()
    const [config] = useConfig()

    const theme = themes.find((theme) => theme.name === config.theme)
    const [goal, setGoal] = React.useState(3453)

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }

    return (
        <Card>
            <CardHeader className="items-center pb-4">
                <CardTitle className="text-md">My wallet</CardTitle>
                {/* <CardDescription>.</CardDescription> */}
            </CardHeader>
            <CardContent className="pb-2">
                <div className="flex items-center justify-center space-x-2">
                    <div className="flex-1 text-center">
                        <div className="text-5xl font-bold tracking-tighter">${goal}</div>
                        <div className="text-[0.70rem] uppercase text-muted-foreground">
                            Total balance
                        </div>
                    </div>
                </div>
                <div className="my-3 h-[60px]">
                    <ResponsiveContainer width="100%" height="100%">
                        {/* <BarChart data={data}>
                            <Bar
                                dataKey="goal"
                                style={
                                    {
                                        fill: "var(--theme-primary)",
                                        opacity: 0.2,
                                        "--theme-primary": `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
                                            })`,
                                    } as React.CSSProperties
                                }
                            />
                        </BarChart> */}
                        <LineChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 10,
                                left: 10,
                                bottom: 0,
                            }}
                        >
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="rounded-lg border bg-background p-2 shadow-sm">
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
                                    r: 6,
                                    style: { fill: "var(--theme-primary)", opacity: 0.25 },
                                }}
                                style={
                                    {
                                        stroke: "var(--theme-primary)",
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
                                    r: 8,
                                    style: { fill: "var(--theme-primary)" },
                                }}
                                style={
                                    {
                                        stroke: "var(--theme-primary)",
                                        "--theme-primary": `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
                                            })`,
                                    } as React.CSSProperties
                                }
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={()=>setGoal(current_month_earnings)}   className="bg-slate-500 text-white mx-1 h-6">1m</Button>
                <Button onClick={()=>setGoal(yearly_earnings)} className="mx-1 h-6">6m</Button>
                <Button onClick={()=>setGoal(goal*12)} className=" mx-1 h-6">1y</Button>
            </CardFooter>
        </Card>
    )
}
