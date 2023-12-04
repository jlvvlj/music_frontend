"use client";
import { useCallback } from "react";

// ** Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TeamCreator from "@/components/team/team_creator";
import UploadFile from "@/components/ui/upload-file";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup } from "@/components/ui/radio-group";
import { StepType } from "./progress-steps";
import { MiniCard } from "@/components/cards/minicard";
import { Icons } from "@/components/ui/icons";
import { Notifications } from "@/components/track/notifications";
import TeamMember from "@/components/team/team_member";

const CreateStepCards = ({ step }: { step: StepType }) => {
  const loadCardByStep = useCallback(() => {
    switch (step) {
      case StepType.TRACK:
        return (
          <Card className="h-[400px]">
            <CardHeader>
              <CardTitle>Upload a Track</CardTitle>
              <CardDescription>
                Upload a Track (mp3, aac accepted) and an Image. Click save when
                you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <UploadFile input="Track File" />
            </CardContent>
            <CardContent className="space-y-2">
              <UploadFile input="Track Image" />
            </CardContent>
          </Card>
        );
      case StepType.TEAM_MEMBERS:
        return (
          <Card className="h-[400px]">
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>
                Invite your team members to collaborate.
              </CardDescription>
              <div className="h-4"></div>
              <TeamMember />
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
          </Card>
        );
      case StepType.SHARES:
        return (
          <Card className="h-[400px]">
            <CardHeader>
              <CardTitle>Team</CardTitle>
              <CardDescription>
                Create your team here and allocate everyone's shares. Click save
                when you're done.
              </CardDescription>
              <TeamCreator />
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
          </Card>
        );
      case StepType.CONTRACT:
        return (
          <Card className="h-[400px]">
            <CardHeader>
              <CardTitle>Contract</CardTitle>
              <CardDescription>
                Define the terms of the contract here. When submitting, the
                contract will be minted on chain.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup
                defaultValue="card"
                className="grid grid-cols-3 gap-4"
              >
                <MiniCard icon={<Icons.spinner />} title="Option A" />
                <MiniCard icon={<Icons.spinner />} title="Option B" />
                <MiniCard icon={<Icons.spinner />} title="Option C" />
              </RadioGroup>
            </CardContent>
          </Card>
        );
      case StepType.CONTRACT2:
        return (
          <Card className="h-[400px]">
            <CardHeader>
              <CardTitle>Contract II</CardTitle>
              <CardDescription>
                Define the terms of the contract here. When submitting, the
                contract will be minted on chain.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Notifications />
            </CardContent>
          </Card>
        );
      case StepType.CONTRACT3:
        return (
          <Card className="h-[400px]">
            <CardHeader>
              <CardTitle>Cookie Settings</CardTitle>
              <CardDescription>
                Manage your cookie settings here.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="necessary" className="flex flex-col space-y-1">
                  <span>Strictly Necessary</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    These cookies are essential in order to use the website and
                    use its features.
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
                <Label
                  htmlFor="performance"
                  className="flex flex-col space-y-1"
                >
                  <span>Performance Cookies</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    These cookies help to improve the performance of the
                    website.
                  </span>
                </Label>
                <Switch id="performance" />
              </div>
            </CardContent>
          </Card>
        );
      default:
        return <></>;
    }
  }, [step]);

  return (
    <>
      <div>{loadCardByStep()}</div>
    </>
  );
};

export default CreateStepCards;
