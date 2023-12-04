import { Separator } from "@/registry/new-york/ui/separator"
import { ProfileForm } from "@/app/examples/forms/profile-form"
import { Button } from "@/components/ui/button"
// import SettingsLayout from "@/app/contracts/creation_modal/oldlayout"
import Image from "next/image"
import { SidebarNav } from "@/app/settings/components/sidebar-nav"
import MainNav from "@/components/dashboard/main-nav"
import TeamSwitcher from "@/components/dashboard/team-switcher"
import Search from "@/components/dashboard/search"
import ModeToggle from "@/components/ui/mode-toggle"
import UserNav from "@/components/dashboard/user-nav"
import ProgressBar from "../components/progress-bar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup } from "@/components/ui/radio-group"
import { MiniCard } from "@/components/cards/minicard"
import { Icons } from "@/components/ui/icons"
import Link from "next/link"

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/contracts/creation_modal",
  },
  {
    title: "Account",
    href: "/contracts/creation_modal/account",
  },
  {
    title: "Appearance",
    href: "/contracts/creation_modal/appearance",
  },
  {
    title: "Notifications",
    href: "/contracts/creation_modal/notifications",
  },
  {
    title: "Display",
    href: "/contracts/creation_modal/display",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: SettingsLayoutProps) {
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
        <ProgressBar step={3} />
      </div>
      <div className="hidden space-y-6 p-8 pb-16 md:block">
        {/* <div className="flex justify-center flex-col m-auto">
          <div className=" w-1/3 mx-auto">
              <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
              <p className="text-muted-foreground">
                Manage your account settings and set e-mail preferences.
              </p>
            </div>
        </div> */}
        <div className="mt-12 mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-3xl font-semibold tracking-tight">
              Creating a new contract 3B
            </h1>
            <p className="text-sm text-muted-foreground">
              Please answer the following questions.
            </p>
          </div>
        </div>
      </div>
      <CardContent className="space-y-6">
        <RadioGroup defaultValue="card" className="grid grid-cols-2 gap-4">
          <Link href="/contracts/creation_step_4A/">
          <MiniCard icon={<Icons.spinner />} title="Option A" />
          </Link>
          <Link href="/contracts/creation_step_4B/">
          <MiniCard icon={<Icons.spinner />} title="Option B" />
          </Link>
        </RadioGroup>
      </  CardContent>
    </>
  )
}

