"use client"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../ui/avatar"
import { Button } from "../ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card"
import { Input } from "../ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"
import { Separator } from "../ui/separator"
import { Slider } from "../ui/slider"

export default function TeamCreator() {
    return (
        <div className="space-y-4">
            <div className="grid gap-6">
                <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="https://ui.shadcn.com/avatars/02.png" />
                            <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium leading-none">
                                Olivia Martin
                            </p>
                            <p className="text-sm text-muted-foreground">m@example.com</p>
                        </div>
                    </div>
                    <Select defaultValue="Owner">
                        <SelectTrigger className="ml-auto w-[110px]">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="ml-auto w-[250px]">
                            <SelectItem value="Owner">Owner</SelectItem>
                            <SelectItem value="Manager">Manager</SelectItem>
                            <SelectItem value="Musician">Musician</SelectItem>
                            <SelectItem value="Singer">Singer</SelectItem>
                            <SelectItem value="Marketer">Marketer</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="mt-4 flex flex-col items-center">
                        <Input placeholder="%" className="w-[100px] mb-2" />
                        <Slider />
                    </div>
                </div>
                <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
                            <AvatarFallback>IN</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium leading-none">
                                Isabella Nguyen
                            </p>
                            <p className="text-sm text-muted-foreground">b@example.com</p>
                        </div>
                    </div>
                    <Select defaultValue="Singer">
                        <SelectTrigger className="ml-auto w-[110px]">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Owner">Owner</SelectItem>
                            <SelectItem value="Manager">Manager</SelectItem>
                            <SelectItem value="Musician">Musician</SelectItem>
                            <SelectItem value="Singer">Singer</SelectItem>
                            <SelectItem value="Marketer">Marketer</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="mt-4 flex flex-col items-center">
                        <Input placeholder="%" className="w-[100px] mb-2" />
                        <Slider />
                    </div>
                </div>
                <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="https://ui.shadcn.com/avatars/03.png" />
                            <AvatarFallback>SD</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium leading-none">
                                Sofia Davis
                            </p>
                            <p className="text-sm text-muted-foreground">p@example.com</p>
                        </div>
                    </div>
                    <Select defaultValue="Musician">
                        <SelectTrigger className="ml-auto w-[110px]">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Owner">Owner</SelectItem>
                            <SelectItem value="Manager">Manager</SelectItem>
                            <SelectItem value="Musician">Musician</SelectItem>
                            <SelectItem value="Singer">Singer</SelectItem>
                            <SelectItem value="Marketer">Marketer</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="mt-4 flex flex-col items-center">
                        <Input placeholder="%" className="w-[100px] mb-2" />
                        <Slider />
                    </div>
                </div>
            </div>
        </div>
    )
}
