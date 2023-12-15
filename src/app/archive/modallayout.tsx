import { Separator } from "@/registry/new-york/ui/separator"
import { ProfileForm } from "@/app/examples/forms/profile-form"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SidebarNav } from "@/app/settings/components/sidebar-nav"

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

export default function ModalLayout({ children }: SettingsLayoutProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add a new track</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Add a track</DialogTitle>
          <DialogDescription>
            Add your edtrase information here. Click submit when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="hidden space-y-6 p-8 pb-16 md:block">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
            <p className="text-muted-foreground">
              Manage your account settings and set e-mail preferences.
            </p>
          </div>
          <Separator className="my-6" />
          <div className="grid grid-cols-2 space-x-8">
            <div className="flex flex-cols-2 space-x-12">
              <aside className="-mx-4 lg:w-1/5">
                <SidebarNav items={sidebarNavItems} />
              </aside>
              <div className="lg:max-w-2xl">{children}</div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80"
              alt="track"
              width={600}
              height={330}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
