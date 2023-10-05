import "../../app/globals.css"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { BellIcon, EyeNoneIcon, PersonIcon } from "@radix-ui/react-icons"


import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../ui/avatar"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "../ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../ui/popover"

import { Icons } from "@/components/ui/icons"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"

import { MiniCard } from "../cards/minicard"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import TeamCreator from "../team/team_creator"
import UploadFile from "../ui/upload-file"
import { Separator } from "../ui/separator"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"

export default function CreateTrackTabs() {
    return (
        <Tabs defaultValue="Track" className="w-[600px]">
            <TabsList className="grid w-full  grid-cols-5">
                <TabsTrigger value="Track">Track</TabsTrigger>
                <TabsTrigger value="Shares">Shares</TabsTrigger>
                <TabsTrigger value="Contract">Contract</TabsTrigger>
                <TabsTrigger value="Contract II">Contract II</TabsTrigger>
                <TabsTrigger value="Contract III">Contract III</TabsTrigger>
            </TabsList>

            <TabsContent value="Track">
                <Card className="h-[400px]">
                    <CardHeader>
                        <CardTitle>Upload a Track</CardTitle>
                        <CardDescription>
                            Upload a Track (mp3, aac accepted) and an Image. Click save when you're done.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <UploadFile input="Track File" />
                    </CardContent>
                    <CardContent className="space-y-2">
                        <UploadFile input="Track Image" />
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="Shares">
                <Card className="h-[400px]">
                    <CardHeader>
                        <CardTitle>Team</CardTitle>
                        <CardDescription>
                            Create your team here and allocate everyone's shares. Click save when you're done.
                        </CardDescription>
                        <TeamCreator />
                    </CardHeader>
                    <CardContent className="space-y-2">
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="Contract">
                <Card className="h-[400px]">
                    <CardHeader>
                        <CardTitle>Contract</CardTitle>
                        <CardDescription>
                            Define the terms of the contract here. When submitting, the contract will be minted on chain.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                            <MiniCard icon={<Icons.spinner />} title="Apple" />
                            <MiniCard icon={<Icons.paypal />} title="Paypal" />
                            <MiniCard icon={<Icons.apple />} title="Spinner" />
                        </RadioGroup>
                    </  CardContent>
                </  Card>
            </TabsContent>

            <TabsContent value="Contract II">
                <Card className="h-[400px]">
                    <CardHeader>
                        <CardTitle>Contract</CardTitle>
                        <CardDescription>
                            Define the terms of the contract here. When submitting, the contract will be minted on chain.
                        </CardDescription>
                    </CardHeader>
                    <div className="flex items-center justify-between  space-x-4">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src="/avatars/01.png" />
                                <AvatarFallback>OM</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">Sofia Davis</p>
                                <p className="text-sm text-muted-foreground">m@example.com</p>
                            </div>
                        </div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className="ml-auto">
                                    Owner{" "}
                                    <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="p-0" align="end">
                                <Command>
                                    <CommandInput placeholder="Select new role..." />
                                    <CommandList>
                                        <CommandEmpty>No roles found.</CommandEmpty>
                                        <CommandGroup>
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Viewer</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Can view and comment.
                                                </p>
                                            </CommandItem>
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Developer</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Can view, comment and edit.
                                                </p>
                                            </CommandItem>
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Billing</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Can view, comment and manage billing.
                                                </p>
                                            </CommandItem>
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Owner</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Admin-level access to all resources.
                                                </p>
                                            </CommandItem>
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="flex items-center justify-between pt-6 space-x-4">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src="/avatars/02.png" />
                                <AvatarFallback>JL</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">Jackson Lee</p>
                                <p className="text-sm text-muted-foreground">p@example.com</p>
                            </div>
                        </div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className="ml-auto">
                                    Member{" "}
                                    <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="p-0" align="end">
                                <Command>
                                    <CommandInput placeholder="Select new role..." />
                                    <CommandList>
                                        <CommandEmpty>No roles found.</CommandEmpty>
                                        <CommandGroup className="p-1.5">
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Viewer</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Can view and comment.
                                                </p>
                                            </CommandItem>
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Developer</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Can view, comment and edit.
                                                </p>
                                            </CommandItem>
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Billing</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Can view, comment and manage billing.
                                                </p>
                                            </CommandItem>
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Owner</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Admin-level access to all resources.
                                                </p>
                                            </CommandItem>
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="flex items-center justify-between pt-6 space-x-4">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src="/avatars/02.png" />
                                <AvatarFallback>JL</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">Jackson Lee</p>
                                <p className="text-sm text-muted-foreground">p@example.com</p>
                            </div>
                        </div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className="ml-auto">
                                    Member{" "}
                                    <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="p-0" align="end">
                                <Command>
                                    <CommandInput placeholder="Select new role..." />
                                    <CommandList>
                                        <CommandEmpty>No roles found.</CommandEmpty>
                                        <CommandGroup className="p-1.5">
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Viewer</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Can view and comment.
                                                </p>
                                            </CommandItem>
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Developer</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Can view, comment and edit.
                                                </p>
                                            </CommandItem>
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Billing</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Can view, comment and manage billing.
                                                </p>
                                            </CommandItem>
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Owner</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Admin-level access to all resources.
                                                </p>
                                            </CommandItem>
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="flex items-center justify-between pt-6 space-x-4">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src="/avatars/02.png" />
                                <AvatarFallback>JL</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">Jackson Lee</p>
                                <p className="text-sm text-muted-foreground">p@example.com</p>
                            </div>
                        </div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className="ml-auto">
                                    Member{" "}
                                    <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="p-0" align="end">
                                <Command>
                                    <CommandInput placeholder="Select new role..." />
                                    <CommandList>
                                        <CommandEmpty>No roles found.</CommandEmpty>
                                        <CommandGroup className="p-1.5">
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Viewer</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Can view and comment.
                                                </p>
                                            </CommandItem>
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Developer</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Can view, comment and edit.
                                                </p>
                                            </CommandItem>
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Billing</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Can view, comment and manage billing.
                                                </p>
                                            </CommandItem>
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Owner</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Admin-level access to all resources.
                                                </p>
                                            </CommandItem>
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="flex items-center justify-between pt-6 space-x-4">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src="/avatars/02.png" />
                                <AvatarFallback>JL</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">Jackson Lee</p>
                                <p className="text-sm text-muted-foreground">p@example.com</p>
                            </div>
                        </div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className="ml-auto">
                                    Member{" "}
                                    <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="p-0" align="end">
                                <Command>
                                    <CommandInput placeholder="Select new role..." />
                                    <CommandList>
                                        <CommandEmpty>No roles found.</CommandEmpty>
                                        <CommandGroup className="p-1.5">
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Viewer</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Can view and comment.
                                                </p>
                                            </CommandItem>
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Developer</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Can view, comment and edit.
                                                </p>
                                            </CommandItem>
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Billing</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Can view, comment and manage billing.
                                                </p>
                                            </CommandItem>
                                            <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                                <p>Owner</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Admin-level access to all resources.
                                                </p>
                                            </CommandItem>
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                </Card>
            </TabsContent>

            <TabsContent value="Contract III">
                <Card className="h-[400px]">
                    <CardHeader>
                        <CardTitle>Cookie Settings</CardTitle>
                        <CardDescription>Manage your cookie settings here.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="necessary" className="flex flex-col space-y-1">
                                <span>Strictly Necessary</span>
                                <span className="font-normal leading-snug text-muted-foreground">
                                    These cookies are essential in order to use the website and use
                                    its features.
                                </span>
                            </Label>
                            <Switch id="necessary" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="functional" className="flex flex-col space-y-1">
                                <span>Functional Cookies</span>
                                <span className="font-normal leading-snug text-muted-foreground">
                                    These cookies allow the website to provide personalized
                                    functionality.
                                </span>
                            </Label>
                            <Switch id="functional" />
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="performance" className="flex flex-col space-y-1">
                                <span>Performance Cookies</span>
                                <span className="font-normal leading-snug text-muted-foreground">
                                    These cookies help to improve the performance of the website.
                                </span>
                            </Label>
                            <Switch id="performance" />
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

                <TabsContent value="Contract VI">
                    <Card>
                        <CardHeader>
                            <CardTitle>Contract</CardTitle>
                            <CardDescription>
                                Define the terms of the contract here. When submitting, the contract will be minted on chain.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-2">
                            <CardHeader className="pb-3">
                                <CardTitle>Notifications</CardTitle>
                                <CardDescription>
                                    Choose what you want to be notified about.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-1">
                                <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                                    <BellIcon className="mt-px h-5 w-5" />
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">Everything</p>
                                        <p className="text-sm text-muted-foreground">
                                            Email digest, mentions & all activity.
                                        </p>
                                    </div>
                                </div>
                                <div className="-mx-2 flex items-start space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all">
                                    <PersonIcon className="mt-px h-5 w-5" />
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">Available</p>
                                        <p className="text-sm text-muted-foreground">
                                            Only mentions and comments.
                                        </p>
                                    </div>
                                </div>
                                <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                                    <EyeNoneIcon className="mt-px h-5 w-5" />
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">Ignoring</p>
                                        <p className="text-sm text-muted-foreground">
                                            Turn off all notifications.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </CardContent>
                    </Card>
                </TabsContent>
        </Tabs>
    )
}
