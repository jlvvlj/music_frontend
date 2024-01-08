"use client"
import { useState } from "react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { Providers } from "./providers";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./Header";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/registry/new-york/ui/resizable";

export default function SidebarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const allowedRoutes = [
        '/', '/login', '/signout', "/signup"
    ]
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

    return (
        <div className="w-full h-screen fixed">
            <ResizablePanelGroup direction="horizontal">
                {!allowedRoutes.includes(pathname as string) &&
                    <ResizablePanel collapsible={true} collapsedSize={4.2} defaultSize={250} maxSize={14} minSize={10} onCollapse={(collapsed: any) => {
                        setIsCollapsed(collapsed)
                        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                            collapsed
                        )}`
                    }}>{allowedRoutes.includes(pathname as string) ? '' : <Sidebar isCollapsed={isCollapsed} />}</ResizablePanel>}
                {!allowedRoutes.includes(pathname as string) && <ResizableHandle withHandle />}
                <ResizablePanel defaultSize={1500} className="content-overflow">
                    <div className={allowedRoutes.includes(pathname as string) ? 'w-full' : "w-full ml-0 transition-width duration-300"}>
                        <Providers>
                            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                                {allowedRoutes.includes(pathname as string) ? '' : <Header />}
                                {children}
                            </ThemeProvider>
                        </Providers>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
            {/* {allowedRoutes.includes(pathname as string) ? '' : <Sidebar open={open} setOpen={setOpen} />}
            <div className={allowedRoutes.includes(pathname as string) ? 'w-full' : `${open ? "lg:w-[calc(100%-250px)] lg:ml-[250px]" : "w-full ml-0"} w-full ml-0 transition-width duration-300`}>
                <Providers>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        {allowedRoutes.includes(pathname as string) ? '' : <Header open={open} setOpen={setOpen} />}
                        {children}
                    </ThemeProvider>
                </Providers>
            </div> */}
        </div>
    )
}
