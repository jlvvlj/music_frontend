"use client";
import { useState, useEffect } from "react";
import { Separator } from "@/registry/new-york/ui/separator";
import { ProfileForm } from "@/app/examples/forms/profile-form";
import { Button } from "@/components/ui/button";
// import SettingsLayout from "@/app/contracts/creation_modal/oldlayout"
import Image from "next/image";
import { SidebarNav } from "@/app/settings/components/sidebar-nav";
import MainNav from "@/components/dashboard/main-nav";
import TeamSwitcher from "@/components/dashboard/team-switcher";
import Search from "@/components/dashboard/search";
import ModeToggle from "@/components/ui/mode-toggle";
import UserNav from "@/components/dashboard/user-nav";
import ProgressBar from "./components/progress-bar";
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
import Stepper from "./components/stepper";
import ProgressSteps from "./components/ProgressSteps";
import CreateTrackTabs from "@/components/track/createTrackTabs";
import CreateStepCards from "./components/CreateStepCards";
import Layout from "./creation_step_1/page";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function NewContract({ children }: SettingsLayoutProps) {
  const [activeStep, setActiveStep] = useState(1);

  const handleUpdateActiveStep = (step = 1) => {
    setActiveStep(step);
  };

  // ** Actions
  const handleClickSave = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </div>

      <div className="mt-6 mx-4">
        <ProgressSteps step={activeStep} updateStep={handleUpdateActiveStep} />
      </div>
      <CreateStepCards step={activeStep} updateStep={handleClickSave} />
      {/* <div className="mt-4 flex justify-end">
        <Button onClick={handleClickSave}>Save</Button>
      </div> */}
    </>
  );
}
