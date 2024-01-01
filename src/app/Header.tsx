import MainNav from "@/components/dashboard/main-nav";
import Search from "@/components/dashboard/search";
import TeamSwitcher from "@/components/dashboard/team-switcher";
import UserNav from "@/components/dashboard/user-nav";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/mode-toggle";
import { Menu } from "lucide-react";

interface ISidebar {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Header: React.FC<ISidebar> = ({ open, setOpen }) => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Button onClick={() => setOpen(true)} className={`${open ? "hidden" : "flex"} h-9 w-9 rounded-full justify-center items-center p-0 bg-transparent hover:bg-[rgba(255,255,255,0.06)] mr-3`}>
          <Menu className={`h-5 w-5 text-white`} />
        </Button>
        <TeamSwitcher />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </div>
  )
}

export default Header