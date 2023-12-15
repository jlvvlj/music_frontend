'use client'
// import { Metadata } from "next"
// export const metadata: Metadata = {
//   title: "tracks",
//   description: "Advanced form example using react-hook-form and Zod.",
// }

import Image from "next/image"
import { SidebarNav } from "@/app/settings/components/sidebar-nav"
import { Separator } from "@/components/ui/separator"
import TeamSwitcher from "@/components/dashboard/team-switcher"
import MainNav from "@/components/dashboard/main-nav"
import Search from "@/components/dashboard/search"
import ModeToggle from "@/components/ui/mode-toggle"
import UserNav from "@/components/dashboard/user-nav"


const sidebarNavItems = [
  {
    title: "Profile",
    href: "/settings/",
  },
  {
    title: "Owner Account",
    href: "/settings/account",
  },
  {
    title: "Artist Account",
    href: "/settings/appearance",
  },
  {
    title: "Notifications",
    href: "/settings/notifications",
  },
  {
    title: "Display",
    href: "/settings/display",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
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
      <div className="md:hidden">
        <Image
          src="/examples/music-light.png"
          width={1280}
          height={1114}
          alt="Music"
          className="block dark:hidden"
        />
        <Image
          src="/examples/music-dark.png"
          width={1280}
          height={1114}
          alt="Music"
          className="hidden dark:block"
        />
      </div>
      <div className="md:hidden">
        <Image
          src="/tracks-light.png"
          width={1280}
          height={791}
          alt="tracks"
          className="block dark:hidden"
        />
        <Image
          src="/tracks-dark.png"
          width={1280}
          height={791}
          alt="tracks"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}
