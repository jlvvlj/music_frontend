import { Button } from "@/components/ui/button";
import { Home, Menu } from "lucide-react";
import { Music, Settings } from "lucide-react";
import Link from "next/link";

const menuSection = [
    { title: "Dashboard", icon: <Home className="h-5 w-5 mr-3" /> },
    { title: "Music", icon: <Music className="h-5 w-5 mr-3" /> },
    { title: "Settings", icon: <Settings className="h-5 w-5 mr-3" /> }
]

interface ISidebar {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<ISidebar> = ({ open, setOpen }) => {
    return (
        <div>
            <div className={`${open ? "translate-x-0" : "translate-x-[-100%]"} bg-[#060606] w-[250px] border-r h-screen shadow-2xl fixed transition duration-300 z-50`}>
                <div className="flex justify-between items-center border-b p-3">
                    <Link href="/" className="flex items-center text-lg font-medium text-white">
                        <svg width="50px" height="40px" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145.04 116.32"><defs><style>{`.cls-1{fill:#fff;}`}</style></defs><path className="cls-1" d="M79,58.91a7.18,7.18,0,1,1,14.35,0V66a8.59,8.59,0,0,0,8.62,8.62h4.31A8.57,8.57,0,0,0,114.84,66V60.35a8.59,8.59,0,0,0-8.61-8.62h-4.31a8.59,8.59,0,0,1-8.62-8.61V38.81a8.57,8.57,0,0,0-8.61-8.61H80.38a8.57,8.57,0,0,0-8.61,8.61v5.75a7.18,7.18,0,1,1-14.36,0V38.81a8.57,8.57,0,0,0-8.62-8.61H30.13a8.57,8.57,0,0,0-8.62,8.61V86.19a8.57,8.57,0,0,0,8.62,8.62h4.3a8.57,8.57,0,0,0,8.62-8.62V58.91a7.18,7.18,0,0,1,12.26-5.08,6.91,6.91,0,0,1,2.1,5.08V86.19A8.57,8.57,0,0,0,66,94.81h4.31A8.59,8.59,0,0,0,79,86.19Z"
                        />
                            <path className="cls-1" d="M110.6,43.05A8.57,8.57,0,0,1,102,34.44V30.13a8.57,8.57,0,0,1,8.61-8.62h4.31a8.59,8.59,0,0,1,8.62,8.62v4.31a8.59,8.59,0,0,1-8.62,8.61Z" />
                        </svg>
                        <span>Miuu</span>
                    </Link>
                    <button onClick={() => setOpen(false)}>
                        <Menu className="h-5 w-5 text-white" />
                    </button>
                </div>
                <div className="p-3">
                    {menuSection.map((menu, index) =>
                        <Button key={index} variant="ghost" className="w-full justify-start items-center text-white mb-1">
                            {menu.icon}
                            <span>{menu.title}</span>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Sidebar