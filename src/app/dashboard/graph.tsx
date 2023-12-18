"use client";
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Overview from '@/components/dashboard/overview';
import RecentSales from '@/components/dashboard/recent-sales';

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
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {
                        shuffledCards.map((card) => {
                            return (
                                <>
                                    <Card className="card relative group">
                                        <div className="shine absolute inset-0 z-[1] overflow-hidden opacity-0 transition-opacity duration-[0.5s] before:w-[150%] before:pb-[150%] before:rounded-[50%] before:absolute before:left-1/2 before:bottom-[55%] before:blur-[35px] before:opacity-shine before:translate-x-[-50%] before:bg-shine group-hover:opacity-[1] group-hover:duration-[0.5s] group-hover:delay-0"></div>
                                        <div className="background absolute inset-0 overflow-hidden opacity-background">
                                            <div className="tiles opacity-0 transition-opacity duration-[0.25s] group-hover:opacity-[1] group-hover:delay-[0.25s]">
                                                <div className="tile tile-1 absolute bg-tile opacity-0 top-0 left-0 h-2/6 w-[22.5%]"></div>
                                                <div className="tile tile-2 absolute bg-tile opacity-0 top-0 left-[22.5%] h-2/6 w-[27.5%]"></div>
                                                <div className="tile tile-3 absolute bg-tile opacity-0 top-0 left-1/2 h-2/6 w-[27.5%]"></div>
                                                <div className="tile tile-4 absolute bg-tile opacity-0 top-0 left-[77.5%] h-2/6 w-[22.5%]"></div>

                                                <div className="tile tile-5 absolute bg-tile opacity-0 top-1/3 left-0 h-2/6 w-[22.5%]"></div>
                                                <div className="tile tile-6 absolute bg-tile opacity-0 top-1/3 left-[22.5%] h-2/6 w-[27.5%]"></div>
                                                <div className="tile tile-7 absolute bg-tile opacity-0 top-1/3 left-1/2 h-2/6 w-[27.5%]"></div>
                                                <div className="tile tile-8 absolute bg-tile opacity-0 top-1/3 left-[77.5%] h-2/6 w-[22.5%]"></div>

                                                <div className="tile tile-9 absolute bg-tile opacity-0 top-[32.5%] left-1/2 h-2/6 w-[27.5%]"></div>
                                                <div className="tile tile-10 absolute bg-tile opacity-0 top-[32.5%] left-[77.5%] h-2/6 w-[22.5%]"></div>
                                            </div>

                                            <div className="line line-1 absolute inset-0 opacity-0 transition-opacity duration-[0.35s] after:absolute after:bg-line after:transition-transform after:duration-[0.35s] before:absolute before:bg-line before:transition-transform before:duration-[0.35s] after:top-0 after:bottom-0 after:w-px after:origin-[50%_0] after:scale-y-0 before:left-0 before:right-0 before:h-px before:origin-[0_50%] before:scale-x-0 before:top-1/3 after:left-[22.5%] after:delay-[0.3s] before:delay-[0.3s] group-hover:opacity-[1] group-hover:duration-[0.15s] group-hover:before:scale-x-100 group-hover:after:scale-y-100"></div>
                                            <div className="line line-2 absolute inset-0 opacity-0 transition-opacity duration-[0.35s] after:absolute after:bg-line after:transition-transform after:duration-[0.35s] before:absolute before:bg-line before:transition-transform before:duration-[0.35s] after:top-0 after:bottom-0 after:w-px after:origin-[50%_0] after:scale-y-0 before:left-0 before:right-0 before:h-px before:origin-[0_50%] before:scale-x-0 before:top-2/3 after:left-1/2 after:delay-[0.15s] before:delay-[0.15s] group-hover:opacity-[1] group-hover:duration-[0.15s] group-hover:before:scale-x-100 group-hover:after:scale-y-100"></div>
                                            <div className="line line-3 absolute inset-0 opacity-0 transition-opacity duration-[0.35s] after:absolute after:bg-line after:transition-transform after:duration-[0.35s] before:absolute before:bg-line before:transition-transform before:duration-[0.35s] after:top-0 after:bottom-0 after:w-px after:origin-[50%_0] after:scale-y-0 before:left-0 before:right-0 before:h-px before:origin-[0_50%] before:scale-x-0 before:top-full after:right-[22.5%] group-hover:opacity-[1] group-hover:duration-[0.15s] group-hover:before:scale-x-100 group-hover:after:scale-y-100"></div>
                                        </div>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                {card?.title}
                                            </CardTitle>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="h-4 w-4 text-muted-foreground"
                                            >
                                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                            </svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-cyan-300 text-2xl font-bold">
                                                {card?.amount}
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                {card?.content}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </>
                            )
                        })
                    }
                </div>
                <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Your Tracks</CardTitle>
                                <CardDescription>
                                    You participated in 26 tracks.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <RecentSales />
                            </CardContent>
                        </Card>
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <Overview />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </React.Fragment>
    )
}

export default Graph