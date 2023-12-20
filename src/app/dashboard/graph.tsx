"use client";
import React, { useState } from 'react';
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import RecentSales from '@/components/dashboard/recent-sales';
import { CardsActivityGoal } from '@/registry/new-york/example/cards/activity-goal';
import { CardsChat } from '@/registry/new-york/example/cards/chat';
import { CardsTeamMembers } from '@/registry/new-york/example/cards/team-members';

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
                    <TabsTrigger value="reports" onClick={handleTabClick}>Revenue</TabsTrigger>
                </TabsList>
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
                            <div className="mt-4 h-[80px]">
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
                            <div className="h-[148px]">
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
                <TabsContent value="overview" className="space-y-4">
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
                            <CardsActivityGoal />
                            <CardsActivityGoal />
                            <CardsTeamMembers />
                            <CardsChat />
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </React.Fragment>
    )
}

export default Graph