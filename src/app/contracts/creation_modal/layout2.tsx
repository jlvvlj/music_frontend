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
import ProgressDemo from "@/registry/default/example/progress-demo"

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

        <ProgressDemo />
      <div className="hidden space-y-6 p-8 pb-16 md:block">
        <div className="content-center space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="grid grid-cols-5 space-x-8">
          <div className="col-span-3 flex flex-cols-2 space-x-12 mx-8">
            <aside className="-mx-4 lg:w-1/5">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            <div className="lg:max-w-2xl">{children}</div>
          </div>
          <div className="col-span-2">
            <Image
              src="https://www.billboard.com/wp-content/uploads/2022/06/beyonce-Lemonade-album-art-billboard-1240.jpg?w=1024"
              width={600}
              height={330}
              alt="track"
            />
          </div>
        </div>
      </div>
    </>
  )
}

