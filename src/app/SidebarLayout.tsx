"use client"
import { useState } from "react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { Providers } from "./providers";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./Header";

export default function SidebarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const allowedRoutes = [
        '/', '/login', '/signout', "/signup"
    ]
    return (
        <div className="w-full">
            {allowedRoutes.includes(pathname as string) ? '' : <Sidebar open={open} setOpen={setOpen} />}
            <div className={allowedRoutes.includes(pathname as string) ? 'w-full' : `${open ? "lg:w-[calc(100%-250px)] lg:ml-[250px]" : "w-full ml-0"} w-full ml-0 transition-width duration-300`}>
                <Providers>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        {allowedRoutes.includes(pathname as string) ? '' : <Header open={open} setOpen={setOpen} />}
                        {children}
                    </ThemeProvider>
                </Providers>
            </div>
        </div>
    )
}
