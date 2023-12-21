"use client";
import React, { useState } from 'react';
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "../../components/dashboard/overview"
import {
    Card,
    CardContent,
    CardFooter,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/registry/new-york/ui/button"
import RecentSales from '@/components/dashboard/recent-sales';
import { CardsActivityGoal } from '@/registry/new-york/example/cards/activity-goal';
import { CardsChat } from '@/registry/new-york/example/cards/chat';
import { CardsTeamMembers } from '@/registry/new-york/example/cards/team-members';
import { Progress } from '@/registry/new-york/ui/progress';

const cards = [
    {
        title: "Total Revenue",
        amount: "$4236.0",
        content: "+34% from last month"
    },
    {
        title: "Monthly Streams Revenue",
        amount: "$436.0",
        content: "+10% from last month"
    },
    {
        title: "Monthly Sales Revenue",
        amount: "$236.0",
        content: "+38% from last month"
    },
    {
        title: "Balance",
        amount: "$52 236.0",
        content: "+201 since last hour"
    }
]

const data = [
    {
        revenue: 10400,
        subscription: 240,
    },
    {
        revenue: 14405,
        subscription: 300,
    },
    {
        revenue: 9400,
        subscription: 200,
    },
    {
        revenue: 8200,
        subscription: 278,
    },
    {
        revenue: 7000,
        subscription: 189,
    },
    {
        revenue: 9600,
        subscription: 239,
    },
    {
        revenue: 11244,
        subscription: 278,
    },
    {
        revenue: 26475,
        subscription: 189,
    },
]

const metricdata = [
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

const Graph = () => {
    const [shuffledCards, setShuffledCards] = useState(cards.sort(() => (Math.random() > 0.5 ? 1 : -1)));

    const handleTabClick = () => {
        setShuffledCards([...cards].sort(() => (Math.random() > 0.5 ? 1 : -1)));
    };

    return (
        <React.Fragment>
            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview" onClick={handleTabClick}>Overview</TabsTrigger>
                    <TabsTrigger value="analytics" onClick={handleTabClick}> Streams</TabsTrigger>
                    <TabsTrigger value="revenue" onClick={handleTabClick}>Revenue</TabsTrigger>
                    <TabsTrigger value="viewone" onClick={handleTabClick}>View One</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
                        <Card className='flex flex-col justify-between'>
                            <CardHeader className="flex flex-col justify-between space-y-0 pb-2">
                                <CardTitle className="pb-2">Monthly Streams Revenue</CardTitle>
                                <div className="text-2xl font-bold">$15,231.89</div>
                                <p className="text-xs text-muted-foreground">
                                    +20.1% from last month
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="h-[80px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 10,
                                                left: 10,
                                                bottom: 0,
                                            }}
                                        >
                                            <Line
                                                type="monotone"
                                                strokeWidth={2}
                                                dataKey="revenue"
                                                activeDot={{
                                                    r: 6,
                                                    style: { fill: "#4FABFF", opacity: 0.25 },
                                                }}
                                                style={
                                                    {
                                                        stroke: "#4FABFF",
                                                    } as React.CSSProperties
                                                }
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className='flex flex-col justify-between'>
                            <CardHeader className="flex flex-col justify-between space-y-0 pb-2">
                                <CardTitle className="pb-2">Monthly Sales Revenue</CardTitle>
                                <div className="text-2xl font-bold">$2350</div>
                                <p className="text-xs text-muted-foreground">
                                    +180.1% from last month
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="mt-4 h-[90px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={data}>
                                            <Bar
                                                dataKey="subscription"
                                                style={
                                                    {
                                                        fill: "#4FABFF"
                                                    } as React.CSSProperties
                                                }
                                            />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className='col-span-2'>
                            <CardHeader>
                                <CardTitle>Total Revenue</CardTitle>
                                <CardDescription>
                                    Number of Monthly Streams accross all platforms
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pb-4">
                                <div className="h-[200px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart
                                            data={metricdata}
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
                                                    style: { fill: "#2997FF", opacity: 0.25 },
                                                }}
                                                style={
                                                    {
                                                        stroke: "#2997FF",
                                                        opacity: 0.25,
                                                    } as React.CSSProperties
                                                }
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="today"
                                                strokeWidth={2}
                                                activeDot={{
                                                    r: 8,
                                                    style: { fill: "#4FABFF" },
                                                }}
                                                style={
                                                    {
                                                        stroke: "#4FABFF",
                                                    } as React.CSSProperties
                                                }
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Top Tracks</CardTitle>
                                <CardDescription>
                                    You participated in 26 tracks.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <RecentSales />
                            </CardContent>
                        </Card>
                        <div className="col-span-4 grid gap-4 grid-cols-2 ">
                            <Card className="flex flex-col justify-between">
                                <CardHeader>
                                    <div className='h-9 w-9 bg-[#4EABFE] ml-7' />
                                    <CardTitle className='pt-4'>Fields of Dreams</CardTitle>
                                </CardHeader>
                                <CardContent className='p-6'>
                                    <CardDescription>
                                        Your contract for Fields of Dreams is nearly done! Click below to complete the last steps.
                                    </CardDescription>
                                    <div className='text-center mt-6'>
                                        <Button className="hover:bg-[#4EABFE] bg-[#4EABFE]" variant="default">
                                            Complete contract
                                        </Button>
                                    </div>
                                </CardContent>
                                <CardFooter className='grid grid-cols-5 gap-3 p-6'>
                                    <Progress value={100} />
                                    <Progress value={100} />
                                    <Progress value={100} />
                                    <Progress value={70} />
                                    <Progress value={0} />
                                </CardFooter>
                            </Card>
                            <CardsActivityGoal />
                            <CardsTeamMembers />
                            <CardsChat />
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="viewone" className="pt-6 space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Revenue
                                </CardTitle>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-euro"><path d="M4 10h12" /><path d="M4 14h9" /><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" /></svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">€ 4567</div>
                                <p className="text-xs text-muted-foreground">
                                    +17% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Streaming
                                </CardTitle>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-headphones"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" /></svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+5639</div>
                                <p className="text-xs text-muted-foreground">
                                    +43% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-disc-album"><rect width="18" height="18" x="3" y="3" rx="2" /><circle cx="12" cy="12" r="5" /><path d="M12 12h.01" /></svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+564</div>
                                <p className="text-xs text-muted-foreground">
                                    +12% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Active Tracks
                                </CardTitle>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play-circle"><circle className="bg-red-500" cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+573</div>
                                <p className="text-xs text-muted-foreground">
                                    +20 tracks in the last month
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Streaming  Data</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <Overview />
                            </CardContent>
                        </Card>
                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Top Tracks</CardTitle>
                                <CardDescription>
                                    Your best tracks by revenue.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <RecentSales />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </React.Fragment>
    )
}

export default Graph