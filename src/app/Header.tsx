import MainNav from "@/components/dashboard/main-nav";
import Search from "@/components/dashboard/search";
import TeamSwitcher from "@/components/dashboard/team-switcher";
import UserNav from "@/components/dashboard/user-nav";
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
              <Menu className={`${open ? "hidden" : "block"} h-5 w-5 mr-3 transition duration-300`} onClick={() => setOpen(true)} />
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